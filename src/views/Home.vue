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
import { mapState } from 'vuex';
import Toolbar from '@/components/Toolbar.vue';
import ComponentList from '@/components/ComponentList.vue'; // 左侧列表组件
import Editor from '@/components/Editor/index.vue'; // 中间编辑区组件
import { componentList } from '@/custom-component'; // 左侧列表数据
import { deepCopy, generateID, listenGlobalKeyDown } from '../utils';

const resetID = (data) => {
  data.forEach((item) => {
    item.id = generateID();
    if (item.component === 'Group') {
      resetID(item.propValue);
    }
  });
};

export default {
  components: {
    Toolbar,
    ComponentList,
    Editor,
  },
  computed: mapState([
    'componentData',
    'curComponent',
    'isClickComponent',
    'canvasStyleData',
    'editor',
  ]),
  created() {
    this.restore();
    // 全局监听按键事件
    listenGlobalKeyDown();
  },
  methods: {
    restore() {
      // 用保存的数据恢复画布
      const canvasData = localStorage.getItem('canvasData');
      const canvasStyle = localStorage.getItem('canvasStyle');
      if (canvasData) {
        this.$store.commit('setComponentData', resetID(JSON.parse(canvasData)));
      }
      if (canvasStyle) {
        this.$store.commit('setCanvasStyle', canvasStyle);
      }
    },
    handleDrop(e) {
      e.preventDefault();
      e.stopPropagation();
      const index = e.dataTransfer.getData('index');
      const rectInfo = this.editor.getBoundingClientRect();
      if (index) {
        const component = deepCopy(componentList[index]);
        component.style.top = e.clientY - rectInfo.y;
        component.style.left = e.clientX - rectInfo.x;
        component.id = generateID();
        this.$store.commit('addComponent', { component });
        this.$store.commit('recordSnapshot');
      }
    },
    handleDragOver(e) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    },
    handleMouseDown(e) {
      e.stopPropagation();
      this.$store.commit('setClickComponentStatus', false);
      this.$store.commit('setInEditorStatus', true);
    },
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
