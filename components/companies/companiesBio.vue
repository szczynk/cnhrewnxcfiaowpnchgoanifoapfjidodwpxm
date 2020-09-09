<template>
    <div class="container">
        <div class="row my-2">
            <div class="col-lg-2">
                <div class="nav flex-column nav-pills categories" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true"> Tentang</a>
                    <a class="nav-link" id="v-pills-maps-tab" data-toggle="pill" href="#v-pills-maps" role="tab" aria-controls="v-pills-maps" aria-selected="false">Lokasi</a>
                    <a class="nav-link" id="v-pills-jobs-tab" data-toggle="pill" href="#v-pills-jobs" role="tab" aria-controls="v-pills-jobs" aria-selected="false">Lowongan Aktif</a>
                </div>
            </div>
            
            <div class="col lg-10">
                <div class="company-data tab-content overflow-auto" id="v-pills-tabContent">
                    <div class="about-company tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                        <h5>Tentang Perusahaan <span><a href="#"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h5>
                        <p>
                            {{about}}
                        </p>
                    </div>
    
                    <div class="tab-pane fade" id="v-pills-maps" role="tabpanel" aria-labelledby="v-pills-maps-tab">
                        <h5>Alamat Perusahaan <span><a href="#"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h5>
                        
                        <p>{{alamat}}</p>
                        <!--Google map-->
                        <div class="container-fluid m-0 p-0">
                            <div id="map"></div>
                        </div>
                    </div>

                    <div class="tab-pane fade" id="v-pills-jobs" role="tabpanel" aria-labelledby="v-pills-jobs-tab">
                        <h5>Lowongan Aktif <span><a href="#"><i class="fa fa-plus-circle" aria-hidden="true"></i> Post New Job</a></span></h5>
                        <jobCard/>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>

<script>
function initMap() {       
    var loc = {lat: -6.237869,  lng: 106.807574};
    
    var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 50, center: loc});
    
    var marker = new google.maps.Marker({position: loc, map: map});
}

import jobCard from '../../components/jobExplore/jobCard'

export default {
    name: 'CompaniesBio',
    components: {
        jobCard
    },
    
    data: function(){
        return {
            about: 'netZAP adalah Penyedia Akses Internet berlisensi & telah hadir sejak tahun 2005. Selain lisensi ISP, netZAP juga mempunya lisensi BWA dengan spektrum 2053 – 2068 MHz. netZAP melayani dedicated internet dengan kecepatan tinggi tanpa quota atau unlimited untuk Perorangan, Perusahaan Kecil dan Menengah dan backup untuk Perusahaan Besar atau untuk Event yang sifatnya temporary.',
            alamat: 'Jl. Gunawarman No.67, RT.3/RW.7, Rw. Bar., Kec. Kby. Baru, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12180'
        };
    }
}
</script>

<style lang='scss'>

.categories {
    margin-bottom: 30px;
    
    .nav-link[aria-selected="true"] {
        background-color: #A33DD4;
    }
}

.company-data {
    height: 440px;

    h5 {
        font-weight: bold;
        font-size: larger;
        padding-bottom: 12px;
        border-bottom: 1px solid;
    }

    span {
        float: right;
        text-decoration: none;
        
        font-size: medium;

        a {
            color: #B982E8;
        }
    }
    
    padding: 24px;
    border-radius: 8px;
}

.jobs-card {
    background-color: #FAF4FC;
    padding: 10px;
    border-radius: 8px;
    padding-top: 20px;
    margin-bottom: 12px;

    .card-profile-picture {
        padding: 10px;
        float: left;
    }

    .jobs-info {
        h5 {
            border-bottom: none;
        }
    }

    .btn-jobs-detail {
        background-color: #980DDC;
        color: #fff; 
        float: center;
    }

    .btn-company-video {
        background-color: #fff;
        color: #980DDC;
        border: 1px #980DDC;
        float: center;
    }
}
</style>