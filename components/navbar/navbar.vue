<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
          <a class="navbar-item pl-5 animate__animated animate__bounceInDown">
            <img class="ml-6" src="~/assets/logoAH.png" alt="Logo Arte Hiperactivo">
          </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item"> Inicio </a>

        <a class="navbar-item"> Sobre Nosotrxs </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Produciones </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> Envalijados </a>
            <a class="navbar-item"> Teorias de Mentes Payasas </a>
            <a class="navbar-item"> Circo Minialtura </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Proyectos personales de Cada integrante</a>
          </div>
        </div>
         <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Galeria </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> Fotos </a>
            <a class="navbar-item"> videos </a>
          </div>
        </div>
      </div>
        <!-- <a class="navbar-item"> Contactos </a> -->
          <nav class="navbar">
      <div class="container">
        <div class="navbar-brand is-align-items-center is-align-content-center">

          <!-- <span class="navbar-burger is-hidden" data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span> -->
        </div>
        <div id="navbarMenuHeroA" class="navbar-menu">
          <div class="navbar-end is-size-1 is-warning animate__animated animate__bounceInDown">
            <a  href="https://es-la.facebook.com/people/Arte-Hiperactivo/100007188108496/" class="navbar-item">
              <i class=""><img src="~/assets/facebook.png" alt="icono de facebook para Arte Hiperactivo"></i>
            </a>
            <a  href="https://www.instagram.com/artehiperactivo/?igshid=YmMyMTA2M2Y=" class="navbar-item">
              <i class=""><img src="~/assets/instagram.png" alt="icono de instagram para Arte Hiperactivo"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCmGV-CZhfkLZp6qxloWzdsw"  class="navbar-item">
              <i class=""><img src="~/assets/youtube.png" alt="icono de canal de youtube  para Arte Hiperactivo"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
      <!-- <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Contactanos</strong>
            </a>
          </div>
        </div>
      </div> -->
    </div>
    
  </nav>
  
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "assets/css/variables";

.navbar{
  background-color: #000000;
}
.navbar-menu .navbar-end{
  margin-right: 15px;
}
.navbar-menu .navbar-end .navbar-item img {
  max-height: 2rem !important;
}
.navbar-item, .navbar-link{
    color: $primary;
}
.navbar-link:not(.is-arrowless)::after{
    border-color: $primary ;
}

.navbar{
  height: 80px !important;
}
.navbar .navbar-burger{
  color:#e3fa12 !important;
  font-size: 3rem !important;
}
.navbar .navbar-item img{
  max-height: 6rem !important;
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


</style>