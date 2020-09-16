<template>
  <div class="certificate tab-pane fade" id="v-pills-certificate" role="tabpanel" aria-labelledby="v-pills-certificate-tab">
    <div class="certificate-pane">
      <h5 class="section-header">Sertifikasi: <span><a href="#" @click="addModal()"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Sertifikasi</a></span></h5>
      <ul>
        <li v-for="myCertificate in certificate" v-bind:key="myCertificate.id" class="myCertificate">
          <div class="position-relative">
            <h4>{{myCertificate.name}} 
              <span>
                <a href="#" @click="deleteData(myCertificate.id)"><i class="fa fa-trash red" aria-hidden="true"></i> Delete </a>
              </span>
              <span>
                <a href="#" @click="updateModal(myCertificate)"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a>
              </span>
            </h4>
            <h5>Published by: {{myCertificate.publisher}}</h5>
            <h6 v-if="myCertificate.ExpiryMonth !== ''"> Issued on {{myCertificate.IssueMonth}} {{myCertificate.IssueYear}} - Expired on {{myCertificate.ExpiryMonth}} {{myCertificate.ExpiryYear}}</h6>
            <h6 v-else>Issued on {{myCertificate.IssueMonth}} {{myCertificate.IssueYear}} - No Expiry Date</h6>
            <p>
                <a :href="myCertificate.credentialURL">Credential ID: {{myCertificate.credentialID}}</a>
            </p>
          </div>
        </li>
      </ul>
    </div>

    <!-- Add Education Modal -->
    <b-modal id="bv-modal-Certificate" hide-footer>
    <template v-slot:modal-title>
      <div v-show="!updateMode">
        Tambahkan Sertifikat
      </div>
      <div v-show="updateMode">
        Ubah Sertifikat
      </div>
    </template>
      <div>
        <b-form @submit.prevent="updateMode ? updateData() : addData()">
          <b-form-group>
              <b-form-input
              id="form-input-addname"
              v-model="form.name"
              placeholder="Nama Sertifikat"
              ></b-form-input>
          </b-form-group>

          <b-form-group>
              <b-form-input
              id="form-input-addpublisher"
              v-model="form.publisher"
              placeholder="Penerbit"
              ></b-form-input>
          </b-form-group>
          
          <b-form-group
          id="input-group-addIssue"
          label="Tanggal Rilis"
          label-for="input-addIssue"
          >
            <b-form inline>
              <b-form-input
                id="inline-form-input-addIssue"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Bulan"
                v-model="form.IssueMonth"
              ></b-form-input>

              <b-form-input
                id="inline-form-input-addIssue"
                class="mb-2 mr-sm-2 mb-sm-0"
                v-model="form.IssueYear"
                placeholder="Tahun"
              ></b-form-input>
            </b-form>
          </b-form-group>

          <b-form-group
            id="input-group-addExpiry"
            label="Tanggal Habis"
            label-for="input-addExpiry"
          >
            <b-form inline>
              <b-form-input
                id="inline-form-input-addExpiry"
                class="mb-2 mr-sm-2 mb-sm-0"
                v-model="form.ExpiryMonth"
                :disabled='isDisabled'
                placeholder="Bulan"
              ></b-form-input>

              <b-form-input
                id="inline-form-input-addExpiry"
                class="mb-2 mr-sm-2 mb-sm-0"
                v-model="form.ExpiryYear"
                :disabled='isDisabled'
                placeholder="Tahun"
              ></b-form-input>
            </b-form>

            <b-form-checkbox
            id="checkbox"
            name="checkbox-1"
            v-model="check"
            >
            Sertifikat ini tidak kedaluwarsa
            </b-form-checkbox>
          </b-form-group>

          <b-form-group
            id="input-group-addcredentialID"
            label="Nomor Sertifikat"
            label-for="input-addcredentialID"
          >
              <b-form-input
              id="form-input-addcredentialID"
              v-model="form.credentialID"
              placeholder="Nomor Sertifikat"
              ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-addcredentialURL"
            label="Credential URL"
            label-for="input-addcredentialURL"
          >
              <b-form-input
              id="form-input-addcredentialURL"
              v-model="form.credentialURL"
              placeholder="Credential URL"
              ></b-form-input>
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
  name: 'certificate',
  data() {
      return {
        certificate:[],
        
        updateMode:false,

        form: {
          id: '',
          uid: '',
          position: '',
          company: '',
          IssueMonth: '',
          IssueYear: '',
          ExpiryMonth: '',
          ExpiryYear: '',
          credentialID: '',
          credentialURL: '',
        },

        check:false,
      }
  },
  methods: {
    addModal() {
      this.updateMode = false

      this.form.id = ''
      this.form.uid = ''
      this.form.publisher= ''
      this.form.name= ''
      this.form.IssueMonth= ''
      this.form.IssueYear= ''
      this.form.ExpiryMonth= ''
      this.form.ExpiryYear= ''
      this.form.credentialID= ''
      this.form.credentialURL= ''

      this.$bvModal.show('bv-modal-Certificate')
    },
    updateModal(myCertificate) {
      this.updateMode = true

      this.form.id = ''
      this.form.publisher= ''
      this.form.name= ''
      this.form.IssueMonth= ''
      this.form.IssueYear= ''
      this.form.ExpiryMonth= ''
      this.form.ExpiryYear= ''
      this.form.credentialID= ''
      this.form.credentialURL= ''

      this.$bvModal.show('bv-modal-Certificate')

      this.form.id= myCertificate.id
      this.form.publisher= myCertificate.publisher
      this.form.name= myCertificate.name
      this.form.IssueMonth= myCertificate.IssueMonth
      this.form.IssueYear= myCertificate.IssueYear
      this.form.ExpiryMonth= myCertificate.ExpiryMonth
      this.form.ExpiryYear= myCertificate.ExpiryYear
      this.form.credentialID= myCertificate.credentialID
      this.form.credentialURL= myCertificate.credentialURL
    },
    async getData() {
      let UID = firebase.default.auth().currentUser.uid
      if (UID){
        try{
          this.certificate=[]
          const docs = await firebase.default.firestore().collection('certificate').where('uid', '==', UID).get()

          docs.forEach(doc => {
            this.certificate.push({
              id: doc.id,
              uid: doc.data().uid,
              publisher: doc.data().publisher,
              name: doc.data().name,
              IssueMonth: doc.data().IssueMonth,
              IssueYear: doc.data().IssueYear,
              ExpiryMonth: doc.data().ExpiryMonth,
              ExpiryYear: doc.data().ExpiryYear,
              credentialID: doc.data().credentialID,
              credentialURL: doc.data().credentialURL,
            })
            console.log('certificate => ', doc.data());
          })
        }
        catch (err) {
          console.log(err)
        }
      }
    },
    async addData() {
      let UID = firebase.default.auth().currentUser.uid
      // if (this.addpublisher != '' && UID) {
      if (UID) {
        await firebase.default.firestore()
        .collection('certificate').add({
          uid: UID,
          publisher: this.form.publisher,
          name: this.form.name,
          IssueMonth: this.form.IssueMonth,
          IssueYear: this.form.IssueYear,
          ExpiryMonth: this.form.ExpiryMonth,
          ExpiryYear: this.form.ExpiryYear,
          credentialID: this.form.credentialID,
          credentialURL: this.form.credentialURL,
        })
        .then(() => {
          this.$bvModal.hide('bv-modal-Certificate')
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
          .collection('certificate')
          .doc(this.form.id)
          .update({
            publisher: this.form.publisher,
            name: this.form.name,
            IssueMonth: this.form.IssueMonth,
            IssueYear: this.form.IssueYear,
            ExpiryMonth: this.form.ExpiryMonth,
            ExpiryYear: this.form.ExpiryYear,
            credentialID: this.form.credentialID,
            credentialURL: this.form.credentialURL,
          })
          this.$bvModal.hide('bv-modal-Certificate')
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
        .collection('certificate')
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
.certificate {

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