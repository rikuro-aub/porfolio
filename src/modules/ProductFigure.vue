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
.product-figure{
    width: 25%
}

figure {
    position: relative;
    overflow: hidden;
    width: 100%;
}

figure img{
    width: 100%;
    height: 200px;
}

figcaption {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 200px;
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
</style>

