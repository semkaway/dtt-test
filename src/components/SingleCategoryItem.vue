<template>
	<router-link :to="{ name: 'cultureId', params: { id: object.id || 0}}">
		<v-card flat class="amber lighten-1 white--text" height="80px">
			<div class="container">
				<div class="title text-truncate ma-4 content">{{ object.name}}</div>
			</div>
		</v-card>
	</router-link>
</template>

<script>
	export default {
		name: 'SingleItem',
		props: ['object']
	}
</script>

<style scoped>
		
	.container {
		position: relative;
	}

	.content {
		position: absolute;
		top: 50;
	}

</style>