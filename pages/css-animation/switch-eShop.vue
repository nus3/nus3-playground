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
    </main>
</template>

<script>
export default {
}
</script>


<style lang="scss" scoped>

$bgColor: #FFF8E1;
$barForwardColor: #ffa726;
$barBackColor: #ffca28;

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

</style>

