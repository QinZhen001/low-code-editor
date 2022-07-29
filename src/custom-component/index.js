import Vue from 'vue';

export * from './component-list';

const globalComponents = ['Picture', 'VText', 'VButton', 'Group', 'RectShape'];

export function regiesterComponents() {
  globalComponents.forEach((key) => {
    import(/* @vite-ignore */ `./${key}.vue`).then((module) => {
      Vue.component(key, module.default);
    });
  });
}
