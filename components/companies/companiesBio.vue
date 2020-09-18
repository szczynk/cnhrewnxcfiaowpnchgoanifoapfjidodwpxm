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
                        <h5>Tentang Perusahaan <span><a href="#" @click="$bvModal.show('bv-modal-companiesAbout')"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h5>
                        <p>
                            {{user.about_me}}
                        </p>
                        <b-modal id="bv-modal-companiesAbout" hide-footer>
                        <template v-slot:modal-title>
                            Tentang Perusahaan
                        </template>
                        <div>
                        <b-form-group
                            id="input-group-about"
                            label="Beritahu kandidat seperti apa perusahaan anda agar mereka lebih tertarik untuk melamar pekerjaan."
                            label-for="input-about"
                        >
                        <b-form-textarea
                            id="textarea"
                            v-model="about_me"
                            rows="3"
                            max-rows="6"
                        ></b-form-textarea>
                        </b-form-group>
                        <b-button @click="updateAbout()" class="mt-3" block>Simpan</b-button> 
                        </div>
                        </b-modal>
                    </div>
    
                    <div class="tab-pane fade" id="v-pills-maps" role="tabpanel" aria-labelledby="v-pills-maps-tab">
                        <h5>Alamat Perusahaan <span><a href="#" @click="$bvModal.show('bv-modal-companiesAddress')" ><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h5>
                        
                        <p>{{user.address}}</p>
                        <!--Google map-->
                        <gmap-map 
                        :center="{lat:user.lat, lng:user.lng}"
                        :zoom="17" map-type-id="terrain"
                        style="width: 500px; height: 300px" 
                        :options="{disableDefaultUI:true}">
                        <GmapMarker
                            :position="{lat:user.lat, lng:user.lng}"
                        />
                        </gmap-map>

                        <b-modal id="bv-modal-companiesAddress" hide-footer>
                        <template v-slot:modal-title>
                            Alamat Perusahaan
                        </template>
                        <div>
                        <b-form-group
                            id="input-group-address"
                            label="Masukkan Alamat Perusahaan"
                            label-for="input-address"
                        >
                        <b-form-textarea
                            id="textarea"
                            v-model="address"
                            rows="3"
                            max-rows="6"
                        ></b-form-textarea>
                        </b-form-group>
                        <b-button @click="updateCompaniesAddress()" class="mt-3" block>Simpan</b-button> 
                        </div>
                        </b-modal>
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

import jobCard from '../../components/jobExplore/jobCard'
import { mapState } from 'vuex'

export default {
    name: 'CompaniesBio',
    components: {
        jobCard
    },
    computed: {
    ...mapState(['user']),
    },
    
    data: function(){
        return {
            about_me: '',
            currentLocation : { lat : 0, lng : 0},
            address: ''
        };
    },
    methods: {
    updateAbout() {
      this.$store.dispatch('updateAboutMe', {
        about_me: this.about_me !== '' ? this.about_me : this.user.about_me,
      })
      .then(() => this.$bvModal.hide('bv-modal-companiesAbout'))

      this.about_me= ''
    },

    updateCompaniesAddress() {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': this.address}, (results, status) => {
        if (status === 'OK') {
          this.currentLocation.lat = results[0].geometry.location.lat();
          this.currentLocation.lng = results[0].geometry.location.lng();
        }

        this.$store.dispatch('updateAddress', {
        address: this.address !== '' ? this.address : this.user.address,
        lat: this.lat !== 0 ? this.currentLocation.lat : this.user.lat,
        lng: this.lng !== 0 ? this.currentLocation.lng : this.user.lng,
        })
        
        .then(() => this.$bvModal.hide('bv-modal-companiesAddress'))

        
        this.address= ''
        this.currentLocation={lat:0, lng:0}
      })
    },

    // searchLocation: function() {
      
    //   console.log(this.address,this.currentLocation.lat,this.currentLocation.lng)
    //  }
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