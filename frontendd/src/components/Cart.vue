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
#cart {
  position: relative;

  #orders {
    position: absolute;
    background-color: black;
    width: 3rem;
    height: 3rem;
    border-radius: 999rem;
    top: -78px;
    left: 300px;
    #bag {
      position: absolute;
      top: -4px;
      left: -23px;
    }
    #items {
      position: absolute;
      z-index: 100;
      left: 35px;
      top: 0px;
      height: 1.2rem;
      width: 1.2rem;
      color: white;
      background: #e5674e;
      border-radius: 999rem;
      text-align: center;
    }
  }
}
</style>
