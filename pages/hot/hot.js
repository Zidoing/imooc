Page({
    data: {
        rankType: 'project',
        rankTypes: [
            {title: "实战排行", type: 'project'},
            {title: "路径排行", type: 'path'},
        ],
        rankPeriod: 'week',
        rankPeriods: [
            {title: '周', value: 'week'},
            {title: '月', value: 'month'},
        ],
        currentList: [
            {imgUrl: "https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png", title: "iso页面传智"},
            {imgUrl: "https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png", title: "iso页面传智"},
            {imgUrl: "https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png", title: "iso页面传智"},
            {imgUrl: "https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png", title: "iso页面传智"},
            {imgUrl: "https://img1.mukewang.com/szimg/5f1eafb709e18bf912000676.png", title: "iso页面传智"},
        ]
    },
    handleTabChange(e) {
        console.log(e.target.dataset.type)
        this.setData({
            rankType: e.target.dataset.type
        })
    },
    handlePeriodChange(e) {
        this.setData({
            rankPeriod: e.target.dataset.type
        })
    },
    onLoad: function (options) {

    }
});
