<template>
    <div class="skill tab-pane fade" id="v-pills-skill" role="tabpanel" aria-labelledby="v-pills-skill-tab">
        <div class="skill-pane">
            <h5 class="section-header">Endorsed Skill: <span><a href="#"><i class="fa fa-plus-circle" aria-hidden="true"></i> Tambahkan Skill</a></span></h5>
            <ul>
                <li v-for="mySkill in skill" v-bind:key="mySkill.id" class="d-inline">
                    {{mySkill.name}}  <a href="#"><i class="fa fa-times" aria-hidden="true"></i></a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'skill',
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.skill {
    .section-header {
        margin-bottom: 24px;
    }

    li {
        margin-right: 6px;
        padding: 6px;
        padding-left: 6px;
        padding-right: 6px;
        border-radius: 30px;
        color: #fff;
        background-color: #B982E8;
    }
}
</style>