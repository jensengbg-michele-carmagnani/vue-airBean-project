<template>
  <section id="profile">
    <Nav />
    <LoginForm v-if="!user.email" />

    <section class="profile-wrapper" v-if="user.email">
      <article id="info-profile">
        <figure>
          <img src="@/assets/profileImg.png" alt="" />
        </figure>
        <h2 class="name">name…{{ user.name }}</h2>
        <p class="email">email…{{ user.email }}</p>
      </article>
      <h2>Order history</h2>
      <article
        id="history-profile"
        v-for="(item, index) in user.history"
        :key="index"
      >
        <p class="order-nr">Order: {{ item.orderNr }}</p>
        <p class="order-date">Data:{{ item.date }}</p>
        <p class="order-nr">total amount: {{ user.total }}</p>
      </article>
    </section>
  </section>
</template>

<script>
import Nav from "@/components/Nav";
import LoginForm from "@/components/LoginForm";
export default {
  name: "Profile",
  components: {
    LoginForm,
    Nav,
  },
  data() {
    return {};
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  beforeMount() {
    this.$store.dispatch("myHistory");
  },
};
</script>

<style lang="scss">
</style>
