<template>
	<router-link :to="{ name: 'cultureId', params: { id: object.id || 0}}">
		<v-card>
			<div class="title text-truncate ma-4">{{ object.name}}</div>
			<v-card-title>
				<!-- <div class="text-xs-left">Culture: {{ object.culture || 'Unidentified culture'}}<br>Date: {{ object.dated || 'Unknown'}}</div> -->
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