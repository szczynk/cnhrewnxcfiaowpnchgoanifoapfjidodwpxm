<template>
  <div class="myEducation tab-pane fade" id="v-pills-edu" role="tabpanel" aria-labelledby="v-pills-edu-tab">
    <div class="pendidikan">
      <h5 class="section-header">Riwayat Pendidikan: <span><a href="#" @click="addModal()"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Riwayat Pendidikan</a></span></h5>
      <ul>
        <li v-for="myEducation in education" v-bind:key="myEducation.id" class="education">
          <div class="position-relative">
            <h4>{{myEducation.title}}
              <span>
                <a href="#" @click="deleteData(myEducation.id)"><i class="fa fa-trash red" aria-hidden="true"></i> Delete </a>
              </span>
              <span>
                <a href="#" @click="updateModal(myEducation)"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit </a>
              </span> 
            </h4>
            <h5>{{myEducation.location}}</h5>
            <h6 v-if="myEducation.resignMonth !== ''">{{myEducation.entryMonth}} {{myEducation.entryYear}} - {{myEducation.resignMonth}} {{myEducation.resignYear}}</h6>
            <h6 v-else>{{myEducation.entryMonth}} {{myEducation.entryYear}} - Sekarang</h6>
            <br>
            <p>
                {{myEducation.description}}
            </p>
          </div>
        </li>          
      </ul>
    </div>

    <!-- Add Education Modal -->
    <b-modal id="bv-modal-Edu" hide-footer>
    <template v-slot:modal-title>
      <div v-show="!updateMode">
        Tambahkan Pendidikan
      </div>
      <div v-show="updateMode">
        Ubah Pendidikan
      </div>
    </template>
      <div>
        <b-form @submit.prevent="updateMode ? updateData() : addData()">
          <b-form-group>
              <b-form-input
              id="form-input-addtitle"
              v-model="form.title"
              placeholder="Title"
              ></b-form-input>
          </b-form-group>

          <b-form-group>
              <b-form-input
              id="form-input-addlocation"
              v-model="form.location"
              placeholder="Tempat"
              ></b-form-input>
          </b-form-group>
          
          <b-form-group
          id="input-group-addentry"
          label="Tahun Masuk"
          label-for="input-addentry"
          >
            <b-form inline>
              <b-form-input
                id="inline-form-input-addentry"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Bulan"
                v-model="form.entryMonth"
              ></b-form-input>

              <b-form-input
                id="inline-form-input-addentry"
                class="mb-2 mr-sm-2 mb-sm-0"
                v-model="form.entryYear"
                placeholder="Tahun"
              ></b-form-input>
            </b-form>
          </b-form-group>

          <b-form-group
            id="input-group-addresign"
            label="Tahun Keluar"
            label-for="input-addresign"
          >
            <b-form inline>
              <b-form-input
                id="inline-form-input-addresign"
                class="mb-2 mr-sm-2 mb-sm-0"
                v-model="form.resignMonth"
                :disabled='isDisabled'
                placeholder="Bulan"
              ></b-form-input>

              <b-form-input
                id="inline-form-input-addresign"
                class="mb-2 mr-sm-2 mb-sm-0"
                v-model="form.resignYear"
                :disabled='isDisabled'
                placeholder="Tahun"
              ></b-form-input>
            </b-form>

            <b-form-checkbox
            id="checkbox"
            name="checkbox-1"
            v-model="check"
            >
            Saya masih studi disini
            </b-form-checkbox>
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
  name: 'myEducation',
  data() {
    return {
      education:[],
      
      updateMode:false,

      form: {
        id: '',
        uid: '',
        title: '',
        location: '',
        entryMonth: '',
        entryYear: '',
        resignMonth: '',
        resignYear: '',
        description: '',
      },

      check:false,
    }
  },
  methods: {
    addModal() {
      this.updateMode = false

      this.form.id = ''
      this.form.uid = ''
      this.form.title= ''
      this.form.location= ''
      this.form.entryMonth= ''
      this.form.entryYear= ''
      this.form.resignMonth= ''
      this.form.resignYear= ''
      this.form.description= ''

      this.$bvModal.show('bv-modal-Edu')
    },
    updateModal(myEducation) {
      this.updateMode = true

      this.form.id = ''
      this.form.title= ''
      this.form.location= ''
      this.form.entryMonth= ''
      this.form.entryYear= ''
      this.form.resignMonth= ''
      this.form.resignYear= ''
      this.form.description= ''

      this.$bvModal.show('bv-modal-Edu')

      this.form.id= myEducation.id
      this.form.title= myEducation.title
      this.form.location= myEducation.location
      this.form.entryMonth= myEducation.entryMonth
      this.form.entryYear= myEducation.entryYear
      this.form.resignMonth= myEducation.resignMonth
      this.form.resignYear= myEducation.resignYear
      this.form.description= myEducation.description
    },
    async getData() {
      let UID = firebase.default.auth().currentUser.uid
      if (UID){
        try{
          this.education=[]
          const docs = await firebase.default.firestore().collection('education').where('uid', '==', UID).get()

          docs.forEach(doc => {
            this.education.push({
              id: doc.id,
              uid: doc.data().uid,
              title: doc.data().title,
              location: doc.data().location,
              entryMonth: doc.data().entryMonth,
              entryYear: doc.data().entryYear,
              resignMonth: doc.data().resignMonth,
              resignYear: doc.data().resignYear,
              description: doc.data().description,
            })
            console.log('education => ', doc.data());
          })
          
        }
        catch (err) {
          console.log(err)
        }
      }
    },
    async addData() {
      let UID = firebase.default.auth().currentUser.uid
      // if (this.addPosition != '' && UID) {
      if (UID) {
        await firebase.default.firestore()
        .collection('education').add({
          uid: UID,
          title: this.form.title,
          location: this.form.location,
          entryMonth: this.form.entryMonth,
          entryYear: this.form.entryYear,
          resignMonth: this.form.resignMonth,
          resignYear: this.form.resignYear,
          description: this.form.description,
        })
        .then(() => {
          this.$bvModal.hide('bv-modal-Edu')
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
          .collection('education')
          .doc(this.form.id)
          .update({
            title: this.form.title,
            location: this.form.location,
            entryMonth: this.form.entryMonth,
            entryYear: this.form.entryYear,
            resignMonth: this.form.resignMonth,
            resignYear: this.form.resignYear,
            description: this.form.description,
          })
          this.$bvModal.hide('bv-modal-Edu')
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
        .collection('education')
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
  computed: {
    isDisabled() {
      return this.check;
    },
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pendidikan {
    ul {
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
    
        li::before {
            content: "";
            position: absolute;
            left: calc(-16px);
            width: 2px;
            height: calc(100% + 25px);
            background-color: #B982E8;
            margin-top: 15px;  
            overflow: hidden;
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
}

span{
  margin-right: 10px;
}
</style>