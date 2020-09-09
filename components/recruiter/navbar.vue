<template>
    <div class="navbar">
        <div class="container navbarContainer">
            <div class="col-lg-12">
                <nav class="navbar fixed-top navbar-expand-lg navbar-light justify-content-center">
                    <nuxt-link to="/home"  class="navbar-brand">
                        <img src="../../assets/logo.png" alt="Logo-looker" width = "200">
                    </nuxt-link>

                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navb">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">What We Do</a>
                                <div class="dropdown-menu">
                                    <a href="#choose-us" class="dropdown-item page-scroll">Why Us</a>
                                    <a href="#how-we-work" class="dropdown-item page-scroll">How We Work</a>
                                    <a href="#pricing" class="dropdown-item page-scroll">Pricing</a>
                                    <a href="#" class="dropdown-item">Testimonial</a>
                                    <a href="#" class="dropdown-item">Contact Us</a>
                                </div>
                            </li>

                            <li class="nav-item mx-md-2">
                                <nuxt-link to="/recruiter/candidates/explore" no-prefetch class="nav-link">Explore Candidates</nuxt-link>
                            </li>

                            <li class="nav-item mx-md-2">
                                <nuxt-link to="/recruiter/login" no-prefetch class="nav-link"><i class="fa fa-sign-in" aria-hidden="true"></i> Login</nuxt-link>
                            </li>
                            

                            <li class="nav-item mx-md-2">
                                <nuxt-link to="/recruiter/register" no-prefetch class="nav-link"><i class="fa fa-user-plus" aria-hidden="true"></i> Register</nuxt-link>
                            </li> 
                        </ul>
                    </div>
                </nav>
            </div>
        </div>  
    </div>
</template>

<script>



export default {
    mounted() {
        $(function () {
            $(document).scroll(function () {
                var $nav = $(".navbar-light");
                $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
            });
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
   @import '/assets/component-styles/navbar.scss'
</style>