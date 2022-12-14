<template>
	<view class="header">
        <u-row>
            <u-col :span="2">
                <u--image :showLoading="true" src="/static/user.png" width="60px" height="60px" @click="click"></u--image>
            </u-col>
          <u-col :span="7" style="margin-left:5px">
              <view v-show="!showlogin">
                <span style="margin-top:10px;font-weight:800">{{username}}</span>
                <view class="czz">成长值:99999</view>
              </view>
              <view  v-show="showlogin">
                  <u-button text="点我登录" type="primary" shape="circle" @click="RouteLogin"></u-button>
              </view>
          </u-col>
            <u-col :span="3">
                <u-button text="签到"  v-show="!showlogin" type="primary" shape="circle"></u-button>
            </u-col>
        </u-row>

	</view>
    <br>
    <br>
    <view class="body">
        <view class="base">
            <span class="title">基础服务</span>
            <br>
            <br>
            <u-grid
                :border="true"

            >
                <u-grid-item
                    v-for="(baseListItem,baseListIndex) in baseList"
                    :key="baseListIndex"
                >
                    <u-icon
                        :customStyle="{paddingTop:20+'rpx'}"
                        :name="baseListItem.name"
                        :size="35"
                    ></u-icon>
                    <text class="grid-text">{{baseListItem.title}}</text><br><br>
                </u-grid-item>
            </u-grid>
        </view>
        <br>
        <view class="base" style="height:21em">
            <span class="title">更多服务</span>
            <br>
            <br>
            <u-grid
                :border="true"
                @click="moreclick"
            >
                <u-grid-item
                    v-for="(baseListItem,baseListIndex) in morelist"
                    :key="baseListIndex"
                >
                    <u-icon
                        :customStyle="{paddingTop:20+'rpx'}"
                        :name="baseListItem.name"
                        :size="35"
                    ></u-icon>
                    <text class="grid-text">{{baseListItem.title}}</text><br>
                </u-grid-item>
            </u-grid>
        </view>
    </view>


   <tab :current="3"></tab>
</template>
<script setup>
import {ref} from "vue";
import Tab from "../../components/tab/tab";
const showlogin=ref(false)
const username=localStorage.getItem("username")
if (username=="" || username==undefined){
    showlogin.value=true
}
const RouteLogin =()=>{
    uni.$u.route({
        type:"reLaunch",
        url: '/pages/login/login'
    })
}



const baseList=ref([{
        name: 'photo',
        title: '地址簿'
    },
    {
        name: 'lock',
        title: '开发票'
    },
    {
        name: 'star',
        title: '服务查询'
    },
    {
        name: 'star',
        title: '在线客服'
    },
    {
        name: 'star',
        title: '客服电话'
    },
    {
        name: 'star',
        title: '偏好设置'
    },
])
const morelist=ref([{
    name: 'home',
    title: '管理后台'
},
    {
        name: 'lock',
        title: '开发票'
    },
    {
        name: 'star',
        title: '服务查询'
    },
    {
        name: 'star',
        title: '在线客服'
    },
    {
        name: 'star',
        title: '客服电话'
    },
    {
        name: 'star',
        title: '偏好设置'
    },
    {
        name: 'star',
        title: '在线客服'
    },
    {
        name: 'star',
        title: '客服电话'
    },
    {
        name: 'star',
        title: '偏好设置'
    }
])
const moreclick=(name)=>
{
    if (name==0){
        let username=localStorage.getItem("username")
        if (username=="admin"){
        uni.reLaunch({
            url: '/pages/admin/index/index'
        });
        }

    }// console.log(name)
}

</script>


<style>
.title{
    padding:5px;
    font-size:20px;
}
.body{
    padding:1em;
}
body{
  background-image: url("./static/bg.png");
}
.base{
    background-color:white ;

    font-size:15px;
    font-weight: 600;
    padding: 11px; /*为高度服务*/

    border-radius: 1em;
    height: 16em;

}
.czz{
    margin-top:8px;
    text-align: center;
    font-size:15px;
    /*font-weight: 600;*/
    /*padding: 11px;*/
    width: 50%;
    border-radius: 1em;
    /*height: 1em;*/
    background-color:white;
    /*box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);*/
}


.header{
    padding: 1em;

    height:1em;
}
</style>
