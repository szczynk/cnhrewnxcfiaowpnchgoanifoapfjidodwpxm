<template>
  <div class="profileCard text-center" width="100%"> 
    <img class="card-profile-picture" src="../../assets/profile-picture.jpg" alt="profile picture" width="125px">
    <div class="card-body">
      <h3> {{firstName}} {{lastName}}  </h3>
      <p>
          <i class="fa fa-map-marker"></i> 
          <span itemprop="addressRegion">{{location}}</span>
      </p>  
      <p itemprop="jobTitle">
          <i class="fa fa-suitcase"></i>
          {{title}}
      </p>
      <p>
          <i class="fa fa-phone"></i>
          <span itemprop="phone-number">
              {{phone}}
          </span>
      </p>                
      <p itemprop="company-email"> 
          <i class="fa fa-envelope-o"></i> 
          <a href="#">{{email}}</a> 
      </p>
      <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile">
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'profileCard',
  computed: {
    ...mapState(['user'])
  },
  data: function(){
    return {
      firstName: 'M Ilham',
      lastName: 'Fauzi',
      location: 'Jakarta Indonesia',
      title: 'Fresh Graduate Academy - Machine Learning Trainee (2019)',
      phone: '+6281573279141',
      email: 'm.ilhamfz02@gmail.com'
    };
  },

  
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '/assets/component-styles/profileCard.scss'
</style>