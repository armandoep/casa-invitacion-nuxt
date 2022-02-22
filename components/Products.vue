<template>
      <section class="productsCI container">
        <div class="bodas">
            <a href="#">
                <img src="~/assets/img/bodas.jpg" alt="">
                <div class="secondaryBtn">
                    Bodas
                </div>
            </a>
        </div>
        <div class="celeb15">
            <a href="#">
                <img src="~/assets/img/15anos.jpg" alt="">
                <div class="secondaryBtn">
                    15 Años
                </div>
            </a>
        </div>
        <div class="description">
            <h2 class="header2">Invitacinones</h2>
            <p class="paragraphStyle">Creamos y diseñamos invitaciones únicas y especiales para cada cliente, siendo siempre  una amiga que toma en cuenta tus ideas, estilo y presupuesto.
            </p>
        </div>
        <div class="graduation">
            <a href="#">
                <img src="~/assets/img/graduacion.jpg" alt="">
                <div class="secondaryBtn">
                    Graduación
                </div>
            </a>
        </div>
        <div class="celebration">
            <a href="#">
                <img src="~/assets/img/celebraciones.jpg" alt="">
                <div href="#" class="secondaryBtn">
                    Celebraciones
                </div>
            </a>
        </div>
        <div class="personalized">
            <a href="#">
                <img src="~/assets/img/personalizadas.jpg" alt="">
                <div class="secondaryBtn">
                    Personalizadas
                </div>
            </a>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/* ================
    9. Products
=================== */
.productsCI{
    display: grid;
    grid-template-columns: repeat(12, minmax(0px , 80px));
    grid-column-gap: 16px;
    grid-template-rows: auto auto 250px 200px;
    margin-top: 150px;
    margin-bottom: 250px;

}
.productsCI img {
    width: 100%;
    max-width: 100%;
}

/* 9.1 Bodas */
.productsCI .bodas {
    justify-self: center;
    grid-auto-rows: max-content;
    grid-column: 4/8;
    grid-row: 1;
}
.productsCI .bodas .secondaryBtn{
    transform: translate(-24px, -40px);
    width: max-content;
}

/* 9.2 Descripcion */
.productsCI .description {
    grid-column: 8/12;
    grid-row: 2;
    transform: translateY(-70px);

}
.productsCI .description p{
    color: var(--primary-60);
}
/* 9.3 15 Años */
.productsCI .celeb15 {
    grid-column: 2/8;
    grid-row: 2;

}
.productsCI .celeb15 a {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
}
.productsCI .celeb15 .secondaryBtn{
    width: max-content;
    transform: translate(-16px, -40px);
}
/* 9.4 Graduacion */
.productsCI .graduation{
    grid-column: 1/5;
    grid-row: 3;
    transform: translateY(-110px);
    z-index: 2;
    padding-left: 16px;
}
.productsCI .graduation img {
    outline: 16px solid var(--neutral-00);
}
.productsCI .graduation .secondaryBtn {
    transform: translateY(-40px);
    width: max-content;
}



/* 9.5 Celebraciones */
.productsCI .celebration{
    grid-column: 7/12;
    grid-row: 3;
    z-index: 2;
}
.productsCI .celebration a:first-child {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.productsCI .celebration img {
    outline: 16px solid var(--neutral-00);
}

.productsCI .celebration .secondaryBtn{
    transform: translate(40px, -40px);
    width: max-content;
}
/* Personalizadas */
.productsCI .personalized {
    grid-column: 4/8;
    grid-row: 4;
    transform: translateY(-130px);
    z-index: 0;
}
.productsCI .personalized .secondaryBtn {
    transform: translate(20px, -40px);
    width: max-content;
}
/* ================
    M. Media Query Mobile
=================== */
@media screen and (max-width: 426px) {
  .productsCI{

        margin-top: 50px;
        margin-bottom: 50px;

        grid-column-gap: 8px;
        grid-template-rows: auto auto auto auto auto ;

    }

    /* Bodas */
    .productsCI .bodas {

        grid-column: 3/12;
        grid-row: 2;
    }

    /* Descripcion */
    .productsCI .description {
        grid-column: 2/12;
        grid-row: 1;
        transform: translateY(0px);
        padding-bottom: 40px;

    }

    /* 15 Años */
    .productsCI .celeb15 {
        grid-column: 2/11;
        grid-row: 3;
        padding: 0px;
    }

    /* Graduacion */
    .productsCI .graduation{
        grid-column: 3/12;
        grid-row: 4;
        transform: translateY(0px);
        padding-left: 0px;
    }

    .productsCI .graduation .secondaryBtn {
        transform: translateY(-40px);
    }
    /* Celebraciones */
    .productsCI .celebration{
        grid-column: 2/11;
        grid-row: 5;
    }

    /* Personalizadas */
    .productsCI .personalized {
        grid-column: 4/10;
        grid-row: 6;
        transform: translateY(-0px);
    }

}
</style>
