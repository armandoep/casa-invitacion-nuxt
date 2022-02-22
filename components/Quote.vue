<template>
  <section class="container bigQuote">

        <div class="cresta">
            <img src="~/assets/img/Cresta.svg" alt="Decoración de flores">
        </div>
        <div class="quoteText">
            <h2>Qué bonito es cuando alguien se acuerda de lo que le contaste, lo que te gusta y lo que no.<br>
                No hay detalle más lindo que la atención.</h2>
        </div>

        <div class="firma">
            <img src="~/assets/img/Firma.png" alt="Firma Jimena">
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/* ================
    12. Quote
=================== */
.bigQuote{

    display: grid;
    grid-template-columns: auto minmax(0px , 900px) auto;
    grid-template-rows: auto auto auto;
    justify-items: center;
    padding: 16px;
    margin-top: 100px;
    margin-bottom: 100px;
}
.cresta {
    grid-column: 2;
    grid-row: 1;
}
.cresta img{
    width: 100%;
}
.quoteText{
    grid-column: 2;
    grid-row: 2;
}
.quoteText h2{
    font-size: var(--fontSizeHeaderMedium);
    font-family: var(--fontFamilyPlayfair);
    font-weight: 500;
    text-align: center;
    color: var(--primary-60);
}

.firma {
    grid-column: 2;
    grid-row: 3;
}
/* ================
    M. Media Query Mobile
=================== */
@media screen and (max-width: 426px) {}
</style>
