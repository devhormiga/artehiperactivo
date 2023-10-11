<template>
    <div class="container">
        <div class="columns">
            <div class="column is-3">
                <nuxt-link to="panambi">
                    <CardPeople />
                </nuxt-link>
            </div>
            <div class="column is-6">
                <div class="section">
                    <h1 class="title font-fux">La Compania</h1>
                    <p class="is-size-3">
                        Con el circo sobre los pies que nos llevan día a día a vivir la vida. Con el circo que atraviesa nuestras vidas queremos compartir con chicos y grandes el derecho al arte, la expresión, la imaginación, el juego.

                        Los barrios, las escuelas, distintos espacios públicos son escenarios sociales significativos. En estos espacios se conjuga la identidad, la ideología, la sociabilidad. Son espacios de construcción.

                        El circo es atravesado por lo social y lo educativo. Por medio de la diversión transmite reglas, propone objetivos, participación, acción, compartir. Es un lenguaje expresivo. Un espacio de comunicación directa multidiciplinaria donde se mezcla la música, la danza, la acrobacia, la teatralidad, malabares y el juego.

                        Desde el 2013 en la ciudad de La Plata- Buenos Aires, Pamela Suarez y Diego Vilardebó. La primera experiencia fue del 16 al 20 de Octubre en el Elemental 6to Festival de Circo- Posadas Misiones- Argentina. Después compartimos animaciones de cumpleaños, la organización de una Varieté circense el 6 de diciembre en La Plata- Buenos Aires. Llegó el verano y nos enfrentamos al escenario de la fiesta de Carnaval de Meridiano V, en la Estación Provincial en La Plata los primeros días de marzo del 2014. 

                        En pleno principio del mes de mayo de 2014, ArteHiperactivo se une con Cirko Sincamarín y formamos “Seis Pies” para salir a caminar Latinoamérica. Con Seis Pies anduvimos por plazas, parques y escuelas primero en Salta despúes Bolivia (Sucre, Cochabamba, La Paz, Copacabana) y Perú (Arequipa y Lima).

                        En junio de 2014 vuelve a quedar ArteHiperactivo en Lima- Perú trabajando en la producción de la temporada de invierno del Circo Munduta hasta fines de julio.

                        En los días de agosto y septiembre caminando Ecuador.

                        Presentaciones en Ecuador (octubre y noviembre de 2014)

                        Microtetaro GYE - Guayaquil 8, 9 y 10 de octubre de 2014

                        Presentaciones en La Fábrica - Guayaquil 3 y 4 de octubre de 2014

                        Presentaciones en Quito - Teatro en casa 14/11/2014

                        Mundo Juvenil 16/11/14 y 23/11/2014 (Quito)

                        La Karakola 22/11/2014 (Quito)

                        Participación y dictado de talleres de clown y acrobacia en tela en el Primer Encuentro de Circo y Pedagogía en Loja - 4, 5 y 6 de diciembre de 2014

                        </p>
                </div>
            </div>
            <div class="column is-3">
                <nuxt-link to="Natalio">
                    <CardPeople />
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
import CardPeople from "../components/CardPeople.vue"

export default{
    components: {
        CardPeople
    }
}
</script>

<style lang="scss">

    p {
        font-size: 18px;
    }
</style>