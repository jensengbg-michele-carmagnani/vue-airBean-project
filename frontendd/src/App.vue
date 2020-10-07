<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  computed: {},
  beforeMount() {
    this.$store.dispatch("fetchCoffe");
    this.$store.dispatch("checkState");

    // setTimeout(() => {
    //   this.$router.push("/menu");
    // }, 1000);
  },
};
</script>
<style lang="scss">
@import "./scss/main";
</style>
