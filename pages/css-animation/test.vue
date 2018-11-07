<template>
    <main class="wrapper">
        <div class="spinner-1">
            <div class="point-1"></div>
        </div>
        <div class="spinner-2">
            <div class="point-2"></div>
        </div>
        <div class="spinner-3">
            <div class="point-3"></div>
        </div>
    </main>
</template>

<script>

</script>

<style lang="scss" scoped>

.wrapper {
    width: 100%;
    height: 100vh;
    background-color: #FFF8E1;
    position: relative;

    .spinner-1 {
        width: 35vw;
        height:  35vw;
        margin: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        animation: rotate 3.0s linear infinite;

        .point-1 {
            width: 8%;
            height: 8%;
            border-radius: 50%;
            margin: auto;
            background-color: #DE6641;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            animation: scale 3.0s linear infinite;
        }
    }

    .spinner-2 {
        width: 35vw;
        height:  35vw;
        margin: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        animation: rotate 3.0s 0.2s linear infinite;

        .point-2 {
            width: 8%;
            height: 8%;
            border-radius: 50%;
            margin: auto;
            background-color: #E8AC51;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            animation: scale 3.0s 0.2s linear infinite;
        }
    }

    .spinner-3 {
        width: 35vw;
        height:  35vw;
        margin: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        animation: rotate 3.0s 0.4s linear infinite;

        .point-3 {
            width: 8%;
            height: 8%;
            border-radius: 50%;
            margin: auto;
            background-color: #F2E55C;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            animation: scale 3.0s 0.4s linear infinite;
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
        transform: scale(0, 0);
    }
    50% {
        transform: scale(1, 1);
    }
    100% {
        transform: scale(0, 0);
    }
}








</style>

