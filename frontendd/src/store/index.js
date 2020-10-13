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
      showHistory: false,
    },

    cart: [],
    user: {},
    order: Object,
  },

  mutations: {
    resetUser(state) {
      state.user = {};
    },
    setUser(state, user) {
      // Vue.set(user, "name",user.name );
      state.user = user;
    },
    showCoffe(state, menu) {
      state.menu = menu;
    },
    toggleNav(state) {
      state.ui.showNav = !state.ui.showNav;
    },
    toggleCart(state) {
      state.ui.showOrders = !state.ui.showOrders;
    },
    toggleHistory(state) {
      state.ui.showHistory = !state.ui.showHistory;
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
    emptyUser(state) {
      state.user = {};
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
        user: JSON.parse(sessionStorage.getItem("airbean")),
      });

      console.log("order from db", ctx.state.cart);
      ctx.commit("orderConfirmed", data.data);
      ctx.commit("emptyCart");
      ctx.commit("toggleCart");
    },
    async checkState(ctx) {
      if (sessionStorage.getItem("airbean") !== null) {
        ctx.commit("setUser", JSON.parse(sessionStorage.getItem("airbean")));
      }
    },
    async login(ctx, user) {
      //ctx.commit("toggleFormProfile");
      try {
        let data = await ax.post(`${ctx.state.url}/login`, {
          user,
        });
        console.log("data from db ", data); //data from db

        if (data.data.success) {
          console.log("data.data success", data.data);
          ctx.commit("emptyUser");
          ctx.commit("setUser", data.data);
          console.log("setUser", data.data);
          // Set session
          sessionStorage.setItem("airbean", JSON.stringify(data.data));
        } else {
          alert("E-mail or password wrong");
        }
      } catch (error) {
        console.log("error", error);
      }
    },
    async myHistory(ctx) {
      let user = JSON.parse(sessionStorage.getItem("airbean"));
      console.log("User in myHistory sessionStorage", user);
      let data = await ax.get(`${ctx.state.url}/me/${user.id}`);
      console.log("my-History from db/me", data);
      ctx.commit("setUser", data.data);
    },
    async newUser(ctx, newUser) {
      let data = await ax.post(`${ctx.state.url}/newuser`, { newUser });
      console.log("newUser", data.data);
      if (!data.data.msg) {
        ctx.commit("emptyUser");
        sessionStorage.setItem("airbean", JSON.stringify(data.data));
        ctx.commit("setUser", data.data);
      } else {
        alert(data.data.msg);
      }
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
