<template>
	<v-footer height="40%">
		<v-container class="p-5">
			<v-layout justify-center row wrap>
				<v-flex s12 xs12 md3 lg3 class="mb-2">
					<div class="title mb-1">See photos by cultures</div>
					<router-link to="/culture">Categories</router-link>
				</v-flex>
				<v-flex s12 xs12 md3 lg3 class="mb-2">
					<div class="title mb-1">Get a random photo</div>
					<router-link to="/random">Random</router-link>
				</v-flex>
				<v-flex s12 xs12 md3 lg3>
					<div class="title mb-1">Contacts</div>
					<div>Developed with &#10084; by Kseniia Vilna</div>
					<div><a href="https://www.linkedin.com/in/kseniya-vilna/">Linkedin</a></div>
					<div><a href="https://github.com/semkaway">Github</a></div>
					<div>semkaway@gmail.com</div>
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