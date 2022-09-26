<template>
  <div>
    <div class="toolbar">
      <el-button @click="undo">撤消 undo</el-button>
      <el-button @click="redo">重做 redo</el-button>
      <label for="input" class="insert">插入图片</label>
      <input id="input" type="file" hidden @change="handleFileChange" />
      <el-button style="margin-left: 10px" @click="preview">预览</el-button>
      <el-button @click="save">保存</el-button>
      <el-button @click="clearCanvas">清空画布</el-button>
      <el-button :disabled="!areaData.components.length" @click="compose"
        >组合</el-button
      >
      <el-button
        :disabled="
          !curComponent ||
          curComponent.isLock ||
          curComponent.component != 'Group'
        "
        @click="decompose"
      >
        拆分
      </el-button>

      <el-button :disabled="!curComponent || curComponent.isLock" @click="lock"
        >锁定</el-button
      >
      <el-button
        :disabled="!curComponent || !curComponent.isLock"
        @click="unlock"
        >解锁</el-button
      >
      <div class="canvas-config">
        <span>画布大小</span>
        <input v-model="canvasStyleData.width" />
        <span>*</span>
        <input v-model="canvasStyleData.height" />
      </div>
      <div class="canvas-config">
        <span>画布比例</span>
        <input v-model="scale" @input="handleScaleChange" /> %
      </div>
    </div>

    <!-- 预览 -->
    <Preview v-model="isShowPreview" @change="handlePreviewChange" />
  </div>
</template>

<script>
import { eventBus, generateID, toast } from '../utils/index.js';
import { mapState } from 'vuex';
import Preview from './Editor/Preview.vue';
import { divide, multiply } from 'mathjs';

export default {
  components: {
    Preview,
  },
  data() {
    return {
      isShowPreview: false,
      needToChange: ['top', 'left', 'width', 'height', 'fontSize'],
      scale: '100%',
      timer: null,
    };
  },
  computed: mapState([
    'componentData',
    'canvasStyleData',
    'areaData',
    'curComponent',
    'curComponentIndex',
  ]),
  created() {
    eventBus.$on('preview', this.preview);
    eventBus.$on('save', this.save);
    eventBus.$on('clearCanvas', this.clearCanvas);
    this.scale = this.canvasStyleData.scale;
  },
  methods: {
    format(value) {
      return multiply(value, divide(parseFloat(this.scale), 100));
    },
    getOriginStyle(value) {
      return divide(value, divide(parseFloat(this.canvasStyleData.scale), 100));
    },
    handleScaleChange() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {});
    },
    lock() {},
    unlock() {},
    compose() {},
    decompose() {},
    undo() {},
    redo() {},
    handleFileChange() {},
    preview() {},
    save() {},
    clearCanvas() {},
    handlePreviewChange() {},
  },
};
</script>

<style lang="scss" scoped>
.toolbar {
  padding: 15px 10px;
  white-space: nowrap;
  overflow-x: auto;
  background: #fff;
  border-bottom: 1px solid #ddd;

  .canvas-config {
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    color: #606266;

    input {
      width: 50px;
      margin-left: 10px;
      outline: none;
      padding: 0 5px;
      border: 1px solid #ddd;
      color: #606266;
    }

    span {
      margin-left: 10px;
    }
  }

  .insert {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
    margin-left: 10px;

    &:active {
      color: #3a8ee6;
      border-color: #3a8ee6;
      outline: 0;
    }

    &:hover {
      background-color: #ecf5ff;
      color: #3a8ee6;
    }
  }
}
</style>
