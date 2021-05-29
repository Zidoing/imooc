// app.js
App({
  onLaunch(options) {
    console.log("on launch");
    console.log(options);
    this.sayHello()
  },
  onShow(options) {
    console.log("onshow", options);
  },
  onHide() {
    console.log('onhide');
  },
  onError(msg) {
    console.log("onError", msg);
  },
  sayHello() {
    console.log("say hello");
    return 'sss hello'
  },
  globalData: {}
})