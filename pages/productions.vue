<template>
    <div class="container is-flex is-flex-direction-column is-flex-grow-3 is-justify-content-space-between" >
       <div v-for="(produccion, index) in producciones" :key="index">
        <big-flayer 
            :bgimage="produccion.bgImage"
            :title="produccion.title"
            :subtitle="produccion.subtitle"
            :sinopsis="produccion.sinopsis"
            :trailer="produccion.trailer"
            :photos="produccion.photos"

        > </big-flayer>
    </div></div>
</template>

<script>
import theatricalProposal from '../components/theatricalProposal.vue';
import bigFlayer
 from '../components/bigFlayer.vue';

 const img = require(`~/assets/teorias_bn.jpg`)
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
                bgImage: require(`~/assets/portada_teorias.png`),
                sinopsis: "Los doctores en todas las ciencias Natalio Motoneta y Panambí  Morphodidius son llevados a un laboratorio para crear una de las fórmulas  más importantes para salvar la humanidad. No están seguros de cómo lograrlo  pero van a intentarlo con todas sus fuerzas, todas sus ideas y sentidos. Enfrentaran el caos con imaginación, juego y poesía. ",
                trailer: "",
                photos: [
                    require(`~/assets/teorias_1.jpg`),
                    require(`~/assets/teorias_2.jpg`),
                    require(`~/assets/teorias_3.jpg`),
                    require(`~/assets/teorias_4.jpg`),
                ],
            },
            {
                title: "Circo Minialtura",
                subtitle: "Combatiendo el aburrimiento",
                bgImage: require(`~/assets/portada_mircoMini.png`),
                sinopsis: "Circo Minialtura, un espectáculo para toda la familia de circo, humor y magia. Natalio y Panambí arman un circo a su medida para que todos seamos ese niño que nos habita, que los niños sean niños, y no dejemos de sorprendernos, reir y sobre todo soñar.",
                trailer: "https://www.youtube.com/embed/8VbfZyb6gjA?si=AdQTZYHL6ROBcT3r",
                photos: [
                    require(`~/assets/circomini_1.JPG`),
                    require(`~/assets/circomini_2.JPG`),
                    require(`~/assets/circomini_3.JPG`),
                    require(`~/assets/circomini_4.jpg`),
                ],
            },
            {
                title: "Envalijados",
                subtitle: "En busca del hilo perdido de la historia",
                bgImage: require(`~/assets/portada_envaliajados.png`),
                sinopsis: "Dos inquietos y divertidos payasos nos invitan a sumergirnos al misterioso mundo que adentra en sus valijas. Natalio y Panambí  dos investigadores de la historia nos guiarán con sus locuras por juegos, magia, música, emociones, vuelos de imaginación y el disfrute de la simpleza de un segundo de sonrisas. Todo para buscar ese hilo perdido de la historia que tanto los inquieta.",
                trailer: "https://www.youtube.com/embed/jkT3pYEhZcg?si=_ivk4SDXdAVHVeMS",
                photos: [
                    require(`~/assets/envaliajdos_1.jpg`),
                    require(`~/assets/envaliajdos_2.jpg`),
                    require(`~/assets/envaliajdos_3.jpg`),
                    // require(`~/assets/teorias_4.jpg`),
                ],
            }
        ]
        }
    }
}
</script>

<style lang="scss">
template {
    height: 100%;
}
// .bgimg {
//     background-image: url('https://placehold.co/600x400/png');
//     background-size: cover; /* Ajusta la imagen para cubrir todo el contenedor */
//     background-position: center; /* Centra la imagen horizontal y verticalmente */
//     height: 300px; /* Establece la altura del contenedor según tus necesidades */
//   }
</style>