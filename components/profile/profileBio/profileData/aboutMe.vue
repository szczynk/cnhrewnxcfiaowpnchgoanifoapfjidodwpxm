<template>
    <div class="aboutMe tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
       <h5 class="section-header">Tentang Saya: <span><a href="#"  @click="$bvModal.show('bv-modal-aboutMe')" class="fa fa-pencil-square" aria-hidden="true">Edit</a></span></h5>
        <p>
        {{user.about_me}}
        </p>

      <b-modal id="bv-modal-aboutMe" hide-footer>
      <template v-slot:modal-title>
        Tentang Saya
      </template>
        <div>

      <b-form-group
        id="input-group-aboutMe"
        label="Beritahu tentang dirimu sehingga perusahaan lebih mudah memahamimu."
        label-for="input-aboutMe"
      >
      <b-form-textarea
        id="form-input-aboutMe"
        v-model="about_me"
        :placeholder="user.about_me"
        rows="4"
        max-rows="6"
      ></b-form-textarea>
      </b-form-group>

      <b-button @click="updateProfile()" class="mt-3" block>Simpan</b-button>        
      </div>
    </b-modal>

    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'aboutMe',
  computed: {
    ...mapState(['user'])
  },
  data() {
    return {
      about_me: ''
    }
  },
  methods: {
    updateProfile() {
      this.$store.dispatch('updateAboutMe', {
        about_me: this.about_me !== '' ? this.about_me : this.user.about_me,
      })
      .then(() => this.$bvModal.hide('bv-modal-aboutMe'))

      this.about_me= ''
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.categories {
    margin-bottom: 30px; 
    
    .nav-link[aria-selected="true"] {
        background-color: #A33DD4;
    }
}
</style>