<template>
  <div class="mark-line">
    <div
      v-for="line in lines"
      v-show="lineStatus[line] || false"
      :key="line"
      :ref="line"
      class="line"
      :class="line.includes('x') ? 'xline' : 'yline'"
    ></div>
  </div>
</template>

<script>
import { eventBus, getComponentRotatedStyle } from '../../utils';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      // 分别对应三条横线和三条竖线
      lines: ['xt', 'xc', 'xb', 'yl', 'yc', 'yr'],
      // 相距 dff 像素将自动吸附
      diff: 3,
      lineStatus: {
        xt: false,
        xc: false,
        xb: false,
        yl: false,
        yc: false,
        yr: false,
      },
    };
  },
  computed: mapState(['componentData', 'curComponent']),
  mounted() {
    // 监听元素移动和不移动的事件
    eventBus.$on('move', (isDownward, isRightward) => {
      this.showLine(isDownward, isRightward);
    });
    eventBus.$on('unmove', () => {
      this.hideLine();
    });
  },
  methods: {
    hideLine() {
      Object.keys(this.lineStatus).forEach((line) => {
        this.lineStatus[line] = false;
      });
    },
    showLine(isDownward, isRightward) {
      const line = this.$refs;
      const components = this.componentData;
      const curComponentStyle = getComponentRotatedStyle(
        this.curComponent.style
      );
    },
  },
};
</script>

<style></style>
