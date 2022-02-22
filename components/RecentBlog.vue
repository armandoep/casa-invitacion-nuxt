<template>
  <section class="container recentPostSection">
        <h2 class="header2">Publicaciones del Blog</h2>
        <div class="recentPost">
            <div class="post">
                <img src="~/assets/img/entry-1.jpg" alt="">
                <p class="abstract">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
                </p>
            </div>
            <div class="post">
                <img src="~/assets/img/entry-2.jpg" alt="">
                <p class="abstract">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>
/* ================
    13. Recent Blog Post
=================== */

.recentPostSection {
    display: flex;
    flex-direction: column;
}
.recentPostSection h2 {
    padding-left: 16px;
}
.recentPost{
    display: flex;
    flex-direction: row;
}
.post{
    margin: 16px;

}
.post img{
    width: 100%;
    object-fit: contain;
}
/* ================
    M. Media Query Mobile
=================== */
@media screen and (max-width: 426px) {
  .recentPost{
        display: flex;
        flex-direction: column;
    }
}
</style>
