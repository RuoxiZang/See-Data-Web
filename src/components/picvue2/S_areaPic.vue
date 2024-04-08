<template>
    <a href="#">
        <main class="contentbox2">
            <img src="../../assets/pic/s_area.svg">
            <h2>{{ modelname }}</h2>
        </main>
    </a>
</template>


<script>
export default {
    props: {
    modelname: {
      type: String,
      default: '折叠面积图'
    }   
  }
};
</script>

<style scoped>
@import '../css/pic2.css';
</style>