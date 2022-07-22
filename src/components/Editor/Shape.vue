<template>
  <div
    class="shape"
    :class="{ active }"
    @click="selectCurComponent"
    @mousedown="handleMouseDownOnShape"
  ></div>
</template>

<script>
import { mapState } from 'vuex';
import { eventBus, mod360, runAnimation } from '../../utils/index';

export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    element: {
      require: true,
      type: Object,
      default: () => {},
    },
    defaultStyle: {
      require: true,
      type: Object,
      default: () => {},
    },
    index: {
      require: true,
      type: [Number, String],
      default: 0,
    },
    data() {
      return {
        // 八个方向
        pointList: ['lt', 't', 'rt', 'r', 'rb', 'b', 'lb', 'l'],
        initialAngle: {
          // 每个点对应的初始角度
          lt: 0,
          t: 45,
          rt: 90,
          r: 135,
          rb: 180,
          b: 225,
          lb: 270,
          l: 315,
        },
        // 每个范围的角度对应的光标
        angleToCursor: [
          { start: 338, end: 23, cursor: 'nw' },
          { start: 23, end: 68, cursor: 'n' },
          { start: 68, end: 113, cursor: 'ne' },
          { start: 113, end: 158, cursor: 'e' },
          { start: 158, end: 203, cursor: 'se' },
          { start: 203, end: 248, cursor: 's' },
          { start: 248, end: 293, cursor: 'sw' },
          { start: 293, end: 338, cursor: 'w' },
        ],
        cursors: {},
      };
    },
    computed: mapState(['curComponent', 'editor']),
    mounted() {
      // 用于 Group 组件
      if (this.curComponent) {
        // 根据旋转角度获取光标位置
        this.cursors = this.getCursor();
      }
      eventBus.$on('runAnimation', () => {
        if (this.element == this.curComponent) {
          console.log('this.$el', this.$el);
          runAnimation(this.$el, this.curComponent.animations);
        }
      });
      eventBus.$on('stopAnimation', () => {
        this.$el.classList.remove('animated', 'infinite');
      });
    },
    methods: {
      isActive() {
        return this.active && !this.element.isLock;
      },
      getCursor() {
        const { angleToCursor, initialAngle, pointList, curComponent } = this;
        const { rotate } = mod360(curComponent.style.rotate);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.shape {
  position: absolute;

  &:hover {
    cursor: move;
  }
}

.active {
  outline: 1px solid #70c0ff;
  user-select: none;
}

.shape-point {
  position: absolute;
  background: #fff;
  border: 1px solid #59c7f9;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  z-index: 1;
}

.icon-xiangyouxuanzhuan {
  position: absolute;
  top: -34px;
  left: 50%;
  transform: translateX(-50%);
  cursor: grab;
  color: #59c7f9;
  font-size: 20px;
  font-weight: 600;
  &:active {
    cursor: grabbing;
  }
}

.icon-suo {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
