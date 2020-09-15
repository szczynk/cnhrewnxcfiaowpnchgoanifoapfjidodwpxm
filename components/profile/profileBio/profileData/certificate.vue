<template>
    <div class="certificate tab-pane fade" id="v-pills-certificate" role="tabpanel" aria-labelledby="v-pills-certificate-tab">
        <div class="certificate-pane">
            <h5 class="section-header">Sertifikasi: <span><a href="#" @click="addData()"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Sertifikasi</a></span></h5>
            <ul>
                <li v-for="myCertificate in certificate" v-bind:key="myCertificate.id" class="myCertificate">
                    <div class="position-relative">
                        <h4>{{myCertificate.name}} <span><a href="#" @click="updateData(myCertificate.id)"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h4>
                        <h5>Published by: {{myCertificate.publisher}}</h5>
                        <h6 v-if="myCertificate.ExpiryDate !== null">Issued on {{myCertificate.IssueDate}} - Expired on {{myCertificate.ExpiryDate}}</h6>
                        <h6 v-else>Issued on {{myCertificate.IssueDate}} - No Expiry Date</h6>
                        <p>
                            <a href="#">Credential ID: {{myCertificate.credentialID}}</a>
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
    name: 'certificate',
    data() {
        return {
            certificate:[]
        }
    },
    methods: {
        addData() {
            let UID = firebase.default.auth().currentUser.uid
            // if (name != '' && UID) {
                firebase.default.firestore()
                .collection('certificate').add({
                    // name: name,
                    // publisher: publisher,
                    // IssueDate: IssueDate,
                    // ExpiryDate: ExpiryDate,
                    // credentialID: credentialID,
                    uid: UID,
                    name: 'b',
                    publisher: 'b',
                    IssueDate: 'b',
                    ExpiryDate: 'b',
                    credentialID: 'b'
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
                this.certificate=[]
                firebase.default.firestore()
                .collection('certificate')
                .where('uid', '==', UID)
                .get()
                .then((snap) => {
                    snap.forEach((doc) => {
                        this.certificate.push({
                            id: doc.id,
                            uid: doc.data().uid,
                            name: doc.data().name,
                            publisher: doc.data().publisher,
                            IssueDate: doc.data().IssueDate,
                            ExpiryDate: doc.data().ExpiryDate,
                            credentialID: doc.data().credentialID
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
                .collection('certificate')
                .doc(id)
                .update({
                    // name: name,
                    // publisher: publisher,
                    // IssueDate: IssueDate,
                    // ExpiryDate: ExpiryDate,
                    // credentialID: credentialID,
                    name: 'c',
                    publisher: 'c',
                    IssueDate: 'c',
                    ExpiryDate: 'b',
                    credentialID: 'c',
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
</style>