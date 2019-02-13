<template>
	<v-container grid-list-md text-xs-center class="container">
		<Loader :run='runLoader'/>
		<v-layout v-if="object.length != 0 && runLoader == false" row wrap class="mt-5">
			<v-flex xs12 s12 md6 lg6>
				<v-card>
					<v-img width="100%" :src="object.primaryimageurl">
						<v-layout
	                    slot="placeholder"
	                    fill-height
	                    align-center
	                    justify-center
	                    ma-0
	                  >
	                    <v-progress-circular indeterminate color="grey darken-5"></v-progress-circular>
	                  </v-layout>
					</v-img>
				</v-card>
			</v-flex>
			<v-flex xs12 s12 md6 lg6>
				<h1>{{object.title}}</h1>
				<div class="text-xs-left ml-3">
					<div>Century: {{object.century || 'Unknown'}}</div>
					<div>Date: {{object.dated || 'Unknown'}}</div>
					<div>Culture: {{object.culture || 'Unknown'}}</div>
					<div>Technique: {{object.technique || 'Unknown'}}</div>
					<div>Dimensions: {{object.dimensions || 'Unknown'}}</div>
					<v-card class="mt-4">
						<v-card-title>
							<div>
								<div class="title mb-2">About the author</div>
								<div v-if="object.people">Name: {{object.people[0].displayname || 'Unknown'}}<br>
									Birthplace: {{object.people[0].birthplace || 'Unknown'}}<br>
									Years: {{object.people[0].displaydate || 'Unknown'}}<br>
									Deathplace: {{object.people[0].deathplace || 'Unknown'}}
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
			<v-flex v-for="item in related" lg4 md4 sm12 xs12>
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
								let questionMarkIndex = this.object.culture.indexOf("?")
								if (questionMarkIndex !== -1) {
									this.object.culture = this.object.culture.substring(0, this.object.culture.length - 1)
								}
							} else {
								this.object.culture = "Unidentified culture"
							}
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
      		'$route.params.objectId': function (objectId) {
        		this.rerender()
   			}
   		}
	}
	
</script>