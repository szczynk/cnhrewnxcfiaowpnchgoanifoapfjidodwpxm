<template>
    <div class="aboutMe tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
       <h5 class="section-header">Tentang Saya: <span><a href="#"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h5>
        <p>
        {{about_me}}
        </p>         
    </div>
</template>

<script>
export default {
  name: 'aboutMe',
  data() {
    return {
      about_me: ''
    }
  },
  methods: {
    async getData() {
      let user = this.$firebase.auth().currentUser
      if (user){
        try{
          const profile = await this.$firebase.firestore().collection('users').doc(user.uid).get()
          this.about_me = profile.data().about_me
        }
        catch (err) {
          console.log(err)
        }
      }
    },
  },
  mounted() {
    this.getData();
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.categories {
    margin-bottom: 30px; 
    
    .nav-link[aria-selected="true"] {
        background-color: #A33DD4;
    }
}
</style>