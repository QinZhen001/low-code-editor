import store from './index';
import { deepCopy } from '../utils/index.js';

export default {
  state: {
    snapshotData: [], // 编辑器快照数据
    snapshotIndex: -1, // 快照索引
  },
  mutations: {
    undo(state) {
      if (state.snapshotIndex >= 0) {
        state.snapshotIndex--;
        const componentData =
          deepCopy(state.snapshotData[state.snapshotIndex]) || [];
        if (state.curComponent) {
          // 如果当前组件不在 componentData 中，则置空
          const needClean = !componentData.find(
            (component) => state.curComponent.id === component.id
          );
          if (needClean) {
            store.commit('setCurComponent', {
              component: null,
              index: null,
            });
          }
        }
        store.commit('setComponentData', componentData);
      }
    },
    redo(state) {
      if (state.snapshotIndex < state.snapshotData.length - 1) {
        state.snapshotIndex++;
        store.commit(
          'setComponentData',
          deepCopy(state.snapshotData[state.snapshotIndex])
        );
      }
    },
    // 添加新的快照
    recordSnapshot(state) {
      state.snapshotData[++state.snapshotIndex] = deepCopy(state.componentData);
      // 在 undo 过程中，添加新的快照时，要将它后面的快照清理掉
      if (state.snapshotIndex < state.snapshotData.length - 1) {
        state.snapshotData = state.snapshotData.slice(
          0,
          state.snapshotIndex + 1
        );
      }
    },
  },
};
