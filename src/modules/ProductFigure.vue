<template>
<div class="product-figure">
    <a v-bind:href="productLink" target="_blank">
        <figure>
            <img v-bind:src="image">
            <figcaption>
                <p>{{productTitle}}</p>
                <p>{{productDescription}}</p>
            </figcaption>
        </figure>
    </a>
</div>
</template>

<script>
export default {
    props: {
        productLink: String,
        productImage: String,
        productTitle: String,
        productDescription: String
    },
    data() {
        return{
            image: require('@/assets/' + this.productImage)
        }
    }
}
</script>

<style>
figure {
    display: inline-block;
    position: relative;
    overflow: hidden;
    border: solid #000 1px;
    min-width: 200px;
    width: 300px;
    height: 200px;
}

figure img{
    position: relative;
    width: 100%;
    height: 100%;
}

figcaption {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    transition: 1s;
    opacity: 0;
    color: #fff;
    text-align: center;
}

figure:hover figcaption {
    transform: rotate(360deg);
    opacity: 1;
}

/* スマートフォン対応 */
@media screen and (max-width:599px) {
    figure {
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0;
        margin-inline-end: 0;
        margin-bottom: 2rem;
    }
}
</style>

