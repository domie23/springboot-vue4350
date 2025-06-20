export function isAuth(tableName, key) {
  let role = localStorage.getItem("UserTableName");
  let menus = [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"appFrontIcon":"cuIcon-link","buttons":["新增","查看","修改","删除"],"menu":"图书分类","menuJump":"列表","tableName":"tushufenlei"}],"menu":"图书分类管理"},{"child":[{"appFrontIcon":"cuIcon-goods","buttons":["新增","查看","修改","删除","查看评论","归还入库","首页总数","首页统计"],"menu":"图书信息","menuJump":"列表","tableName":"tushuxinxi"}],"menu":"图书信息管理"},{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","修改","删除","审核","首页统计"],"menu":"图书借阅","menuJump":"列表","tableName":"tushujieyue"}],"menu":"图书借阅管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看","修改","删除","审核"],"menu":"图书续借","menuJump":"列表","tableName":"tushuxujie"}],"menu":"图书续借管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","修改","删除","审核"],"menu":"图书归还","menuJump":"列表","tableName":"tushuguihai"}],"menu":"图书归还管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["新增","查看","修改","删除"],"menu":"反馈类型","menuJump":"列表","tableName":"fankuileixing"}],"menu":"反馈类型管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","修改","删除","审核","首页统计"],"menu":"需求反馈","menuJump":"列表","tableName":"xuqiufankui"}],"menu":"需求反馈管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["查看","修改","删除"],"menu":"归还入库","menuJump":"列表","tableName":"guihairuku"}],"menu":"归还入库管理"},{"child":[{"appFrontIcon":"cuIcon-brand","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-vipcard","buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"},{"appFrontIcon":"cuIcon-news","buttons":["新增","查看","修改","删除"],"menu":"大厦公告","tableName":"news"},{"appFrontIcon":"cuIcon-addressbook","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","借阅"],"menu":"图书信息列表","menuJump":"列表","tableName":"tushuxinxi"}],"menu":"图书信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-shop","buttons":["查看","删除","归还","续借"],"menu":"图书借阅","menuJump":"列表","tableName":"tushujieyue"}],"menu":"图书借阅管理"},{"child":[{"appFrontIcon":"cuIcon-attentionfavor","buttons":["查看"],"menu":"图书续借","menuJump":"列表","tableName":"tushuxujie"}],"menu":"图书续借管理"},{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看"],"menu":"图书归还","menuJump":"列表","tableName":"tushuguihai"}],"menu":"图书归还管理"},{"child":[{"appFrontIcon":"cuIcon-newshot","buttons":["新增","查看","修改","删除"],"menu":"需求反馈","menuJump":"列表","tableName":"xuqiufankui"}],"menu":"需求反馈管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-discover","buttons":["查看","借阅"],"menu":"图书信息列表","menuJump":"列表","tableName":"tushuxinxi"}],"menu":"图书信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}];
  for(let i=0;i<menus.length;i++){
    if(menus[i].tableName==role){
      for(let j=0;j<menus[i].frontMenu.length;j++){
          for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
            if(tableName==menus[i].frontMenu[j].child[k].tableName){
              let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
              return buttons.indexOf(key) !== -1 || false
            }
          }
      }
    }
  }
  return false;
}

/**
 *  * 获取当前时间（yyyy-MM-dd hh:mm:ss）
 *   */
export function getCurDateTime() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate(),
    hour = currentTime.getHours(),
    minute = currentTime.getMinutes(),
    second = currentTime.getSeconds();
    return year + "-" + month + "-" + day + " " +hour +":" +minute+":"+second;
}

/**
 *  * 获取当前日期（yyyy-MM-dd）
 *   */
export function getCurDate() {
    let currentTime = new Date(),
    year = currentTime.getFullYear(),
    month = currentTime.getMonth() + 1 < 10 ? '0' + (currentTime.getMonth() + 1) : currentTime.getMonth() + 1,
    day = currentTime.getDate() < 10 ? '0' + currentTime.getDate() : currentTime.getDate();
    return year + "-" + month + "-" + day;
}
