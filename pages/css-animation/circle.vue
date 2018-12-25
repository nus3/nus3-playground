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
    </main>
</template>

<script>
export default {
}
</script>


<style lang="scss" scoped>

$pointColor1: #DE6641;
$pointColor2: #E8AC51;
$pointColor3: #F2E55C;
$pointColor4: #39A869;
$pointColor5: #4784BF;
$pointColor6: #5D5099;
$pointColor7: #A55B9A;

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








</style>

