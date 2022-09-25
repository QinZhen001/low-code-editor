<!--  -->
<template>
  <div class="animation-list">
    <div class="div-animation">
      <el-button @click="isShowAnimation = true">添加动画</el-button>
      <el-button @click="previewAnimate">预览动画</el-button>
      <div>
        <el-tag
          v-for="(tag, index) in curComponent.animations"
          :key="index"
          closable
          @close="removeAnimation(index)"
        >
          {{ tag.label }}
          <i
            class="cursor el-icon-setting"
            @click="handleAnimationSetting(index)"
          ></i>
        </el-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.animation-list {
  .cursor {
    cursor: pointer;
  }

  .div-animation {
    text-align: center;

    & > div {
      margin-top: 20px;
    }

    .el-tag {
      display: block;
      width: 50%;
      margin: auto;
      margin-bottom: 10px;
    }
  }

  .el-scrollbar__view {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 10px;

    .animate {
      cursor: pointer;
    }

    .animate > div {
      width: 100px;
      height: 60px;
      background: #f5f8fb;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 12px;
      margin-bottom: 10px;
      font-size: 12px;
      color: #333;
      border-radius: 3px;
      user-select: none;
      cursor: pointer;
    }
  }
}
</style>
