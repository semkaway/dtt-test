<template>
	<v-container grid-list-md text-xs-center class="container">
		<Loader :run="runLoader"/>
		<v-layout row wrap justify-center class="mt-5">
			<v-flex xs12 sm12 lg8 md8>
				<SingleItem :object="item"/>
				<v-btn flat class="amber darken-1" v-on:click="getRandomItem">Another one</v-btn>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import { HTTP } from '../http-common'
	import SingleItem from './SingleItem'
	import Loader from './Loader'
	import * as constants from '../utils/constants'

	export default {
		name: "Random",
		components: { SingleItem, Loader },
		data() {
			return {
				item: {},
				runLoader: true
			}
		},
		created() {
			this.getRandomItem()
		},
		methods: {
			getRandomItem() {
				this.runLoader = true
				HTTP.get(`/object?apikey=${constants.API_KEY}&century=${constants.century}&worktype=${constants.worktype}&hasimage=${constants.hasimage}&sort=random&size=1`).then(result => {
					this.item = result.data.records[0]
					this.runLoader = false
				}).catch((e) => { console.log('Error:', e) })
			}
		}
	}
</script>