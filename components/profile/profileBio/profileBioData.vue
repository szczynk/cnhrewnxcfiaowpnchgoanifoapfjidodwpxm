<template>
    <div class="categoriesPill col-lg-9">
        <div class="my-data tab-content" id="v-pills-tabContent">
            <aboutMe/>
            <myExperience/>
            <myEducation/>
            <skill/>
            <certificate/>
            <achievement/>
            <portofolio/>
        </div>
    </div>
</template>

<script>
import aboutMe from './profileData/aboutMe.vue'
import myExperience from './profileData/myExperience.vue'
import myEducation from './profileData/myEducation.vue'
import skill from './profileData/skill.vue'
import certificate from './profileData/certificate.vue'
import achievement from './profileData/achievement.vue'
import portofolio from './profileData/portofolio'

export default {
  name: 'profileBioData',
  components: {
    aboutMe,
    myExperience,
    myEducation,
    skill,
    certificate,
    achievement,
    portofolio
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.my-data {
    height: calc(50%);
    h5 {
        font-weight: bold;
        font-size: larger;
        padding-bottom: 12px;
        border-bottom: 1px solid;
    }

    span {
        float: right;
        text-decoration: none;
        
        font-size: medium;

        a {
            color: #B982E8;
        }
    }
}

</style>