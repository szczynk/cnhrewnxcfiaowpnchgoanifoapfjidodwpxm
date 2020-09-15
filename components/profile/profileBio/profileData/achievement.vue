<template>
    <div class="achievement tab-pane fade" id="v-pills-achievement" role="tabpanel" aria-labelledby="v-pills-achievement-tab">
        <div class="achievement-pane">
            <h5 class="section-header">Penghargaan: <span><a href="#" @click="addData()"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Penghargaan</a></span></h5>
            <ul>
                <li v-for="myAchievement in achievement" v-bind:key="myAchievement.id" class="myAchievement">
                    <div class="position-relative">
                        <h4>{{myAchievement.name}} <span><a href="#" @click="updateData(myAchievement.id)"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h4>
                        <h5>{{myAchievement.award}}</h5>
                        <h6>{{myAchievement.date}}</h6>
                        <br>
                        <p>
                            {{myAchievement.description}}
                        </p>
                    </div>
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
    name: 'achievement',
    data() {
        return {
            achievement:[]
        }
    },
    methods: {
        addData() {
            let UID = firebase.default.auth().currentUser.uid
            // if (name != '' && UID) {
                firebase.default.firestore()
                .collection('achievement').add({
                    // name: name,
                    // award: award,
                    // date: date,
                    // description: description,
                    uid: UID,
                    name: 'b',
                    award: 'b',
                    date: 'b',
                    description: 'b'
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
                this.achievement=[]
                firebase.default.firestore()
                .collection('achievement')
                .where('uid', '==', UID)
                .get()
                .then((snap) => {
                    snap.forEach((doc) => {
                        this.achievement.push({
                            id: doc.id,
                            uid: doc.data().uid,
                            name: doc.data().name,
                            award: doc.data().award,
                            date: doc.data().date,
                            description: doc.data().description
                        })
                        console.log(doc.id, " => ", doc.data());
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
                .collection('achievement')
                .doc(id)
                .update({
                    // name: name,
                    // award: award,
                    // date: date,
                    // description: description,
                    name: 'c',
                    award: 'c',
                    date: 'c',
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
            let UID = firebase.default.auth().currentUser.uid
            if (UID) {
                firebase.default.firestore()
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
</style>