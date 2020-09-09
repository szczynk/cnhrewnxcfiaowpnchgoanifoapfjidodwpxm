<template>
    <div class="sectionWorkflowsAll">
        <div class="heading-workflows container text-right">
            <h1><a id="how-we-work">HOW WE WORK</a></h1>
            <h2>Start in 4 simple steps.</h2>
        </div>

        <div class="container">
            <div class="section-workflows-content row justify-content-center">

                <div class="col-sm-1 col-md-1 col-lg-1 text-left">
                    <div class="workflows-content d-flex flex-column">
                        <img src="../../../assets/1.png" height="65" width="75">
                    </div>
                </div>

                <div class="col-sm-11 col-md-11 col-lg-8">
                    <div class="workflows-content text-left d-flex flex-column">
                        <h2>Join Lookerku</h2>
                        <p>Lewat fitur video profil, kenali <br>
                            kandidat anda jauh sebelum anda bertemu mereka.</p>
                    </div>
                </div>

                <div class="col-sm-11 col-md-11 col-lg-3">
                    <div class="workflows-content d-flex flex-column">
                        <img src="../../../assets/icon/icon register.png" height="300" width="300">
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="section-workflows-content row justify-content-around">
                <div class="col-sm-12 col-md-1 col-lg-1 text-left">
                    <div class="workflows-content d-flex flex-column">
                        <img src="../../../assets/2.png" height="65" width="75">
                    </div>
                </div>

                <div class="col-sm-12 col-md-5 col-lg-8">
                    <div class="workflows-content text-left d-flex flex-column">
                        <h2>Complete Your Company's Profile</h2>
                        <p>Lengkapi informasi dasar perusahaan anda.</p>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="workflows-content d-flex flex-column">
                        <img src="../../../assets/icon/Icon Tell.png" height="300" width="300">
                    </div>
                </div>
            </div>
        </div>
        

        <div class="container">
            <div class="section-workflows-content row justify-content-around">
                <div class="col-sm-12 col-md-1 col-lg-1 text-left">
                    <div class="workflows-content d-flex flex-column">
                        <img src="../../../assets/3.png" height="65" width="75">
                    </div>
                </div>

                <div class="col-sm-12 col-md-5 col-lg-8">
                    <div class="workflows-content text-left d-flex flex-column">
                        <h2>Tell Your Company's Story</h2>
                        <p>Gunakan Video Profil kami untuk mengenalkan perusahaan anda ke dunia. </p>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="workflows-content d-flex flex-column">
                        <img src="../../../assets/icon/Icon Video.png" height="300" width="300">
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="section-workflows-content row justify-content-center">
                <div class="col-sm-12 col-md-1 col-lg-1 text-left">
                    <div class="workflows-content d-flex flex-column">
                        <img src="../../../assets/4.png" height="65" width="75">
                    </div>
                </div>

                <div class="col-sm-12 col-md-5 col-lg-8">
                    <div class="workflows-content text-left d-flex flex-column">
                        <h2>Search For Talent</h2>
                        <p>Pasang lowongan pekerjaan, kemudian temukan kandidat-kandidat yang sesuai kriteria perusahaan. </p>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="workflows-content d-flex flex-column">
                        <img src="../../../assets/icon/Icon Search.png" height="300" width="300">
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="section-workflows-content row justify-content-center">
                <div class="col-sm-12 col-md-1 col-lg-1 text-left">
                    <div class="workflows-content d-flex flex-column">
                        <img src="../../../assets/5.png" height="65" width="75">
                    </div>
                </div>

                <div class="col-sm-12 col-md-5 col-lg-8">
                    <div class="workflows-content text-left d-flex flex-column">
                        <h2>Meet Your Ideal Candidates</h2>
                        <p>Interview kandidat yang menarik perhatian anda.</p>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 col-lg-3">
                    <div class="workflows-content d-flex flex-column">
                        <img src="../../../assets/icon/icon hire.png" height="300" width="300">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'sectionWorkflowsAll'

}
</script>

<style lang='scss' scoped>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    
    .sectionWorkflowsAll {
        font-family: 'Roboto', sans-serif;
        background-color: rgba(235,227,238, 0.3);
        margin-top: 30px;

        .heading-workflows {
            padding-top: 100px;
        }

        
    }

    .section-workflows-content {
        padding-top: 45px;
        float: center;
        h2, p {
            color: #190224;
            font-family: 'Roboto', sans-serif;
        }

        h2 {
            font-weight: bold;
            font-size: 46px;
        }

        p {
            font-size: 20px;
        }

        
    }
</style>