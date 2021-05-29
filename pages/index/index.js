// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        name: "hello sss",
        showIcon: true
    },

    handleInputChange(e) {
        console.log(e)
        const value = e.detail.value;
        if (value) {
            this.setData({
                showIcon: false
            });
        } else {
            this.setData({
                showIcon: true
            })
        }
    }

})
