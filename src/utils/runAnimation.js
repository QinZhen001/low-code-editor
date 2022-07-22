function utilsHandle(isLoop) {
  return isLoop ? 'infinite' : 'no-infinite';
}

export const runAnimation = async ($el, animations = []) => {
  const play = (animation) =>
    new Promise((resolve) => {
      const { animationTime, value = '', isLoop } = animation;
      $el.style.setProperty('--time', animationTime + 's');
      $el.classList.add(value, 'animated', utilsHandle(isLoop));

      const removeAnimation = () => {
        $el.removeEventListener('animationend', removeAnimation);
        $el.removeEventListener('animationcancel', removeAnimation);
        $el.classList.remove(value, 'animated', utilsHandle(isLoop));
        $el.style.removeProperty('--time');
        resolve();
      };

      $el.addEventListener('animationend', removeAnimation);
      $el.addEventListener('animationcancel', removeAnimation);
    });

  const len = animations.length;
  for (let i = 0; i < len; i++) {
    await play(animations[i]);
  }
};
