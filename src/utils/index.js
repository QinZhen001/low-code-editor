import { Message } from 'element-ui';

let _id = 0;

export * from './eventBus';
export * from './translate';
export * from './runAnimation';
export * from './style';

// 主要用于 Vue 的 diff 算法，为每个元素创建一个独一无二的 ID
export function generateID() {
  return _id++;
}

export function toast(message = '', type = 'error', duration = 1500) {
  Message({
    message,
    type,
    duration,
  });
}

export function deepCopy(target) {
  if (typeof target === 'object') {
    const result = Array.isArray(target) ? [] : {};
    for (const key in target) {
      if (typeof target[key] === 'object') {
        result[key] = deepCopy(target[key]);
      } else {
        result[key] = target[key];
      }
    }

    return result;
  }

  return target;
}

export function swap(arr, i, j) {
  const temp = arr[i];
}

export function $(selector) {
  return document.querySelector(selector);
}
