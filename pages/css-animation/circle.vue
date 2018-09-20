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
        width: 500px;
        height: 500px;
        position: relative;
        // border: solid 1px black;
        animation: moveForward 3s linear infinite;

        .circle {
            position: absolute;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #ffb300;
        }
    }
}


@keyframes moveForward {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

</style>

