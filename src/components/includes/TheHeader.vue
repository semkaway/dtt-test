<template>
	<div>
		<v-toolbar flat class="hidden-sm-and-down">
			<v-toolbar-items @click="navigateTo('home')">
				<v-btn flat @click="navigateTo('home')">Home</v-btn>
			</v-toolbar-items>
			<v-spacer></v-spacer>
			<v-toolbar-items class="hidden-sm-and-down">
				<v-btn flat @click="navigateTo('culture')">Categories</v-btn>
				<v-btn flat @click="navigateTo('random')">Random</v-btn>
			</v-toolbar-items>
		</v-toolbar>
		<v-expansion-panel expand class="hidden-md-and-up">
	      <v-expansion-panel-content>
	        <div slot="header">
	        	<router-link to="/">Home</router-link>
	        </div>
	        <v-card>
	          <v-card-text class="grey lighten-3">
	          	<router-link to="/culture">Categories</router-link>
	          </v-card-text>
	        </v-card>
	        <v-card>
	          <v-card-text class="grey lighten-3">
	          	<router-link to="/random">Random</router-link>
	          </v-card-text>
	        </v-card>
	      </v-expansion-panel-content>
	    </v-expansion-panel>
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