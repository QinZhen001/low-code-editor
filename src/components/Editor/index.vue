<template>
  <div
    id="editor"
    class="editor"
    :class="{ edit: isEdit }"
    :style="{
      width: changeStyleWithScale(canvasStyleData.width) + 'px',
      height: changeStyleWithScale(canvasStyleData.height) + 'px',
    }"
    @contextmenu="handleContextMenu"
    @mousedown="handleMouseDown"
  >
    <!-- 网格线 -->
    <Grid />
    <!--页面组件列表展示-->
    <!-- 右击菜单 -->
    <ContextMenu />
  </div>
</template>

<script>
import { mapState } from 'vuex';
// import { $ } from "../utils/utils";
import Grid from './Grid.vue';
import ContextMenu from './ContextMenu.vue';
import { changeStyleWithScale, eventBus } from '../../utils/index';

export default {
  components: {
    Grid,
    ContextMenu,
  },
  props: {
    isEdit: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      editorX: 0,
      editorY: 0,
      start: {
        // 选中区域的起点
        x: 0,
        y: 0,
      },
      width: 0,
      height: 0,
      isShowArea: false,
    };
  },
  computed: mapState([
    'componentData',
    'curComponent',
    'canvasStyleData',
    'editor',
  ]),
  mounted() {
    // 获取编辑器元素
    this.$store.commit('getEditor');
    eventBus.$on('hideArea', () => {
      this.hideArea();
    });
  },
  methods: {
    changeStyleWithScale,
    handleContextMenu(e) {
      e.stopPropagation();
      e.preventDefault();
    },
    handleMouseDown() {},
  },
};
</script>

<style lang="scss" scoped>
.editor {
  position: relative;
  background: #fff;
  margin: auto;

  .lock {
    opacity: 0.5;

    &:hover {
      cursor: not-allowed;
    }
  }
}

.edit {
  .component {
    outline: none;
    width: 100%;
    height: 100%;
  }
}
</style>
