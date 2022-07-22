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

// 求两点之间的中点坐标
export function getCenterPoint(p1, p2) {
  return {
    x: p1.x + (p2.x - p1.x) / 2,
    y: p1.y + (p2.y - p1.y) / 2,
  };
}

export function sin(rotate) {
  Math.abs(Math.sin(angleToRadian(rotate)));
}

export function cos(rotate) {
  return Math.abs(Math.cos(angleToRadian(rotate)));
}

export function mod360(deg) {
  return (deg + 360) % 360;
}

export function toPercent(val) {
  return val * 100 + '%';
}
