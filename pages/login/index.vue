<template>
  <div id="app">
    <navbar/>
    <div class="row login-form">
        <div class="col"></div>
        <div class="col-lg-4 justify-content-center">
            <form class="border border-light p-5" @submit.prevent>
                <p class="h4 mb-4 text-center">READY TO GET HIRED <br>
                    BY THE BEST COMPANY?</p>
                <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail" v-model="email">
                <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" v-model="password">
                <div class="d-flex justify-content-between">
                    <div>
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                            <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                        </div>
                    </div>
                    <div>
                        <a href="">Forgot password?</a>
                    </div>
                </div>
            
                <button class="btn btn-info btn-block my-4" type="submit" @click="userSignIn" >Sign in</button>
                <p class="text-center">or sign in with:</p>
                <button class="btn btn-google btn-block my-4" type="submit" @click="userSignInGoogle"><i class="fa fa-google"></i> Sign in with <b>Google</b></button>
            
                <div class="text-center">
                    <p>Not a member?
                        <a href="/register">Register</a>
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

export default {
  name: 'App',
  components: {
    navbar,
    sectionFooter
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    userSignIn(err) {
      this.$store.dispatch("signInWithEmail",{
        email: this.email,
        password: this.password
      })
      .then(() => {
        this.email = "";
        this.password = "";
        //if you wanted to redirect after sign in you'd do that here with 
        this.$router.push('/home')
      })
      .catch(err => {
        alert(err.message);
      });
    },
    async userSignInGoogle() {
      const provider = new firebase.default.auth.GoogleAuthProvider()
      try {
        var user = await firebase.default.auth().signInWithPopup(provider)
        console.log('sign in',user)
        this.$store.dispatch("fetchUserTab", user)
        this.$router.push('/home')
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
.login-form {
    margin-top: 100px;
}

.navbar-light { 
  border-bottom: 1px solid #B982E8 !important;

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
