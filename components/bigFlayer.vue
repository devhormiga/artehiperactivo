<template>
    <div class="big-flayer-config">
        <section :style="imageUrl" class="hero mx-5 is-medium bgimg">
            <div class="hero-body">
                <p class="title">
                    {{ title }}
                </p>
                <p class="subtitle">
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

                <div class="tile is-ancestor">
                    <div class="tile  is-12">
                        <div class="tile">
                            <div class="tile is-parent is-vertical is-8" >
                                <div class="message-body font-white">
                                   <p class="subtitle">SInopsis</p>
                                    <p class="content">{{ sinopsis }}</p>
                                </div>
                                <div class="tile is-child ">

                                    <figure class="image ">
                                         <iframe class="has-ratio" width="640" height="360" :src="trailer" frameborder="0" allowfullscreen></iframe>
                                    </figure>
                                </div>
                            </div>
                            <div class="tile ">
                                <article class="tile is-child is-parent">
                                    <div class="">
                                        <!-- agregar accesivilidad a las iamgenes -->
                                        <figure class="image img-config">
                                            <img :src="photos[0]">
                                        </figure>
                                        <figure class="image img-config">
                                            <img :src="photos[1]">
                                        </figure>
                                        <figure class="image img-config">
                                            <img :src="photos[2]">
                                        </figure>
                                    </div>
                                </article>
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
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

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
</style>