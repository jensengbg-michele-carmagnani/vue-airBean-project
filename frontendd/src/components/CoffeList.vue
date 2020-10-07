<template>
  <section id="coffeList" v-if="showOrders">
    <article class="coffe-info" @click.prevent="addToCart">
      <!-- <img class="add" src="./../assets/add.png" alt="" /> -->
      <dir class="coffe-add"><img src="./../assets/plus.png" alt="add" /></dir>
      <h4 class="coffe-title">{{ coffeItem.title }}</h4>
      <h4 class="coffe-dots"></h4>
      <h4>{{ coffeItem.price }}</h4>
    </article>

    <article class="coffe-description">
      <h6 class="coffeItem-description">{{ coffeItem.desc }}</h6>
    </article>
  </section>
</template>

<script>
export default {
  name: "coffeLxzist",
  props: {
    coffeItem: Object,
  },
  methods: {
    showOrders() {
      this.$store.state.ui.showOrders;
    },
    addToCart() {
      this.$store.commit("addToCart", this.coffeItem);
    },
  },
};
</script>

<style lang="scss">

</style>
