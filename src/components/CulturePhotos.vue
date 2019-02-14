<template>
	<ListOfPictures :param="{culture}"/>
</template>

<script>

	import ListOfPictures from './ListOfPictures'

	export default {
		name: "CulturePhotos",
		components: { ListOfPictures },
		data() {
			return {
				culture: ""
			}
		},
		created() {
			this.culture = this.$route.params.id
			console.log("cult: ", this.culture)
		}
	}
</script>