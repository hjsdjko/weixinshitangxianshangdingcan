const base = {
    get() {
        return {
            url : "http://localhost:8080/weixinshitangxianshangdingcan/",
            name: "weixinshitangxianshangdingcan",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/weixinshitangxianshangdingcan/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "微信食堂线上订餐小程序"
        } 
    }
}
export default base
