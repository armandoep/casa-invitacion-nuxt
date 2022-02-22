<template>
  <header>
        <div class="container">
            <div class="logo"><a href="/"></a></div>
            <input type="checkbox" id="nav-toggle" class="nav-toggle">

            <nav class="mainMenu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                    <!-- <li><a href="#">Recursos</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Sobre Nosotros</a></li>
                    <li><a href="#">Cotizar</a></li> -->
                </ul>
            </nav>

            <nav class="socialMenu">
                <ul>
                    <li><a href="tel:2332-6803">Tel: 2332-6803</a></li>
                    <li><a target="_blank" href="https://www.waze.com/es/live-map/directions/guatemala/guatemala/ciudad-de-guatemala/casa-invitacion?place=ChIJyXUBuHGjiYUR2MJFMOotNuk&utm_campaign=waze_website&utm_medium=website_menu&utm_source=waze_website"><img src="~/assets/img/ico_waze.svg" alt="Ubicación Casa Invitacion"></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/casainvitaciongt/"><img src="~/assets/img/ico_instagram.svg" alt="Instagram"></a></li>
                    <li><a target="_blank" href="https://www.facebook.com/casainvitacion"><img src="~/assets/img/ico_facebook.svg" alt="Facebook"> </a></li>
                    <li><a target="_blank" href="www.pinterest.com/cinvitacion"><img src="~/assets/img/ico_pinterest.svg" alt="Pinterest" ></a></li>
                    <li><a target="_blank" href="https://wa.me/+50247984631?text=Hola%20estoy%20interesado%20en%20cotizar%20con%20ustedes."><img src="~/assets/img/ico_whatsapp.svg" alt="Whatsapp"></a></li>
                </ul>
            </nav>


            <label for="nav-toggle" class="nav-toggle-label">
                <span></span>
            </label>

        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>
/* ================
   5. Header
=================== */

header {
    position: fixed;
    padding: 0 0 .5em 0;
    width: 100%;
    background-color: var(--neutral-00);
    z-index: 999;
    display: flex;
    justify-content: center;
}
header ul {
    margin: 0;
    padding: 0;
    list-style: none;
}
header a {
    color: var(--primary-70);
    text-decoration: none;
    font-size: var(--fontSizeSmall);
    white-space: nowrap;
}
header a:hover {
    color: var(--primary-40);

}


/* 5.1 Header Container */
header .container {
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: 80px;
    align-content: center;
    padding-left: 24px;
    padding-right: 24px;
}
header .container::after {
    content: " ";
    height: 1px;
    background: var(--primary-30);
    width: 100%;
    grid-column: 1/-1;
}

/* 5.2 Logo */
.logo {
    grid-column: 1;
    width: 272px;
    background-image: url(~/assets/img/logoCI.svg);
    background-repeat: no-repeat;
    background-position-y: center;
}
.logo a::after {
    display: block;
    content: " ";
    width: 272px;
    height: 100%;
}


