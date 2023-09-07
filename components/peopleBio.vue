<template>
    <div class="mb-6">

        <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
            <div class="tile ">
            <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-primary">
                    <div class="">
                        <figure class="image is-256x256">
                            <img class="is-rounded" :src="image">
                        </figure>
                    </div>
                    <p class="title">{{ name }}</p>
                    <p class="subtitle">{{skill}}</p>
                </article>
                <article class="tile is-child notification bg-black border-fux font-white">
                <p class="title">Contacto</p>
                <p class="subtitle">{{ social }}</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification bg-black border-dark">
                <p class="title">Biografía</p>
                <p class="subtitle">{{  cv  }}</p>
                <!-- <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure> -->
                </article>
            </div>
            </div>
            <div class="tile is-parent">
            <article class="tile is-child notification bg-black">
                <p class="title">Perpesctiva</p>
                
                <p class="subtitle">Aligned with the right tile</p>
                <div >
                    <div class=" container columns">
                        <div class="column ">
                            <article class="message is-danger local-config">
                                <div class="message-body font-white">
                                    <p class="subtitle">Misión</p>
                                    <p class="content">{{ mision }}</p>                                </div>
                                </article>
                            
                            
                        </div>
                        <div class="column">
                            <article class="message is-danger local-config">
                                <div class="message-body font-white">
                                   <p class="subtitle">Visión</p>
                                    <p class="content">{{ vision }}</p>
                                </div>
                            </article>

                        </div>
                    </div>
                </div>
            </article>
            </div>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child notification bg-black border-dark">
            <div class="">

                <div class="">
                    <!-- agregar accesivilidad a las iamgenes -->
                    <figure class="image is-4by3">
                        <img :src="photos[0]">
                    </figure>
                    <figure class="image is-4by3">
                        <img :src="photos[1]">
                    </figure>
                    <figure class="image is-4by3">
                        <img :src="photos[2]">
                    </figure>
                </div>
            </div>
            </article>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        image:  {
           type: String,
            default: 'https://bulma.io/images/placeholders/1280x960.png'
        },
        name: {
           type: String,
           default: 'Dmitri Hiperactivo'
        },
        skill: {
            type: String,
            default: 'las mejores habiulidades'
        },
        cv: {
           type: String,
           default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.'
        },
        vision: {
            type: String,
            default: 'default Vision'
        },
        mision: {
            type: String,
            default: 'default Mision'
        },
        works:{
            type: String,
            default: 'muchos laburitos'
        },
        social: {
           type: String,
           default: '@redsocial'
        },
        photos:{
            type: Array,
            default: [
                'https://bulma.io/images/placeholders/1280x960.png',
                'https://bulma.io/images/placeholders/1280x960.png',
                'https://bulma.io/images/placeholders/1280x960.png'
        
            ]
        }


  }
}
</script>

<style  lang="scss">
@import '~/assets/scss/variables.scss';

.local-config{
    background-color: #ea2a5d24 !important;
    color: #ffffff !important;
}

.border-fux{
    border: 2px solid $primary;
}
.border-dark{
    border: 2px solid $gray-dark;
}
.border-gray{
    border: 2px solid $gray;
}
.bg-dark{
    background-color: $gray-dark;
}

.bg-black{
    background-color: #000;
}
.bg-fux{
    background-color: $secundarybg;
}
.font-white{
    color: #fff;
}
.is-256x256{
    width: 256px;
    height: 256px;
    
}
</style>