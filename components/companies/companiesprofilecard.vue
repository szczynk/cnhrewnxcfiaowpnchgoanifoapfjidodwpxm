<template>
    <div class="profileBio">
        <div class="row my-4 justify-content-center">
            <div class="col-lg-3 col-md-6 col-sm-12 my-auto mx-auto">
                <div class="profile-card text-center" width="100%"> 
                    <img class="card-profile-picture" src="../../assets/logo.png" alt="profile picture" width="125px">
                    <div class="card-body">
                        <h3> {{user.company}} </h3>
                        <p>
                            <i class="fa fa-map-marker"></i> 
                            <span itemprop="addressRegion">{{user.city}}</span>
                        </p>  
                        <p itemprop="jobTitle">
                            <i class="fa fa-suitcase"></i>
                            {{user.industry}}
                        </p>
                        <p>
                            <i class="fa fa-phone"></i>
                            <span itemprop="phone-number">
                                {{user.phone_number}}
                            </span>
                        </p>
                        <p>
                            <i class="fas fa-globe"></i>
                            <span itemprop="company-website">
                                {{user.website}}</span>
                        </p>
                                
                        <p itemprop="company-email"> 
                            <i class="fa fa-envelope"> </i> 
                            <a href="mailto:you@somedomain.com">{{user.email}}</a> 
                        </p>
                        <input type="submit" class="profile-edit-btn" @click="$bvModal.show('bv-modal-companiesProfile')" name="btnAddMore" value="Edit Profile">
                    </div>
                  </div>
            </div>
            <div class="col-lg-9 col-md-9 col-sm-12 my-auto mx-auto">
                
                <!-- 16:9 aspect ratio --> 
                <div class="embed-responsive embed-responsive-16by9"> 
                    <video class="video-profile text-center" width="100%" controls>
                        <source src="" type="video/mp4">
                    </video> 
                </div>                  
            </div>
        </div>

    <b-modal id="bv-modal-companiesProfile" hide-footer>
    <template v-slot:modal-title>
      Informasi Dasar
    </template>
      <div>

      <b-item class="card-companiesProfile-picture" alt="profile picture" width="125px">
      <b-avatar badge-variant="info" button src="../../assets/netzap-logo.png"></b-avatar>
      </b-item>

      <b-form-group
        id="input-group-name"
        label="Nama Perusahaan:"
        label-for="input-name"
      >
        <b-form-input
          id="form-input-name"
          v-model="company"
          class="mb-2 mr-sm-2 mb-sm-0"
          :placeholder="user.company"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-location"
        label="Lokasi :"
        label-for="input-location"
      >
      <b-form-input
        id="form-input-location"
        v-model="city"
        :placeholder="user.city"
      ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-industry"
        label="Industri :"
        label-for="input-industry"
      >
      <b-form-input
        id="form-input-job"
        v-model="industry"
        :placeholder="user.industry"
      ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-phone"
        label="Nomor Telepon :"
        label-for="input-phone"
      >
      <b-form-input
        id="form-input-phone"
        v-model="phone_number"
        :placeholder="user.phone_number"
      ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-website"
        label="Website :"
        label-for="input-website"
      >
      <b-form-input
        id="form-input-website"
        v-model="website"
        :placeholder="user.website"
      ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-email"
        label="Alamat Surel (E-mail)  :"
        label-for="input-email"
      >
      <b-form-input
        id="form-input-email"
        v-model="email"
        :placeholder="user.email"
      ></b-form-input>
      </b-form-group>

      <!-- <b-form-group
        id="input-group-video"
        label="Video Profil  :"
        label-for="input-video"
      >
      <b-form-file
      v-model="file"
      :state="Boolean(file)"
      :placeholder="Pilih File atau Tarik Kesini"
      drop-:placeholder="Tarik Kesini..."
      ></b-form-file>
      </b-form-group> -->

      <b-button @click="updateProfile()" class="mt-3" block>Simpan</b-button>        
      </div>
    </b-modal>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'companiesProfileCard',
    computed: {
    ...mapState(['user'])
    },
    data() {
    return {
      company: '',
      industry: '',
      city: '',
      website: '',
      phone_number: '',
      email:'',
    };
    },
    methods: {
    updateProfile() {
      this.$store.dispatch('updateCompaniesProfileCard', {
        company: this.company !== '' ? this.company : this.user.company,
        industry: this.industry !== '' ? this.industry : this.user.industry,
        city: this.city !== '' ? this.city : this.user.city,
        website: this.website !== '' ? this.website : this.user.website,
        phone_number: this.phone_number !== '' ? this.phone_number : this.user.phone_number,
        email: this.email !== '' ? this.email : this.user.email,
      })
      .then(() => this.$bvModal.hide('bv-modal-companiesProfile'))

      this.company= ''
      this.industry= ''
      this.city= ''
      this.website= ''
      this.phone_number= ''
      this.email= ''
    }
  }
}
</script>

<style lang="scss" scoped>
    .profile-card {
    background-color: #F6EAFB;
    padding-top: 24px;
    border-radius: 8px;
    margin-bottom: 16px;

    h3 {
        font-size: 24px;
    }
    }


    .card-profile-picture {
        box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
        margin-bottom: 30px;
        border-radius: 100px;
    }

    .card-body {
        margin-top: -10px;
    }

    .profile-edit-btn {
        background-color: #fff;
        color: #A33DD4;
        border-color: #A33DD4;
        border-radius: 2px;
        float: center;
    }
</style>