/* 5.3 Menu Styling */
.mainMenu {
    grid-column: 2;
}
.mainMenu ul {
    height: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.mainMenu li {
    margin-left: 1em;
}


/* 5.4 Social Media Area Styling*/
.socialMenu {
    grid-column: 3;
    grid-row: 1;
    align-self: center;
}
.socialMenu ul {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-template-rows: repeat(2, auto);
    grid-column-gap: 8px;
    grid-row-gap: 4px;
}
.socialMenu li:first-child {
    grid-column: 1/-1;
    text-align: right;
}
.socialMenu img {
    width: 20px;
    height: 20px;
}


/* 5.5 Hidding the Mobile menu */
.nav-toggle {
    display: none;
}
.nav-toggle-label {
    display: none;
}

/* ================
    T. Media Query Tablet
=================== */

@media screen and (max-width: 769px) {


/* ================
   T5. Header
=================== */

/* T5.1 Header Container */

    header .container {
        grid-template-columns: 1fr auto;
        grid-template-rows: 1fr 1fr;
        padding-top: 8px;
    }


/* T5.3 Menu Styling */

    .mainMenu {
        grid-row: 2;
        grid-column: 1 / -1;
    }
    .mainMenu ul{
        margin-bottom: 8px;
        justify-content: center;
    }
    .mainMenu li {
        padding: 8px 0px;
        margin-left: 16px;
    }

/* T5.4 Social Media Area Styling */
    .socialMenu {
        grid-row: 1;
        grid-column: 2;
    }


/*  T5.5 Hidding the Mobile menu   */

    .nav-toggle-label {
        display: none;
    }
}
/* ================
    M. Media Query Mobile
=================== */
@media screen and (max-width: 426px) {
   body {
       margin-bottom: 48px;
   }
/* M5. Header */
    header {
        bottom: 0;
        padding-bottom: 0px;
    }
    header nav a {
        font-size: var(--fontSizeMedium);
    }
/* M5.1 Header Container */
    header .container {
        grid-template-columns: 1fr auto;
        grid-template-rows: auto auto auto;
        margin-bottom: 0px;
        padding-top: 0;
    }
    /* Changing the border line posititon */
    header .container::after {
        height: 0px;
    }
    header .container::before {

        content: " ";
        height: 1px;
        background: var(--primary-30);
        width: 100%;
        grid-column: 1/-1;
        grid-row: 3;
    }


/* M5.2 Logo */
    .logo {
        background-image: url(~assets//img/LogoCI_Ml.svg);
        width: 180px;
        grid-row: 3;
        grid-column: 1;
    }
    .logo a::after {
        width: 178px;
        height: 40px;
    }


/* M5.3 Main Menu */
    .mainMenu ul {
        margin: 0px;
        flex-direction: column;
        justify-content: flex-start;
        flex-wrap: nowrap;
        align-items: stretch;
        max-height: 0px;
        overflow: hidden;
        opacity: 0;
        transition:
            opacity 250ms ease-in-out 250ms,
            max-height 350ms ease-in-out;
    }
    .mainMenu li {
        margin-bottom: 16px;
        margin-left: 0;

    }


/* M5.4 Social Menu */
    .socialMenu {
        grid-row: 1;
        grid-column: 1 / -1;
        align-self: center;
        justify-self: center;
    }
    .socialMenu ul {
        grid-column-gap: 16px;
        grid-row-gap: 8px;
        margin-bottom: 0px;
        overflow: hidden;
        max-height: 0px;
        opacity: 0;
        transition:
            opacity 250ms ease-in-out 250ms,
            max-height 250ms ease-in-out,
            margin 250ms ease-in-out;
    }
    .socialMenu ul li:first-child {
        text-align: center;
    }



/* M5.5 Hamburguer menu Draw */

    .nav-toggle-label {
        width: 24px;
        height: 24px;
        grid-column: 2;
        grid-row: 3;
        align-self: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .nav-toggle-label span,
    .nav-toggle-label::before,
    .nav-toggle-label::after {
        content: ' ';
        display: block;
        background-color: var(--primary-70);
        border-radius: 2px;
        height: 2px;
        width: 18px;
        transition: all ease-in-out 200ms;
    }
    .nav-toggle-label::before {
        transform: translateY(-3px);
    }
    .nav-toggle-label::after {
        transform: translateY(3px);
    }

/*  M5.5.1 Hamburguer menu animation */
    .nav-toggle:checked~.nav-toggle-label::after {
        transform: rotate(-45deg) translate(0px, -2.5px);
    }
    .nav-toggle:checked~.nav-toggle-label::before {
        transform: rotate(45deg) translate(0px, 3px);
    }
    .nav-toggle:checked~.nav-toggle-label span {
        width: 0px;
    }


/* M5.6 Menu Open & Close Interaction */

/* Search if the checkbox is :checked and open or closes menu */

    .nav-toggle:checked~.mainMenu {
        transform: scale(1, 1);
    }
    .nav-toggle:checked~.mainMenu ul {
        opacity: 1;
        visibility: visible;
        max-height: 500px;
    }
    .nav-toggle:checked~.socialMenu ul {
        opacity: 1;
        max-height: 100px;
        margin-bottom: 16px;
        margin-top: 16px;
    }
}
</style>
