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
        <nuxt-link
            :to="'/css-animation/'"
            class="button"
        >MENUへ</nuxt-link>

        <hr class="left-line">
        <hr class="left-line hidden">
        <hr class="top-line">
        <hr class="top-line hidden">
        <hr class="right-line">
        <hr class="right-line hidden">
        <hr class="bottom-line">
        <hr class="bottom-line hidden">
    </main>
</template>

<script>

</script>

<style lang="scss" scoped>

/*
|--------------------------------------------------------------------------
|  Responsive
|--------------------------------------------------------------------------
*/

$desktop: 992px;
$tablet: 600px;
$mobile: 480px;

@mixin desktop {
    @media (max-width: ($desktop)) {
        @content;
    }
}
@mixin tablet {
    @media (max-width: ($tablet)) {
        @content;
    }
}
@mixin mobile {
    @media (max-width: ($mobile)) {
        @content;
    }
}

/*
|--------------------------------------------------------------------------
|  config
|--------------------------------------------------------------------------
*/

$bgColor: #FFF8E1;
$textColor: #ffa726;
$buttonColor: #39A869;


/*
|--------------------------------------------------------------------------
|  style
|--------------------------------------------------------------------------
*/

.container {
    width: 100vw;
    height: 100vh;
    background-color: $bgColor;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    .title {
        margin: 0;
        color: $textColor;
        letter-spacing: 10px;
        font-size: 50px;
        margin-bottom: 20px;

        @include tablet {
            padding: 0 40px;
        }

        .text {
            display:inline-block;
            opacity: 0;

            animation:
                extendText 4.0s ease forwards,
                rotateText 1.0s ease forwards;
        }

        @for $index from 1 through 8 {
            .text.text#{$index} {
                animation-delay: 0.2s * ($index - 1);
            }
        }
    }

    .button {
        text-decoration: none;
        padding: 20px 40px;
        background-color: $textColor;
        color: white;
        border-radius: 5px;
        font-size: 18px;
        opacity: 0;

        animation-name: extendText;
        animation-duration: 2.0s;
        animation-delay: 3.0s;
        animation-fill-mode: forwards;

        &:hover {
            opacity: 0.8;
            transition: opacity 0.8s;
        }
    }

    .left-line {
        position: absolute;
        top: 50px;
        left: 50px;
        bottom: 50px;
        margin: 0;
        border: 3px solid $textColor;
        border-radius: 5px;

        @include tablet {
            top: 20px;
            left: 20px;
            bottom: 20px;
        }
    }
    .left-line.hidden {
        border: 3px solid $bgColor;
        animation-name: moveUnderLine;
        animation-duration: 4.0s;
        animation-fill-mode: forwards;
    }

    .top-line {
        position: absolute;
        top: 50px;
        right: 50px;
        left: 50px;
        margin: 0;
        border: 3px solid $textColor;
        border-radius: 5px;

        @include tablet {
            top: 20px;
            right: 20px;
            left: 20px;
        }
    }
    .top-line.hidden {
        border: 3px solid $bgColor;
        animation-name: moveRightLine;
        animation-duration: 4.0s;
        animation-fill-mode: forwards;
    }

    .right-line {
        position: absolute;
        top: 50px;
        right: 50px;
        bottom: 50px;
        margin: 0;
        border: 3px solid $textColor;
        border-radius: 5px;

        @include tablet {
            top: 20px;
            right: 20px;
            bottom: 20px;
        }
    }
    .right-line.hidden {
        border: 3px solid $bgColor;
        animation-name: moveAboveLine;
        animation-duration: 4.0s;
        animation-fill-mode: forwards;
    }

    .bottom-line {
        position: absolute;
        right: 50px;
        left: 50px;
        bottom: 50px;
        margin: 0;
        border: 3px solid $textColor;
        border-radius: 5px;

        @include tablet {
            right: 20px;
            left: 20px;
            bottom: 20px;
        }
    }
    .bottom-line.hidden {
        border: 3px solid $bgColor;
        animation-name: moveLeftLine;
        animation-duration: 4.0s;
        animation-fill-mode: forwards;
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

@keyframes moveUnderLine {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(100vh);
    }
}

@keyframes moveAboveLine {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-100vh);
    }
}

@keyframes moveRightLine {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100vw);
    }
}

@keyframes moveLeftLine {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100vw);
    }
}
</style>

