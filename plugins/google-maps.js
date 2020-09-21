import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDs6TDbzC_SMQMG_Hq8ZMF19fCnBDMCDHk",
    libraries: "places"
  }
});
