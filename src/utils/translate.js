import store from "@/store";
import { divide, multiply } from "mathjs";

// 角度转弧度
// Math.PI = 180 度
function angleToRadian(angle) {
  return (angle * Math.PI) / 180;
}


export function changeStyleWithScale(value) {
  return multiply(value, divide(parseInt(store.state.canvasStyleData.scale), 100))
}