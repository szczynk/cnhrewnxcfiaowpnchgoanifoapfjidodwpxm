<template>
    <div class="skill tab-pane fade" id="v-pills-skill" role="tabpanel" aria-labelledby="v-pills-skill-tab">
        <div class="skill-pane">
            <h5 class="section-header">Endorsed Skill: <span><a href="#" @click="addData()"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Skill</a></span></h5>
            <ul>
                <li v-for="mySkill in skill" v-bind:key="mySkill.id" class="d-inline">
                    {{mySkill.name}}  <a href="#" @click="deleteData(mySkill.id)"><i class="fa fa-times" aria-hidden="true"></i></a>
                </li>
            </ul>
        </div>
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
            skill:[]
        }
    },
    methods: {
        addData() {
            let UID = firebase.default.auth().currentUser.uid
            // if (name != '' && UID) {
                firebase.default.firestore()
                .collection('skill').add({
                    // name: name,
                    uid: UID,
                    name: 'b',
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
                this.skill=[]
                firebase.default.firestore()
                .collection('skill').get()
                .then((snap) => {
                    snap.forEach((doc) => {
                        this.skill.push({
                            id: doc.id,
                            uid: doc.data().uid,
                            name: doc.data().name,
                        })
                        console.log(doc.id, " => ", doc.data());
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
            }
        },
        deleteData(id) {
            let UID = firebase.default.auth().currentUser.uid
            if (UID) {
                firebase.default.firestore()
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
        padding: 6px;
        padding-left: 6px;
        padding-right: 6px;
        border-radius: 30px;
        color: #fff;
        background-color: #B982E8;
    }
}
</style>