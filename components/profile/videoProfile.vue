<template>
    <div class="videoProfile embed-responsive embed-responsive-16by9"> 
        <video class="video-profile text-center" width="100%" controls>
            <source src="../../assets/videos/video2.mp4" type="video/mp4">
        </video> 
    </div>      
</template>

<script>
export default {
  name: 'videoProfile',
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.videoProfile {
    margin-top: -30px;
}
</style>