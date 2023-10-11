<template>
  <div id="container-nav" class="container py-6">
    <b-navbar class="navbar" role="navigation" 
      aria-label="main navigation"
       :fixed-top="true" 
       :centered="true"
       :is-mobile="false" 
       :mobile-menu-label="Menú" 
        :mobile-burger="true"
      >
      
        <template #brand>

            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <div class="navbar-item pl-5 animate__animated animate__bounceInDown">
            <img class="ml-0" src="~/assets/logoAH.png" alt="Logo Arte Hiperactivo">
              </div>
            </b-navbar-item>
        </template>
        <template  #start  >
          <b-navbar-burger :active.sync="isActive" @click="toggleMenu">
            <div class="navbar-start">
              <b-navbar-item class="item" href="/">Inicio
                <!-- <nuxt-link :to="{name: 'index'}"> Inicio</nuxt-link> -->
                  </b-navbar-item>

              <b-navbar-item class="item" href="aboute">Sobre Nosotrxs
              <!-- <nuxt-link :to="{name: 'aboute'}"> Sobre Nosotrxs</nuxt-link> -->
              </b-navbar-item>
              <b-navbar-item class="item" href="productions">Producciones
              <!-- <nuxt-link :to="{name: 'productions'}"> Producciones</nuxt-link> -->
              </b-navbar-item>
              <b-navbar-item class="item" href="galeria" >Galeria
              <!-- <nuxt-link :to="{name: 'galeria'}"> Galeria</nuxt-link> -->
              </b-navbar-item>
          </div>
          </b-navbar-burger>
        <b-navbar-menu :active.sync="isActive" />
          <div id="navbarBasicExample" class="navbar-menu">

        </div>
        </template>

        <template #end>
            <b-navbar-item tag="div">
              <div class="container">

                <div id="navbarMenuHeroA" class="navbar-menu">
                  <div class="navbar-end is-size-1 is-warning animate__animated animate__bounceInDown">
                    <a  href="https://es-la.facebook.com/people/Arte-Hiperactivo/100007188108496/" class="navbar-item item">
                      <i class="pt-2"><img src="~/assets/facebook.png" alt="icono de facebook para Arte Hiperactivo"></i>
                    </a>
                    <a  href="https://www.instagram.com/artehiperactivo/?igshid=YmMyMTA2M2Y=" class="navbar-item item ">
                      <i class="pt-2"><img src="~/assets/instagram.png" alt="icono de instagram para Arte Hiperactivo"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCmGV-CZhfkLZp6qxloWzdsw"  class="navbar-item item ">
                      <i class="pt-2"><img src="~/assets/youtube.png" alt="icono de canal de youtube  para Arte Hiperactivo"></i>
                    </a>
                  </div>
                </div>
              </div>
          </b-navbar-item>
        </template>
    </b-navbar>


  </div>
 
</template>

<script>
  export default {
    data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    },
  },
  };
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

#container-nav{
  margin-bottom: 3rem;
}
.navbar{
  border-bottom: 2px solid $gray;

  background-color: #000000;
}
.navbar-menu .navbar-end{
  margin-right: 15px;
}
.navbar-item img{
  max-height: 5rem !important;

}
.navbar-menu .navbar-end .navbar-item img {
  max-height: 5rem !important;
}
.item:hover{
  color: #ffffff !important;
  background-color: $primary-transparent;
}
.item:active{
  background-color: $gray;
}
.navbar-item, .navbar-link{
    color: $primary !important;
    font-size: 2rem;
}
.navbar-item, .navbar-link:hovet{
    background-color: $secondary !important;
}
.navbar-link:not(.is-arrowless)::after{
    border-color: $primary ;
}
@media screen and (max-width: 1023px) {
  .navbar-menu {
    border: 20px solid blue !important;
  }
  .navbar-start , .navbar-menu {
    background-color: #000000 !important;
  }
}
</style>