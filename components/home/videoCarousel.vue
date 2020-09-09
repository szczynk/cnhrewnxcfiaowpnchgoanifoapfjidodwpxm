<template>
    <div class="video-carousel mt-4">
        <div class="row justify-content-center">
            <div class="col-md-12 col-lg-6 ">
                <!--Carousel Wrapper-->
                <div id="video-carousel" class="carousel slide carousel-fade" data-ride="carousel">
                    <!--Indicators-->
                    <ol class="carousel-indicators">
                        <li data-target="#video-carousel" data-slide-to="0" class="active"></li>
                        <li data-target="#video-carousel" data-slide-to="1"></li>
                        <li data-target="#video-carousel" data-slide-to="2"></li>
                    </ol>
                    <!--/.Indicators-->
                    <!--Slides-->
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <div class="embed-responsive embed-responsive-16by9"> 
                                <video class="video-profile text-center" width="100%" controls>
                                    <source src="../../assets/videos/video1.mp4" type="video/mp4">
                                </video> 
                            </div> 
                        </div>
                        <div class="carousel-item">
                            <div class="embed-responsive embed-responsive-16by9"> 
                                <video class="video-profile text-center" width="100%" controls>
                                    <source src="../../assets/videos/video2.mp4" type="video/mp4">
                                </video> 
                            </div> 
                        </div>
                        <div class="carousel-item">
                            <div class="embed-responsive embed-responsive-16by9"> 
                                <video class="video-profile text-center" width="100%" controls>
                                    <source src="../../assets/videos/video1.mp4" type="video/mp4">
                                </video> 
                            </div> 
                        </div>
                    </div>
                    <!--/.Slides-->
                    <!--Controls-->
                    <a class="carousel-control-prev" href="#video-carousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#video-carousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    <!--/.Controls-->
                </div>
                <!--Carousel Wrapper-->
            </div>
        </div>
    </div>
</template>

<script>



export default {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .carousel-item {
        margin-top: 30px;
    }
</style>