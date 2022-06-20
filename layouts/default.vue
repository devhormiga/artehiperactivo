<template>
  <div>
    <Navbar />
      <div class="container column is-10 min-height">
        <Nuxt />
      </div>
    <Footer />
    <!-- <Opening /> -->
  </div>
</template>

<script>
import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer";
// import Opening from '../pages/index.vue';
export default {
  components: {
    Navbar,
    Footer,
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
body{
  background-color: #000 !important;
}
.min-height{
  min-height: 500px !important;
}
</style>