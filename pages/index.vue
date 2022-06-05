<template>
  <section class="hero is-primary is-fullheight">
  <!-- Hero head: will stick at the top -->
  <div class="hero-head">
    <nav class="navbar py-6">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item">
            <img src="~/assets/logoAH.png" alt="Logo">
          </a>
          <span class="navbar-burger" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end">
            <a  href="https://es-la.facebook.com/people/Arte-Hiperactivo/100007188108496/" class="navbar-item">
              <i class="pt-2"><img src="@/assets/facebook.png" alt="icono de facebook para Arte Hiperactivo"></i>
            </a>
            <a  href="https://www.instagram.com/artehiperactivo/?igshid=YmMyMTA2M2Y=" class="navbar-item">
              <i class="pt-2"><img src="~/assets/instagram.png" alt="icono de instagram para Arte Hiperactivo"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCmGV-CZhfkLZp6qxloWzdsw"  class="navbar-item">
              <i class="pt-2"><img src="~/assets/youtube.png" alt="icono de canal de youtube  para Arte Hiperactivo"></i>
            </a>
            <!-- <span class="navbar-item">
              <a class="button is-primary is-inverted">
                <span class="icon">
              <i class="fa-brands fa-facebook-square"></i>
                </span>
                <span>Download</span>
              </a>
            </span> -->
          </div>
        </div>
      </div>
    </nav>
  </div>

  <!-- Hero content: will be in the middle -->
  <div class="hero-body">
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
            :arrow="arrow"
            @change="info($event)">
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

  <!-- Hero footer: will stick at the bottom -->
  <div class="hero-foot p-0 m-0">
    <div>
      <h1>Contactanos a artehiperactivo@gmail.com'</h1>
    </div>
    <nav class="">
      <div class="container">
        <div class="is-flex is-flex-grow-5 is-justify-content-space-between	">
          <div class="">Circo</div>
          <div>Teatro</div>
          <div>Danza</div>
          <div>Performance</div>
          <div>producciones</div>
          <div></div>
        </div>
      </div>
    </nav>
  </div>
</section>
</template>

<script>


export default {
  components: {
    
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

<style >
.navbar{
  height: 80px !important;
}

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
.navbar-item:hover  {
    color: rgb(227, 250, 18) !important;
    background-color: #e3fa12!important;
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