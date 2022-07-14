<template>
  <div id="editor" class="editor" :class="{ edit: isEdit }"></div>
</template>

<script>
import { mapState } from "vuex";
import { $ } from "@/utils/utils";
import { changeStyleWithScale } from "@/utils/translate";
import eventBus from "@/utils/eventBus";

export default {
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
  computed: mapState(["componentData", "curComponent", "canvasStyleData", "editor"]),
  mounted() {
    // 获取编辑器元素
    this.$store.commit("getEditor");
    eventBus.$on("hideArea", () => {
      this.hideArea();
    });
  },
};
</script>

<style></style>
