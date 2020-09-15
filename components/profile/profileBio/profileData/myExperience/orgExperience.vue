<template>
  <div class="org_experience">
    <h5 class="section-header">Pengalaman Organisasi: <span><a href="#" @click="addModal()"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Pengalaman Organisasi</a></span></h5>
    <ul>
      <li v-for="myOrgExperience in org_experience" v-bind:key="myOrgExperience.id" class="myOrgExperience">
        <div class="position-relative" v-if="!myOrgExperience.work">
          <h4>{{myOrgExperience.position}}
            <span>
              <a href="#" @click="deleteData(myOrgExperience.id)"><i class="fa fa-trash red" aria-hidden="true"></i> Delete </a>
            </span>
            <span>
              <a href="#" @click="updateModal(myOrgExperience)"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a>
            </span>
          </h4>
          <h5>{{myOrgExperience.organization}}</h5>
          <h6>{{myOrgExperience.entryMonth}} {{myOrgExperience.entryYear}} - {{myOrgExperience.resignMonth}} {{myOrgExperience.resignYear}}</h6>
          <br>
          <p>
              {{myOrgExperience.description}}
          </p>
        </div>
      </li>
    </ul>

    <!-- Add Education Modal -->
    <b-modal id="bv-modal-OrgExp" hide-footer>
    <template v-slot:modal-title>
      <div v-show="!updateMode">
        Tambahkan Pengalaman Organisasi
      </div>
      <div v-show="updateMode">
        Ubah Pengalaman Organisasi
      </div>
    </template>
      <div>
        <b-form @submit.prevent="updateMode ? updateData() : addData()">
          <b-form-group>
              <b-form-input
              id="form-input-addorganization"
              v-model="form.organization"
              placeholder="Organisasi"
              ></b-form-input>
          </b-form-group>

          <b-form-group>
              <b-form-input
              id="form-input-addposition"
              v-model="form.position"
              placeholder="Posisi"
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
            Saya masih bekerja disini
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
  name: 'org_experience',
  data() {
    return {
      org_experience:[],
      updateMode:false,
      form: {
        id: '',
        uid: '',
        position: '',
        organization: '',
        entryMonth: '',
        entryYear: '',
        resignMonth: '',
        resignYear: '',
        description: '',
        work: false
      },

      check:false,
    }
  },
  methods: {
    addModal() {
      this.updateMode = false

      this.form.id = ''
      this.form.uid = ''
      this.form.position= ''
      this.form.organization= ''
      this.form.entryMonth= ''
      this.form.entryYear= ''
      this.form.resignMonth= ''
      this.form.resignYear= ''
      this.form.description= ''

      this.$bvModal.show('bv-modal-OrgExp')
    },
    updateModal(myExperience) {
      this.updateMode = true

      this.form.id = ''
      this.form.position= ''
      this.form.organization= ''
      this.form.entryMonth= ''
      this.form.entryYear= ''
      this.form.resignMonth= ''
      this.form.resignYear= ''
      this.form.description= ''

      this.$bvModal.show('bv-modal-OrgExp')

      this.form.id= myExperience.id
      this.form.position= myExperience.position
      this.form.organization= myExperience.organization
      this.form.entryMonth= myExperience.entryMonth
      this.form.entryYear= myExperience.entryYear
      this.form.resignMonth= myExperience.resignMonth
      this.form.resignYear= myExperience.resignYear
      this.form.description= myExperience.description
    },
    async getData() {
      let UID = firebase.default.auth().currentUser.uid
      if (UID){
        try{
          this.org_experience=[]
          const docs = await firebase.default.firestore().collection('experience').where('uid', '==', UID).get()

          docs.forEach(doc => {
            this.org_experience.push({
              id: doc.id,
              uid: doc.data().uid,
              position: doc.data().position,
              organization: doc.data().organization,
              entryMonth: doc.data().entryMonth,
              entryYear: doc.data().entryYear,
              resignMonth: doc.data().resignMonth,
              resignYear: doc.data().resignYear,
              description: doc.data().description,
              work: doc.data().work,
            })
            console.log('org_experience => ', doc.data());
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
        .collection('experience').add({
          uid: UID,
          position: this.form.position,
          organization: this.form.organization,
          entryMonth: this.form.entryMonth,
          entryYear: this.form.entryYear,
          resignMonth: this.form.resignMonth,
          resignYear: this.form.resignYear,
          description: this.form.description,
          work: this.form.work,
        })
        .then(() => {
          this.$bvModal.hide('bv-modal-OrgExp')
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
          .collection('experience')
          .doc(this.form.id)
          .update({
            position: this.form.position,
            organization: this.form.organization,
            entryMonth: this.form.entryMonth,
            entryYear: this.form.entryYear,
            resignMonth: this.form.resignMonth,
            resignYear: this.form.resignYear,
            description: this.form.description,
          })
          this.$bvModal.hide('bv-modal-OrgExp')
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
        .collection('experience')
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
span{
  margin-right: 10px;
}
</style>