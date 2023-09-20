<template>
  <div >
     <Navbar />

    <nuxt id="cajon"/>
    <!-- <Opening /> -->
    <Footer /> 
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
    // Opening
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
#cajon{
  min-height: 100vh;
}
body{
  background-color: #000 !important;
}
.min-height{
  min-height: 500px !important;
}
</style>