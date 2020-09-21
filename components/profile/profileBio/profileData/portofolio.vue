<template>
  <div class="portofolio tab-pane fade" id="v-pills-porto" role="tabpanel" aria-labelledby="v-pills-porto-tab">
    <div class="porto-pane">
      <h5 class="section-header mb-4">Social Links: <span><a href="#" @click="$bvModal.show('bv-modal-portofolio')"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h5>
        <ul>
          <li class="myPortofolio">
            <div class="position-relative">
              <h4 v-if="user.facebook !== ''">Facebook </h4>
              <a :href="user.facebook">{{user.facebook}}</a>
            </div>

            <div class="position-relative">
              <h4 v-if="user.twitter !== ''">Twitter </h4>
              <a :href="user.twitter">{{user.twitter}}</a>
            </div>

            <div class="position-relative">
              <h4 v-if="user.instagram !== ''">Instagram </h4>
              <a :href="user.instagram">{{user.instagram}}</a>
            </div>

            <div class="position-relative">
              <h4 v-if="user.github !== ''">GitHub </h4>
              <a :href="user.github">{{user.github}}</a>
            </div>

            <div class="position-relative">
              <h4 v-if="user.youtube !== ''">Youtube </h4>
              <a :href="user.youtube">{{user.youtube}}</a>
            </div>
            
            <div class="position-relative">
              <h4 v-if="user.site !== ''">Situs Portofolio </h4>
              <a :href="user.site">{{user.site}}</a>
            </div>

          </li>
        </ul>

      <h5 class="section-header mt-4">Attachments: <span><a href="#" @click="addModal()"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Lampiran</a></span></h5>
        <ul>
          <li v-for="myAttachment in attachments" v-bind:key="myAttachment.id" class="d-inline">
            <div class="position-relative">
              <img src="../../../../assets/pdf-icon.png">
              <h6> <a :href="myAttachment.url"> {{myAttachment.name}} </a> 
                <span>
                  <a href="#" @click="deleteData(myAttachment.id,myAttachment.name)"><i class="fa fa-trash red" aria-hidden="true"></i> Delete </a>
                </span>
              </h6>
            </div>
          </li>
        </ul>
    </div>

    <!-- Social Link Modal -->
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

        <b-form-group
          id="input-group-addsite"
          label="Situs Portofolio"
          label-for="input-addsite">
          <b-form-input
            id="form-input-site"
            v-model="user.site"
            placeholder="Example: https://yoursite.com/"
          ></b-form-input>
        </b-form-group>

        <b-button @click="updateSocial()" class="mt-3" block>Simpan</b-button>    
      </div>
    </b-modal>

    <!-- Add Attachments Modal -->
    <b-modal id="bv-modal-Attachments" hide-footer>
    <template v-slot:modal-title>
        Tambahkan Lampiran
    </template>
      <div>
        <b-form @submit.prevent="addData()">
          <b-form-group
            id="input-group-file"
            label="Upload proyek atau sampel pekerjaan (gambar dan PDF diterima), file harus lebih kecil dari 3MB"
            label-for="input-file"
          >
            <b-form-file
              v-model="file"
              placeholder="Pilih File atau Tarik Kesini"
              drop-:placeholder="Tarik Kesini..."
            ></b-form-file>
          </b-form-group>
          
        <b-button type="submit" class="mt-3" block>Tambah</b-button>  
      </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import firebase from 'firebase/app'
import 'firebase/storage'

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
      site: '',
      uploadValue: 0,
      file:null,
      attachments:[],
      form: {
        id: '',
        uid: '',
        name: '',
        url:'',
      },
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
        site: this.site !== '' ? this.site : this.user.site,
      })
      .then(() => this.$bvModal.hide('bv-modal-portofolio'))

      this.facebook= ''
      this.twitter= ''
      this.instagram= ''
      this.github= ''
      this.youtube= ''
      this.site= ''
    },

    addModal() {
      this.form.id = ''
      this.form.uid = ''
      this.form.name= ''
      this.form.url= ''

      this.$bvModal.show('bv-modal-Attachments')
    },
    async getData() {
      let UID = firebase.default.auth().currentUser.uid
      if (UID){
        try{
          this.attachments=[]
          const docs = await firebase.default.firestore().collection('attachments').where('uid', '==', UID).get()

          docs.forEach(doc => {
            this.attachments.push({
              id: doc.id,
              uid: doc.data().uid,
              name: doc.data().name,
              url: doc.data().url,
            })
            console.log('attachments => ', doc.data());
          })
        }
        catch (err) {
          console.log(err)
        }
      }
    },
    async addData() {
      // Upload file to firebase storage
      this.uploadValue=0;
      this.form.name=this.file.name;
      const storageRef=firebase.storage().ref('attachments/'+this.file.name).put(this.file);
      storageRef.on(`state_changed`,snapshot=>{
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;},
        error=>{console.log(error.message)},   
      ()=>{this.uploadValue=100;
          storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.form.url = url
          
          let UID = firebase.default.auth().currentUser.uid
          // if (this.addPosition != '' && UID) {
          if (UID) {
            firebase.default.firestore()
              .collection('attachments').add({
                uid: UID,
                name: this.form.name,
                url: this.form.url,
              })
              .then(() => {
                this.$bvModal.hide('bv-modal-Attachments')
                this.getData()
              })
              .catch((err) => {
                console.log(err)
              })
            }
          });
        }      
      );
    },
    async deleteData(id,name) {
      if (firebase.default.auth().currentUser.uid) {
        let storageRef = firebase.storage().ref();
        let desertRef = storageRef.child('attachments/'+name);
        // Delete the file
        desertRef.delete().then(function() {
          // File deleted successfully
        }).catch(function(error) {
          // Uh-oh, an error occurred!
        });
        
        await firebase.default.firestore()
        .collection('attachments')
        .doc(id)
        .delete()
        .then(() => {
          this.getData()
        })
        .catch((err) => {
          console.log(err)
        })
      }    
    }
  },
  mounted() {
    this.getData();
  },
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