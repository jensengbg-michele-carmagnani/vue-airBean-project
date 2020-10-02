<template>
  <div id="app"  >
    
    <router-view />
  </div>
</template>
<script>


export default {
  name:'app',
  computed:{
     
  },
  beforeMount() {
    this.$store.dispatch("fetchCoffe");
    setTimeout(() => {
      this.$router.push("/menu");
    }, 3000);
  },
};
</script>
<style lang="scss">
@import "./scss/main";


</style>
