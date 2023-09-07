<template>
    <div class="container is-flex is-flex-direction-column is-flex-grow-3">
        <big-flayer></big-flayer>
        <big-flayer></big-flayer>
        <big-flayer></big-flayer>
        <big-flayer></big-flayer>
    </div>
</template>

<script>
import theatricalProposal from '../components/theatricalProposal.vue';
import bigFlayer
 from '../components/bigFlayer.vue';
export default{
    components: {
        theatricalProposal,
        bigFlayer
    }
}
</script>

<style lang="scss">
// .bgimg {
//     background-image: url('https://placehold.co/600x400/png');
//     background-size: cover; /* Ajusta la imagen para cubrir todo el contenedor */
//     background-position: center; /* Centra la imagen horizontal y verticalmente */
//     height: 300px; /* Establece la altura del contenedor según tus necesidades */
//   }
</style>