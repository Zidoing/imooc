// index.js
// 获取应用实例
const app = getApp()

Page({
    data: {
        showIcon: true,
        swiperList: [],
        courses: [],
        searchList: null,
        type: "recommend",
        tabs: [
            {name: "推荐", type: "recommend"},
            {name: "路径", type: "path"},
            {name: "实战", type: "project"},
            {name: "活动", type: "activity"},
        ]
    },

    handleInputChange(e) {
        console.log(e)
        const value = e.detail.value;
        let searchList = null;
        if (value) {
            searchList = this.data.courses.filter(item => item.title.indexOf(value) > -1)
        }

        if (value) {
            this.setData({
                showIcon: false,
                searchList,
            });
        } else {
            this.setData({
                showIcon: true,
                searchList
            });
        }
    },
    onLoad() {
        wx.request({
                url: "https://www.fastmock.site/mock/7b84fef3e3467bc1457dc7fff158c5a7/weixin/api/getData",
                success: (res) => {
                    const {data: {data}} = res
                    const {swiperList, courses} = data
                    this.setData({
                        swiperList,
                        courses
                    })
                }
            }
        )
    },
    changeType(e) {
        const type = e.currentTarget.dataset.type;
        this.setData({type});
    }


})
