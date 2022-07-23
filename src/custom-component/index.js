import Vue from 'vue';

export * from './component-list';

const globalComponents = ['Picture', 'VText', 'VButton', 'Group', 'RectShape'];

export function regiesterComponents() {
  globalComponents.forEach((key) => {
    Vue.component(key, () => import(`./${key}.vue`));
  });
}
