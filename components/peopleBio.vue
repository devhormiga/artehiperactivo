<template>
    <div>
    <div class=" container columns">
        
        <!-- <div class="column is-3">
            <figure class="image is-256x256">
                <img class="is-rounded" :src="image">
            </figure>
        </div>
        <div class="column is-9">
            <h1>{{ name }}</h1>
            <p>{{ cv }}</p>
            <p>{{ vision }}</p>
            <p>{{ mision }}</p>
            <p>{{  works }}</p>
           <div class="is-flex is-justify-content-space-between">
                <figure class="image is-128x128">
                    <img class="" :src="photos[0]">
                </figure>
                <figure class="image is-128x128">
                    <img class="" :src="photos[1]">
                </figure>
                <figure class="image is-128x128">
                    <img class="" :src="photos[2]">
                </figure>
           </div>

        </div>

         -->
    </div>
    <div class="tile is-ancestor">
        <div class="tile is-vertical is-8">
            <div class="tile">
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
                <p class="title">...tiles</p>
                <p class="subtitle">Bottom tile</p>
                </article>
            </div>
            <div class="tile is-parent">
                <article class="tile is-child notification is-info">
                <p class="title">Middle tile</p>
                <p class="subtitle">With an image</p>
                <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/640x480.png">
                </figure>
                </article>
            </div>
            </div>
            <div class="tile is-parent">
            <article class="tile is-child notification is-danger">
                <p class="title">Wide tile</p>
                <p class="subtitle">Aligned with the right tile</p>
                <div class="content">
                <!-- Content -->
                </div>
            </article>
            </div>
        </div>
        <div class="tile is-parent">
            <article class="tile is-child notification is-success">
            <div class="content">
                <p class="title">Tall tile</p>
                <p class="subtitle">With even more content</p>
                <div class="content">
                <!-- Content -->
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

<style >
/* @import "~/assets/css/variables.scss"; */

/* body {
    background-color: $primary;
} */
.is-256x256{
    width: 256px;
    height: 256px;
    
}
</style>