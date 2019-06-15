<template>
    <div class="home">
        <span v-for="item in messageChar" v-bind:key="item.id">{{item.char}}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            messageChar: [
                {id: 1, char: 'W'},
                {id: 2, char: 'e'},
                {id: 3, char: 'l'},
                {id: 4, char: 'c'},
                {id: 5, char: 'o'},
                {id: 6, char: 'm'},
                {id: 7, char: 'e'},
                {id: 8, char:  ' '},
                {id: 9, char: 't'},
                {id: 10, char: 'o'},
                {id: 11, char: ' '},
                {id: 12, char: 'm'},
                {id: 13, char: 'y'},
                {id: 14, char: ' '},
                {id: 15, char: 'p'},
                {id: 16, char: 'o'},
                {id: 17, char: 'r'},
                {id: 18, char: 't'},
                {id: 19, char: 'f'},
                {id: 20, char: 'o'},
                {id: 21, char: 'l'},
                {id: 22, char: 'i'},
                {id: 23, char: 'o'},
                {id: 24, char: '!'},
                {id: 25, char: '!'}
            ]
        }
    }
}
</script>

<style>
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.home span {
    animation-name: fadeIn;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-fill-mode: both;
    display: inline-block;
    white-space: pre-wrap;
    font-weight: bold;
    font-size: 5vw;
    margin-top: 3em;
}

/* @for $item from 2 through 25 {
    span:nth-of-type(#{$item}){
        animation-delay: #{($item-1)*0.5}s;
    }
} */

span:nth-of-type(2) {
    animation-delay: 0.5s;
}

span:nth-of-type(3) {
    animation-delay: 1s;
}

span:nth-of-type(4) {
    animation-delay: 1.5s;
}

span:nth-of-type(5) {
    animation-delay: 2s;
}

span:nth-of-type(6) {
    animation-delay: 2.5s;
}

span:nth-of-type(7) {
    animation-delay: 3s;
}

span:nth-of-type(9) {
    animation-delay: 3.5s;
}

span:nth-of-type(10) {
    animation-delay: 4s;
}

span:nth-of-type(12) {
    animation-delay: 4.5s;
}

span:nth-of-type(13) {
    animation-delay: 5s;
}

span:nth-of-type(15) {
    animation-delay: 5.5s;
}

span:nth-of-type(16) {
    animation-delay: 6s;
}

span:nth-of-type(17) {
    animation-delay: 6.5s;
}

span:nth-of-type(18) {
    animation-delay: 7s;
}

span:nth-of-type(19) {
    animation-delay: 7.5s;
}

span:nth-of-type(20) {
    animation-delay: 8s;
}

span:nth-of-type(21) {
    animation-delay: 8.5s;
}

span:nth-of-type(22) {
    animation-delay: 9s;
}

span:nth-of-type(23) {
    animation-delay: 9.5s;
}

span:nth-of-type(24) {
    animation-delay: 10s;
}

span:nth-of-type(25) {
    animation-delay: 10.5s;
}
</style>
