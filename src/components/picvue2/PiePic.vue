<template>
    <a href="#">
        <main class="contentbox2">
            <img src="../../assets/pic/pie.svg">
            <h2>{{ modelname }}</h2>
        </main>
    </a>
</template>


<script>
export default {
    props: {
    modelname: {
      type: String,
      default: '饼图'
    }   
  }
};
</script>
<style scoped>
@import '../css/pic2.css';
</style>