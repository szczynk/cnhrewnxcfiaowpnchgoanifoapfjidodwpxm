<template>
    <div class="jumbotron jumbotron-fluid text-center">
        <h1>JOIN US AND EXPLORE
            <br>
            HUNDRED OF CANDIDATES
            <br>
            WITH <span>POTENTIAL</span>
        </h1>

        <p class="mt-3">
            Post your jobs and hire
            <br>
            suitable candidates with ease.
        </p>
        <a href="" class="btn btn-get-started px-4 mt-4">Start Hiring</a>
    </div>
</template>

<script>
export default {
    name: 'banner'

}
</script>

<style lang='scss' scoped>
    .jumbotron {
        padding: 180px 0 165px;
        margin-top: -105px;
        background-image: url("../../../assets/header-bg.png");
        height: 550px;
        background-size: cover;
        background-attachment: fixed;
        background-position: 0 -60px;
        overflow: hidden;

        h1, p {
            color: #fff;
            text-shadow: 1px 1px 10px rgba(0,0,0,0.5);
        }

        h1 {
            font-family: 'Roboto', sans-serif;
            font-weight: bold;

            span {
                color: #F8615A;
            }
        }

        p {
            font-size: 20px;
            font-weight: lighter;
        }

        .btn-get-started {
            background-color: #F8615A;
            color: #FFF;

            &:hover {
                background-color: #F36A64;
                color: #FFF;
            }
        }
    }
</style>