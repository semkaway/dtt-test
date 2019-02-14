<template>
	<v-app>
		<app-header/>
		<router-view class="mt-3"/>
		<app-footer/>
	</v-app>
</template>

<script>
import TheHeader from './components/includes/TheHeader'
import TheFooter from './components/includes/TheFooter'

export default {
  name: "App",
  components: {
	"app-header": TheHeader,
	"app-footer": TheFooter
  }
}
</script>

<style>
	html, body, #app {
		min-height: 100%;
	}

	body {
		position: relative;
		min-height: 100%;
		box-sizing: border-box;
	}

	.container {
		height: 100%;
	}

	a {
		color: #FFB300;
		font-weight: bold;
		text-transform: uppercase;
		text-decoration: none;
	}

</style>
