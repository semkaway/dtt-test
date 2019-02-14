<template>
	<div class="text-xs-center" v-if="run">
		<v-dialog v-model="run" persistent content content-class="centered-dialog" width='100px'>
			<v-card color="white" dark>
				<v-card-text color="blue-grey darken-1">
					<fulfilling-bouncing-circle-spinner :animation-duration="1500" :size="68" color="#FF6F00" />
				</v-card-text>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
	import { FulfillingBouncingCircleSpinner } from 'epic-spinners'
	export default {
		name: "Loader",
		components: { FulfillingBouncingCircleSpinner },
		props: ["run"]
	}
</script>
