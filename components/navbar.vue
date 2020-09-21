<template>
    <div class="navbar">
        <div class="container navbarContainer">
            <div class="col-lg-12">
                <nav class="navbar fixed-top navbar-expand-lg navbar-light justify-content-center">
                    <nuxt-link to="/home"  class="navbar-brand">
                        <img src="../assets/logo.png" alt="Logo-looker" width = "200">
                    </nuxt-link>

                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <template v-if="auth">
                    <div class="collapse navbar-collapse" id="navb">
                        <ul class="navbar-nav ml-auto mr-3">
                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Jobs</a>
                                <div class="dropdown-menu">
                                    <nuxt-link to="/jobs/explore#v-pills-registered" no-prefetch class="dropdown-item page-scroll">Find Job</nuxt-link>
                                    <nuxt-link to="/jobs/explore#v-pills-saved" no-prefetch class="dropdown-item page-scroll">Saved Job</nuxt-link>
                                    <nuxt-link to="/jobs/explore#v-pills-applicant" no-prefetch class="dropdown-item page-scroll">My Application</nuxt-link>
                                </div>
                            </li>

                            <li class="nav-item mx-md-2">
                                <nuxt-link to="/companies/explore" no-prefetch class="nav-link">Find Companies</nuxt-link>
                            </li>


                            <!--Desktop Version-->
                            <li class="nav-item dropdown mx-1 d-lg-block d-md-none d-sm-none d-none"> 
                                <a class="nav-link" href="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                    <i class="fa fa-envelope fa-fw"></i> <span class="badge badge-danger badge-counter">4</span> 
                                </a>
                                <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                                    <h6 class="dropdown-header"> Pesan </h6> 
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div class="dropdown-list-image mr-3"> <img class="rounded-circle">
                                            <div class="status-indicator bg-success"></div>
                                        </div>
                                        <div class="font-weight-bold">
                                            <div class="text-truncate">Thanks for your answer!</div>
                                            <div class="small text-gray-500">Andy flower · 8m</div>
                                        </div>
                                    </a> 
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div class="dropdown-list-image mr-3"> <img class="rounded-circle">
                                            <div class="status-indicator"></div>
                                        </div>
                                        <div>
                                            <div class="text-truncate">Can you answer bbb?</div>
                                            <div class="small text-gray-500">John wrong · 4h</div>
                                        </div>
                                    </a> 
                                    <a class="dropdown-item text-center small text-gray-500" href="#">Baca Semua Pesan</a>
                                </div>
                            </li>

                            <li class="nav-item dropdown mx-1 d-lg-block d-md-none d-sm-none d-none"> 
                                <a class="nav-link" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
                                    <i class="fa fa-bell fa-fw"></i> <span class="badge badge-danger badge-counter">2+</span> </a>
                                <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in">
                                    <h6 class="dropdown-header"> Pemberitahuan </h6> 
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div class="mr-3">
                                            <div class="icon-circle"> <i class="fa fa-file"></i> </div>
                                        </div>
                                        <div>
                                            <div class="small text-gray-500">July 26, 2020</div> <span class="font-weight-bold">Someone sent a job application</span>
                                        </div>
                                    </a> 
                                    <a class="dropdown-item d-flex align-items-center" href="#">
                                        <div class="mr-3">
                                            <div class="icon-circle"> <i class="fa fa-user"></i> </div>
                                        </div>
                                        <div>
                                            <div class="small text-gray-500">July 20, 2020</div> you updated your profile!
                                        </div>
                                    </a> 
                                    <a class="dropdown-item text-center small text-gray-500" href="#">Show All</a>
                                </div>
                            </li>

                            <li class="nav-item dropdown d-lg-block d-md-none d-sm-none d-none">
                                <a href="#" class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                                    <span>
                                        <b-img v-if="photo_url" class="prof-pic" :src="photo_url" width="28" height="28"></b-img>
                                        <b-img v-else class="prof-pic" src="../assets/profile-picture.jpg"  width="28" height="28"></b-img>
                                    </span> Hi, {{firstName}} 
                                </a>
                                
                                <div class="dropdown-menu">
                                    <nuxt-link to="/profile" class="dropdown-item page-scroll">My Profile</nuxt-link>
                                    <a class="dropdown-item page-scroll">My Applications</a>
                                    <a class="dropdown-item page-scroll">Account Settings</a>
                                    <a @click="signOut" class="dropdown-item">Logout</a>
                                </div>
                            </li>
                            <!--End of Desktop Version-->
                        </ul>
                    </div>
                    </template>

                    <template v-else>
                    <div class="collapse navbar-collapse" id="navb">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">Jobs</a>
                                <div class="dropdown-menu">
                                    <nuxt-link to="/jobs/explore#v-pills-registered" no-prefetch class="dropdown-item page-scroll">Find Job</nuxt-link>
                                    <!-- <nuxt-link to="/jobs/explore#v-pills-saved" no-prefetch class="dropdown-item page-scroll">Saved Job</nuxt-link>
                                    <nuxt-link to="/jobs/explore#v-pills-applicant" no-prefetch class="dropdown-item page-scroll">My Application</nuxt-link> -->
                                </div>
                            </li>

                            <li class="nav-item mx-md-2">
                                <nuxt-link to="/companies/explore" no-prefetch class="nav-link">Find Companies</nuxt-link>
                            </li>

                            <li class="nav-item mx-md-2">
                                <nuxt-link to="/login" no-prefetch class="nav-link"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</nuxt-link>
                            </li>
                            

                            <li class="nav-item mx-md-2">
                                <nuxt-link to="/register" no-prefetch class="nav-link"><i class="fa fa-user-plus" aria-hidden="true"></i> Register</nuxt-link>
                            </li> 
                        </ul>
                    </div>
                    </template>
                </nav>
            </div>
        </div>  
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      firstName: '',
      photo_url: ''
    }
  },
  computed: {
    ...mapGetters(['auth'])
  },

  // async created() {
  //   let user = this.$firebase.auth().currentUser
  //   if (user){
  //     try{
  //       const profile = await this.$firebase.firestore().collection('users').doc(user.uid).get()
  //       this.firstName = profile.data().firstName
  //       this.photo_url = profile.data().photo_url
  //     }
  //     catch (err) {
  //       console.log(err)
  //     }
  //   }
  // },
  methods: {
    async getData() {
      let user = this.$firebase.auth().currentUser
      if (user){
        try{
          const profile = await this.$firebase.firestore().collection('users').doc(user.uid).get()
          this.firstName = profile.data().firstName
          this.photo_url = profile.data().photo_url
        }
        catch (err) {
          console.log(err)
        }
      }
    },

    signOut() {
      try {
        this.$firebase.auth().signOut()
        this.$store.commit('setAuth', null)
        document.cookie = 'token=;expires=0;SameSite=Lax'
        this.$store.commit("modules/users/setUser", null)
        this.$router.replace({
          path: "/home",
          force: true
        })
      }
      
      catch(err) {
        console.log(err)
        alert(err);
      }
    }
  },
  
  mounted() {
    $(function () {
      $(document).scroll(function () {
        var $nav = $(".navbar-light");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });
    });
    this.getData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
   @import '/assets/component-styles/navbar.scss'
</style>