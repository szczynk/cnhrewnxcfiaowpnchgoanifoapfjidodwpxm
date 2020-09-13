<template>
    <div class="achievement tab-pane fade" id="v-pills-achievement" role="tabpanel" aria-labelledby="v-pills-achievement-tab">
        <div class="achievement-pane">
            <h5 class="section-header">Penghargaan: <span><a href="#"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Penghargaan</a></span></h5>
            <ul>
                <li v-for="myAchievement in achievement" v-bind:key="myAchievement.id" class="myAchievement">
                    <div class="position-relative">
                        <h4>{{myAchievement.name}} <span><a href="#"><i class="fa fa-pencil-square" aria-hidden="true"></i> Edit</a></span></h4>
                        <h5>{{myAchievement.award}}</h5>
                        <h6>{{myAchievement.date}}</h6>
                        <br>
                        <p>
                            {{myAchievement.description}}
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'achievement',
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.achievement {
    li {
        list-style-type: none;
        position: relative;
        margin-left: 10px;
        margin-bottom: 10px;

        .position-relative {
            margin-left: 20px;
            margin-top: 30px;
        }

        h5 {
            border-bottom: none !important;  
            padding-bottom: 0;
            font-weight: none;
        }
    }

    li::after {
        content: "";
        position: absolute;
        top: 8px;
        left: calc(-24px);
        width: 20px;
        height: 20px;
        background-color: #B982E8;
        border-radius: 100%;
    }
}
</style>