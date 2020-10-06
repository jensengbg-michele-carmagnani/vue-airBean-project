<template>
  <section id="profile">
    <Nav />
    <section class="profile-wrapper" v-for="(user,index) in userHistory" :key="index">
      <article id="info-profile" v-if="user">
        <figure>
          <img src="@/assets/profileImg.png" alt="" />
        </figure>
        <h2 class="name">name:{{ user.name }}</h2>
        <p class="email">email:{{ user.email }}</p>
      </article>
      <h2>Order history</h2>
      <article id="history-profile" >
        <p class="order-nr">Order number{{ user.orderNr }}</p>
        <p class="order-date">2344235432</p>
        <p class="order-nr"></p>
        <p class="order-summa"></p>
      </article>
    </section>
  </section>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "Profile2",
  components: {
    Nav,
  },

  methods: {
    saveLogin() {
      sessionStorage.setItem("Login", this.user.token);
    },
  },

  computed: {
    userHistory() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss">

</style>
