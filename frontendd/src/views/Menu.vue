<template>
  <section id="menu">
    <div class="darker">
      <article class="menu-wrapper">
        <Nav />
        <Cart/>
        <h2 class="title">MENY</h2>
        <CoffeList v-for="item in coffeMenu" :key="item.id" :coffeItem="item" />
      </article>
    </div>
  </section>
</template>

<script>
import CoffeList from "@/components/CoffeList";
import Nav from "@/components/Nav";
import Cart from "@/components/Cart";
export default {
  name: "Menu",
  components: {
    CoffeList,
    Nav,
    Cart,
  },

  computed: {
    coffeMenu() {
      return this.$store.getters.menu;
    },
    showOrders() {
      return this.$store.state.ui.showOrders;
    },
  },
};
</script>

<style lang="scss">
</style>
