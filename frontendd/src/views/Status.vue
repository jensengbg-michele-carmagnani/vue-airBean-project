<template>
  <section id="orderStatus">
    <p class="order-number">Order Number :<span class="orderNr">{{ order.orderNr }}</span></p>
    <img src="./../assets/drone.svg" alt="drone on the way!" />
    <p id="msg">Your order is on the way!</p>
    <h4 id="time">{{ randomMinutes }} minutes</h4>
    <button @click="backToMenu">ok, cool!</button>
  </section>
</template>

<script>
export default {
  name: "Status",

  computed: {
    order() {
      let order = this.$store.getters.order;
        console.log('store order', order)
        return order
    },
    randomMinutes(min, max) {
      min = 5;
      max = 20;
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
  },
  methods: {
    backToMenu() {
      this.$router.push("/menu");
      //this.$store.commit('toggleCart');
      this.$store.commit('emptyCart');
    },
    showOrders() {
      
    },
  },
};
</script>

<style>
button {
  width: 184px;
  height: 55px;
  background: #ffffff;
  color: #2f2926;
  border-radius: 50px;
  font-family: PT Serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 120%;
}
</style>
