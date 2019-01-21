<template>
    <main class="wrapper">
        <div class="common-spinner spinner-1">
            <div class="common-point point-1 point-color-1"></div>
        </div>
        <div class="common-spinner spinner-2">
            <div class="common-point point-2 point-color-2"></div>
        </div>
        <div class="common-spinner spinner-3">
            <div class="common-point point-3 point-color-3"></div>
        </div>
        <div class="common-spinner spinner-4">
            <div class="common-point point-4 point-color-4"></div>
        </div>
        <div class="common-spinner spinner-5">
            <div class="common-point point-5 point-color-5"></div>
        </div>
        <div class="common-spinner spinner-6">
            <div class="common-point point-6 point-color-6"></div>
        </div>
        <div class="common-spinner spinner-7">
            <div class="common-point point-7 point-color-7"></div>
        </div>
        <nuxt-link
            :to="'/nus3-playground/css-animation/'"
            class="button"
        >MENU</nuxt-link>
    </main>
</template>

<script>
export default {
}
</script>


<style lang="scss" scoped>

/*
|--------------------------------------------------------------------------
|  config
|--------------------------------------------------------------------------
*/

$pointColor1: #DE6641;
$pointColor2: #E8AC51;
$pointColor3: #F2E55C;
$pointColor4: #39A869;
$pointColor5: #4784BF;
$pointColor6: #5D5099;
$pointColor7: #A55B9A;

$buttonColor: #0d47a1;
$textColor: #e3f2fd;

// HACK: 共通で使う処理は一つにまとめる
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
|  style
|--------------------------------------------------------------------------
*/

.wrapper {
    width: 100%;
    height: 100vh;
    background-color: #FFF8E1;
    position: relative;

    .common-spinner {
        width: 35vw;
        height:  35vw;
        margin: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        .common-point {
            width: 0;
            height: 0;
            border-radius: 50%;
            margin: auto;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
        }

        .point-color-1 {
            background-color: $pointColor1;
        }
        .point-color-2 {
            background-color: $pointColor2;
        }
        .point-color-3 {
            background-color: $pointColor3;
        }
        .point-color-4 {
            background-color: $pointColor4;
        }
        .point-color-5 {
            background-color: $pointColor5;
        }
        .point-color-6 {
            background-color: $pointColor6;
        }
        .point-color-7 {
            background-color: $pointColor7;
        }
    }

    @for $index from 1 through 7{
        $color: #{'$pointColor' + $index};

        .spinner-#{$index} {
            $delaySecond: 0.2s * ($index - 1);
            animation: rotate 3.0s $delaySecond linear infinite;

            .point-#{$index} {
                animation: scale 3.0s $delaySecond infinite;
            }
        }
    }

    .button {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 80px;
        height: 80px;
        line-height: 80px;
        margin-right: 50px;
        margin-bottom: 50px;
        padding: 40px;
        text-decoration: none;
        font-size: 25px;
        color: $buttonColor;
        text-align: center;
        border: solid 3px $buttonColor;
        border-radius: 50%;
        opacity: 0;
        z-index: 1;

        @include tablet {
            width: 60px;
            height: 60px;
            line-height: 60px;
            margin-right: 30px;
            margin-bottom: 30px;
            padding: 20px;
            font-size: 20px;
        }

        &::after {
            content: '';
            background: $buttonColor;
            transition: width 0.3s, height 0.3s;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50%;
            z-index: -1;
            transform: scale(0);
            transition: transform 0.3s;
        }

        &:hover::after {
            transform: scale(1);
        }

        &:hover {
            color: $textColor;
        }

        animation-name: showElement;
        animation-duration: 2.0s;
        // HACK: 変数から算出する
        animation-delay: 3.0s;
        animation-fill-mode: forwards;
    }

}

/*
|--------------------------------------------------------------------------
|  animation
|--------------------------------------------------------------------------
*/

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes scale {
    0% {
        width: 0;
        height: 0;
    }
    50% {
        width: 8%;
        height: 8%;
    }
    100% {
        width: 0;
        height: 0;
    }
}

@keyframes showElement {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}


</style>

