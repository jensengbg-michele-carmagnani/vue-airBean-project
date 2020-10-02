<template>
  <section id="coffeList" v-if="showOrders">
    <article class="coffe-info" @click.prevent="addToCart">
      <!-- <img class="add" src="./../assets/add.png" alt="" /> -->
      <dir class="coffe-add"><img src="./../assets/plus.png" alt="add" /></dir>
      <h4 class="coffe-title">{{ coffeItem.title }}</h4>
      <h4 class="coffe-dots"></h4>
      <h4>{{ coffeItem.price }}</h4>
    </article>

    <article class="coffe-description">
      <h6 class="coffeItem-description">{{ coffeItem.desc }}</h6>
    </article>
  </section>
</template>

<script>
export default {
  name: "coffeLxzist",
  props: {
    coffeItem: Object,
  },
  methods: {
    showOrders() {
      this.$store.state.ui.showOrders;
    },
    addToCart() {
      this.$store.commit("addToCart", this.coffeItem);
    },
  },
};
</script>

<style lang="scss">
#coffeList {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .coffe-info {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    .coffe-add {
      width: 2rem;
      height: 2rem;
      padding: 0;
      margin: 0;
      margin-right: 1.2rem;
      border-radius: 999rem;
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .coffe-title {
      font-weight: 800;
    }
    .coffe-dots {
      flex: 1;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
      margin: 1rem 1rem 0 0;
    }
  }
}
.coffe-description {
  font-weight: 600;
  margin: 0 0 1.2rem 0;
  padding: 0;
  .coffeItem-description {
    margin: 0 3rem 0 0;
  }
}
</style>
