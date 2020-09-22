<template>
    <div class="container">
        <div v-for="jobCardDetails in jobCardDetail" v-bind:key="jobCardDetails.id" class="row jobstatus">
            <div class="col-2 mx-auto">
                <img class="card-profile-picture" src="../../assets/netzap-logo.png" alt="profile picture" width="80px">
            </div>

            <div class="col-8">
                <div class="jobCardDetail col-lg-12 text-left">
                    <h5>{{jobCardDetails.jobtitle}}</h5>
                    <p>{{jobCardDetails.company}}
                    </p>
                    <p>
                        {{jobCardDetails.location}}
                    </p>
                    <hr>
                    <p>{{"9 hours ago"}}</p>
                </div>
            </div>

            <div class="jobs-button col-2 mx-auto">
                <a href="/jobs/view" class="btn btn-block btn-jobs-avail px-4 mt-2 mr-4">Job Details</a>
                <a class="btn btn-block btn-jobs-status px-4 mt-2 mr-4">Edit</a>
            </div>
        </div>
    </div>  
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
    name: 'jobStatus',
    data: function() {
        return {
            jobCardDetail: []
            
        };  
    },
    methods: {
    async getData() {
      let UID = firebase.default.auth().currentUser.uid
      if (UID){
        try{
          this.jobCardDetail=[]
          const docs = await firebase.default.firestore().collection('jobs').where('uid', '==', UID).get()

          docs.forEach(doc => {
            this.jobCardDetail.push({
              id: doc.id,
              uid: doc.data().uid,
              company: doc.data().company,
              jobtitle: doc.data().jobtitle,
              location: doc.data().location,
            })
            console.log('job => ', doc.data());
          })
        }
        catch (err) {
          console.log(err)
        }
      }
    },
  },
  mounted() {
    this.getData();
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.jobstatus {
    padding-top: 30px;
    background-color: #E7E1E9;
    border-radius: 8px;
    margin-bottom: 30px;
    box-shadow: 5px 5px 2.5px 0px rgba(219,212,219,1);
    

    .card-profile-picture {
        border-radius: 100px;
        background-color: #fff;
    }

    .card-info {
        h5 {
            font-weight: bold;
        }
    }

    .btn {
        border-radius: 100px;
    }

    .btn-jobs-avail {
        background-color: #980DDC;
        color: #fff; 
        float: right;
        font-size: smaller;
    }

    .btn-jobs-status {
        background-color: #fff;
        color: #980DDC;
        border: 1px #980DDC;
        float: right;
        font-size: smaller;
    }
}
</style>