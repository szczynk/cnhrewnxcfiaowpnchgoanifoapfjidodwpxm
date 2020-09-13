<template>
  <div id="app">
    <navbar/>
    <div class="row register-form">
        <div class="col"></div>
        <div class="col-lg-4 justify-content-center">
            <form class="border border-light p-5" @submit.prevent="userSignUp">
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
            
                <button class="btn btn-info btn-block my-4" type="submit">Sign Up</button>
                <p class="text-center">or </p>
                <button class="btn btn-google btn-block my-4" type="submit" @click="userSignUpGoogle"><i class="fa fa-google"></i> Sign up with <b>Google</b></button>
                
                <div class="text-center">
                    <p>Already Registered?
                        <a href="/login">Login</a>
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
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

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
  methods: {
    userSignUp(err) {
      this.$store
        .dispatch("signUp", {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.firstName = "";
          this.lastName = "";
          this.email = "";
          this.password = "";
          //if you wanted to redirect after sign in you'd do that here with this.$router.push('/pagename')
          this.$router.push('/profile')
        })
        .catch(err => {
          alert(err.message);
        });
    },
    async userSignUpGoogle() {
      const provider = new firebase.default.auth.GoogleAuthProvider()
      try {
        let {user} = await firebase.default.auth().signInWithPopup(provider)
        console.log(user.uid)

        await firebase.default.firestore().collection('users').doc(user.uid).set({
          id: user.uid,
          photo_url: user.photoURL,
          firstName: user.displayName.split(" ")[0],
          lastName: user.displayName.split(" ")[1],
          city: '',
          latest_jobplace: '',
          latest_jobtitle: '',
          phone_number: '',
          email: user.email,
          about_me: '',
          video_url: ''
        })

        this.$store.dispatch("fetchUserTab", user)
        this.$router.push('/profile')
      }
      catch (err) {
        alert(err.message);
        console.log(err.message)
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
