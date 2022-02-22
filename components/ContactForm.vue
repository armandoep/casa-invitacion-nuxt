<template>
<div>
  <div class="hero-image-coti"></div>
    <div class="container">
        <div class="contact-div">
            <div class="title">
                <h1 class="title-first">Cotiza con Nosotras</h1>
                <p class="title-subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim labore illo in, vitae quisquam dolore voluptates maiores repudiandae magni.</p>
            </div>
            <form id="contact-form" name="contact-form" @submit.prevent="sendMail" method="post" class="contact-form">
                <div class="form-group item">
                    <input type="text" name="name" id="name" v-model="name" placeholder="" required>
                    <label for="name">Nombre</label>
                </div>

                <div class="form-group item">
                    <input type="email" name="email" id="email" v-model="email" placeholder=" " required>
                    <label for="email">Email</label>
                </div>

                <div class="form-group item">
                    <input type="tel" name="phone-number" id="phone-number" v-model="phoneNumber" placeholder=" " required>
                    <label for="phone-number">Telefono</label>
                </div>

                <div class="form-group item">
                    <input type="date" name="event-date" id="event-date" v-model="date" required>
                    <label for="event-date">Fecha del Evento</label>
                </div>

                <div class="form-group item" style="display:none;">
                    <input type="text" name="card-code" id="card-code" v-model="cardCode" placeholder=" ">
                    <label for="card-code">Codigo de Tarjeta</label>
                </div>

                <div class="form-group item" style="display:none;">
                    <input type="text" name="quantity" id="quantity" v-model="quantity">
                    <label for="quantity">Cantidad</label>
                </div>

                <div class="form-group item-desc">
                    <label for="description">Cuentanos Más</label>
                    <textarea type="text" name="description" id="description" v-model="description" required></textarea>
                </div>

                <div class="item-call">
                    <label for="call-request"><input type="checkbox" name="call-request" id="call-request" v-model="call"> Deseas que te llamemos?</label>
                </div>
                <input type="hidden" name="action" value="process_form">
                <div class="form-group">
                    <recaptcha />
                </div>
                <span style="display:none;" id="">Por favor chequee el captcha</span>
                <button type="submit" class="primaryBtn" name="btn-submit" id="btn-submit">Solicitar</button>

            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phoneNumber: "",
      date: "",
      cardCode: "",
      quantity: "",
      description: "",
      call: "",
    }
  },
  methods: {
    async sendMail() {
      try {
        const token = await this.$recaptcha.getResponse()
        if (token) {
          console.log(this.name)
          console.log(this.email)
          console.log(this.phoneNumber)
          console.log(this.date)
          console.log(this.cardCode)
          console.log(this.quantity)
          console.log(this.description)
          console.log(this.call)
        }

      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
/* ==============
    Contact Form
================*/

.hero-image-coti {
    background-image: url(/img/contact-hero-image.jpg);
    width: auto;
    height: 258px;
}

.contact-div {
    background-color: var(--neutral-00);
    display: grid;
    transform: translate(0, -4.125rem) scale(1);
}


.title {
    max-width: 526px;
    grid-column: auto;
    text-align: center;
    justify-self: center;
    transform: translate(0, -2.125rem) scale(1);
}

.title-first {
    font-family: var(--fontFamilyPlayfair);
    font-style: italic;
    font-size: var(--fontSizeHeaderXLarge);
    color: var(--primary-60);
}

.title-subtitle {
    margin-top: 4px;
    font-family: var(--fontFamilyMontserrat);
    color: var(--primary-70);
    font-size: var(--fontSizeMedium);
}

.contact-form {
    margin-top: 30px;
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 16px;
}

.item {
    margin-top: 16px;
    display: grid;
    grid-template-rows: auto auto;
    position: relative;
    height: 61px;
    align-items: end;
    color: var(--primary-70);
    font-size: var(--fontSizeMedium);
}

.item label {
    font-size: var(--fontSizeMedium);
    position: absolute;
    top: 10px;
    left: 0;
    transition: ease all 0.2s;
}

.item input:focus ~ label, .item input:valid ~ label, .item input:not(:placeholder-shown) ~ label{
    top: -20px;
}


.item-desc {
    display: grid;
    grid-template-rows: auto auto;
    grid-column: 1 / span 2;
    height: 153px;
    margin-top: 16px;
    color: var(--primary-70);
    font-size: var(--fontSizeMedium);
}


.item-call {
    display: grid;
    grid-column: 1 / span 2;
    height: 61px;
    align-items: end;
    color: var(--primary-70);
    font-size: var(--fontSizeSmall)
}

.contact-form input {
    font-size: var(--fontSizeMedium);
    border: none;
    outline: none;
    border-bottom: 1px solid var(--primary-70);
    font-family: var(--fontFamilyMontserrat);
    display: block;
}


.contact-form textarea {
    font-size: var(--fontSizeMedium);
    border: none;
    outline: none;
    border-bottom: 1px solid var(--primary-70);
    font-family: var(--fontFamilyMontserrat);
}

.item input[type='checkbox'] {
    display: inline;
}

.moreInfo p{
    margin-bottom: 8px;
    color: var(--primary-60);
}
.moreInfo a {
    color: var(--primary-60);
    padding-bottom: 4px;
}
@media screen and (max-width: 769px) {

/* ==============
    Contact Form
    ================*/

    .contact-div {
        margin-left: 24px;
        margin-right: 24px;
    }

    .moreInfo{
        grid-column: 10/13;
        grid-row: 1/3;
        border-left: 1px solid var(--primary-30);


        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 16px;
        padding-right: 8px;


    }
    .moreInfo p{
        font-size: var(--fontSizeSmall);
    }
    .moreInfo a{
        font-size: var(--fontSizeSmall);
    }
}
/* ================
    M. Media Query Mobile
=================== */
@media screen and (max-width: 426px) {
  .contact-form {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        grid-column-gap: 16px;
    }

    .contact-div .primaryBtn {
        border: 0;
        margin-top: 24px;
    }
}
</style>
