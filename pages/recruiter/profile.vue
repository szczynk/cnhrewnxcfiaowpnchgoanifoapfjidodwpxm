<template>
  <div id="profile">
    <navbar/>
    <div class="container">
        <companiesProfileCard/>
        <companiesBio/>
    </div>
    <sectionFooter/>
  </div>
</template>

<script>
import navbar from '../../components/recruiter/navbar.vue'
import companiesProfileCard from '../../components/companies/companiesprofilecard'
import companiesBio from '../../components/companies/companiesBio'
import sectionFooter from '../../components/footer.vue'

export default {
  name: 'App',
  components: {
    navbar,
    companiesProfileCard,
    companiesBio,
    sectionFooter
  }
}
</script>

<style lang="scss">
    #app {
    @import url('https://fonts.googleapis.com/css2?family=Assistant:wght@200;300;400;600;700;800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
    font-family: 'Assistant', sans-serif;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    }

    .container {
        margin-top: 60px;
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

</style>
