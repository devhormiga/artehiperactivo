<template>
    <section>
        <b-modal id="modalpubli" v-model="isCardModalActive" :width="640" scroll="keep">
                <div class="card-image">
                    <div class="main-title">
                       <h2> Vacaciones de Invierno</h2>
                    </div>
                    <figure class="image">
                        <img src="~/assets/desconcierto_de_payasxs.png" alt="">
                    </figure>
                </div>
            <div class="card">

                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image  is-128x128">
                                <img src="~/assets/logoAH.png" alt="Image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">Desconcierto de Payasxs</p>
                            <p class="subtitle is-6">@artehiperactivo</p>
                        </div>
                    </div>

                    <div class="content">
                        "Jugar con el movimiento y la música es lo que importa. Todes somos parte de esta ola de sonidos. Dos payasxs vienen a dirigir una orquesta que no está. Toman la batuta para dar un desconcierto a puro ritmo. Aparecen algunos instrumentos en escena y otros son el mismo público que  a veces serán  parte de la orquesta."
                        <br></br><a>#vacacionesdeinvierno</a> <a>#clown</a>
                        <br>
                            <div class="hero-body is-flex has-text-centered is-justify-content-center">
                                <a  href="https://es-la.facebook.com/people/Arte-Hiperactivo/100007188108496/" class="navbar-item">
                                    <i class="pt-2"><img src="~/assets/facebook.png" alt="icono de facebook para Arte Hiperactivo"></i>
                                </a>
                                <a  href="https://www.instagram.com/artehiperactivo/?igshid=YmMyMTA2M2Y=" class="navbar-item">
                                    <i class="pt-2"><img src="~/assets/instagram.png" alt="icono de instagram para Arte Hiperactivo"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCmGV-CZhfkLZp6qxloWzdsw"  class="navbar-item">
                                    <i class="pt-2"><img src="~/assets/youtube.png" alt="icono de canal de youtube  para Arte Hiperactivo"></i>
                                </a>
                            </div>
                        <small>15 de Julio 2022</small>
                    </div>
                </div>
            </div>
        </b-modal>
    </section>
</template>

<script>

export default ({
 data() {
            return {
                isCardModalActive: true
            }
        }
})
</script>
<style scoped>
.card-image{
    position: relative;
}
.main-title{
    position: absolute;
    background: #3f4690;
    color:#000000;
    top: 10px;
    right: 0px;
    width: 60%;
    padding: 10px;
    text-align: right;
    font-size: 30px;
    z-index: 5000;
    border: 5px solid #3f4690;
    border-radius: 0px 0px 0px 28px;
}
.card-image:first-child img{
    object-fit: content!important;
    /* width: 100% !important;
    height: 70% !important; */
}
.card {
    /* background: #3f4690 !important; */
    color:#000000 !important;
    /* background:#3f4690 ;
    background: linear-gradient(180deg, #3f4690  0%, rgba(255,255,255,1) 28%); */
    border-top: 5px solid #3f4690;
}
.card .media{
    
    margin-bottom: 0 !important;
    height: 78px !important;
}
.media-content .title {
    color:#3f4690 !important;

}
.media-content .subtitle {
    color:#3f4690 !important;

}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey !important; 
  border-radius: 10px !important;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: red !important; 
  border-radius: 10px !important;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000 !important; 
}
</style>
</style>