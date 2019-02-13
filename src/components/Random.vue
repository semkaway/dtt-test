<template>
	<v-container grid-list-md text-xs-center class="container">
		<Loader :run="runLoader"/>
		<v-layout row wrap justify-center class="mt-5">
			<v-flex (xs12 | sm5 | md5 | lg8) offset-(xs0 | lg3)>
				<SingleItem :object="item"/>
				<v-btn class="success" v-on:click="getRandomItem">Another one</v-btn>
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
				console.log("getting...")
				this.runLoader = true
				HTTP.get(`/object?apikey=${constants.API_KEY}&century=${constants.century}&worktype=${constants.worktype}&hasimage=${constants.hasimage}&sort=random&size=1`).then(result => {
					console.log(result)
					this.item = result.data.records[0]
					this.runLoader = false
				}).catch((e) => { console.log('Error:', e) })
			}
		}
	}
</script>