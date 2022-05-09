<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
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
        <a class="navbar-item"> Contactos </a>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
          </div>
        </div>
      </div>
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

.navbar-item, .navbar-link{
    color: $primary;
}
.navbar-link:not(.is-arrowless)::after{
    border-color: $primary ;
}
</style>