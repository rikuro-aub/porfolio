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
    <product-figure
        productLink='https://bumblebee-presented-by-supporter.netlify.com/'
        productImage='promote_syte.png'
        productTitle='Promote syte'
        productDescription='バンドのライブ告知サイトの制作'
    ></product-figure>
    <product-figure
        productLink='https://fathomless-shore-11924.herokuapp.com/'
        productImage='QA-app.png'
        productTitle='QA Application'
        productDescription='簡易QA投稿サイト'
    ></product-figure>
    <product-figure
        productLink='https://proitt.herokuapp.com/'
        productImage='proitt.png'
        productTitle='proitt'
        productDescription='プログラミング学習動画に特化した動画掲載&共有サービス'
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