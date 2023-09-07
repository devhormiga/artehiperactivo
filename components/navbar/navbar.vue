<template>
  <div class="container py-6">
    <b-navbar class="navbar" role="navigation" aria-label="main navigation">
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <div class="navbar-item pl-5 animate__animated animate__bounceInDown">
            <img class="ml-6" src="~/assets/logoAH.png" alt="Logo Arte Hiperactivo">
              </div>
            </b-navbar-item>
        </template>
        <template #start>
      <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <b-navbar-item class="item" href="#">
          <nuxt-link :to="{name: 'index'}"> Inicio</nuxt-link>
            </b-navbar-item>

        <b-navbar-item class="item" href="#">
         <nuxt-link :to="{name: 'aboute'}"> Sobre Nosotrxs</nuxt-link>
        </b-navbar-item>
        <b-navbar-item class="item" href="#">
         <nuxt-link :to="{name: 'productions'}"> Producciones</nuxt-link>
        </b-navbar-item>
        <!-- <b-navbar-dropdown class="item " label="Produciones">
                <b-navbar-item href="#">
                  Envalijados
                </b-navbar-item>
                <b-navbar-item href="#">
                  Teorias de Mentes Payasas
                </b-navbar-item>
                <b-navbar-item href="#">
                  Circo Minialtura
                </b-navbar-item>
                <b-navbar-item href="#">
                  El Desoncierto
                </b-navbar-item>
                <b-navbar-item href="#">
                  Producciones perosnales de cada integrante
                </b-navbar-item>
            </b-navbar-dropdown> -->

        <b-navbar-dropdown class="item" label="Galeria">
                <b-navbar-item href="#">
                  Fotos
                </b-navbar-item>
                <b-navbar-item href="#">
                  Videos
                </b-navbar-item>
                
            </b-navbar-dropdown>
      </div></div>
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
  export default {};
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';

.navbar{
  background-color: #000000;
}
.navbar-menu .navbar-end{
  margin-right: 15px;
}
.navbar-menu .navbar-end .navbar-item img {
  max-height: 2rem !important;
}
.item:hover{
    background-color: $secondary;
}
.navbar-item, .navbar-link{
    color: $primary !important;
}
.navbar-item, .navbar-link:hovet{
    background-color: $secondary !important;
}
.navbar-link:not(.is-arrowless)::after{
    border-color: $primary ;
}

</style>