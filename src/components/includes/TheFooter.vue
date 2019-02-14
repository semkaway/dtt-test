<template>
	<v-footer class="grey darken-3" height="70%">
		<v-container class="p-5 white--text">
			<v-layout justify-center row wrap>
				<v-flex s12 xs12 md3 lg3 class="mb-2">
					<div class="title mb-1">See photos by cultures</div>
					<router-link to="/culture" class="amber--text text--darken-3">Categories</router-link>
				</v-flex>
				<v-flex s12 xs12 md3 lg3 class="mb-2">
					<div class="title mb-1">Get a random photo</div>
					<router-link to="/random" class="amber--text text--darken-3">Random</router-link>
				</v-flex>
				<v-flex s12 xs12 md3 lg3>
					<div class="title mb-1">Contacts</div>
					<div>
						<a href="https://www.linkedin.com/in/kseniya-vilna/" class="amber--text text--darken-3">Linkedin</a>
					</div>
					<div>
						<a href="https://github.com/semkaway" class="amber--text text--darken-3">Github</a>
					</div>
					<div>semkaway@gmail.com</div>
					<div>Developed with &#10084; by Kseniia Vilna</div>
				</v-flex>
			</v-layout>
		</v-container>
	</v-footer>
</template>

<script>
	
	export default {
		name: "TheFooter"
	}

</script>