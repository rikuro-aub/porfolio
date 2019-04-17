<template>
<div class="product">
    <h1>Product</h1>
    <product-figure
        productLink='https://rikuro-aub-portfolio.netlify.com'
        productImage='portfolio.png'
        productTitle='Portfolio'
        productDescription='このPortfolioサイト'
    ></product-figure>
    <product-figure
        productLink='https://qiita.com/3no3_tw/items/9baf638cdfbc986cba4f'
        productImage='NAS.png'
        productTitle='NAS'
        productDescription='Raspberry PiでNAS構築'
    ></product-figure>
</div>
</template>

<script>
import ProductFigure from '@/modules/ProductFigure.vue'
export default {
    components: {
        ProductFigure
    }
}
</script>

<style>
.product-figure {
    display: inline-block;
}
</style>