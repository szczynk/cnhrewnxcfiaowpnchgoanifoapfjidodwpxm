<template>
    <div class="sectionFeaturesAll">
        <div class="container pd-3">
            <h1><a id="choose-us">WHY CHOOSE US</a></h1>
        </div>

        <div class="container mt-3">
            <div class="section-features-content row justify-content-center">
                <div class="col-sm-12 col-md-12 col-lg-6">
                    <div class="features-content d-flex flex-column">
                        <img src="../../../assets/Profile Video.png" width="400" class="video-preview img-fluid" data-toggle="modal" data-target="#video-preview-popup">
                        <img src="../../../assets/feature-1.png" width="400" class="img-fluid">
                    </div>
                </div>

                <div class="modal fade modal-xl" id="video-preview-popup" tabindex="-1" role="dialog" aria-labelledby="video-preview-popupLabel" aria-hidden="true">
                    <div class="modal-dialog .modal-dialog-centered modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="embed-responsive embed-responsive-16by9"> 
                                    <video class="video-profile" width="100%" controls>
                                        <source src="../../../assets/videos/video1.mp4" type="video/mp4">
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div class="col-sm-12 col-md-6 col-lg-6">
                    <div class="features-content text-right d-flex flex-column">
                        <h2>Video Profile</h2>
                        <p>Lewat fitur video profil, <br>
                            kenali kandidat anda jauh <br>
                            sebelum anda bertemu mereka.</p>
                    </div>
                    
                </div>
            </div>

            <div class="section-features-content row align-items-center">
                <div class="col-sm-12 col-md-6 col-lg-7">
                    <div class="features-content text-left d-flex flex-column">
                        <h2>Shorten Your 
                            <br>
                            Interview Time</h2>
                        <p> Proses interview anda akan langsung <br>
                            fokus ke inti karena sudah <br> 
                            mengenal kandidat anda.</p>
                    </div>
                    
                </div>

                <div class="col-sm-12 col-md-6 col-lg-5">
                    <div class="features-content d-flex flex-column">
                        <div><img src="../../../assets/feature-2.png" class="img-fluid" width="400" id="feature-2"></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sectionFeaturesAll'

}
</script>

<style lang='scss' scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    
    .sectionFeaturesAll {
        margin-top: 50px;
        font-family: 'Roboto', sans-serif;

        .section-features-content {
            margin-bottom: 10px;
            float: center;

            .features-content {
                h2, p {
                    color: #190224;
                    font-family: 'Roboto', sans-serif;
                }

                h2 {
                    font-weight: bold;
                    font-size: 46px;
                }

                p {
                    font-size: 24px;
                }

                .video-preview {
                    position: absolute;
                    top: 18%;
                    left: 25%;
                    cursor: pointer;
                    

                    &:hover {
                        transform: scale(1.1);
                        transition: 0.5s;
                    }
                }            
            }
            
        }
    }
</style>