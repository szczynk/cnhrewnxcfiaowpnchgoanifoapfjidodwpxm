<template>
    <div class="jobsDetailsCard row">
        <div class="col-lg-2 mx-auto">
            <img class="card-profile-picture" src="../../assets/netzap-logo.png" alt="profile picture" width="80px">
        </div>

        <div class="col-lg-8 text-left">
            <h5>Digital Marketing</h5>
            <p>PT Solusi Aksesindo Pratama
                Jakarta, Indonesia
            </p>
            <p class="timestamp">9 hours ago</p>
        </div>
        <div class="col-lg-2 jobs-button">
            <a href="#" class="btn btn-block btn-jobs-apply px-4 mt-2 mb-2 mx-auto">Apply</a>
            <a href="#" class="btn btn-block btn-jobs-save px-4 mt-2 mx-auto">Save</a>
        </div>  
    </div> 
</template>

<script>
export default {
    name: 'jobsDetailsCard',
    data: function() {
        return {
            jobCardDetail: [
                {
                    id: 1,
                    name: 'Digital Marketing',
                    company: 'PT Solusi Aksesindo Pratama',
                    location: 'Jakarta Indonesia',
                    timestamp: '9 hours ago'                
                    
                },
                {
                    id: 2,
                    name: 'Graphic Designer',
                    company: 'PT Solusi Aksesindo Pratama',
                    location: 'Jakarta Indonesia',
                    timestamp: '7 hours ago'  
                },
                {
                    id: 3,
                    name: 'Graphic Designer',
                    company: 'PT Solusi Aksesindo Pratama',
                    location: 'Jakarta Indonesia',
                    timestamp: '7 hours ago'  
                },
                {
                    id: 4,
                    name: 'Graphic Designer',
                    company: 'PT Solusi Aksesindo Pratama',
                    location: 'Jakarta Indonesia',
                    timestamp: '7 hours ago'  
                },
                {
                    id: 5,
                    name: 'Graphic Designer',
                    company: 'PT Solusi Aksesindo Pratama',
                    location: 'Jakarta Indonesia',
                    timestamp: '7 hours ago'  
                },
                {
                    id: 6,
                    name: 'Graphic Designer',
                    company: 'PT Solusi Aksesindo Pratama',
                    location: 'Jakarta Indonesia',
                    timestamp: '7 hours ago'  
                },
                {
                    id: 7,
                    name: 'Graphic Designer',
                    company: 'PT Solusi Aksesindo Pratama',
                    location: 'Jakarta Indonesia',
                    timestamp: '7 hours ago'  
                }
            ]
        };  
    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.jobsDetailsCard {
    margin-top: 100px;
}

.btn-jobs-apply {
    background-color: #980DDC;
    color: #fff; 
    float: right;
    font-size: smaller;
}

.btn-jobs-save {
    border-color: #980DDC;
    background-color: #fff;
    color: #980DDC;
    float: right;
    font-size: smaller;
}

.timestamp {
    font-size: smaller;
}
</style>