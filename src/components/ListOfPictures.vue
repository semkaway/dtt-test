<template>
	<v-container grid-list-md text-xs-center class="container">
		<Loader :run="runLoader" />
		<v-layout align-center justify-center row wrap class="mt-4">
			<v-flex v-if="items.length != 0 && !runLoader" lg12>
				<span class="title">Sort by:</span>
				<v-btn flat class="amber darken-1" @click="sortBy('title')">Title</v-btn>
				<v-btn flat class="amber darken-1" @click="sortBy('dated')">Date</v-btn>
				<v-btn flat class="amber darken-1" @click="sortBy('accessionyear')">Accession year</v-btn>
			</v-flex>
			<v-flex v-if="items.length == 0 && !runLoader" class="my-5" lg6>
				<div class="title mb-3">Sorry, there were no photos made during this period in this country. If you wish, you can get a random 19th century photo.</div>
				<router-link to="/random">
					<v-btn flat class="amber darken-1">Random</v-btn>
				</router-link>
			</v-flex>
			<v-flex v-for="item in items" :key="item.id" xs12 s12 md6 lg6>
				<SingleItem :object="item"/>
			</v-flex>
		</v-layout>
		<v-pagination
			v-if="items.length != 0 && totalPages > 1"
			v-model="page"
			class="mt-3"
			color="amber darken-1"
			:length="totalPages"
			:total-visible="6"
			@input="getMore()"
			@next="getMore()"
			@previous="getMore()"
		></v-pagination>
	</v-container>
</template>

<script>
	import { HTTP } from '../http-common'
	import * as constants from '../utils/constants'
	import SingleItem from './SingleItem'
	import Loader from './Loader'

	export default {
		name: 'ListOfPictures',
		components: { SingleItem, Loader },
		props: ['param'],
		data() {
			return {
				items: [],
				page: 1,
				totalPages: 1,
				runLoader: true,
				query: `/object?&apikey=${constants.API_KEY}&century=${constants.century}&worktype=photograph&hasimage=1&sort=title&sortorder=desc`
			}
		},
		methods: {
			sortBy(option) {
				this.items.sort(function(a, b) {

					let caseA
					let caseB

					if (option == "title") {
						caseA = a.title.toUpperCase()
						caseB = b.title.toUpperCase()
					} else if (option == "dated") {
						caseA = a.dated
						caseB = b.dated
					} else {
						caseA = a.accessionyear
						caseB = b.accessionyear
					}
					if (caseA < caseB)
						return -1
					if (caseA > caseB)
						return 1
					return 0;
				})
			},
			getAllItems(request) {
				this.runLoader = true
				HTTP.get(request).then(result => {
						this.items =result.data.records
						this.totalPages = result.data.info.pages
						this.runLoader = false
						window.scrollTo(0,0);
				}).catch((e) => { console.log('Error:', e) })
			},
			getMore() {
				if (this.param == '')
					this.getAllItems(`${this.query}&page=${this.page}`)
				else
					this.getAllItems(`${this.query}&culture=${this.param.culture}&page=${this.page}`)
			}
		},
		created() {
			if (this.param == '')
				this.getAllItems(this.query)
			else
				this.getAllItems(`${this.query}&culture=${this.param.culture}`)
		}
	}
</script>