import Vue from 'vue';

export * from './component-list';

const globalComponents = ['Picture', 'VText', 'VButton', 'Group', 'RectShape'];

export function regiesterComponents() {
  const globalComponents = import.meta.glob('./*.vue');
  Object.keys(globalComponents).forEach((key) => {
    console.log(key, globalComponents[key]);
    const name = key.replace(/\.\/(.*)\.vue/, '$1');
    Vue.component(name, globalComponents[key]);
  });
}
