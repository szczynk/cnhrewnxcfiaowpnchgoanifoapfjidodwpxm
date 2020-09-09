<template>
  <div id="profile">
    <navbar/>
    <jobSearchbar/>
    <div class="container">
        <div class="d-flex row my-5">
           <div class="col-lg-12">
               <div class="nav flex-row nav-pills categories justify-content-center text-center" id="v-pills-tab" role="tablist" >
                   <a class="nav-link active" id="v-pills-registered-tab" data-toggle="pill" href="#v-pills-registered" role="tab" aria-controls="v-pills-registered" aria-selected="true"> 
                       201 <br> <span>Companies Registered</span>
                   </a>
               </div>
           </div>
        </div>
        <companiesCard/>
    </div>
    <sectionFooter/>
  </div>
</template>

<script>
import navbar from '../../components/navbar.vue'
import jobSearchbar from '../../components/jobExplore/jobSearchbar'
import companiesCard from '../../components/companies/companiescard'
import sectionFooter from '../../components/footer.vue'

export default {
  name: 'App',
  components: {
    navbar,
    jobSearchbar,
    companiesCard,
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

.jobSearchbar {
  margin-top: 80px;
}

.container {
    .nav-link[aria-selected="true"] {
        background-color: #fff;
        color: #A33DD4;
        border-bottom: 2px solid;
        border-radius: 0;
    }
}

</style>
