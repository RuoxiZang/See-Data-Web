<template>
    <a href="#">
        <main class="contentbox">
            <img src="../../assets/pic/ir_pie.svg">
            <h2>{{ modelname }}</h2>
        </main>
    </a>
</template>


<script>
export default {
    props: {
    modelname: {
      type: String,
      default: '南丁格尔图'
    }   
  }
};
</script>
<style scoped>
@import '../css/pic.css';
</style>