<template>
    <main class="wrapper">
        <div class="circle-point1"></div>
        <div class="circle-point2"></div>
        <div class="circle-point3"></div>
        <div class="circle-point4"></div>
        <div class="circle-point5"></div>
        <div class="circle-point6"></div>
        <div class="circle-point7"></div>
    </main>
</template>

<script>

</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFF8E1;

    .circle-point1 {
        border-radius: 50%;
        background-color: #DE6641;
        animation: rotate 2.5s linear 0s infinite;
    }
    .circle-point2 {
        border-radius: 50%;
        background-color: #E8AC51;
        animation: rotate 2.5s linear 0.1s infinite;
    }
    .circle-point3 {
        border-radius: 50%;
        background-color: #F2E55C;
        animation: rotate 2.5s linear 0.2s infinite;
    }
    .circle-point4 {
        border-radius: 50%;
        background-color: #39A869;
        animation: rotate 2.5s linear 0.3s infinite;
    }
    .circle-point5 {
        border-radius: 50%;
        background-color: #4784BF;
        animation: rotate 2.5s linear 0.4s infinite;
    }
    .circle-point6 {
        border-radius: 50%;
        background-color: #5D5099;
        animation: rotate 2.5s linear 0.5s infinite;
    }
    .circle-point7 {
        border-radius: 50%;
        background-color: #A55B9A;
        animation: rotate 2.5s linear 0.6s infinite;
    }
}

@keyframes rotate {
    0% { 
        transform: rotate(0deg) translateY(-200px) rotate(0deg);
        width: 0px;
        height: 0px;
    }
    5% { 
        width: 5px;
        height: 5px;
    }
    10% { 
        width: 10px;
        height: 10px;
    }
    20% { 
        width: 20px;
        height: 20px;
    }
    30% { 
        width: 30px;
        height: 30px;
    }
    50%{
        transform: rotate(180deg) translateY(-200px) rotate(-180deg);
    }
    70% {
        width: 30px;
        height: 30px;
    }
    80% {
        width: 20px;
        height: 20px;
    }
    90% {
        width: 10px;
        height: 10px;
    }
    95% {
        width: 5px;
        height: 5px;
    }
    100% {  
        transform: rotate(360deg) translateY(-200px) rotate(-360deg);
        width: 0px;
        height: 0px;
    }
}
</style>

