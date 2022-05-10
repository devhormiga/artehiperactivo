<template>
  <div>
    <!-- <Navbar />
      <div class="container column is-10">
        <Nuxt />
      </div>
    <Footer /> -->
    <Opening />
  </div>
</template>

<script>
import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer";
import Opening from '../pages/opening.vue';
export default {
  components: {
    Navbar,
    Footer,
    Opening
  },
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "home",
          to: { name: "index" },
        },
        {
          title: "Inspire",
          icon: "lightbulb",
          to: { name: "inspire" },
        },
      ],
    };
  },
};
</script>
<style scoped>

</style>