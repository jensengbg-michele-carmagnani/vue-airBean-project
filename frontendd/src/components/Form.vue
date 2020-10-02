<template>
  <section id="form">
    <section class="form-profile" >
      <div class="symbol"><h3>A</h3></div>
      <section class="title-profile">
        <h3 class="welcome-profile">Wellcome to AirBean family</h3>
        <p class="info-profile">
          By creating an account below, you can save and view your order
          history.
        </p>
      </section>
      <section class="form">
        <div class="name">
          <label id="label-name" for="name">Name</label>
          <input
            id="input-name"
            type="name"
            placeholder="Name"
            :v-model="profileData.name"
          />
        </div>
        <div class="email">
          <label id="label-email" for="name">Email</label>
          <input
            id="input-email"
            type="email"
            placeholder="Email"
            :v-model="profileData.email"
          />
        </div>
      </section>
      <div class="gdpr">
        <input type="radio" id="gdpr" name="gdpr" value="gdpr" />
        <label for="gdpr">GDPR</label><br />
      </div>
      <button class="btn-brew" @click.prevent=" getProfile">
        brew me a cup
      </button>
    </section>
  </section>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      showProfile: true,
      profileData: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    toggleProfile() {
      this.showProfile = !this.showProfile;
    },
    getProfile() {
      console.log('profileData',this.profileData)
      this.$store.dispatch("getProfile", this.profileData);
    },
  },
};
</script>

<style>
</style>