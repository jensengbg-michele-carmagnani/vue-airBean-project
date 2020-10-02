import Vue from "vue";
import Vuex from "vuex";
import ax from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: Array,
    url: "http://localhost:5000",
    ui: {
      showNav: false,
      showOrders: false,
      showPorfile: true,
    },

    cart: [],
    order: Object,
  },

  mutations: {
    showCoffe(state, menu) {
      state.menu = menu;
    },
    toggleNav(state) {
      state.ui.showNav = !state.ui.showNav;
    },
    toggleCart(state) {
      state.ui.showOrders = !state.ui.showOrders;
    },
    toggleProfile(state) {
      state.ui.showPorfile = !state.ui.showPorfile;
    },
    addItemToCart(state, product) {
      console.log("add product AddItemToCart store", product);
      let index = state.cart.findIndex((item) => item.id === product.id);

      if (index >= 0) {
        // ++add quantity property
        state.cart[index].quantity++;
      }
    },
    removeItemFromCart(state, product) {
      let index = state.cart.findIndex((item) => item.id === product.id);
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      } else {
        state.cart.splice(index, 1);
      }
    },
    emptyCart(state) {
      state.cart = [];
    },
    orderConfirmed(state, order) {
      state.order = order;
    },
    addToCart(state, product) {
      // check if the prod exists in cart - what index
      let index = state.cart.findIndex((item) => item.id === product.id);

      if (index >= 0) {
        // ++add quantity property
        state.cart[index].quantity++;
      } else {
        Vue.set(product, "quantity", 1); //set a whatcher for the quantity
        state.cart.push(product);
        state.cart.quantity++;
      }
    },
  },

  actions: {
    async fetchCoffe(ctx) {
      let resp = await ax.get(`${ctx.state.url}/menu`);
      ctx.commit("showCoffe", resp.data.menu);
      console.log("menu from db", resp.data.menu);
    },
    async sendOrder(ctx) {
      let data = await ax.post(`${ctx.state.url}/orders`, {
        order: ctx.state.cart,
      
      });
      console.log("order from db", ctx.state.cart);
      ctx.commit("orderConfirmed", data.data);
      ctx.commit("emptyCart");
      ctx.commit("toggleCart");
    },
    async getProfile(ctx, profile) {
      let data = await ax.get(`${ctx.state.url}/profile`, {
        profile: { profile },
      });
      console.log("profile to check", data);
    },
  },

  modules: {},

  getters: {
    menu(state) {
      return state.menu;
    },
    order(state) {
      return state.order;
    },
    totalCost(state) {
      return state.cart.reduce(
        (total, item) => total + item.quantity * item.price,
        0
      );
    },
    totalQuantity(state) {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
  },
});
