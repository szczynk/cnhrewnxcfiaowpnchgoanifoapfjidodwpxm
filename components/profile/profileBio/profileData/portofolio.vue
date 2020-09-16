<template>
  <div class="portofolio tab-pane fade" id="v-pills-porto" role="tabpanel" aria-labelledby="v-pills-porto-tab">
    <div class="porto-pane">
      <h5 class="section-header mb-4">Social Links: <span><a href="#" @click="$bvModal.show('bv-modal-portofolio')"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h5>
        <ul>
          <li class="myPortofolio">
            <div class="position-relative">
              <h4>Facebook </h4>
              <a :href="user.facebook">{{user.facebook}}</a>
            </div>

            <div class="position-relative">
              <h4>Twitter </h4>
              <a :href="user.twitter">{{user.twitter}}</a>
            </div>

            <div class="position-relative">
              <h4>Instagram </h4>
              <a :href="user.instagram">{{user.instagram}}</a>
            </div>

            <div class="position-relative">
              <h4>GitHub </h4>
              <a :href="user.github">{{user.github}}</a>
            </div>

            <div class="position-relative">
              <h4>Youtube </h4>
              <a :href="user.youtube">{{user.youtube}}</a>
            </div>

          </li>
        </ul>

      <h5 class="section-header mt-4">Attachments: <span><a><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h5>
        <ul>
          <li>
            <div class="position-relative">
              <img src="../../../../assets/pdf-icon.png">
              <h6>Resume.pdf </h6>
            </div>
          </li>
        </ul>

        <ul>
          <li>
            <div class="position-relative">
              <img src="../../../../assets/pdf-icon.png">
              <h6>The study of blockchain technology 
                  in election system.pdf
              </h6>
            </div>
          </li>
        </ul>
        
        <!-- Add Education Modal -->
        <b-modal id="bv-modal-portofolio" hide-footer>
          <template v-slot:modal-title>
            Media Sosial
          </template>
          <div>
            <b-form-group
              id="input-group-addfb"
              label="Facebook"
              label-for="input-addfb">
              <b-form-input
                id="form-input-fb"
                v-model="user.facebook"
                placeholder="https://facebook.com/..."
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-addtwit"
              label="Twitter"
              label-for="input-addtwit">
              <b-form-input
                id="form-input-twit"
                v-model="user.twitter"
                placeholder="https://twitter.com/..."
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-addig"
              label="Instagram"
              label-for="input-addig">
              <b-form-input
                id="form-input-ig"
                v-model="user.instagram"
                placeholder="https://instagram.com/..."
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-addGH"
              label="GitHub"
              label-for="input-addGH">
              <b-form-input
                id="form-input-GH"
                v-model="user.github"
                placeholder="https://github.com/..."
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-addyt"
              label="Youtube"
              label-for="input-addyt">
              <b-form-input
                id="form-input-yt"
                v-model="user.youtube"
                placeholder="https://youtube.com/channel/..."
              ></b-form-input>
            </b-form-group>

            <b-button @click="updateSocial()" class="mt-3" block>Simpan</b-button>    
          </div>
        </b-modal>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'portofolio',
  computed: {
    ...mapState(['user'])
  },
  data() {
    return {
      facebook: '',
      twitter: '',
      instagram: '',
      github: '',
      youtube: '',
    };
  },
  methods: {
    updateSocial() {
      this.$store.dispatch('updateSocial', {
        facebook: this.facebook !== '' ? this.facebook : this.user.facebook,
        twitter: this.twitter !== '' ? this.twitter : this.user.twitter,
        instagram: this.instagram !== '' ? this.instagram : this.user.instagram,
        github: this.github !== '' ? this.github : this.user.github,
        youtube: this.youtube !== '' ? this.youtube : this.user.youtube,
      })
      .then(() => this.$bvModal.hide('bv-modal-portofolio'))

      this.facebook= ''
      this.twitter= ''
      this.instagram= ''
      this.github= ''
      this.youtube= ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.portofolio {
  li {
  list-style-type: none;
  position: relative;
  margin-left: 10px;
  margin-bottom: 10px;

  .position-relative {
    margin-left: 20px;
    margin-top: 30px;
    }

  h5 {
  border-bottom: none !important;  
  padding-bottom: 0;
  font-weight: none;
    }
  }
}
</style>