<template>
	<v-container grid-list-md text-xs-center class="container">
		<v-layout row wrap align-center justify-center class="mt-5">
			<v-flex xs12 s12 md6 lg6>
				<div class="title font-weight-bold mb-2">404</div>
				<div>Sorry, it seems like the page you are looking for doesn't exist. You can return to the home page or get a random 19th century photo.</div>
				<router-link to="/">
					<v-btn flat class="amber darken-1 mt-2">Home</v-btn>
				</router-link>
				<router-link to="/random">
					<v-btn flat class="amber darken-1 mt-2">Random</v-btn>
				</router-link>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		name: "NotFound"
	}
</script>