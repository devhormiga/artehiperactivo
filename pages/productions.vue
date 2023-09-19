<template>
    <div class="container is-flex is-flex-direction-column is-flex-grow-3 is-justify-content-space-between">
        <big-flayer 
            :bgimage="require(`~/assets/${producciones[0].bgImage}`)"
            :title="producciones[0].title"
            :subtitle="producciones[0].subtitle"
            :sinopsis="producciones[0].sinopsis"
            :trailer="producciones[0].trailer"
            :photos="producciones[0].photos"

        ></big-flayer>
        <!-- <big-flayer></big-flayer>
        <big-flayer></big-flayer>
        <big-flayer></big-flayer> -->
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
    },
    data () {
        return {
            producciones: [
            {
                title: "Teorías de mentes Payasas",
                subtitle: "la formula de la felicidad eterna",
                bgImage: "teorias_bn.jpg",
                sinopsis: "Los doctores en todas las ciencias Natalio Motoneta y Panambí  Morphodidius son llevados a un laboratorio para crear una de las fórmulas  más importantes para salvar la humanidad. No están seguros de cómo lograrlo  pero van a intentarlo con todas sus fuerzas, todas sus ideas y sentidos. Enfrentaran el caos con imaginación, juego y poesía. ",
                // trailer: "",
                photos: [
                    "teorias_1.jpg",
                    "teorias_2.jpg",
                    "teorias_3.jpg",
                    "teorias_4.jpg"
                ],
            },
            {
                title: "Teorías de mentes Payasas",
                subtitle: "",
                bgImage: "teorias_bn.png",
                sinopsis: "",
                trailer: "",
                photos: [
                    "teorias_1.png",
                    "teorias_2.png",
                    "teorias_3.png",
                    "teorias_4.png"
                ],
            },
            {
                title: "Teorías de mentes Payasas",
                subtitle: "",
                bgImage: "teorias_bn.png",
                sinopsis: "",
                trailer: "",
                photos: [
                    "teorias_1.png",
                    "teorias_2.png",
                    "teorias_3.png",
                    "teorias_4.png"
                ],
            }
        ]
        }
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