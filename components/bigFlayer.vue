<template>

    <!-- en todos los casos comprobar si una propiedad viene vacia usar la que este por defecto
    v-if + algo a investigar -->
    <div class="big-flayer-config mb-5">
        <section  class="hero mx-5 is-medium bgimg" :style="imageUrl">
            <div class="hero-body">
                <p class="title font-white">
                    {{ title }}
                </p>
                <p class="subtitle font-white">
                    {{ subtitle }}
                </p>
            </div>
        </section>
        <b-collapse :open="false" :position="is-bottom" aria-id="contentIdForA11y1" class="mx-5">
            <template #trigger="props" >
                <b-button
                    class="button-style"
                    :label="!props.open ? 'MÄS' : 'MENOS' "
                    aria-controls="contentIdForA11y1"
                    :aria-expanded="props.open" 
                    size="is-large"
                    expanded 
                    :icon-right="!props.open ? 'menu-down' : 'menu-up'">

                </b-button>
            </template>
            <article class="message  local-config">

                <div class="mb-5">
                    <div class="">
                        <div class="is-flex is-flex-direction-column">
                            <div class="" >
                                <div class="message-body font-white">
                                   <p class="subtitle">SInopsis</p>
                                    <p class="content">{{ sinopsis }}</p>
                                </div>
                            </div>
                            <div class="columns is-multiline">
                                <div v-if="trailer != ''" class=" column is-three-fifths is-offset-one-fifth">
                                    <figure class="image ">
                                        <iframe class="has-ratio proporcion"  :src="trailer" frameborder="0" allowfullscreen></iframe>
                                    </figure>
                                </div>

                                <div v-if="photos" class=" column is-full">
                                    <div id="miniGalery" class="is-flex  mx-4">
                                            <!-- agregar accesivilidad a las iamgenes -->
                                            <figure class="image img-config mx-2"  v-for="(image, index) in photos" :key="index">
                                                <!-- <img :src="require(`@/assets/${image}`)"> -->
                                                <img :src="image">

                                            </figure>

                                        </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </article>
        </b-collapse>
    </div>
</template>

<script>
export default {
    props : {
        bgimage: {
            type: String,
            default: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/53CC/production/_103125412_the-defender.jpg'
        },
        title: {
            type: String,
            default: 'Titulo de la obra'
        },
        subtitle: {
            type: String,
            default: 'Subitulo de la obra'
        },
        sinopsis: {
            type: String,
            default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque."
        },
        photos:{
            type: Array,
            default: [
                'https://bulma.io/images/placeholders/640x320.png',
                'https://bulma.io/images/placeholders/640x320.png',
                'https://bulma.io/images/placeholders/640x320.png'
        
            ]
        },
        trailer: {
            type: String,
            default: "https://www.youtube.com/embed/YE7VzlLtp-4"
        }
    },
    computed:{
         imageUrl() {
            return {"background-image": "url('"+this.bgimage+"')"}
         }

    },
    methods :{
        imgRequiere(image){

            return require(`@/assets/${image}`)
         }
    }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

@mixin flex-direction-responsive($direction-mobile, $direction-desktop) {
  flex-direction: $direction-mobile;

  @media screen and (min-width: 768px) {
    flex-direction: $direction-desktop;
  }
}
    #miniGalery {
        height: 100%;
        @include flex-direction-responsive(column, row);
    }
    .big-flayer-config{
        // border: 1px solid $gray-dark;
        margin-bottom: 1rem;
        padding: 0px;
    }
    .bgimg {
        // background-image: url('{{ bgimage }}');
        background-size: cover; /* Ajusta la imagen para cubrir todo el contenedor */
        background-position: center; /* Centra la imagen horizontal y verticalmente */
        height: 300px; /* Establece la altura del contenedor según tus necesidades */
    }
    .button-style{
        transition: 1s;

        color: $text-primary;
        background-color: transparent;
        border: 5px ;
        border-bottom: 1px solid $primary;
        // border: 0px;
    }
    .button-style:hover{
        transition: 1s;
        transition-timing-function: ease-out; 
        background-color: #ea2a5d2a !important;
        letter-spacing: 2rem;
        font-weight: 900;
    }
 
    .local-config{
        background-color: #7b686d24 !important;
        color: #ffffff !important;
    }
    .img-config{
        width: auto;
        max-width: 90%;
    }
    .img-config img{
        object-fit: content;
    }
    .proporcion{
        width: 100%;
        height: 420px;

    }


 
</style>