<template>
  <div class="home">
    <Toolbar />
    <main>
      <!-- 左侧组件列表 -->
      <section class="left">left</section>
      <!-- 中间画布 -->
      <section class="center">center</section>
      <!-- 右侧属性列表 -->
      <section class="right">right</section>
    </main>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";

export default {
  components: {
    Toolbar,
  },
};
</script>

<style lang="scss">
.home {
  height: 100vh;
  background: #fff;
  main {
    height: calc(100% - 64px);
    position: relative;
    .left {
      position: absolute;
      height: 100%;
      width: 200px;
      left: 0;
      top: 0;
      padding-top: 10px;
    }
    .center {
      margin-left: 200px;
      margin-right: 262px;
      background: #f5f5f5;
      height: 100%;
      overflow: auto;
      padding: 20px;
      .content {
        width: 100%;
        height: 100%;
        overflow: auto;
      }
    }
    .right {
      position: absolute;
      height: 100%;
      width: 262px;
      right: 0;
      top: 0;
    }
  }
}
</style>
