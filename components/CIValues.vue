<template>
      <section class="container ciValue">
      <div class="valueOne"><img src="~/assets/img/ValueOne.jpg" alt=""></div>
      <div class="valueScript"><img src="~/assets/img/valueScript.png" alt=""></div>
      <div class="valueTwo"><img src="~/assets/img/ValueTwo.jpg" alt=""></div>
      <div class="valueThree"><img src="~/assets/img/ValueThree.jpg" alt=""></div>
      <h2 class="valueDetails">Love Details</h2>
      <div class="valueFour"><img src="~/assets/img/ValueFour.jpg" alt=""></div>
      <a href="#" class="primaryBtn"> Cotiza Con Nosotros </a>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/* ================
    11. Casa Invitación Values
=================== */

.ciValue{
    display: grid;
    grid-template-columns: repeat(12, minmax(0px , 100px));
    grid-template-rows: repeat(11,auto);
    align-items: center;
    grid-gap: 16px;
}
.ciValue img{
    width: 100%;
    outline: 16px solid var(--neutral-00);
}
.valueOne{
    grid-column: 4/8;
    grid-row: 1/4;
}

.valueScript {
    grid-column: 9/11;
    grid-row: 2;
}

.valueTwo{
    grid-column: 7/12;
    grid-row: 3/6;
}
.valueThree{
    grid-column: 2/7;
    grid-row: 5/8;
}
.valueDetails{
    grid-column: 1;
    grid-row: 6;
    font-size: var(--fontSizeHeaderXXLarge);
    color: var(--secondary-50);
    white-space: nowrap;
    transform: rotate(-90deg) translate(-72px,32px);
    transform-origin: 0 0;
}
.valueFour{
    grid-column: 6/11;
    grid-row: 7/11;
}

.ciValue a{
    text-align: center;
    grid-column: 5/9;
    grid-row: 9;
}
@media screen and (max-width: 769px) {

       /* ================
    T11. Casa Invitación Values
    =================== */
    .ciValue a{

        grid-column: 4/10;
        grid-row: 9;
    }

}
/* ================
    M. Media Query Mobile
=================== */
@media screen and (max-width: 426px) {
  .ciValue{

        grid-gap: 0px;
        row-gap: 16px;
    }
    .ciValue img{
        width: 100%;
        outline: 16px solid var(--neutral-00);
    }
    .valueOne{
        grid-column: 1/9;
        grid-row: 2/5;
    }

    .valueScript {

        grid-column: 4/10;
        grid-row: 1;
    }

    .valueTwo{
        grid-column: 5/13;
        grid-row: 4/7;
    }
    .valueThree{
        grid-column: 1/9;
        grid-row: 7/10;
    }
    .valueDetails{
        display: none;
    }
    .valueFour{
        grid-column: 4/13;
        grid-row: 9/13;
    }

    .ciValue a{
        grid-column: 2/12;
        grid-row: 13;
    }
}
</style>
