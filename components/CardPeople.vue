<template>
    <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="image" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content ">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="miniature" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">{{ name }}</p>
          <p class="subtitle is-6">{{ social }}</p>
        </div>
      </div>
  
      <div class="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Phasellus nec iaculis mauris. 
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
    description: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus nec iaculis mauris.'
    },
    social: {
      type: String,
      default: '@redsocial'
    },
    miniature: {
      type: String,
      default: 'https://bulma.io/images/placeholders/96x96.png'
    },
  }
}
</script>

<style lang="scss" >
@import '~/assets/scss/variables.scss';


</style>