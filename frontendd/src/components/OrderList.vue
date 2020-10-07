<template>
  <article id="orderList" v-if="showOrders" :key="componentKey">
    <h2>Din beställning</h2>
    <aside class="order-items" v-for="(item, index) in getOrders" :key="index">
      <div class="coffe-item">
        <h4 class="item-title">{{ item.title }}</h4>
        <h4 class="item-dots"></h4>
        <div>
          <img
            src="./../assets/arrow-up.svg"
            alt="arrow up"
            @click="addItemToCart(item)"
          />
          <h6 class="item-quantity">{{ item.quantity }}</h6>
          <img
            src="./../assets/arrow-down.svg"
            alt="arrow down"
            @click.prevent="removeItemFromCart(item)"
          />
        </div>
      </div>
      <div class="description">
        <p class="item-price">{{ item.price }} kr</p>
      </div>
    </aside>
    <div class="total-price">
      <div class="price">
        <h3 class="item-total">Total</h3>
        <h3 class="item-dots"></h3>
        <h3 class="item-cost">{{ totalCost }} kr</h3>
      </div>
      <p>ink moms + drönarleverans</p>
    </div>
    <button id="btn-buy" @click="buyItems">Take my money!</button>
  </article>
</template>

<script>
export default {
  name: "OrderList",
  data() {
    return { componentKey: 0 };
  },
  methods: {
    // re-render component
    forceRerender() {
      this.componentKey += 1;
    },
    sendOrder() {
      this.$store.dispatch("sendOrder");
    },
    //uppGrade quantity item
    addItemToCart(item) {
      
      this.$store.commit("addItemToCart", item);
      this.forceRerender();
    },
    //remove quantity item
    removeItemFromCart(item) {
      this.$store.commit("removeItemFromCart", item);
      this.forceRerender();
    },
    buyItems() {
      if (this.getOrders.length == 0) {
        alert("Cart empty, plese select a coffe");
      } else {
        this.$store.dispatch("sendOrder");
        this.$router.push("/status");
      }
    },
  },
  computed: {
    getOrders() {
      return this.$store.state.cart;
    },
    showOrders() {
      return this.$store.state.ui.showOrders;
    },
    totalCost() {
      return this.$store.getters.totalCost;
    },
  },
};
</script>

<style lang="scss">

</style>
