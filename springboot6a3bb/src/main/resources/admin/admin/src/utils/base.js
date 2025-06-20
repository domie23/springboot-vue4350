const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot6a3bb/",
            name: "springboot6a3bb",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot6a3bb/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "图书大厦图书管理系统的设计与实现"
        } 
    }
}
export default base
