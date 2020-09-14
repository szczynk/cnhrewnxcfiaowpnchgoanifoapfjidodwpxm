<template>
    <div class="myEducation tab-pane fade" id="v-pills-edu" role="tabpanel" aria-labelledby="v-pills-edu-tab">
        <div class="pendidikan">
            <h5 class="section-header">Riwayat Pendidikan: <span><a href="#" @click="addData()"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Riwayat Pendidikan</a></span></h5>
            <ul>
                <li v-for="myEducation in education" v-bind:key="myEducation.id" class="education">
                    <div class="position-relative">
                        <h4>{{myEducation.name}}<span><a href="#" @click="updateData(myEducation.id)"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h4>
                        <h5>{{myEducation.company}}</h5>
                        <h6>{{myEducation.date}} ({{myEducation.duration}})</h6>
                        <br>
                        <p>
                            {{myEducation.description}}
                        </p>
                    </div>
                </li>          
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'myEducation',
    data() {
        return {
            education:[]
        }
    },
    methods: {
        addData() {
            // if (name != '' && firebase.default.auth().currentUser.uid) {
                firebase.default.firestore()
                .collection('education').add({
                    // name: name,
                    // company: company,
                    // date: date,
                    // duration: duration,
                    // description: description,
                    uid: firebase.default.auth().currentUser.uid,
                    name: 'b',
                    company: 'b',
                    date: 'b',
                    duration: 'b',
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
            if (firebase.default.auth().currentUser.uid) {
                this.education=[]
                firebase.default.firestore()
                .collection('education').get()
                .then((snap) => {
                    snap.forEach((doc) => {
                        this.education.push({
                            id: doc.id,
                            uid: doc.data().uid,
                            name: doc.data().name,
                            company: doc.data().company,
                            date: doc.data().date,
                            duration: doc.data().duration,
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
            if (firebase.default.auth().currentUser.uid) {
                firebase.default.firestore()
                .collection('education')
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
</style>