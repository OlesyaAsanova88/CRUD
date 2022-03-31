<template>
  <div id="app">
    <UserData class="mb-4" />
    <HomePage />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
import UserData from "./components/UserData.vue";

export default {
  name: "App",
  components: {
    HomePage,
    UserData,
  },
};
</script>

<style>
</style>
