<template>
  <div class="profileCard text-center" width="100%"> 
    <img v-if="photo_url" class="card-profile-picture" :src="photo_url" alt="profile picture" width="125px" height="125px" >
    <img v-else class="card-profile-picture" src="../../assets/profile-picture.jpg" alt="profile picture" width="125px" height="125px">

    <div class="card-body">
      <h3> {{form.firstName}} {{form.lastName}}  </h3>
      <p>
          <i class="fa fa-map-marker"></i> 
          <span itemprop="addressRegion">{{form.city}}</span>
      </p>  
      <p itemprop="jobTitle">
          <i class="fa fa-suitcase"></i>
          {{form.latest_jobplace}}
      </p>
      <p itemprop="jobTitle">
          <i class="fa fa-suitcase"></i>
          {{form.latest_jobtitle}} 
      </p>
      <p>
          <i class="fa fa-phone"></i>
          <span itemprop="phone-number">
              {{form.phone_number}}
          </span>
      </p>                
      <p itemprop="company-email"> 
          <i class="fa fa-envelope-o"></i> 
          <a href="#">{{form.email}}</a> 
      </p>
      <button @click="$bvModal.show('bv-modal-profile')" class="profile-edit-btn" name="btnAddMore">Edit Profile</button>
    </div>

    <b-modal id="bv-modal-profile" hide-footer>
    <template v-slot:modal-title>
      Informasi Dasar
    </template>
      <div>

      <b-item class="card-profile-picture" alt="profile picture" width="125px" name='profile_picture'>
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
              v-model="form.firstName"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Nama Depan"
            ></b-form-input>

            <b-form-input
              id="inline-form-input-name"
              v-model="form.lastName"
              class="mb-2 mr-sm-2 mb-sm-0"
              placeholder="Nama Belakang"
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
        v-model="form.city"
        placeholder="Lokasi"
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
        v-model="form.latest_jobplace"
        placeholder="Institusi Terakhir/Saat Ini"
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
        v-model="form.latest_jobtitle"
        placeholder="Bidang Terakhir/Saat Ini"
      ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-phone"
        label="Nomor Ponsel Aktif :"
        label-for="input-phone"
      >
      <b-form-input
        id="form-input-phone"
        v-model="form.phone_number"
        placeholder="Nomor Ponsel Aktif"
      ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-email"
        label="Alamat Surel (E-mail)  :"
        label-for="input-email"
      >
      <b-form-input
        id="form-input-email"
        v-model="form.email"
        placeholder="Alamat Surel (E-mail)"
      ></b-form-input>
      </b-form-group>

      <b-button @click="updateProfile()" class="mt-3" block>Simpan</b-button>        
      </div>
    </b-modal>

  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'profileCard',
  data() {
    return {
      photo_url: '',
      form: {
        firstName: '',
        lastName: '',
        city: '',
        latest_jobplace: '',
        latest_jobtitle: '',
        phone_number: '',
        email:'',
      }
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      let user = this.$firebase.auth().currentUser
      if (user){
        try{
          const profile = await this.$firebase.firestore().collection('users').doc(user.uid).get()
          this.photo_url = profile.data().photo_url
          this.form.firstName = profile.data().firstName
          this.form.lastName = profile.data().lastName
          this.form.city = profile.data().city
          this.form.latest_jobplace = profile.data().latest_jobplace
          this.form.latest_jobtitle = profile.data().latest_jobtitle
          this.form.phone_number = profile.data().phone_number
          this.form.email = profile.data().email
        }
        catch (err) {
          console.log(err)
        }
      }
    },

    async updateProfile() {
      try {        
        await this.$firebase.firestore().collection('users')
              .doc(this.$firebase.auth().currentUser.uid)
              .update({
                firstName: this.form.firstName,
                lastName: this.form.lastName,
                city: this.form.city,
                latest_jobplace: this.form.latest_jobplace,
                latest_jobtitle: this.form.latest_jobtitle,
                phone_number: this.form.phone_number,
                email: this.form.email,
              })

        this.form.firstName= ''
        this.form.lastName= ''
        this.form.city= ''
        this.form.latest_jobplace= ''
        this.form.latest_jobtitle= ''
        this.form.phone_number= ''
        this.form.email= ''

        this.$bvModal.hide('bv-modal-profile')
        await this.$store.dispatch("modules/users/fetchUserTab", this.$firebase.auth().currentUser)
      }
      catch (err) {
        alert(err)
        console.log(err)
      }
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '/assets/component-styles/profileCard.scss'
</style>