<template>
	<v-container grid-list-md text-xs-center class="container">
		<Loader :run='runLoader'/>
		<v-layout v-if="object.length != 0 && runLoader == false" row wrap class="mt-5">
			<v-flex xs12 s12 md6 lg6>
				<v-card flat class="amber lighten-1">
					<v-img width="100%" :src="object.primaryimageurl">
						<v-layout
							slot="placeholder"
							fill-height
							align-center
							justify-center
							ma-0>
							<v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
						</v-layout>
					</v-img>
				</v-card>
			</v-flex>
			<v-flex xs12 s12 md6 lg6>
				<h1>{{object.title}}</h1>
				<div class="text-xs-left ml-3">
					<div>
						<span class="text-uppercase font-weight-bold amber--text text--darken-3">Century:</span> 
						{{object.century || 'Unknown'}}
					</div>
					<div>
						<span class="text-uppercase font-weight-bold amber--text text--darken-3">Date:</span> {{object.dated || 'Unknown'}}
					</div>
					<div>
						<span class="text-uppercase font-weight-bold amber--text text--darken-3">Culture:</span> {{object.culture || 'Unknown'}}
					</div>
					<div>
						<span class="text-uppercase font-weight-bold amber--text text--darken-3">Technique:</span> {{object.technique || 'Unknown'}}
					</div>
					<div>
						<span class="text-uppercase font-weight-bold amber--text text--darken-3">Dimensions:</span> {{object.dimensions || 'Unknown'}}
					</div>
					<v-card flat class="amber lighten-4 mt-4">
						<v-card-title>
							<div>
								<div class="title mb-2">About the author</div>
								<div v-if="object.people">
									<span class="text-uppercase font-weight-bold grey--text text--darken-3">Name:</span> {{object.people[0].displayname || 'Unknown'}}<br>
									<span class="text-uppercase font-weight-bold grey--text text--darken-3">Birthplace:</span> {{object.people[0].birthplace || 'Unknown'}}<br>
									<span class="text-uppercase font-weight-bold grey--text text--darken-3">Years:</span> {{object.people[0].displaydate || 'Unknown'}}<br>
									<span class="text-uppercase font-weight-bold grey--text text--darken-3">Deathplace:</span> {{object.people[0].deathplace || 'Unknown'}}
								</div>
								
								<div v-else>
									Name: Unknown<br>
									Birthplace: Unknown<br>
									Years: Unknown<br>
									Deathplace: Unknown
								</div>
							</div>							
						</v-card-title>
					</v-card>
				</div>
			</v-flex>
			<v-flex lg12>
				<div class="title my-4 text-uppercase font-weight-bold">Related photos</div>
			</v-flex>
			<v-flex v-for="item in related" :key="item.id" lg4 md4 sm12 xs12>
				<SingleItem :object="item" />
			</v-flex>
		</v-layout>
		<v-layout v-else-if="object.length == 0 && runLoader == false" class="mt-5">
			<v-flex lg12>
				<h1 class="text-xs-center">Sorry, we couldn't find this item</h1>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	import { HTTP } from '../http-common'
	import * as constants from '../utils/constants'
	import Loader from './Loader'
	import SingleItem from './SingleItem'

	export default {
		name: "DetailsPage",
		components: { Loader, SingleItem },
		data() {
			return {
				objectId: Number,
				object: [],
				runLoader: true,
				related: []
			}
		},
		methods: {
			rerender() {
				this.runLoader= true
				this.objectId = this.$route.params.objectId
				if (this.objectId) {
					HTTP.get(`/object/${this.objectId}?apikey=${constants.API_KEY}`).then(result => {
						if (!result.data.error) {
							this.object = result.data
							if (this.object.culture) {
								/* If there is a value for the culture in the object recieved from the API, we need to check whether the string contains the question mark. If it does, we need to remove it beause otherwise the request to the API would be incorrect. */
								let questionMarkIndex = this.object.culture.indexOf("?")
								if (questionMarkIndex !== -1)
									this.object.culture = this.object.culture.substring(0, this.object.culture.length - 1)
							} else {
								/* If there was no data for the key "culture", we need to set it manually */
								this.object.culture = "Unidentified culture"
							}
							/* Getting three random related pictures. */
							HTTP.get(`/object?apikey=${constants.API_KEY}&century=${constants.century}&culture=${this.object.culture}&worktype=${constants.worktype}&hasimage=${constants.hasimage}&sort=random&size=3`).then(result => {
								if (!result.data.error)
									this.related = result.data.records
							}).catch((e) => { console.log('Error:', e) })
						}
						this.runLoader = false
					}).catch((e) => { console.log('Error:', e) })
				}
			}
		},
		created() {
			this.rerender()
		},
		watch: {
			/* In order to show the details for a new picture when user choses one from the related items, we need to trigger the rerender() function every time the id of the photo changes */
			'$route.params.objectId': function () {
				this.rerender()
				window.scrollTo(0,0);
			}
		}
	}
	
</script>