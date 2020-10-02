<template>
  <section id="profile">
    <Nav/>
    <Form/>
  </section>
</template>

<script>
import Nav from '@/components/Nav'
import Form from "@/components/Form";
export default {
  name: "Profile",
  components: {
    Form,
    Nav
  },
};
</script>

<style lang="scss">
</style>
