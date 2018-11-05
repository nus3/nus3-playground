<template>
    <main class="wrapper">
        <div class="spinner">
            <div class="point"></div>
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

    .spinner {
        width: 200px;
        height: 200px;
        margin: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        .point {
            width: 10%;
            height: 10%;
            // border-radius: 50%;
            background-color: #DE6641;
            margin: auto;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            left: 0;

            animation: movePoint 2.5s infinite;
        }
    }
}

/*
|--------------------------------------------------------------------------
|  animation
|--------------------------------------------------------------------------
*/

@keyframes movePoint {
    0% {
        top: 0;
    }
    50% {
        transform: rotate(45deg);
    }
    100% {
        top: 100%;
        display: none;
    }
}








</style>

