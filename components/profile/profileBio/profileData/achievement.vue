<template>
  <div class="achievement tab-pane fade" id="v-pills-achievement" role="tabpanel" aria-labelledby="v-pills-achievement-tab">
    <div class="achievement-pane">
      <h5 class="section-header">Penghargaan: <span><a href="#" @click="addModal()"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Penghargaan</a></span></h5>
      <ul>
        <li v-for="myAchievement in achievement" v-bind:key="myAchievement.id" class="myAchievement">
          <div class="position-relative">
            <h4>{{myAchievement.name}} 
              <span>
                <a href="#" @click="deleteData(myAchievement.id)"><i class="fa fa-trash red" aria-hidden="true"></i> Delete </a>
              </span>
              <span>
                <a href="#" @click="updateModal(myAchievement)"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit </a>
              </span> 
            </h4>
            <h5>{{myAchievement.award}}</h5>
            <h6>{{myAchievement.year}}</h6>
            <br>
            <p>
                {{myAchievement.description}}
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- Add Education Modal -->
    <b-modal id="bv-modal-Achievement" hide-footer>
    <template v-slot:modal-title>
      <div v-show="!updateMode">
        Tambahkan Penghargaan
      </div>
      <div v-show="updateMode">
        Ubah Penghargaan
      </div>
    </template>
      <div>
        <b-form @submit.prevent="updateMode ? updateData() : addData()">
          <b-form-group>
              <b-form-input
              id="form-input-addname"
              v-model="form.name"
              placeholder="Nama Penghargaan"
              ></b-form-input>
          </b-form-group>

          <b-form-group>
              <b-form-input
              id="form-input-addaward"
              v-model="form.award"
              placeholder="Penghargaan"
              ></b-form-input>
          </b-form-group>
          
          <b-form-group>
              <b-form-input
              id="form-input-addyear"
              v-model="form.year"
              placeholder="Tahun"
              ></b-form-input>
          </b-form-group>

          <b-form-group>
            <b-form-textarea
                id="textarea"
                v-model="form.description"
                placeholder="Informasi Tambahan(Opsional)"
                rows="3"
                max-rows="6"
            ></b-form-textarea>
          </b-form-group>

        <b-button v-show="!updateMode" type="submit" class="mt-3" block>Tambah</b-button>  
        <b-button v-show="updateMode" type="submit" class="mt-3" block>Ubah</b-button>
      </b-form>
      </div>
    </b-modal>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  name: 'achievement',
  data() {
    return {
      achievement:[],
      updateMode:false,
      form: {
        id: '',
        uid: '',
        award: '',
        name: '',
        year: '',
        description: '',
      },
    }
  },
  methods: {
    addModal() {
      this.updateMode = false

      this.form.id = ''
      this.form.uid = ''
      this.form.award= ''
      this.form.name= ''
      this.form.year= ''
      this.form.description= ''

      this.$bvModal.show('bv-modal-Achievement')
    },
    updateModal(myAchievement) {
      this.updateMode = true

      this.form.id = ''
      this.form.award= ''
      this.form.name= ''
      this.form.year= ''
      this.form.description= ''

      this.$bvModal.show('bv-modal-Achievement')

      this.form.id= myAchievement.id
      this.form.award= myAchievement.award
      this.form.name= myAchievement.name
      this.form.year= myAchievement.year
      this.form.description= myAchievement.description
    },
    async getData() {
      let UID = firebase.default.auth().currentUser.uid
      if (UID){
        try{
          this.achievement=[]
          const docs = await firebase.default.firestore().collection('achievement').where('uid', '==', UID).get()

          docs.forEach(doc => {
            this.achievement.push({
              id: doc.id,
              uid: doc.data().uid,
              award: doc.data().award,
              name: doc.data().name,
              year: doc.data().year,
              description: doc.data().description,
            })
            console.log('achievement => ', doc.data());
          })
        }
        catch (err) {
          console.log(err)
        }
      }
    },
    async addData() {
      let UID = firebase.default.auth().currentUser.uid
      // if (this.addaward != '' && UID) {
      if (UID) {
        await firebase.default.firestore()
        .collection('achievement').add({
          uid: UID,
          award: this.form.award,
          name: this.form.name,
          year: this.form.year,
          description: this.form.description,
        })
        .then(() => {
          this.$bvModal.hide('bv-modal-Achievement')
          this.getData()
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    async updateData() {
      let UID = firebase.default.auth().currentUser.uid
      if (UID) {
        try {
          console.log(this.form.id)
          await firebase.default.firestore()
          .collection('achievement')
          .doc(this.form.id)
          .update({
            award: this.form.award,
            name: this.form.name,
            year: this.form.year,
            description: this.form.description,
          })
          this.$bvModal.hide('bv-modal-Achievement')
          this.getData()
        }
        catch (err) {
          console.log(err)
        }
      }
    },
    async deleteData(id) {
      if (firebase.default.auth().currentUser.uid) {
        await firebase.default.firestore()
        .collection('achievement')
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
.achievement {
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

    li::after {
        content: "";
        position: absolute;
        top: 8px;
        left: calc(-24px);
        width: 20px;
        height: 20px;
        background-color: #B982E8;
        border-radius: 100%;
    }
}

span{
  margin-right: 10px;
}
</style>