<template>
  <div />
</template>
<script>
export default {
  name: 'LogoutPage',
  mounted () {
    return this.$firebase.auth().signOut().then(() => {
      this.$store.commit('setAuth', null)
      document.cookie = 'token=;expires=0;SameSite=Lax'
      this.$store.commit("modules/users/setUser", null)
      this.$router.replace({
        path: "/home",
        force: true
      })
      return null
    })
  }
}
</script>
<style scoped>
</style>
