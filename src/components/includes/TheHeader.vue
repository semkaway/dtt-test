<template>
	<div>
		<v-toolbar flat class="hidden-sm-and-down grey darken-3">
			<v-toolbar-items @click="navigateTo('home')">
				<v-btn flat class="amber--text text--darken-1" @click="navigateTo('home')">Home</v-btn>
			</v-toolbar-items>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn flat class="amber--text text--darken-1" @click="navigateTo('culture')">Categories</v-btn>
				<v-btn flat class="amber--text text--darken-1" @click="navigateTo('random')">Random</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		<!-- Show toolbar on medium and large devices -->
		<v-expansion-panel expand class="hidden-md-and-up grey darken-3 white--text">
			<v-expansion-panel-content class="hidden-md-and-up grey darken-3 amber--text text--darken-1">
				<div slot="header">
					<router-link to="/">Home</router-link>
				</div>
				<v-card>
					<v-card-text class="grey darken-3">
						<router-link to="/culture">Categories</router-link>
					</v-card-text>
				</v-card>
				<v-card>
					<v-card-text class="grey darken-3">
						<router-link to="/random">Random</router-link>
					</v-card-text>
				</v-card>
			</v-expansion-panel-content>
		</v-expansion-panel>
		<!-- Show expansion panel on small and extra-small devices -->
	</div>	
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