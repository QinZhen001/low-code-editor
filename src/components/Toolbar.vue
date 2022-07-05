<template>
  <div>
    <div class="toolbar">
      <el-button @click="undo">撤消</el-button>
      <el-button @click="redo">重做</el-button>
      <label for="input" class="insert">插入图片</label>
      <input id="input" type="file" hidden @change="handleFileChange" />
      <el-button style="margin-left: 10px" @click="preview">预览</el-button>
      <el-button @click="save">保存</el-button>
      <el-button @click="clearCanvas">清空画布</el-button>
      <el-button :disabled="!areaData.components.length" @click="compose">组合</el-button>
      <el-button
        :disabled="!curComponent || curComponent.isLock || curComponent.component != 'Group'"
        @click="decompose"
      >
        拆分
      </el-button>

      <el-button :disabled="!curComponent || curComponent.isLock" @click="lock">锁定</el-button>
      <el-button :disabled="!curComponent || !curComponent.isLock" @click="unlock">解锁</el-button>
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
    <!-- <Preview v-model="isShowPreview" @change="handlePreviewChange" /> -->
  </div>
</template>

<script>
import { generateID, toast } from "../utils/index.js";
import eventBus from "../utils/eventBus";
import { mapState } from 'vuex'


export default {
  components: {
    // Preview
  },
  data() {
    return {
      isShowPreview: false,
      needToChange: ["top", "left", "width", "height", "fontSize"],
      scale: "100%",
      timer: null,
    };
  },
};
</script>

<style></style>
