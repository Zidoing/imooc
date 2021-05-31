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
