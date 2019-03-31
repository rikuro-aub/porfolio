<template>
<div>
    <p class="skill-name">aaaa</p>
    <ol class="skill-bar">
        <li><span>個人開発レベル</span></li>
        <li ><span>業務経験あり-基礎レベル</span></li>
        <li class="is-active"><span>業務経験あり-標準レベル</span></li>
        <li><span>業務経験あり-重箱の隅の知識あり</span></li>
        <li><span>なんでもこい!!</span></li>
    </ol>
</div>
</template>

<style>

* {
    box-sizing: border-box;
}
:root {
    --color-white: #fff;
    --color-black: #333;
    --color-gray: #75787b;
    --color-gray-light: #bbb;
    --color-gray-disabled: #e8e8e8;
    --color-green: #53a318;
    --color-green-dark: #383;
    --color-red: #FF0000;
    --font-size-small: .75rem;
    --font-size-default: .875rem;
}

.skill-name {
    text-align: left;
    max-width: 100%;
    padding-left: 25%;
}

.skill-bar {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding-left: 25%;
    padding-right: 25%;
    margin: 0 0 1rem 0;
    max-width: 100%;
}

.skill-bar li {
    flex: 2;
    position: relative;
    padding: 0 0 14px 0;
    font-size: var(--font-size-default);
    line-height: 1.5;
    color: var(--color-green);
    font-weight: 600;
    white-space: nowrap;
    overflow: visible;
    min-width: 0;
    text-align: center;
    border-bottom: 2px solid var(--color-green-dark);
}

.skill-bar li:first-child,
.skill-bar li:last-child {
    flex: 1;
}

.skill-bar li:last-child {
    text-align: right;
}

.skill-bar li:before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    background-color: var(--color-green-dark);
    border-radius: 50%;
    border: 2px solid var(--color-white);
    position: absolute;
    left: calc(50% - 7px);
    bottom: -7px;
    z-index: 3;
    transition: all .2s ease-in-out;
}

.skill-bar li:first-child:before {
    left: 0;
}

.skill-bar li:last-child:before {
    right: 0;
    left: auto;
}

.skill-bar span {
    transition: opacity .3s ease-in-out;
}

.skill-bar li:not(.is-active) span {
    opacity: 0;
}

.skill-bar .is-active:not(:first-child):after {
    content: "";
    display: block;
    width: 100%;
    position: absolute;
    bottom: -2px;
    left: -50%;
    z-index: 2;
    border-bottom: 2px solid var(--color-green);
}

.skill-bar li:last-child span {
    width: 200%;
    display: inline-block;
    position: absolute;
    left: -100%;
}

.skill-bar .is-active:last-child:after {
    width: 200%;
    left: -100%;
}

.skill-bar .is-active:before,
.skill-bar .is-hovered:before{
    background-color: var(--color-white);
    border-color: var(--color-red);
}

.skill-bar li:hover:before {
    background-color: var(--color-white);
    border-color: var(--color-green);
}

.skill-bar li:hover:before,
.skill-bar .is-hovered:before {
    transform: scale(1.33);
}

.skill-bar li:hover span,
.skill-bar li.is-hovered span {
    opacity: 1;
}

.skill-bar:hover li:not(:hover) span {
    opacity: 0;
}

</style>
