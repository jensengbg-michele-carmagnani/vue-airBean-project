<template>
  <section class="btn-wrapper">
    <div id="menu-btn" @click="toggleNav" :class="{ close: showNav }">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>
    <article id="menu" v-if="showNav">
      <h2 @click="goToMenu">Menu</h2>
      <h2 @click="goToKaffe">Vårt kaffe</h2>
      <h2 @click="goToProfil">Min profil</h2>
      <h2 @click="goToOrder">Orderstatus</h2>
    </article>
  </section>
</template>

<script>
export default {
  name: "Nav",

  methods: {
    toggleNav() {
      this.$store.commit("toggleNav");
    },
    goToMenu() {
      this.$router.push("/menu");
      this.toggleNav();
    },
    goToKaffe() {
      this.$router.push("/about");
      this.toggleNav();
    },
    goToProfil() {
      this.$router.push("/profile");
      this.toggleNav();
    },
    goToOrder() {
      this.$router.push("/status");
      this.toggleNav();
    },
  },
  computed: {
    showNav() {
      return this.$store.state.ui.showNav;
    },
  },
};
</script>

<style lang="scss">
#menu {
  h2 {
    border-bottom: 1px solid rgba($color: #0a0a0a, $alpha: 0.8);
    margin-bottom: 3rem;
  }
}
</style>