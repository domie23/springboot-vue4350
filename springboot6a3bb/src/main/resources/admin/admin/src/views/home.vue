<template>
<div class="content">
	<div class="text" :style='{"margin":"50px auto","fontSize":"24px","color":"rgb(51, 51, 51)","textAlign":"center","fontWeight":"bold"}'>欢迎使用 {{this.$project.projectName}}</div>
    <div class="cardView">
        <div class="cards" :style='{"margin":"0 0 20px 0","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
			<div :style='{"margin":"5px 10px","borderRadius":"0 40px 40px 0","background":"#f8f6f7","display":"flex"}' v-if="isAuth('tushuxinxi','首页总数')">
				<div :style='{"background":"red"}'></div>
				<div :style='{"width":"160px","alignItems":"center","flexDirection":"column","justifyContent":"center","display":"flex"}'>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"20px","color":"#333","fontWeight":"bold","height":"24px"}'>{{tushuxinxiCount}}</div>
					<div :style='{"margin":"5px 0","lineHeight":"24px","fontSize":"16px","color":"#666","height":"24px"}'>图书信息总数</div>
				</div>
			</div>
        </div>
        <div style="display: flex;align-items: center;width: 100%;margin-bottom: 10px;">
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('tushuxinxi','首页统计')">
                <div id="tushuxinxiChart1" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('tushujieyue','首页统计')">
                <div id="tushujieyueChart1" style="width:100%;height:400px;"></div>
            </el-card>
            <el-card style="width: 33.3%;margin: 0 10px;" v-if="isAuth('xuqiufankui','首页统计')">
                <div id="xuqiufankuiChart1" style="width:100%;height:400px;"></div>
            </el-card>
        </div>
    </div>
</div>
</template>
<script>
//3
import router from '@/router/router-static'
import * as echarts from 'echarts'
export default {
	data() {
		return {
            tushuxinxiCount: 0,
		};
	},
  mounted(){
    this.init();
    this.gettushuxinxiCount();
    this.tushuxinxiChat1();
    this.tushujieyueChat1();
    this.xuqiufankuiChat1();
  },
  methods:{
    init(){
        if(this.$storage.get('Token')){
        this.$http({
            url: `${this.$storage.get('sessionTable')}/session`,
            method: "get"
        }).then(({ data }) => {
            if (data && data.code != 0) {
            router.push({ name: 'login' })
            }
        });
        }else{
            router.push({ name: 'login' })
        }
    },
    gettushuxinxiCount() {
        this.$http({
            url: `tushuxinxi/count`,
            method: "get"
        }).then(({
            data
        }) => {
            if (data && data.code == 0) {
                this.tushuxinxiCount = data.data
            }
        })
    },

    tushuxinxiChat1() {
      this.$nextTick(()=>{

        var tushuxinxiChart1 = echarts.init(document.getElementById("tushuxinxiChart1"),'blue');
        this.$http({
            url: "tushuxinxi/group/tushufenlei",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].tushufenlei);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].tushufenlei
                    })
                }
                var option = {};
                option = {
                        title: {
                            text: '图书分类统计',
                            left: 'center'
                        },
                        tooltip: {
                          trigger: 'item',
                          formatter: '{b} : {c} ({d}%)'
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: ['25%', '55%'],
                                center: ['50%', '60%'],
                                data: pArray,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                };
                // 使用刚指定的配置项和数据显示图表。
                tushuxinxiChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    tushuxinxiChart1.resize();
                };
            }
        });
      })
    },







    tushujieyueChat1() {
      this.$nextTick(()=>{
        // tushumingcheng tushumingcheng
        //  shuliang

        var tushujieyueChart1 = echarts.init(document.getElementById("tushujieyueChart1"),'jazz');
        this.$http({
            url: `tushujieyue/value/tushumingcheng/shuliang`,
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].tushumingcheng);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].tushumingcheng
                    })
                }
                var option = {};
                option = {
                    title: {
                        text: '图书借阅统计',
                        left: 'center'
                    },
                    tooltip: {
                      trigger: 'item',
                      formatter: '{b} : {c}'
                    },
                    xAxis: {
                        type: 'category',
                        data: xAxis
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: yAxis,
                        type: 'bar'
                    }]
                };
                // 使用刚指定的配置项和数据显示图表。
                tushujieyueChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    tushujieyueChart1.resize();
                };
            }
        });
      })
    },







    xuqiufankuiChat1() {
      this.$nextTick(()=>{

        var xuqiufankuiChart1 = echarts.init(document.getElementById("xuqiufankuiChart1"),'caravan');
        this.$http({
            url: "xuqiufankui/group/fankuileixing",
            method: "get",
        }).then(({ data }) => {
            if (data && data.code === 0) {
                let res = data.data;
                let xAxis = [];
                let yAxis = [];
                let pArray = []
                for(let i=0;i<res.length;i++){
                    xAxis.push(res[i].fankuileixing);
                    yAxis.push(parseFloat((res[i].total)));
                    pArray.push({
                        value: parseFloat((res[i].total)),
                        name: res[i].fankuileixing
                    })
                }
                var option = {};
                option = {
                        title: {
                            text: '反馈类型统计',
                            left: 'center'
                        },
                        tooltip: {
                          trigger: 'item',
                          formatter: '{b} : {c} ({d}%)'
                        },
                        series: [
                            {
                                type: 'pie',
                                radius: '55%',
                                center: ['50%', '60%'],
                                data: pArray,
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowOffsetX: 0,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                };
                // 使用刚指定的配置项和数据显示图表。
                xuqiufankuiChart1.setOption(option);
                  //根据窗口的大小变动图表
                window.onresize = function() {
                    xuqiufankuiChart1.resize();
                };
            }
        });
      })
    },






  }
};
</script>
<style lang="scss" scoped>
    .cardView {
        display: flex;
        flex-wrap: wrap;
        width: 100%;

        .cards {
            display: flex;
            align-items: center;
            width: 100%;
            margin-bottom: 10px;
            justify-content: center;
            .card {
                width: calc(25% - 20px);
                margin: 0 10px;
                /deep/.el-card__body{
                    padding: 0;
                }
            }
        }
    }
</style>
