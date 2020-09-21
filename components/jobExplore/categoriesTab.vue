<template>
    <div class="categoriesTab d-flex row my-5">
        <div class="col-lg-12">
            <div class="nav flex-row nav-pills categories justify-content-center text-center" id="v-pills-tab" role="tablist" >
                <a class="nav-link active" id="v-pills-registered-tab" data-toggle="pill" href="#v-pills-registered" role="tab" aria-controls="v-pills-registered" aria-selected="true"> 
                    1500 <br> <span>Jobs Listed</span>
                </a>
                <a v-if="auth" class="nav-link" id="v-pills-saved-tab" data-toggle="pill" href="#v-pills-saved" role="tab" aria-controls="v-pills-saved" aria-selected="false">
                    5<br> <span>Saved Jobs</span>
                </a>
                <a v-if="auth" class="nav-link" id="v-pills-applicant-tab" data-toggle="pill" href="#v-pills-applicant" role="tab" aria-controls="v-pills-applicant" aria-selected="false">
                    5 <br> <span>Applications</span>
                </a>
            </div>
        </div>
    </div> 
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'categoriesTab',
  computed: {
    ...mapGetters(['auth'])
  },
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.categories {
    .nav-link[aria-selected="true"] {
        background-color: #fff;
        color: #A33DD4;
        border-bottom: 2px solid;
        border-radius: 0;
    }
}
</style>