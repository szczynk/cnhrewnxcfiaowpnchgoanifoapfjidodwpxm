<template>
  <div class="skill tab-pane fade" id="v-pills-skill" role="tabpanel" aria-labelledby="v-pills-skill-tab">
    <div class="skill-pane">
      <h5 class="section-header">Endorsed Skill: <span><a href="#" @click="addModal()"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Skill</a></span></h5>
      <ul>
        <li v-for="mySkill in skill" v-bind:key="mySkill.id" class="d-inline">
          {{mySkill.name}}  
          <a href="#" @click="deleteData(mySkill.id)"><i class="fa fa-times" aria-hidden="true"></i></a>
        </li>
      </ul>
    </div>

    <!-- Add Education Modal -->
    <b-modal id="bv-modal-Skill" hide-footer>
    <template v-slot:modal-title>
        Tambahkan Keahlian
    </template>
      <div>
        <b-form @submit.prevent="addData()">
          <b-form-group>
              <b-form-input
              id="form-input-addcompany"
              v-model="form.name"
              placeholder="Keahlian"
              ></b-form-input>
          </b-form-group>

        <b-button type="submit" class="mt-3" block>Tambah</b-button>  
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
  name: 'skill',
  data() {
    return {
      skill:[],
      form: {
        id: '',
        uid: '',
        name: '',
      },
    }
  },
  methods: {
    addModal() {
      this.form.id = ''
      this.form.uid = ''
      this.form.name= ''

      this.$bvModal.show('bv-modal-Skill')
    },
    async getData() {
      let UID = firebase.default.auth().currentUser.uid
      if (UID){
        try{
          this.skill=[]
          const docs = await firebase.default.firestore().collection('skill').where('uid', '==', UID).get()

          docs.forEach(doc => {
            this.skill.push({
              id: doc.id,
              uid: doc.data().uid,
              name: doc.data().name,
            })
            console.log('skill => ', doc.data());
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
        .collection('skill').add({
          uid: UID,
          name: this.form.name,
        })
        .then(() => {
          this.$bvModal.hide('bv-modal-Skill')
          this.getData()
        })
        .catch((err) => {
          console.log(err)
        })
      }
    },
    async deleteData(id) {
      if (firebase.default.auth().currentUser.uid) {
        await firebase.default.firestore()
        .collection('skill')
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
.skill {
    .section-header {
        margin-bottom: 24px;
    }

    li {
        margin-right: 6px;
        margin-left: 6px;
        padding: 6px;
        padding-left: 6px;
        padding-right: 6px;
        border-radius: 30px;
        color: #fff;
        background-color: #B982E8;
    }
}
a {
  margin-right: 6px;
  margin-left: 6px;
}
</style>