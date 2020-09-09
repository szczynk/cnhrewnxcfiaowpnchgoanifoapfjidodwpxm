<template>
  <div id="app">
    <navbar/>
    <div class="row login-form">    
        <div class="col"></div>
        <div class="col-lg-4 justify-content-center">
            <form class="border border-light p-5">
                <p class="header-title h4 mb-4 text-center">READY TO HIRE <br>
                    THE BEST CANDIDATES?</p>
                <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="Work e-mail Address">
                <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">
                <div class="d-flex justify-content-between">
                    <div>
                        <div class="custom-control custom-checkbox">
                            <input class="custom-control-input" type="checkbox"  id="defaultLoginFormRemember">
                            <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                        </div>
                    </div>
                    <div>
                        <a class= "forgot-pass" href="#">Forgot password?</a>
                    </div>
                </div>
            
                <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>
                <div class="text-center">
                    <p>Not a member?
                        <a href="register.html">Register</a>
                    </p>
                </div>
            </form>
        </div>
        <div class="col"></div>
    </div>
    
  </div>
</template>

<script>
import navbar from '../../components/recruiter/navbar.vue'


export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style lang="scss">
.login-form {
    margin-top: 100px;
}

.navbar-light { 
  border-bottom: 1px solid #B982E8 !important;
  color: #2c3e50 !important;

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
