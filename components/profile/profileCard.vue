<template>
  <div class="profileCard text-center" width="100%"> 
    <img v-if="user.photo_url" class="card-profile-picture" :src="user.photo_url" alt="profile picture" width="125px">
    <div class="card-body">
      <h3> {{user.firstName}} {{user.lastName}}  </h3>
      <p>
          <i class="fa fa-map-marker"></i> 
          <span itemprop="addressRegion">{{user.city}}</span>
      </p>  
      <p itemprop="jobTitle">
          <i class="fa fa-suitcase"></i>
          {{user.latest_jobplace}}
      </p>
      <p itemprop="jobTitle">
          <i class="fa fa-suitcase"></i>
          {{user.latest_jobtitle}} 
      </p>
      <p>
          <i class="fa fa-phone"></i>
          <span itemprop="phone-number">
              {{user.phone_number}}
          </span>
      </p>                
      <p itemprop="company-email"> 
          <i class="fa fa-envelope-o"></i> 
          <a href="#">{{user.email}}</a> 
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
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '/assets/component-styles/profileCard.scss'
</style>