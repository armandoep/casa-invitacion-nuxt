<template>
      <section class="container introCI">
        <h2 class="typeDetails"><span>Love</span></h2>
        <img src="~/assets/img/s1_A.jpg" alt="">
        <p class="content paragraphStyle">Hola, bienvenidos a Casa Invitación, más que una empresa somos una amiga que desea acompañarte en esta etapa tan linda y significativa para ti, creando detalles y recuerdos que acompañen tu celebración.
        </p>
        <h2 class="typeDetails"><span>Custom Made</span></h2>
        <p class="content paragraphStyle">En Casa Invitación siempre buscamos brindar detalles que reflejen tu estilo y sobre todo que se adapten a tu presupuesto, con la calidad que nos ha caracterizado por 17 años.
        </p>
        <img src="~/assets/img/S1_2.jpg" alt="">

        <div class="primaryBtnBig">
            <p>
            Conoce más sobre
            nuestras inivtaciones
            </p>
            <div class="vl"></div>
            <a href="#">Ver Invitaciones</a>
        </div>

    </section>
</template>

<script>
export default {

}
</script>

<style>
/* ================
    7. Intro CI
=================== */
.introCI {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-column-gap: 16px;
    grid-template-rows: repeat(4, auto);
}
/* 7.1 Content Paragraphs */
.introCI p {
    height: max-content;
}
.introCI p:first-of-type{
    grid-column: 9/13;
    grid-row: 2;

    align-self: center;
    margin-right: 32px;
}
.introCI p:nth-of-type(2){
    grid-column: 2/7;
    grid-row: 3;

    transform: translateY(-40px);
}
.content {
    background-color: var(--primary-10);
    outline: 16px solid var(--neutral-00);
    padding: 16px;
}

/* 7.2 Type Details */
.typeDetails{
    font-size:48px;
    font-style: italic;
    color: var(--secondary-50);
}
.introCI h2:first-of-type{
    grid-column: 9/10;
    grid-row: 1;

    transform: translateY(16px);
}
.introCI h2:last-of-type{
    grid-column: 1 / 2;
    grid-row: 2/4;

    white-space: nowrap;
    transform: rotate(-90deg) translate(72px,32px);
    transform-origin: 0 0;

    width:80px;
    align-self: end;

    z-index: 5;
}

/* 7.3 Images */
.introCI img:first-of-type{
    grid-column: 5/9;
    grid-row: 2;
    height: 100%;
    object-fit: cover;
}
.introCI img:last-of-type {
    grid-column: 4/7;
    grid-row: 4;
    transform: translateY(-120px);
    z-index: -1;
    object-fit: cover;
}

/* 7.4 Big Button */
.introCI .primaryBtnBig {
    grid-column: 7/12;
    grid-row: 4;

    align-self: center;
    align-items: center;

    background-color: var(--secondary-50);
    padding: 8px 8px 8px 30px;

    display: flex;

    outline: 8px solid var(--neutral-00);

}
.introCI .primaryBtnBig p {
    line-height: 26px;
    color: var(--secondary-90);
}
.introCI .primaryBtnBig .vl {
    border-left: 2px solid var(--secondary-60);
    align-self: center;

}
.introCI .primaryBtnBig a{
    text-align: center;

    background-color: var(--secondary-50);
    color: var(--secondary-90);
    border: 0;
    padding: 14px 66px;
    font-size: var(--fontSizeMedium);
    font-weight: 600;
}

@media screen and (max-width: 769px) {

/* ================
    T7. Intro CI
=================== */
    /* T7.1 Content Paragraphs */
    .introCI p:first-of-type{
        grid-column: 8/13;
    }
    .introCI p:nth-of-type(2){
        grid-column: 2/9;
        grid-row: 3;

        transform: translateY(0px);
    }
    /* 7.2 Type Details */
    .typeDetails{
        font-size: 48px;
        color: var(--secondary-50);
    }
    .introCI h2:last-of-type{
        grid-column: 1 / 2;
        grid-row: 2/4;

        white-space: nowrap;
        transform: rotate(-90deg) translate(72px,40px);
        transform-origin: 0 0;

        width:80px;
        align-self: end;

        z-index: 5;
    }
    /* T7.3 Images */

    .introCI img:first-of-type{
        grid-column: 3/10;
        grid-row: 2;

        width: 90%;
    }

    .introCI img:last-of-type {

        transform: translateY(-60px);
    }

/* T7.4 Big Button */
    .introCI .primaryBtnBig {
        grid-column: 3/12;
        background-color: var(--secondary-50);
        padding: 8px 8px 8px 16px;

    }
}
/* ================
    M. Media Query Mobile
=================== */
@media screen and (max-width: 426px) {
  /* ================
M7. Section A
=================== */
    .introCI {

        grid-template-columns: repeat(8, 1fr);
        grid-column-gap: 8px;
        grid-template-rows: repeat(6, auto);
    }

/* M7.1 Content Paragraphs */
    .introCI p:first-of-type{
        grid-column: 2/9;
        grid-row: 3;
        transform: translateY(-64px);

    }
    .introCI p:nth-of-type(2){
        grid-column: 1/7;
        margin-left: 16px;
        grid-row: 4;

        transform: translateY(0px);
    }

/* M7.2 Type Details */

    .introCI h2:first-of-type{

        grid-column: 6/9;
        transform: translateY(12px);
    }
    .introCI h2:last-of-type{
        display: none;
    }

/* M7.3 Images */
    .introCI img:first-of-type{
        grid-column: 1/7;
        grid-row: 2;
        width: 100%;
        padding-left: 24px;

    }

    .introCI img:last-of-type {
        grid-column:3/9 ;
        grid-row: 5;
        transform: translateY(-60px);
        width: 100%;
        padding-right: 24px;

    }


/* M7.4 Big Button */
    .introCI .primaryBtnBig {
        grid-column: 1/9;
        grid-row: 6;

        margin: 16px;
        padding: 16px;

        justify-content: center;
    }


    .introCI .primaryBtnBig button{
        padding: 0;

    }
    .introCI .primaryBtnBig p{
        display: none;
    }

    .introCI .vl{
        display: none;
    }
}
</style>
