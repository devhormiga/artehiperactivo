<template>
  <section class="hero is-primary is-fullheight">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar py-6">

    </nav>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
    <!-- <Modal></Modal> -->
  </div>
  <div class="is-hidden-mobile hero-body">
    <div class="container has-text-centered">
      <div class="hero-body hero-body-h1 is-flex is-flex-direction-column has-text-centered">
         <!-- <h1 class="title effect-text">Arte Hiperactivo</h1> -->
      </div>
        <b-carousel
            v-model="carousel"
            :animated="animated"
            :has-drag="drag"
            :autoplay="autoPlay"
            :pause-hover="pauseHover"
            :pause-info="pauseInfo"
            :pause-info-type="pauseType"
            :interval="interval"
            :repeat="repeat"
            :arrow="arrowgit"
            >
            <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
                <section :class="`hero hero-config  is-${carousel.color} is-bold`">
                    <img class="image" :src="require(`~/assets/${carousel.foto}`)" alt="">
                    <div class="hero-body hero-body-config is-flex is-flex-direction-column has-text-centered">
                        <!-- <h1 class="title effect-text">{{carousel.title}}</h1> -->
                        <p class="is-size-3 has-text-black">{{carousel.subtitle}}</p>
                    </div>
                </section>
            </b-carousel-item>
        </b-carousel>
    </div>
  </div>


</section>
</template>

<script>
import Modal from "../components/modalFlayer.vue"

export default {
  components: {
    Modal
  },
data() {
        return {
            carousel: 0,
            animated: 'slide',
            drag: false,
            autoPlay: true,
            pauseHover: false,
            pauseInfo: false,
            repeat: true,
            pauseType: 'is-primary',
            interval: 3000,
            arrow: false,
            carousels: [
                { title: 'Contactanos a artehiperactivo@gmail.com' , subtitle:'Unicxs', foto: 'logoAH.png' },
                { title: '' , subtitle:'Unicxs', foto: 'ah.jpg' },
                { title: '' , subtitle:'Inquietxs', foto: 'cientificos.jpg' },
                { title: '' , subtitle:'Divertidxs', foto: 'tosapa.jpg' }
            ]
        }
    }
}
</script>

<style lang="scss">
.navbar{
  height: 80px !important;
}
// .navbar .navbar-burger{
//   color:#e3fa12 !important;
//   font-size: 3rem !important;
// }
.navbar .navbar-item img{
  max-height: 6rem !important;
}
.hero-config{
    position: relative !important;
}
.hero-config {
    height: auto;
}
.hero-config img{
    min-height: 450px;
    max-height: 500px;
    object-fit: cover;
/* 
    filter: grayscale(100%);
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%); */
}
.hero-body-h1 h1{
    position: absolute;
    top: -5%;
    left: 10%;
    z-index: 2000;
    margin: 20px 0px; 
}

.effect-text{
    color: #000;
    background-color:  none;
    text-shadow: 0 0 5px #000, 0 0 10px #000, 0 0 15px #000, 0 0 20px #ea2a5d, 0 0 30px #ea2a5d, 0 0 40px #ea2a5d, 0 0 55px #ea2a5d, 0 0 75px #ea2a5d;

}
.hero-body h1{
    font-size: 7rem;
}

.hero-body p{
    position:absolute;
    top: 40px;
    right: 50px;
    color:  #000000;
    background-color: none;
    text-shadow: 2px 2px 0 #bcbcbc, 4px 4px 0 #9c9c9c;
}

</style>