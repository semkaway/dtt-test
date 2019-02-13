<template>
	<v-container grid-list-md text-xs-center class="container">
		<v-layout row wrap class="mt-5">
			<v-flex xs12 s12 md12 lg12>
				<h1>404</h1>
				<div>Sorry, it seems like the page you are looking for doesn't exist. You can return to the home page or get a random 19th century photo.</div>
				<router-link to="/">
					<v-btn color="success">Home</v-btn>
				</router-link>
				<router-link to="/random">
					<v-btn color="success">Random</v-btn>
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