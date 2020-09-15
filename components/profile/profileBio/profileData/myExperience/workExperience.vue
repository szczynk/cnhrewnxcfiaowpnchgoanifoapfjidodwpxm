<template>
    <div class="workExperience">
        <h5 class="section-header">Pengalaman Kerja: <span><a href="#" @click="addData()"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Pengalaman Kerja</a></span></h5>
        <ul> 
            <li v-for="myExperience in work_experience" v-bind:key="myExperience.id" class="work_experience">
                <div class="position-relative" v-if="myExperience.work">
                    <h4> {{myExperience.name}} <span><a href="#" @click="updateData(myExperience.id)"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h4>
                    <h5> {{myExperience.company}}</h5>
                    <h6> {{myExperience.date}} ({{myExperience.duration}})</h6>
                    <br>
                    <p>{{myExperience.description}}</p>
                </div>
            </li>
        </ul>                 
    </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
    name: 'workExperience',
    data() {
        return {
            work_experience:[]
        }
    },
    methods: {
        addData() {
            let UID = firebase.default.auth().currentUser.uid
            // if (name != '' && UID) {
                firebase.default.firestore()
                .collection('experience').add({
                    // name: name,
                    // company: company,
                    // date: date,
                    // duration: duration,
                    // description: description,
                    uid: UID,
                    name: 'b',
                    company: 'b',
                    date: 'b',
                    duration: 'b',
                    description: 'b',
                    work: true
                })
                .then(() => {
                    this.getData()
                })
                .catch((err) => {
                    console.log(err)
                })
            // }
        },
        getData() {
            let UID = firebase.default.auth().currentUser.uid
            if (UID) {
                this.work_experience=[]
                firebase.default.firestore()
                .collection('experience')
                .where('uid', '==', UID)
                .get()
                .then((snap) => {
                    snap.forEach((doc) => {
                        this.work_experience.push({
                            id: doc.id,
                            uid: doc.data().uid,
                            name: doc.data().name,
                            company: doc.data().company,
                            date: doc.data().date,
                            duration: doc.data().duration,
                            description: doc.data().description,
                            work: doc.data().work,
                        })
                        console.log('work_experience', doc.data().uid, " => ", doc.id, " => ", doc.data().name);
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        },
        updateData(id) {
            let UID = firebase.default.auth().currentUser.uid
            if (UID) {
                firebase.default.firestore()
                .collection('experience')
                .doc(id)
                .update({
                    // name: name,
                    // company: company,
                    // date: date,
                    // duration: duration,
                    // description: description,
                    name: 'c',
                    company: 'c',
                    date: 'c',
                    duration: 'c',
                    description: 'c',
                })
                .then(() => {
                    this.getData()
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        },
        deleteData(id) {
            if (firebase.default.auth().currentUser.uid) {
                firebase.default.firestore()
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
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>