<template>
  <div class="profileCard text-center" width="100%"> 
    <img v-if="user.photo_url" class="card-profile-picture" :src="user.photo_url" alt="profile picture" width="125px">
    <img v-else class="card-profile-picture" src="../../assets/profile-picture.jpg" alt="profile picture" width="125px">

    <div class="card-body">
      <h3> {{user.firstName}} {{user.lastName}}  </h3>
      <p>
          <i class="fa fa-map-marker"></i> 
          <span itemprop="addressRegion">{{user.city}}</span>
      </p>  
      <p itemprop="jobTitle">
          <i class="fa fa-suitcase"></i>
          {{user.latest_jobplace}}
      </p>
      <p itemprop="jobTitle">
          <i class="fa fa-suitcase"></i>
          {{user.latest_jobtitle}} 
      </p>
      <p>
          <i class="fa fa-phone"></i>
          <span itemprop="phone-number">
              {{user.phone_number}}
          </span>
      </p>                
      <p itemprop="company-email"> 
          <i class="fa fa-envelope-o"></i> 
          <a href="#">{{user.email}}</a> 
      </p>
      <button @click="$bvModal.show('bv-modal-profile')" class="profile-edit-btn" name="btnAddMore">Edit Profile</button>
    </div>

    <b-modal id="bv-modal-profile" hide-footer>
    <template v-slot:modal-title>
      Informasi Dasar
    </template>
      <div>

      <b-item class="card-profile-picture" alt="profile picture" width="125px">
      <b-avatar badge-variant="info" button src="../../assets/profile-picture.jpg"></b-avatar>
      </b-item>

      <b-form-group
        id="input-group-name"
        label="Nama Lengkap:"
        label-for="input-name"
      >
        <b-form inline>
            <b-form-input
              id="inline-form-input-name"
              v-model="firstName"
              class="mb-2 mr-sm-2 mb-sm-0"
              :placeholder="user.firstName"
            ></b-form-input>

            <b-form-input
              id="inline-form-input-name"
              v-model="lastName"
              class="mb-2 mr-sm-2 mb-sm-0"
              :placeholder="user.lastName"
            ></b-form-input>
        </b-form>
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
        id="input-group-job"
        label="Institusi :"
        label-for="input-job"
        description="Institusi Terakhir/Saat Ini"
      >
      <b-form-input
        id="form-input-job"
        v-model="latest_jobplace"
        :placeholder="user.latest_jobplace"
      ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-job"
        label="Bidang :"
        label-for="input-job"
        description="Bidang Terakhir/Saat Ini"
      >
      <b-form-input
        id="form-input-job"
        v-model="latest_jobtitle"
        :placeholder="user.latest_jobtitle"
      ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-phone"
        label="Nomor Ponsel Aktif :"
        label-for="input-phone"
      >
      <b-form-input
        id="form-input-phone"
        v-model="phone_number"
        :placeholder="user.phone_number"
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
  name: 'profileCard',
  computed: {
    ...mapState(['user'])
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      city: '',
      latest_jobplace: '',
      latest_jobtitle: '',
      phone_number: '',
      email:'',
    };
  },
  methods: {
    updateProfile() {
    //   console.log(
    //     this.firstName,
    //     this.lastName,
    //     this.city,
    //     this.latest_jobplace,
    //     this.latest_jobtitle,
    //     this.phone_number,
    //     this.email
    //   )
    //   this.$bvModal.hide('bv-modal-profile')
    // }
      this.$store.dispatch('updateProfileCard', {
        firstName: this.firstName !== '' ? this.firstName : this.user.firstName,
        lastName: this.lastName !== '' ? this.lastName : this.user.lastName,
        city: this.city !== '' ? this.city : this.user.city,
        latest_jobplace: this.latest_jobplace !== '' ? this.latest_jobplace : this.user.latest_jobplace,
        latest_jobtitle: this.latest_jobtitle !== '' ? this.latest_jobtitle : this.user.latest_jobtitle,
        phone_number: this.phone_number !== '' ? this.phone_number : this.user.phone_number,
        email: this.email !== '' ? this.email : this.user.email,
      })
      .then(() => this.$bvModal.hide('bv-modal-profile'))

      this.firstName= ''
      this.lastName= ''
      this.city= ''
      this.latest_jobplace= ''
      this.latest_jobtitle= ''
      this.phone_number= ''
      this.email= ''
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '/assets/component-styles/profileCard.scss'
</style>