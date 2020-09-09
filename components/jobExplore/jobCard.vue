<template>
    <div class="row">
        <div v-for="jobCardDetails in jobCardDetail" v-bind:key="jobCardDetails.id" class="jobs-card col-lg-4 col-md-12 col-sm-12 mx-auto my-2 text-right">
            <div class="row mb-4">
                <div class="col-lg-6 col-md-6 col-sm-6 col-6 mx-auto ">
                    <img class="card-profile-picture" src="../../assets/netzap-logo.png" alt="profile picture" width="80px">
                </div>

                <div class="jobs-button col-lg-6 col-md-6 col-sm-6 col-6 mx-auto ">
                    <a href="#" class="btn btn-block btn-jobs-detail px-4 mt-2 mr-4">Details</a>
                    <a href="#" class="btn btn-block btn-jobs-video px-4 mt-2 mr-4">Video</a>
                </div>   
            </div>

            <div class="row">
                <div class="jobCardDetail col-lg-12 text-left">
                    <h5>{{jobCardDetails.name}}</h5>
                    <p>{{jobCardDetails.company}}
                    </p>
                    <p>
                        {{jobCardDetails.location}}
                    </p>
                    <hr>
                    <p>{{jobCardDetails.timestamp}}</p>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'jobCard',
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
<style lang="scss" scoped>
.jobs-card {
    background-color: #E7E1E9;
    border-radius: 8px;
    padding-top: 20px;
    margin-bottom: 12px;
    max-width: 300px;
    min-width: 300px;
    box-shadow: 5px 5px 2.5px 0px rgba(219,212,219,1);
    

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

    .btn-jobs-detail {
        background-color: #980DDC;
        color: #fff; 
        float: right;
        font-size: smaller;
    }

    .btn-jobs-video {
        background-color: #fff;
        color: #980DDC;
        border: 1px #980DDC;
        float: right;
        font-size: smaller;
    }
}
</style>