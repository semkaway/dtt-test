<template>
	<v-toolbar flat clipped-left>
		<v-toolbar-items @click="navigateTo('home')">
			<v-btn flat @click="navigateTo('home')">Home</v-btn>
		</v-toolbar-items>
		<v-spacer></v-spacer>
		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn flat @click="navigateTo('categories')">Categories</v-btn>
			<v-btn flat @click="navigateTo('random')">Random</v-btn>
		</v-toolbar-items>
	</v-toolbar>	
</template>

<script>

	export default {
		name: "TheHeader",
		methods: {
			navigateTo(param) {
				this.$router.push({name: param})
			}
		}
	}
	
</script>

<style>
	.v-toolbar {
		position: fixed;
		z-index: 1;
	}
</style>