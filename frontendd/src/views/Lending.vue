<template>
  <section id="lending" @click="goTo">
    <article>
      <div class="logo">
        <img src="./../assets/aVector.png" alt="" />
      </div>

      <h1 class="air-bean">AIR BEAN</h1>
      <p>Dronedeliverd Coffe</p>
    </article>
  </section>
</template>

<script>
export default {
  name: "Lending",

  methods: {
    goTo() {
      this.$router.push("/menu");
    },
  },
};
</script>
<style lang="scss"></style>
