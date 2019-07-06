<template>
<div class="social">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <h1>Social</h1>
    <p>ご用の方はtwitterのDM等から気軽にご連絡ください</p>
    <a class="twitter" href="https://twitter.com/3no3_tw" target="_blank" >
        <i class="fab fa-twitter twitter-icon"></i>
    </a>
    <a class="github" href="https://github.com/rikuro-aub" target="_blank">
        <i class="fab fa-github github-icon"></i>
    </a>
    <a class="qiita" href="https://qiita.com/3no3_tw" target="_blank">
    <p>
        <i class="fa fa-square fa-stack-2x"></i>
        <i class="fa fa-search fa-stack-1x fa-inverse fa-2x"></i>
    </p>
    </a>
</div>
</template>

<style>
.twitter {
    display: block;
    margin-left: 49%;
    margin-right: 50%;
}

.twitter-icon {
    font-size: 2em;
    color: #1da1f2;
}

.github {
    display: block;
    margin-top: 1em;
    margin-left: 49%;
    margin-right: 50%;
}

.github-icon {
    font-size: 2em;
    color: #333;
}

.qiita {
    color: #4cb10d;
    display: block;
}

.qiita p i {
    width: 0px;
    margin-left: 49%;
    margin-right: 50%;
}

/* スマートフォン対応 */
@media screen and (max-width:599px) {
    .social :nth-child(3) {
        font-size: 4vw;
    }
}
</style>
