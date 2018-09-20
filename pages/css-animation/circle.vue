<template>
    <main class="wrapper">
        <div class="container">
            <div class="circle"></div>
        </div>
    </main>
</template>

<script>

</script>

<style lang="scss" scoped>
.wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF8E1;

    .container {
        width: 80%;
        height: 80%;
        position: relative;
        // border: solid 1px black;

        .circle {
            position: absolute;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #ffb300;
            animation: moveForward 3s ease-in infinite;
        }
    }
}


@keyframes moveForward {
    0% {
        left: 0;
    }
    50% {
        left: 100%;
    }
    100% {
        left: 0;
    }
}

</style>

