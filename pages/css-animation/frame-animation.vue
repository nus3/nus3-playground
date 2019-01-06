<template>
    <main class="container">
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
export default {
}
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
$lineColor: #ffa726;

/*
|--------------------------------------------------------------------------
|  style
|--------------------------------------------------------------------------
*/

.container {
    width: 100vw;
    height: 100vh;
    background-color: $bgColor;

    .left-line {
        position: absolute;
        top: 50px;
        left: 50px;
        bottom: 50px;
        margin: 0;
        border: 3px solid $lineColor;
        border-radius: 5px;

        @include tablet {
            top: 20px;
            left: 20px;
            bottom: 20px;
        }
    }
    .left-line.hidden {
        border: 3px solid $bgColor;
        animation-name: moveUnder;
        animation-duration: 4.0s;
        animation-fill-mode: forwards;
    }

    .top-line {
        position: absolute;
        top: 50px;
        right: 50px;
        left: 50px;
        margin: 0;
        border: 3px solid $lineColor;
        border-radius: 5px;

        @include tablet {
            top: 20px;
            right: 20px;
            left: 20px;
        }
    }
    .top-line.hidden {
        border: 3px solid $bgColor;
        animation-name: moveRight;
        animation-duration: 4.0s;
        animation-fill-mode: forwards;
    }

    .right-line {
        position: absolute;
        top: 50px;
        right: 50px;
        bottom: 50px;
        margin: 0;
        border: 3px solid $lineColor;
        border-radius: 5px;

        @include tablet {
            top: 20px;
            right: 20px;
            bottom: 20px;
        }
    }
    .right-line.hidden {
        border: 3px solid $bgColor;
        animation-name: moveAbove;
        animation-duration: 4.0s;
        animation-fill-mode: forwards;
    }

    .bottom-line {
        position: absolute;
        right: 50px;
        left: 50px;
        bottom: 50px;
        margin: 0;
        border: 3px solid $lineColor;
        border-radius: 5px;

        @include tablet {
            right: 20px;
            left: 20px;
            bottom: 20px;
        }
    }
    .bottom-line.hidden {
        border: 3px solid $bgColor;
        animation-name: moveLeft;
        animation-duration: 4.0s;
        animation-fill-mode: forwards;
    }
}

/*
|--------------------------------------------------------------------------
|  animation
|--------------------------------------------------------------------------
*/

@keyframes moveUnder {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(100vh);
    }
}

@keyframes moveAbove {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-100vh);
    }
}

@keyframes moveRight {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100vw);
    }
}

@keyframes moveLeft {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100vw);
    }
}

</style>

