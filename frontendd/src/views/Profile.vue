<template>
  <section id="profile">
    <Nav />
    <LoginForm v-if="!user.name" />

    <section class="profile-wrapper" v-if="user.name">
      <article id="info-profile">
        <div class="img-profile">
          <img src="./../assets/imgHead.png" alt="" />
          <img src="./../assets/imgBody.png" alt="" />
        </div>
        <h2 class="name">{{ user.name }}</h2>
        <p class="email">{{ user.email }}</p>
      </article>

      <h2 class="title-history">Order history</h2>
      <section class="history">
        <article
          class="history-profile"
          v-for="(item, index) in user.history"
          :key="index"
        >
          <p class="order-nr">#{{ item.orderNr }}</p>
          <p class="order-date">{{ item.timeStamp }}</p>
          <p class="partial">Partial</p>
          <p class="total-amount">{{ item.totalOrderValue }}kr</p>
        </article>
      </section>
      <article class="total">
        <p>Total</p>
        <p>{{ user.totalSommarize }}Kr</p>
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
.img-profile {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 4rem;
  height: 4rem;
  background: white;
}
</style>
