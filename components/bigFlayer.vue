<template>
    <div class="conmtainer">
        <section :style="imageUrl" class="hero m-5 is-medium bgimg">
            <div class="hero-body">
                <p class="title">
                    {{ title }}
                </p>
                <p class="subtitle">
                    {{ subtitle }}
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    props : {
        bgimage: {
            type: String,
            default: 'https://placehold.co/600x400/png'
        },
        title: {
            type: String,
            default: 'Titulo de la obra'
        },
        subtitle: {
            type: String,
            default: 'Subitulo de la obra'
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
    .bgimg {
        // background-image: url('{{ bgimage }}');
        background-size: cover; /* Ajusta la imagen para cubrir todo el contenedor */
        background-position: center; /* Centra la imagen horizontal y verticalmente */
        height: 300px; /* Establece la altura del contenedor según tus necesidades */
    }
</style>