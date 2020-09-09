<template>
    <div class="profileBio">
        <div class="row my-4 justify-content-center">
            <div class="col-lg-3 col-md-6 col-sm-12 my-auto mx-auto">
                <div class="profile-card text-center" width="100%"> 
                    <img class="card-profile-picture" src="../../assets/netzap-logo.png" alt="profile picture" width="125px">
                    <div class="card-body">
                        <h3> {{name}} </h3>
                        <p>
                            <i class="fa fa-map-marker"></i> 
                            <span itemprop="addressRegion">{{location}}</span>
                        </p>  
                        <p itemprop="jobTitle">
                            <i class="fa fa-suitcase"></i>
                            {{industry}}
                        </p>
                        <p>
                            <i class="fa fa-phone"></i>
                            <span itemprop="phone-number">
                                {{phone}}
                            </span>
                        </p>
                        <p>
                            <i class="fas fa-globe"></i>
                            <span itemprop="company-website">
                                {{website}}</span>
                        </p>
                                
                        <p itemprop="company-email"> 
                            <i class="fa fa-envelope"> </i> 
                            <a href="mailto:you@somedomain.com">{{website}}</a> 
                        </p>
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile">
                    </div>
                  </div>
            </div>
            <div class="col-lg-9 col-md-9 col-sm-12 my-auto mx-auto">
                
                <!-- 16:9 aspect ratio --> 
                <div class="embed-responsive embed-responsive-16by9"> 
                    <video class="video-profile text-center" width="100%" controls>
                        <source src="" type="video/mp4">
                    </video> 
                </div>                  
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'companiesProfileCard',
    data: function(){
        return {
        name: 'PT Solusi Aksesindo Pratama',
        location: 'Jakarta Indonesia',
        industry: 'Broadband',
        phone: '+62217396364',
        website: 'https://net-zap.com',
        email: 'sales@net-zap.com'
        };
    },
}
</script>

<style lang="scss" scoped>
    .profile-card {
    background-color: #F6EAFB;
    padding-top: 24px;
    border-radius: 8px;
    margin-bottom: 16px;

    h3 {
        font-size: 24px;
    }
    }


    .card-profile-picture {
        box-shadow: 1px 1px 10px rgba(0,0,0,0.2);
        margin-bottom: 30px;
        border-radius: 100px;
    }

    .card-body {
        margin-top: -10px;
    }

    .profile-edit-btn {
        background-color: #fff;
        color: #A33DD4;
        border-color: #A33DD4;
        border-radius: 2px;
        float: center;
    }
</style>