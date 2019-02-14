<template>
	<v-container grid-list-md text-xs-center class="container">
		<Loader :run="runLoader" />
		<v-layout row wrap class="mt-4">
			<v-flex lg12>
				<h1>19th century photos by cultures</h1>
			</v-flex>
			<v-flex v-for="item in items" :key="item.id" xs12 s12 md6 lg6>
				<SingleCategoryItem :object="item"/>
			</v-flex>
		</v-layout>
		<v-pagination
			v-if="items.length != 0 && totalPages > 1"
			v-model="page"
	      	:length="totalPages"
	      	:total-visible="6"
	      	@input="getMore('page')"
	      	@next="getMore('next')"
	      	@previous="getMore('previous')"
	    ></v-pagination>
	</v-container>
</template>

<script>

	import { HTTP } from '../http-common'
	import * as constants from '../utils/constants'
	import SingleCategoryItem from './SingleCategoryItem'
	import Loader from './Loader'

	export default {
		name: 'SingleCategory',
		components: { SingleCategoryItem, Loader },
		data() {
			return {
				items: [],
				page: 1,
				totalPages: 1,
				runLoader: true
			}
		},
		created() {
			this.getAllCategoryItems(`culture?apikey=${constants.API_KEY}`)
		},
		methods: {
			getAllCategoryItems(query) {
				this.runLoader = true
				HTTP.get(query).then(result => {
					if (!result.data.error) {
						this.items =result.data.records
						this.totalPages = result.data.info.pages
						this.runLoader = false
						window.scrollTo(0,0);
					}
				}).catch((e) => { console.log('Error:', e) })
			},
			getMore() {
				this.getAllCategoryItems(`culture?apikey=${constants.API_KEY}&page=${this.page}`)
			}
		}
	}
</script>