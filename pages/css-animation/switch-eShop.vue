<template>
    <main class="wrapper">
        <div class="bar">
            <div class="bar-forward bar-1"></div>
            <div class="bar-back bar-1"></div>
        </div>
        <div class="bar">
            <div class="bar-forward bar-2"></div>
            <div class="bar-back bar-2"></div>
        </div>
        <div class="bar">
            <div class="bar-forward bar-3"></div>
            <div class="bar-back bar-3"></div>
        </div>
        <div class="bar">
            <div class="bar-forward bar-4"></div>
            <div class="bar-back bar-4"></div>
        </div>
        <div class="bar">
            <div class="bar-forward bar-5"></div>
            <div class="bar-back bar-5"></div>
        </div>
        <div class="bar">
            <div class="bar-forward bar-6"></div>
            <div class="bar-back bar-6"></div>
        </div>
        <div class="bar">
            <div class="bar-forward bar-7"></div>
            <div class="bar-back bar-7"></div>
        </div>
        <div class="bar">
            <div class="bar-forward bar-8"></div>
            <div class="bar-back bar-8"></div>
        </div>
        <div class="bar">
            <div class="bar-forward bar-9"></div>
            <div class="bar-back bar-9"></div>
        </div>
        <div class="bar">
            <div class="bar-forward bar-10"></div>
            <div class="bar-back bar-10"></div>
        </div>
        <div class="title-wrapper">
            <h3>Hadatend eShop</h3>
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
|  config
|--------------------------------------------------------------------------
*/

$bgColor: #FFF8E1;
$barForwardColor: #ffa726;
$barBackColor: #ffca28;

$buttonColor: #0d47a1;
$textColor: #e3f2fd;

/*
|--------------------------------------------------------------------------
|  style
|--------------------------------------------------------------------------
*/

.wrapper {
    width: 100vw;
    height: 100vh;
    background-color: $bgColor;

    .bar {
        height: 10vh;
        // background-color: $barColor;
        &-forward {
            position: absolute;
            left: 0;
            height: 10vh;
            background-color: $barForwardColor;
            animation-name: extendBar;
            animation-duration: 2.0s;
            animation-timing-function: ease;
            animation-fill-mode: forwards;
        }
        &-back {
            position: absolute;
            right: 0;
            height: 10vh;
            background-color: $barBackColor;
            animation-name: extendBar;
            animation-duration: 2.0s;
            animation-timing-function: ease;
            animation-delay: 2.0s;
            animation-fill-mode: forwards;
        }

        @for $index from 1 through 10 {
            // chromeの場合、5列目で謎の線が出てくるためそれの対応
            @if $index == 5 {
                .bar-forward.bar-#{$index} {
                    border-bottom: 1px solid $barForwardColor;
                }
                .bar-back.bar-#{$index} {
                    border-bottom: 1px solid $barBackColor;
                }
            }

            .bar-forward.bar-#{$index} {
                top: 10vh * ($index - 1);
                animation-delay: 0.2s * ($index - 1);
            }
            .bar-back.bar-#{$index} {
                top: 10vh * ($index - 1);
                animation-delay: 0.2s * ($index - 1) + 2.0s;
            }
        }
    }

    .title-wrapper {
        position: absolute;
        right: 0;
        bottom: 0;
        margin: 40px;

        h3 {
            color: $bgColor;
            font-size: 50px;
            margin: 0;
        }
    }

    .button {
        position: absolute;
        right: 0;
        bottom: 50px;
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
            bottom: 30px;
            width: 60px;
            height: 60px;
            line-height: 60px;
            margin-right: 30px;
            margin-bottom: 0;
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
        animation-delay: 5.8s;
        animation-fill-mode: forwards;
    }
}


/*
|--------------------------------------------------------------------------
|  animation
|--------------------------------------------------------------------------
*/

@keyframes extendBar {
    0% {
        width: 0;
    }
    100% {
        width: 100vw;
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

