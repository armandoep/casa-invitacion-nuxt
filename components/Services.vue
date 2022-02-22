<template>
  <section class="services">
        <ul>
            <li>
                <h2>01</h2>
                <div class="servicesAlign">
                    <span class="sContent1">Invitaciones</span>
                    <span class="sContent2">y</span>
                    <span class="sContent3">Diseño</span>
                </div>
            </li>
            <li>
                <h2>02</h2>
                <div class="servicesAlign">
                    <span class="sContent1">Lettering</span>
                    <span class="sContent2">y</span>
                    <span class="sContent3">Caligrafía</span>
                </div>
            </li>
            <li>
                <h2>03</h2>
                <div class="servicesAlign">
                    <span class="sContent1">Consultoría</span>
                    <span class="sContent2">y</span>
                    <span class="sContent3">Talleres</span>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/* ================
    8. Services Area
=================== */
.services {
    width: 100%;
    height: 100%;
    background-image: url(~assets/img/parallax1.jpg );
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    padding: 60px 0;
}

.services ul {
    margin: 0;
    padding: 0;

    width: 100%;
    max-width: 1158px;

    list-style:none;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;


    color: var(--neutral-00);
}
.services li {
    height: 240px;
    width: 368px;


    margin: 8px;
    background-color: var(--primary-90);

    text-transform: uppercase;
    letter-spacing: 5px;


    flex-basis: 368px;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.servicesAlign{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.services h2 {
    font-family: var(--fontFamilyOvo);
    font-size: var(--fontSizeHeaderLarge);
    font-weight: 400;

    transform: translateX(-12px);
}
.services h2::before{
    content: "No.";
    font-size: var(--fontSizeMedium);
    font-family: var(--fontFamilyMontserrat);
    font-weight: 400;

    transform: rotate(-90deg);
    transform-origin: top;

    display: inline-block;
}

@media screen and (max-width: 769px) {
  /* ================
    T9. Services Area
    =================== */
    /* Bodas */
    .productsCI .bodas {
        grid-column: 5/9;
    }

    /* Descripcion */
    .productsCI .description {
        grid-column: 7/12;
    }

    /* 15 Años */
    .productsCI .celeb15 {
        grid-column: 1/7;
        padding-left: 16px;
    }

    /* Graduacion */
    .productsCI .graduation{
        grid-column: 1/6;
        grid-row: 3;
        transform: translate(16px,-40px);
        z-index: 2;
    }

    /* Personalizadas */
    .productsCI .personalized {
        grid-column: 4/9;
    }
}
/* ================
    M. Media Query Mobile
=================== */
@media screen and (max-width: 426px) {
  .services{
        padding-left: 24px;
        padding-right: 24px;
    }
    .services li {
        height: 80px;
        width: 296px;

        flex-direction: row;
        flex-flow: wrap;

        flex-basis: 298px;
        flex-grow: 1;

    }
    .servicesAlign{
        width: 180px;

        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .services h2 {
       width: 120px;
       height: auto;

        transform: translateX(0px);
    }
    .services h2::before{

        transform-origin: top;

        display: inline-block;
    }
    .services span:first-of-type{
        flex-grow: 5;
    }
    .services span:nth-of-type(2) {
        margin-right: 16px;
    }
}
</style>
