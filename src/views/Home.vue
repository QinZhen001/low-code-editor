<template>
  <div class="home">
    <Toolbar />
    <main>
      <!-- 左侧组件列表 -->
      <section class="left">
        <ComponentList />
      </section>
      <!-- 中间画布 -->
      <section class="center">
        <div
          class="content"
          @drop="handleDrop"
          @dragover="handleDragOver"
          @mousedown="handleMouseDown"
          @mouseup="deselectCurComponent"
        >
          <Editor />
        </div>
      </section>
      <!-- 右侧属性列表 -->
      <section class="right">right</section>
    </main>
  </div>
</template>

<script>
import Toolbar from "@/components/Toolbar.vue";
import ComponentList from "@/components/ComponentList.vue"; // 左侧列表组件
import Editor from '@/components/Editor/index.vue'; // 中间编辑区组件


export default {
  components: {
    Toolbar,
    ComponentList,
    Editor
  },
  methods: {
    handleDrop(e) {},
    handleDragOver(e) {},
    handleMouseDown(e) {},
    deselectCurComponent(e) {},
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
