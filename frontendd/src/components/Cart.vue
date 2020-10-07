<template>
  <section id="cart">
    <div></div>
    <div id="orders">
      <figure id="bag" @click.prevent="toggleCart">
        <img src="./../assets/bag.png" alt="" />
      </figure>
      <div id="items">{{ getQuantity }}</div>
      <OrderList />
    </div>
  </section>
</template>

<script>
import OrderList from "@/components/OrderList";
export default {
  name: "Cart",
  components: {
    OrderList,
  },

  methods: {
    toggleCart() {
      this.$store.commit("toggleCart");
    },
  },
  computed: {
    getQuantity() {
      return this.$store.getters.totalQuantity;
    },
  },
};
</script>

<style lang="scss">

  
</style>
