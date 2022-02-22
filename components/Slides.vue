<template>
  <section class=" slideshowContainer">

        <div class="mySlide fade" ref="slide" style="display: block;">
            <figure>
                <img src="~/assets/img/slides/slide_1.jpg" alt="first Slide">
            </figure>
            <div class="caption">
                <figcaption>Diseño y creación de invitaciones y detalles únicos para los eventos más importantes.</figcaption>
                <!-- <a href="#" class="primaryBtn">Ver Invitaciones</a> -->
            </div>
        </div>

        <div class="mySlide fade" ref="slide">
            <figure>
                <img src="~/assets/img/slides/slide_2.jpg" alt="first Slide">
            </figure>
            <div class="caption">
                <figcaption>Amor en cada detalle.</figcaption>
                <!-- <a href="#" class="primaryBtn">Ver Invitaciones</a> -->
            </div>
        </div>

        <div class="mySlide fade" ref="slide">
            <figure>
                <img src="~/assets/img/slides/slide_3.jpg" alt="first Slide">
            </figure>
            <div class="caption">
                <figcaption>Caption 3</figcaption>
                <!-- <a href="#" class="primaryBtn">Ver Invitaciones</a> -->
            </div>
        </div>

        <div class="scrollDown">
            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C12.1989 4.5 12.3897 4.57902 12.5303 4.71967C12.671 4.86032 12.75 5.05109 12.75 5.25V8.25C12.75 8.44891 12.671 8.63968 12.5303 8.78033C12.3897 8.92098 12.1989 9 12 9C11.8011 9 11.6103 8.92098 11.4697 8.78033C11.329 8.63968 11.25 8.44891 11.25 8.25V5.25C11.25 5.05109 11.329 4.86032 11.4697 4.71967C11.6103 4.57902 11.8011 4.5 12 4.5ZM18 16.5V7.5C18 5.9087 17.3679 4.38258 16.2426 3.25736C15.1174 2.13214 13.5913 1.5 12 1.5C10.4087 1.5 8.88258 2.13214 7.75736 3.25736C6.63214 4.38258 6 5.9087 6 7.5V16.5C6 18.0913 6.63214 19.6174 7.75736 20.7426C8.88258 21.8679 10.4087 22.5 12 22.5C13.5913 22.5 15.1174 21.8679 16.2426 20.7426C17.3679 19.6174 18 18.0913 18 16.5ZM12 0C10.0109 0 8.10322 0.790176 6.6967 2.1967C5.29018 3.60322 4.5 5.51088 4.5 7.5V16.5C4.5 18.4891 5.29018 20.3968 6.6967 21.8033C8.10322 23.2098 10.0109 24 12 24C13.9891 24 15.8968 23.2098 17.3033 21.8033C18.7098 20.3968 19.5 18.4891 19.5 16.5V7.5C19.5 5.51088 18.7098 3.60322 17.3033 2.1967C15.8968 0.790176 13.9891 0 12 0V0Z" fill=""/>
                </g>
            </svg>
            <p>ES<br>TD</p>
            <div class="vl"></div>
            <p>20<br>03</p>
        </div>

    </section>
</template>

<script>
export default {
  data() {
    return {
      slidesIndex: 0
    }
  },
  mounted(){
    // this.showSlides()
  },
  methods: {
     showSlides(){
        var i;
        // var slides = document.getElementsByClassName("mySlide");
        let slides = this.$el.querySelector('.mySlide')
        console.log(slides)

        for (i = 0; i < slides.length; i++){
            slides[i].style.display =  "none";
        }
        this.slideIndex++;

        if (this.slideIndex > slides.length){
            this.slideIndex = 1
        }

        slides[this.slideIndex-1].style.display = "block"

        setTimeout(showSlides, 8000);
    }
  }

}
</script>

<style>
/* ================
    6. Slideshow
=================== */

.slideshowContainer figure img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
    position: relative;
    justify-content: center;
    align-content: center;
}
.slideshowContainer figcaption {
    font-family: var(--fontFamilyMontserrat);
    font-size: var(--fontSizeHeaderSmall);
    font-weight: 600;
    color: var(--primary-70);

}

/* 6.1 Caption and CTA */
.caption {
    position: absolute;
    top:8em;
    left: 1.5em;
}

/* 6.2 scroll down detail */
.scrollDown {
    width: 64px;
    position: absolute;
    top:85vh;
    left: calc(50vw - 32px);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto 30px 40px ;
}
.scrollDown svg {
    grid-column: 1 / -1;
    justify-self: center;
    fill: var(--primary-60);
}

.scrollDown p{
    grid-row: 3;
    color: var(--primary-60);
    justify-self: center;
}

.scrollDown P:last-child {
    grid-column: 3;
}

/* 6.3 Vertical line detail */
.vl {
    height: 66px;
    grid-row: 2/4;
    grid-column: 2;
    border-left: 2px solid var(--primary-40);
    justify-self: center;
    align-self: end;
  }

.mySlide {
    display: none;
}

/* 6.4 Fading animation */
.fade {
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1.5s;
    animation-name: fade;
    animation-duration: 1.5s;
}

@-webkit-keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}

@keyframes fade {
    from {opacity: .4}
    to {opacity: 1}
}
/* ================
    M. Media Query Mobile
=================== */
@media screen and (max-width: 426px) {
  /* ================
    M6. Slideshow
=================== */
    .slideshowContainer figure img {
        height: 80vh;
    }
/* M6.1 Caption and CTA */
    .caption{
        top:2em;
    }

/* M6.2 scroll down Detail */
    .scrollDown {
        top:75vh;
    }
}
</style>
