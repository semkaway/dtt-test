<template>
	<v-container grid-list-md text-xs-center class="container">
		<v-layout row wrap class="mt-5">
			<v-flex v-for="item in items" :key="item.id" xs12 s12 md6 lg6>
				<SingleItem :object="item"/>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import { HTTP } from '../http-common'
	import * as constants from '../utils/constants'
	import SingleItem from './SingleItem'

	export default {
		name: 'HomePage',
		components: { SingleItem },
		data() {
			return {
				items: []
			}
		},
		methods: {

		},
		created() {
			HTTP.get(`/object?apikey=${constants.API_KEY}&century=${constants.century}&worktype=${constants.worktype}&hasimage=${constants.hasimage}&sort=title&sortorder=desc`).then(result => {
				this.items = result.data.records
			}).catch((e) => { console.log('Error:', e) })
		}
	}
</script>
