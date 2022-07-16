import store from "./index";
import { deepCopy } from "../utils/index.js";

export default {
  state: {
    snapshotData: [], // 编辑器快照数据
    snapshotIndex: -1, // 快照索引
  },
  mutations: {
    undo(state) {
      if (state.snapshotIndex >= 0) {
        state.snapshotIndex--;
        const componentData = deepCopy(state.snapshotData[state.snapshotIndex]) || [];
        if (state.curComponent) {
          // 如果当前组件不在 componentData 中，则置空
          const needClean = !componentData.find(
            (component) => state.curComponent.id === component.id
          );
          if (needClean) {
            store.commit("setCurComponent", {
              component: null,
              index: null,
            });
          }
        }
        store.commit("setComponentData");
      }
    },
    redo(state) {},
    recordSnapshot() {},
  },
};
