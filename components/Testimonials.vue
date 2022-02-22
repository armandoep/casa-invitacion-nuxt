<template>
  <section class="container testimonial">
        <div class="testimonialTitle">
            <p>Lo que dicen</p>
            <h2>Nuestros Clientes</h2>
        </div>
        <div class="testimonialOne">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc, proin pharetra. Feugiat massa sollicitudin vestibulum, ultrices in nam nullam. Penatibus vitae morbi lorem netus aenean. Feugiat augue viverra semper elit.</p>
            <span>Mónica Rustian</span>
        </div>
        <div class="testimonialTwo">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc, proin pharetra. Feugiat massa sollicitudin vestibulum, ultrices in nam nullam. Penatibus vitae morbi lorem netus aenean. Feugiat augue viverra semper elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <span>Ana María y Erick</span>
        </div>
        <div class="testimonialThree">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc, proin pharetra. Feugiat massa sollicitudin vestibulum, ultrices in nam nullam. Penatibus vitae morbi lorem netus aenean. Feugiat augue viverra semper elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <span>Laula Coma Abed</span>
        </div>
        <div class="testimonialFour">
            <img src="~/assets/img/Testimonial_img.jpg" alt="">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc, proin pharetra. Feugiat massa sollicitudin vestibulum, ultrices in nam nullam. Penatibus vitae morbi lorem netus aenean. Feugiat augue viverra semper elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <span>Claudia e Ionnis</span>
        </div>

        <div class="testimonialFive">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc, proin pharetra. Feugiat massa sollicitudin vestibulum, ultrices in nam nullam. Penatibus vitae morbi lorem netus aenean. Feugiat augue viverra semper elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <span>Autor Testimonial Cinco</span>
        </div>
        <div class="testimonialQuote">
            <q>Share <br> The Love</q>
        </div>
        <div class="testimonialSix">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc, proin pharetra. Feugiat massa sollicitudin vestibulum, ultrices in nam nullam. Penatibus vitae morbi lorem netus aenean. Feugiat augue viverra semper elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio ac sit nunc,.Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <span>Bea de la Roca</span>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/* ================
    10. Testimonial
=================== */
.testimonial {
    display: grid;
    grid-template-columns: repeat(12, minmax(0px , 100px));
    grid-template-rows: repeat(4,auto);
    align-items: center;
    margin-top: 200px;
    margin-bottom: 200px;
}
.testimonial p{
    color:var(--primary-60);
}
.testimonial span{
    color: var(--secondary-80);
    font-weight: bold;
}
.testimonial q{
    font-family: var(--fontFamilyPlayfair);
    font-size: var(--fontSizeHeaderSmall);
    color: var(--primary-50);
    font-weight: bold;
}

/* 10.1 Testimonial Title*/
.testimonialTitle{
    text-align: center;
    grid-column: 1/6;
    grid-row: 1;
    justify-self: center;
}
.testimonialTitle p {
    color: var(--primary-40);
    font-family: var(--fontFamilyOvo);
    font-size: var(--fontSizeLarge);
}
.testimonialTitle h2{
    font-size: var(--fontSizeHeaderLarge);
    font-family: var(--fontFamilyPlayfair);
    font-style: italic;
    color: var(--primary-60);
}

/* 10.2 Testimonial One */
.testimonialOne{
    grid-column: 6/10;
    grid-row: 1;
    height: 100%;
    padding: 16px;
    border-left: 1px solid var(--primary-30);


}

/* 10.3 Testimonial two */
.testimonialTwo {
    grid-column: 10/13;
    grid-row: 1/3;
    padding: 16px;
    height: 100%;
    border-left: 1px solid var(--primary-30);
}

/* 10.4 Testimonial Three */
.testimonialThree{
    grid-column: 1/4;
    grid-row: 2/4;
    padding: 16px;
    height: 100%;
    border-right: 1px solid var(--primary-30);
    border-top: 1px solid var(--primary-30);
}
/* 10.5 Testimonial Four */
.testimonialFour{
    grid-column: 4/10;
    grid-row: 2/4;
    padding: 16px;
    height: 100%;
    border-top: 1px solid var(--primary-30);
}
 .testimonialFour img {
     width: 100%;
     height: auto;
 }

/* 10.6 Testimonial Five */
.testimonialFive{
    grid-column: 10/13;
    grid-row: 3/4;
    padding: 16px;
    height: 100%;
    border-left: 1px solid var(--primary-30);
    border-top: 1px solid var(--primary-30);
}

/* 10.7 Testimonial Quote */
.testimonialQuote{
    display: flex;
    justify-content: center;
    align-items: center;

    line-height: 36px;

    text-decoration: none;
    grid-column: 1/3;
    grid-row: 4/5;
    text-align: center;
    quotes: none;
    height: 100%;
    width: 100%;
    border-top: 1px solid var(--primary-30);
}

/* 10.8 Testimonial Six */
.testimonialSix{
    grid-column: 3/13;
    grid-row: 4/5;
    padding: 16px;
    height: 100%;

    border-left: 1px solid var(--primary-30);
    border-top: 1px solid var(--primary-30);
}

@media screen and (max-width: 769px) {

   /* ================
    T10. Testimonial
    =================== */

    /* T10.5 Testimonial Four */
    .testimonialFour img {
        width: 100%;
        object-fit: cover;
        height: 300px;
    }

}
/* ================
    M. Media Query Mobile
=================== */
@media screen and (max-width: 426px) {
.testimonial {
        margin-top: 50px;
        margin-bottom: 50px;
        grid-template-columns: repeat(12, minmax(0px , 100px));
        grid-template-rows: repeat(8,auto);
    }

    /* M10.1 Testimonial Title*/
    .testimonialTitle{
        grid-column: 1/-1;
        grid-row: 1;
        padding: 16px;
    }

    /* M10.2 Testimonial One */
    .testimonialOne{
        grid-column: 1/-1;
        grid-row: 2;
        border-left: 0px solid var(--primary-30);
        border-top: 1px solid var(--primary-30);


    }

    /* M10.3 Testimonial two */
    .testimonialTwo {
        grid-column: 1/-1;
        grid-row: 3;

        border-left: 0px solid var(--primary-30);
        border-top: 1px solid var(--primary-30);
    }

    /* M10.4 Testimonial Three */
    .testimonialThree{
        grid-column: 1/-1;
        grid-row: 4;
        border-right: 0px solid var(--primary-30);
        border-top: 1px solid var(--primary-30);
    }
    /* M10.5 Testimonial Four */
    .testimonialFour{
        grid-column:1/-1;
        grid-row: 5;
        border-top: 1px solid var(--primary-30);
    }

    .testimonialFour img {
        width: 100%;
        height: auto;
        padding-bottom: 16px;
    }

    /* M10.6 Testimonial Five */
    .testimonialFive{
        grid-column: 1/-1;
        grid-row: 6;

        border-left: 0px solid var(--primary-30);
        border-top: 1px solid var(--primary-30);
    }

    /* M10.7 Testimonial Quote */
    .testimonialQuote{
        grid-column: 1/-1;
        grid-row: 8;
        padding: 16px;
        border-top: 1px solid var(--primary-30);


    }

    /* M10.8 Testimonial Six */
    .testimonialSix{
        grid-column: 1/-1;
        grid-row: 7;
        border-left: 0px solid var(--primary-30);
        border-top: 1px solid var(--primary-30);
    }
}
</style>
