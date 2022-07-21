import store from '@/store';
import { divide, multiply } from 'mathjs';

// 角度转弧度
// Math.PI = 180 度
function angleToRadian(angle) {
  return (angle * Math.PI) / 180;
}

export function changeStyleWithScale(value) {
  return multiply(
    value,
    divide(parseInt(store.state.canvasStyleData.scale), 100)
  );
}

/**
 * 计算根据圆心旋转后的点的坐标
 * @param   {Object}  point  旋转前的点坐标
 * @param   {Object}  center 旋转中心
 * @param   {Number}  rotate 旋转的角度
 * @return  {Object}         旋转后的坐标
 * https://www.zhihu.com/question/67425734/answer/252724399 旋转矩阵公式
 */ export function getRotatedPointCoordinate(style, center, name) {
  // point 是未旋转前的坐标
  let point;
  switch (name) {
    case 't':
      point = {
        x: style.left + style.width / 2,
        y: style.top,
      };
      break;
    case 'b':
      point = {
        x: style.left + style.width / 2,
        y: style.top + style.height,
      };
      break;
    case 'l':
      point = {
        x: style.left,
        y: style.top + style.height / 2,
      };
      break;
    case 'r':
      point = {
        x: style.left + style.width,
        y: style.top + style.height / 2,
      };
      break;
    case 'lt':
      point = {
        x: style.left,
        y: style.top,
      };
      break;
    case 'rt':
      point = {
        x: style.left + style.width,
        y: style.top,
      };
      break;
    case 'lb':
      point = {
        x: style.left,
        y: style.top + style.height,
      };
      break;
    default: // rb
      point = {
        x: style.left + style.width,
        y: style.top + style.height,
      };
      break;
  }
}
