<template>
    <div class="jobsCardRecommendation col-lg-3">
        <h5>Similar Jobs</h5>
        <hr>
        <div class="jobs-card-recommendation row float-center mx-auto">
            <div class="col-lg-2 justify-content-center">
                <img class="card-profile-picture" src="../../assets/netzap-logo.png" alt="profile picture" width="50px">
            </div>
            <div class="col-lg-9 jobs-recommendation-info">
                <h5>Digital Marketing</h5>
                <p>PT Solusi Aksesindo Pratama</p>
                <p>Jakarta, Indonesia</p>
                <hr>
                <p>9 hours ago</p>
            </div>
        </div>
    </div> 
</template>

<script>

export default {
    name: 'jobsCardRecommendation',
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.jobsCardRecommendation {
    margin-top: 80px;
}

.jobs-card-recommendation {
    background-color: #E7E1E9;
    border-radius: 8px;
    padding-top: 20px;
    margin-bottom: 12px;
    max-width: 300px;
    min-width: 300px;
    box-shadow: 5px 5px 2.5px 0px rgba(219,212,219,1);
    float: center;
    font-size: small;

    .card-profile-picture {
        border-radius: 100px;
        float: left;
        background-color: #fff;
    }

    .card-info {
        h5 {
            font-weight: bold;
        }
    }
    
    .jobs-recommendation-info {
        padding-left: 24px;
    }
}

</style>