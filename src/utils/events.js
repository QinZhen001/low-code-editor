// 编辑器自定义事件
export const events = {
  redirect(url) {
    if (url) {
      window.location.href = url;
    }
  },
  alert(msg) {
    if (msg) {
      alert(msg);
    }
  },
};

export const mixins = {
  methods: events,
};

export const eventList = [
  {
    key: 'redirect',
    label: '跳转事件',
    event: events.redirect,
    param: '',
  },
  {
    key: 'alert',
    label: 'alert 事件',
    event: events.alert,
    param: '',
  },
];
