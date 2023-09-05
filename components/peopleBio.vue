<template>
    <div class="mb-6">

        <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
            <div class="tile border-fux">
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
                <article class="tile is-child notification is-warning">
                <p class="title">Contacto</p>
                <p class="subtitle">{{ social }}</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-info">
                <p class="title">Biografía</p>
                <p class="subtitle">{{  cv  }}</p>
                <!-- <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure> -->
                </article>
            </div>
            </div>
            <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
                <p class="title">Perpesctiva</p>
                
                <p class="subtitle">Aligned with the right tile</p>
                <div >
                    <div class=" container columns">
                        <div class="column">
                            <p class="subtitle">Misión</p>
                            <p class="content">{{ mision }}</p>
                        </div>
                        <div class="column">
                            <p class="subtitle">Visión</p>
                            <p class="content">{{ vision }}</p>
                        </div>
                    </div>
                </div>
            </article>
            </div>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child notification is-success">
            <div class="content">

                <div class="content">
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



.border-fux{
    border: 2px solid $primary;
}
.is-256x256{
    width: 256px;
    height: 256px;
    
}
</style>