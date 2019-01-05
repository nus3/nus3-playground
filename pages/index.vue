<template>
    <main class="container">
        <h1 class="title">
            <span class="text text1">n</span>
            <span class="text text2">u</span>
            <span class="text text3">s</span>
            <span class="text text4">3</span>
            <span class="text text5">の</span>
            <span class="text text6">実</span>
            <span class="text text7">験</span>
            <span class="text text8">場</span>
        </h1>
    </main>
</template>

<script>

</script>

<style lang="scss" scoped>
$bgColor: #FFF8E1;
$textColor: #ffa726;

.container {
    width: 100vw;
    height: 100vh;
    background-color: $bgColor;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .title {
        margin: 0;
        color: $textColor;
        letter-spacing: 10px;
        font-size: 50px;

        .text {
            display:inline-block;
            opacity: 0;

            animation:
                extendText 2.0s ease forwards,
                rotateText 1.0s ease forwards;
        }

        @for $index from 1 through 8 {
            .text.text#{$index} {
                animation-delay: 0.2s * ($index - 1);
            }
        }
    }
}

/*
|--------------------------------------------------------------------------
|  animation
|--------------------------------------------------------------------------
*/

@keyframes extendText {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

@keyframes rotateText {
    0% {
        transform: rotate(45deg);
    }
    25% {
        transform: rotate(-45deg);
    }
    50% {
        transform: rotate(45deg);
    }
    75% {
        transform: rotate(-45deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
</style>

