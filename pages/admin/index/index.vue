<template>
	<view>

	</view>
    <view class="fui-section__title">快递详情</view>
    <fui-card :src="src" title="订单信息" :tag="queryid" >
        <view class="fui-card__content" style="padding:1em;font-size:16px;font-weight: 800">
            <p> 快递异常数量：{{info.exception}}</p>
            <br>
            <p> 快递数量：{{info.number}}</p>
            <br>
            <p> 已送达数量：{{info.delivered}}</p>
        </view>
    </fui-card>
    <br>
    <fui-card :src="src" title="网站信息" :tag="queryid" >
        <view class="fui-card__content" style="padding:1em;font-size:16px;font-weight: 800">
            <p> 今日访问人次：99999人</p>
            <br>
            <p> 今日新增用户：88888人</p>


        </view>
    </fui-card>
    <admintab :current="0"></admintab>
</template>




<script setup>

import fuiCard from "@/components/firstui/fui-card/fui-card.vue"
import Admintab from "../../../components/tab/admintab";
import {GetInfo} from "../../../api/User";
import {ref} from "vue";
const info=ref({
    number:'',
    exception:'',
    delivered:''
})
const init =async()=>{
    const resp=await GetInfo()
    console.log(resp.data)
    info.value=resp.data
}
init()
</script>

<style>

.fui-section__title {
    font-size: 32rpx;
    line-height: 32rpx;
    font-weight: 600;
    margin-bottom: 32rpx;
    padding-left: 16rpx;
    position: relative;
    box-sizing: border-box;
}

.fui-section__title:not(:first-child) {
    margin-top: 96rpx;
}
.fui-section__title::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 100%;
    background: #465CFF;
    border-radius: 2px;
    left: 0;
    top: 0;
}
page {
    background-color: var(--fui-bg-color-grey,#F1F4FA);
    font-size: 32rpx;
    font-weight: 500;
    color: var(--fui-color-title,#181818);
    font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
}
</style>
<!--<script>-->

<!--export default {-->
<!--    components: {Admintab}-->
<!--}-->
<!--</script>-->