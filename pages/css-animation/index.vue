<template>
    <main class="container">
        <h1 class="title">CSSアニメーションまとめ</h1>
        <div class="menu">
            <nuxt-link
                :to="''"
                class="button btn-1"
            >TOPへ</nuxt-link>
            <nuxt-link
                :to="'/css-animation/circle'"
                class="button btn-2"
            >円</nuxt-link>
            <nuxt-link
                :to="'/css-animation/switch-eShop'"
                class="button btn-3"
            >switch</nuxt-link>
        </div>
    </main>
</template>

<script>

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

$bgColor: #0d47a1;
$textColor: #e3f2fd;
$buttonColor: #ff9100;

/*
|--------------------------------------------------------------------------
|  style
|--------------------------------------------------------------------------
*/

.container {
    width: 100vw;
    height: 100vh;
    background-color: $bgColor;
    position: relative;
    text-align: center;

    .title {
        margin: 0;
        padding: 40px;
        color: $textColor;

        @include tablet {
            padding: 20px;
        }

        // animation-name: showElement;
        // animation-duration: 4.0s;
        // animation-fill-mode: forwards;
    }

    .menu {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 40px 50px;
        background-color: $bgColor;

        @include tablet {
            padding: 0 20px 50px;
        }

        .button {
            display: block;
            position: relative;
            width: 80px;
            height: 80px;
            line-height: 80px;
            padding: 40px;
            text-decoration: none;
            font-size: 25px;
            color: $buttonColor;
            border: solid 3px $buttonColor;
            border-radius: 50%;
            z-index: 1;
            transition: color 0.3s;

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
                color: white;
            }

            &:last-child {
                margin-bottom: 0;
            }

            animation-name: showElement;
            animation-duration: 4.0s;
            animation-fill-mode: forwards;
        }

        @for $index from 1 through 10 {
            .button.btn-#{$index} {
                margin-top: random(100) + px;
                margin-left: random(100) + px;
                margin-right: random(100) + px;
                margin-bottom: random(100) + px;

                @include tablet {
                    margin-top: random(30) + px;
                    margin-left: random(30) + px;
                    margin-right: random(30) + px;
                    margin-bottom: random(30) + px;
                }

                @if $index % 2 == 0 {
                    animation:
                        showElement 4.0s,
                        moveVerticallyUp 10.0s 4.0s infinite;
                }
                @else {
                    animation:
                        showElement 4.0s,
                        moveVerticallyDown 10.0s 4.0s infinite;
                }
            }
        }
    }
}

/*
|--------------------------------------------------------------------------
|  animation
|--------------------------------------------------------------------------
*/

@keyframes showElement {
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1);
    }
}

@keyframes moveVerticallyUp {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(20px);
    }
    50% {
        transform: translateY(-20px);
    }
    75% {
        transform: translateY(20px);
    }
    100% {
        transform: translateY(0);
    }
}

@keyframes moveVerticallyDown {
    0% {
        transform: translateY(0);
    }
    25% {
        transform: translateY(-20px);
    }
    50% {
        transform: translateY(20px);
    }
    75% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}

</style>

