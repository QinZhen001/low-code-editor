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
    <Shape
      v-for="(item, index) in componentData"
      :key="item.id"
      :default-style="item.style"
      :style="getShapeStyle(item.style)"
      :active="item.id === (curComponent || {}).id"
      :element="item"
      :index="index"
      :class="{ lock: item.isLock }"
    >
      <!-- 非文字组件   -->
      <component
        :is="item.component"
        v-if="item.component != 'v-text'"
        :id="'component' + item.id"
        class="component"
        :style="getComponentStyle(item.style)"
        :prop-value="item.propValue"
        :element="item"
      ></component>
      <!-- 文字输入组件 -->
      <component
        :is="item.component"
        v-else
        :id="'component' + item.id"
        class="component"
        :style="getComponentStyle(item.style)"
        :prop-value="item.propValue"
        :element="item"
        @input="handleInput"
      ></component>
    </Shape>
    <!-- 右击菜单 -->
    <ContextMenu />
    <!-- 标线 -->
    <MarkLine />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Grid from './Grid.vue';
import ContextMenu from './ContextMenu.vue';
import Shape from './Shape.vue';
import MarkLine from './MarkLine.vue';
import { changeStyleWithScale, eventBus, getStyle } from '../../utils/index';
import ComponentList from '../ComponentList.vue';

export default {
  components: {
    Grid,
    ContextMenu,
    MarkLine,
    Shape,
    ComponentList,
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
    handleMouseDown(e) {},
    getShapeStyle(style) {
      const result = {};
      ['width', 'height', 'top', 'left', 'rotate'].forEach((attr) => {
        if (attr != 'rotate') {
          result[attr] = style[attr] + 'px';
        } else {
          result.transform = 'rotate(' + style[attr] + 'deg)';
        }
      });
      return result;
    },
    getComponentStyle(style) {
      return getStyle(style, ['top', 'left', 'width', 'height', 'rotate']);
    },
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
