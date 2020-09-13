<template>
    <div class="videoProfile embed-responsive embed-responsive-16by9"> 
        <video class="video-profile text-center" width="100%" controls>
            <source :src="user.video_url" type="video/mp4">
        </video> 
    </div>      
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'videoProfile',
  computed: {
    ...mapState(['user'])
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.videoProfile {
    margin-top: -30px;
}
</style>