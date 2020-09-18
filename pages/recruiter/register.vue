<template>
  <div id="app">
    <navbar/>
    <div class="row register-form">
        <div class="col"></div>
        <div class="col-lg-4">
            <form class="border border-light p-5" @submit.prevent>
                <p class="header-title h4 mb-4 text-center">TELL US ABOUT<br>
                    YOUR COMPANY'S STORY</p>
        
                <div class="row">
                    <div class="col">
                        <input type="text" class="form-control mb-4" placeholder="First name" v-model="firstName">
                    </div>
                    <div class="col">
                        <input type="text" class="form-control mb-4" placeholder="Last name" v-model="lastName">
                    </div>
                </div>
                <input type="text" class="form-control mb-4" placeholder="Company" v-model="company">
                <input type="text" class="form-control mb-4" placeholder="Official Job Title" v-model="industry">
                <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Work E-mail Address" v-model="email">
                <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password" v-model="password">
                
                <div class="d-flex justify-content-center">
                    
                    <div class="custom-control custom-checkbox">
                        <input class="custom-control-input" type="checkbox"  id="defaultLoginFormRemember">
                        <label class="custom-control-label text-left" for="defaultLoginFormRemember">I confirm I represent HR, Recruiting, Marketing, PR, or am an executive <br>
                            at my company and I agree to Lookerku's <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a> <br>
                            on behalf of my company.</label>
                    </div>
                
                </div>
            
                <button class="btn btn-info btn-block my-4" type="submit" @click="recruiterSignUp()">Sign Up</button>
                <div class="text-center">
                    <p>Already Registered?
                        <a href="/recruiter/login">Login</a>
                    </p>
                </div>
            </form>
        </div>
        <div class="col"></div>
    </div>
  </div>
</template>

<script>
import navbar from '../../components/navbar.vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export default {
  name: 'App',
  components: {
    navbar
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      company: "",
      industry: "",
      email: "",
      password: ""
    };
  },
  methods: {
    async recruiterSignUp() {
      this.$store
        .dispatch("signUpRecruiter", {
          firstName: this.firstName,
          lastName: this.lastName,
          company: this.company,
          industry: this.industry,
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.firstName = "";
          this.lastName = "";
          this.company = "";
          this.industry = "";
          this.email = "";
          this.password = "";
          //if you wanted to redirect after sign in you'd do that here with this.$router.push('/pagename')
          this.$router.push('/recruiter')
        })
        .catch(err => {
          alert(err.message);
        });
    },
  }

}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50 !important;
}

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
