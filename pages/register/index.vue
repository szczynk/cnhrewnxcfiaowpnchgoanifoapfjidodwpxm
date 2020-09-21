<template>
  <div id="app">
    <navbar/>
    <div class="row register-form">
        <div class="col"></div>
        <div class="col-lg-4 justify-content-center">
            <form class="border border-light p-5" @submit.prevent>
                <p class="h4 mb-4 text-center">START YOUR<br>
                    CAREER'S JOURNEY</p>
        
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control mb-4" placeholder="First name" v-model="firstName">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control mb-4" placeholder="Last name" v-model="lastName">
                    </div>
                </div>
                <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail Address" v-model="email">
                <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" v-model="password">

                <div class="d-flex justify-content-center">
                        
                    <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox"  id="defaultLoginFormRemember">
                        <label class="custom-control-label" for="defaultLoginFormRemember">I agree to Lookerku's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</label>
                    </div>
                
                </div>
            
                <button class="btn btn-info btn-block my-4" type="submit" @click="userSignUp">Sign Up</button>
                <p class="text-center">or </p>
                <button class="btn btn-google btn-block my-4" type="submit" @click="userSignUpGoogle"><i class="fa fa-google"></i> Sign up with <b>Google</b></button>
                
                <div class="text-center">
                    <p>Already Registered?
                        <nuxt-link to="/login">Login</nuxt-link>
                    </p>
                </div>
            </form>
        </div>
        <div class="col"></div>
    </div>
    <sectionFooter/>
  </div>
</template>

<script>
import navbar from '../../components/navbar.vue'
import sectionFooter from '../../components/footer.vue'
import { mapGetters } from 'vuex'


export default {
  name: 'App',
  components: {
    navbar,
    sectionFooter
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(['auth'])
  },
  watch: {
    auth (value) {
      if (value) {
        this.$router.push({
          path: '/home'
        })
      }
    }
  },
  methods: {
    async userSignUp() {
      try {
        const userCredential = await this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        const user = userCredential.user
        await this.$firebase.firestore().collection('users').doc(user.uid).set({
          id: user.uid,
          photo_url: '',
          firstName: this.firstName,
          lastName: this.lastName,
          city: '',
          latest_jobplace: '',
          latest_jobtitle: '',
          phone_number: '',
          email: user.email,
          about_me: '',
          video_url: '',
        })
      }
      catch (err) {
        alert(err);
        console.log(err)
      } 
    },

    async userSignUpGoogle() {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      try {
        const userCredential = await this.$firebase.auth().signInWithPopup(provider)
        const user = userCredential.user
        await this.$firebase.firestore().collection('users').doc(user.uid).set({
          uid: user.uid,
          photo_url: user.photoURL,
          firstName: user.displayName.split(" ")[0],
          lastName: user.displayName.split(" ")[1],
          city: '',
          latest_jobplace: '',
          latest_jobtitle: '',
          phone_number: '',
          email: user.email,
          about_me: '',
          video_url: '',
          role: 'user',
          status: 'unemployed'
        })
        console.log('sign up',user)
      }
      catch (err) {
        alert(err);
        console.log(err)
      }
    }
  }
}
</script>

<style lang="scss">
.register-form {
    margin-top: 100px;
}
.navbar-light { 
  border-bottom: 1px solid #B982E8;

  .navbar-nav {
    .nav-link {
      color: #2c3e50 !important;
      font-size: 1rem;
      
      &:hover {
        font-weight: bold;
      }
    }
  }
}

.navbar-light.scrolled {
  border-bottom: none;

  .navbar-nav {
    .nav-link {
      color: #fff !important;
      
      &:hover {
        font-weight: bold;
      }
    }
  }
}

@import '/assets/component-styles/login & register.scss'
</style>
