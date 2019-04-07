<template>
<div class="product">
    <h1>Product</h1>
    <product-figure
        productLink='https://rikuro-aub.github.io/portfolio'
        productImage='logo.png'
        productTitle='Portfolio'
        productDescription='このPortfolioサイト'
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

