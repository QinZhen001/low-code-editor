import store from './index';
import { generateID, $ } from '../utils/index.js';

export default {
  state: {
    areaData: {
      // 选中区域包含的组件以及区域位移信息
      style: {
        top: 0,
        left: 0,
        width: 0,
        height: 0,
      },
      components: [],
    },
    editor: null,
  },
  mutations: {
    getEditor(state) {
      state.editor = $('#editor');
    },
    setAreaData(state, data) {
      state.areaData = data;
    },
    compose({ componentData, areaData, editor }) {
      const components = [];
      areaData.components.forEach((component) => {
        if (component.component != 'Group') {
          components.push(component);
        } else {
          // 如果要组合的组件中，已经存在组合数据，则需要提前拆分
        }
      });
    },
  },
};
