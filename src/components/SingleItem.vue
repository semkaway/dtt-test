<template>
	<router-link :to="{ name: 'object', params: { objectId: object.objectid || 1 }}">
		<v-card flat class="amber lighten-1 white--text">
			<v-img
				:src="object.primaryimageurl"
				aspect-ratio="1"
			>
			<v-layout
					slot="placeholder"
					fill-height
					align-center
					justify-center
					ma-0>
					<v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
			</v-layout>
			</v-img>

			<div class="title text-truncate ma-4">{{ object.title }}</div>
			<v-card-title>
				<div class="text-xs-left">Culture: {{ object.culture || 'Unidentified culture'}}<br>Date: {{ object.dated || 'Unknown'}}</div>
			</v-card-title>
		</v-card>
	</router-link>
</template>

<script>
	export default {
		name: 'SingleItem',
		props: ['object']
	}
</script>