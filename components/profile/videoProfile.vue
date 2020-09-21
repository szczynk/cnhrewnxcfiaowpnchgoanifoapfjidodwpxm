<template>
    <div class="videoProfile embed-responsive embed-responsive-16by9"> 
        <video class="video-profile text-center" width="100%" controls>
            <source :src="video_url" type="video/mp4">
        </video> 
    </div>      
</template>

<script>
export default {
  name: 'videoProfile',
    data() {
    return {
      video_url: ''
    }
  },
  methods: {
    async getData() {
      let user = this.$firebase.auth().currentUser
      if (user){
        try{
          const profile = await this.$firebase.firestore().collection('users').doc(user.uid).get()
          this.video_url = profile.data().video_url
        }
        catch (err) {
          console.log(err)
        }
      }
    },
  },
  mounted() {
    this.getData();
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.videoProfile {
    margin-top: -30px;
}
</style>