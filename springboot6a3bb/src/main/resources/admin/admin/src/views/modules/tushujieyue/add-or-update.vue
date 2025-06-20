<template>
	<div class="addEdit-block" style="width: 100%;">
		<el-form
			:style='{"borderRadius":"6px","padding":"30px","margin":"0 0 0 70px"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="140px"
		>
			<template >
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'" label="借阅编号" prop="jieyuebianhao">
					<el-input v-model="ruleForm.jieyuebianhao" placeholder="借阅编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-else-if="ruleForm.jieyuebianhao" label="借阅编号" prop="jieyuebianhao">
					<el-input v-model="ruleForm.jieyuebianhao" placeholder="借阅编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="图书编号" prop="tushubianhao">
					<el-input v-model="ruleForm.tushubianhao" placeholder="图书编号" clearable  :readonly="ro.tushubianhao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="图书编号" prop="tushubianhao">
					<el-input v-model="ruleForm.tushubianhao" placeholder="图书编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="图书名称" prop="tushumingcheng">
					<el-input v-model="ruleForm.tushumingcheng" placeholder="图书名称" clearable  :readonly="ro.tushumingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="图书名称" prop="tushumingcheng">
					<el-input v-model="ruleForm.tushumingcheng" placeholder="图书名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="图书分类" prop="tushufenlei">
					<el-input v-model="ruleForm.tushufenlei" placeholder="图书分类" clearable  :readonly="ro.tushufenlei"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="图书分类" prop="tushufenlei">
					<el-input v-model="ruleForm.tushufenlei" placeholder="图书分类" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="图书作者" prop="tushuzuozhe">
					<el-input v-model="ruleForm.tushuzuozhe" placeholder="图书作者" clearable  :readonly="ro.tushuzuozhe"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="图书作者" prop="tushuzuozhe">
					<el-input v-model="ruleForm.tushuzuozhe" placeholder="图书作者" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="select" v-if="type!='info'"  label="归还状态" prop="guihaizhuangtai">
					<el-select :disabled="ro.guihaizhuangtai" v-model="ruleForm.guihaizhuangtai" placeholder="请选择归还状态" >
						<el-option
							v-for="(item,index) in guihaizhuangtaiOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="归还状态" prop="guihaizhuangtai">
					<el-input v-model="ruleForm.guihaizhuangtai"
						placeholder="归还状态" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="select" v-if="type!='info'"  label="数量" prop="shuliang">
					<el-select :disabled="ro.shuliang" v-model="ruleForm.shuliang" placeholder="请选择数量" >
						<el-option
							v-for="(item,index) in shuliangOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="数量" prop="shuliang">
					<el-input v-model="ruleForm.shuliang"
						placeholder="数量" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="date" v-if="type!='info'" label="借阅时间" prop="jieyueshijian">
					<el-date-picker
						format="yyyy 年 MM 月 dd 日"
						value-format="yyyy-MM-dd"
						v-model="ruleForm.jieyueshijian" 
						type="date"
						:readonly="ro.jieyueshijian"
						placeholder="借阅时间"
					></el-date-picker> 
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-else-if="ruleForm.jieyueshijian" label="借阅时间" prop="jieyueshijian">
					<el-input v-model="ruleForm.jieyueshijian" placeholder="借阅时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="date" v-if="type!='info'" label="归还时间" prop="guihaishijian">
					<el-date-picker
						value-format="yyyy-MM-dd HH:mm:ss"
						v-model="ruleForm.guihaishijian" 
						type="datetime"
						:readonly="ro.guihaishijian"
						placeholder="归还时间"
					></el-date-picker>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-else-if="ruleForm.guihaishijian" label="归还时间" prop="guihaishijian">
					<el-input v-model="ruleForm.guihaishijian" placeholder="归还时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" clearable  :readonly="ro.yonghuzhanghao"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="用户账号" prop="yonghuzhanghao">
					<el-input v-model="ruleForm.yonghuzhanghao" placeholder="用户账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" clearable  :readonly="ro.yonghuxingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="用户姓名" prop="yonghuxingming">
					<el-input v-model="ruleForm.yonghuxingming" placeholder="用户姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="用户手机" prop="yonghushouji">
					<el-input v-model="ruleForm.yonghushouji" placeholder="用户手机" clearable  :readonly="ro.yonghushouji"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="用户手机" prop="yonghushouji">
					<el-input v-model="ruleForm.yonghushouji" placeholder="用户手机" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' class="input" v-if="type!='info'"  label="备注" prop="beizhu">
					<el-input v-model="ruleForm.beizhu" placeholder="备注" clearable  :readonly="ro.beizhu"></el-input>
				</el-form-item>
				<el-form-item :style='{"width":"50%","margin":"0 0 20px 0","display":"inline-block"}' v-else class="input" label="备注" prop="beizhu">
					<el-input v-model="ruleForm.beizhu" placeholder="备注" readonly></el-input>
				</el-form-item>
			</template>
			<el-form-item :style='{"padding":"0","margin":"0"}' class="btn">
				<el-button :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0 20px 0 0","outline":"none","color":"rgba(255, 255, 255, 1)","borderRadius":"4px","background":"#000000","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"1px solid #000000","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#000000","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"1px solid #000000","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#000000","borderRadius":"4px","background":"rgba(255, 255, 255, 1)","width":"128px","lineHeight":"40px","fontSize":"14px","height":"40px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				jieyuebianhao : false,
				tushubianhao : false,
				tushumingcheng : false,
				tushufenlei : false,
				tushuzuozhe : false,
				guihaizhuangtai : false,
				shuliang : false,
				jieyueshijian : false,
				guihaishijian : false,
				yonghuzhanghao : false,
				yonghuxingming : false,
				yonghushouji : false,
				beizhu : false,
				sfsh : false,
				shhf : false,
			},
			
			
			ruleForm: {
				jieyuebianhao: this.getUUID(),
				tushubianhao: '',
				tushumingcheng: '',
				tushufenlei: '',
				tushuzuozhe: '',
				guihaizhuangtai: '未归还',
				shuliang: '',
				jieyueshijian: '',
				guihaishijian: '',
				yonghuzhanghao: '',
				yonghuxingming: '',
				yonghushouji: '',
				beizhu: '',
				shhf: '',
			},
		
			guihaizhuangtaiOptions: [],
			shuliangOptions: [],
			
			rules: {
				jieyuebianhao: [
				],
				tushubianhao: [
				],
				tushumingcheng: [
				],
				tushufenlei: [
				],
				tushuzuozhe: [
				],
				guihaizhuangtai: [
				],
				shuliang: [
					{ required: true, message: '数量不能为空', trigger: 'blur' },
					{ validator: validateIntNumber, trigger: 'blur' },
				],
				jieyueshijian: [
				],
				guihaishijian: [
					{ required: true, message: '归还时间不能为空', trigger: 'blur' },
				],
				yonghuzhanghao: [
				],
				yonghuxingming: [
				],
				yonghushouji: [
				],
				beizhu: [
				],
				sfsh: [
				],
				shhf: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
	created() {
		this.ruleForm.jieyueshijian = this.getCurDate()
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='jieyuebianhao'){
							this.ruleForm.jieyuebianhao = obj[o];
							this.ro.jieyuebianhao = true;
							continue;
						}
						if(o=='tushubianhao'){
							this.ruleForm.tushubianhao = obj[o];
							this.ro.tushubianhao = true;
							continue;
						}
						if(o=='tushumingcheng'){
							this.ruleForm.tushumingcheng = obj[o];
							this.ro.tushumingcheng = true;
							continue;
						}
						if(o=='tushufenlei'){
							this.ruleForm.tushufenlei = obj[o];
							this.ro.tushufenlei = true;
							continue;
						}
						if(o=='tushuzuozhe'){
							this.ruleForm.tushuzuozhe = obj[o];
							this.ro.tushuzuozhe = true;
							continue;
						}
						if(o=='guihaizhuangtai'){
							this.ruleForm.guihaizhuangtai = obj[o];
							this.ro.guihaizhuangtai = true;
							continue;
						}
						if(o=='shuliang'){
							this.ruleForm.shuliang = obj[o];
							this.ro.shuliang = true;
							continue;
						}
						if(o=='jieyueshijian'){
							this.ruleForm.jieyueshijian = obj[o];
							this.ro.jieyueshijian = true;
							continue;
						}
						if(o=='guihaishijian'){
							this.ruleForm.guihaishijian = obj[o];
							this.ro.guihaishijian = true;
							continue;
						}
						if(o=='yonghuzhanghao'){
							this.ruleForm.yonghuzhanghao = obj[o];
							this.ro.yonghuzhanghao = true;
							continue;
						}
						if(o=='yonghuxingming'){
							this.ruleForm.yonghuxingming = obj[o];
							this.ro.yonghuxingming = true;
							continue;
						}
						if(o=='yonghushouji'){
							this.ruleForm.yonghushouji = obj[o];
							this.ro.yonghushouji = true;
							continue;
						}
						if(o=='beizhu'){
							this.ruleForm.beizhu = obj[o];
							this.ro.beizhu = true;
							continue;
						}
				}
				






				this.ruleForm.guihaizhuangtai='未归还'
				this.ruleForm.shuliang = 0
				this.ro.shuliang = false;









			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
					if(this.$storage.get("role")!="管理员") {
						this.ro.guihaizhuangtai = true;
					}
					if(json.yonghuzhanghao!=''&&json.yonghuzhanghao && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuzhanghao = json.yonghuzhanghao
						this.ro.yonghuzhanghao = true;
					}
					if(json.yonghuxingming!=''&&json.yonghuxingming && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghuxingming = json.yonghuxingming
						this.ro.yonghuxingming = true;
					}
					if(json.yonghushouji!=''&&json.yonghushouji && this.$storage.get("role")!="管理员"){
						this.ruleForm.yonghushouji = json.yonghushouji
						this.ro.yonghushouji = true;
					}
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.guihaizhuangtaiOptions = "已归还,未归还".split(',')
            this.shuliangOptions = "1,2,3,4,5".split(',')
			
		},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `tushujieyue/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
	//解决前台上传图片后台不显示的问题
	let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {































var objcross = this.$storage.getObj('crossObj');
      var table = this.$storage.getObj('crossTable');
      if(objcross!=null) {
	      objcross.shuliang = objcross.shuliang - this.ruleForm.shuliang
	      if(objcross.shuliang<0){
		this.$message.error("数量不足");
		return
	      }
                }

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                              this.$http({
                                  url: `${table}/update`,
                                  method: "post",
                                  data: objcross
                                }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "tushujieyue/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `tushujieyue/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.tushujieyueCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
                      this.$http({
                          url: `${table}/update`,
                          method: "post",
                          data: objcross
                        }).then(({ data }) => {});
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `tushujieyue/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
                  this.$http({
                      url: `${table}/update`,
                      method: "post",
                      data: objcross
                    }).then(({ data }) => {});
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.tushujieyueCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.tushujieyueCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  color: #666;
	  	  font-weight: 600;
	  	  width: 140px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 140px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 1px solid #000;
	  	  border-radius: 0;
	  	  padding: 0 12px;
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 1px solid #000;
	  	  border-radius: 0;
	  	  padding: 0 10px;
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 1px solid #000;
	  	  border-radius: 0;
	  	  padding: 0 10px 0 30px;
	  	  outline: none;
	  	  color: #000;
	  	  width: 200px;
	  	  font-size: 14px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 1px dashed #000;
	  	  cursor: pointer;
	  	  border-radius: 0;
	  	  color: #000;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px dashed #000;
	  	  cursor: pointer;
	  	  border-radius: 0;
	  	  color: #000;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px dashed #000;
	  	  cursor: pointer;
	  	  border-radius: 0;
	  	  color: #000;
	  	  width: 150px;
	  	  font-size: 32px;
	  	  line-height: 150px;
	  	  text-align: center;
	  	  height: 150px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1px solid #000;
	  	  border-radius: 0;
	  	  padding: 12px;
	  	  outline: none;
	  	  color: #000;
	  	  width: 400px;
	  	  font-size: 14px;
	  	  height: 120px;
	  	}
</style>
