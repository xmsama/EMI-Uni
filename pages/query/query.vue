<template>
	<view>
		<view class="headercard">
<!--            <fui-input isFillets inputBorder placeholder="请输入运单号">-->
            <fui-input :marginTop="20" isFillet inputBorder v-model="queryid" placeholder="请输入运单号">
                <fui-button type="gray" bold width="200rpx" height="64rpx" @tap="RouteInfo(queryid)" :size="28" text="查询"></fui-button>
                <template v-slot:left>
                    <view class="fui-left__icon">
                        <fui-icon name="search" color="#333" :size="48"></fui-icon>
                    </view>
                </template>
            </fui-input>
            <view class='nav-tabs'>
                <u-tabs :list="tablist" @click="tabclick"></u-tabs>
            </view>
            <!--            <fui-input  isFillet inputBorder placeholder="请输入文本"></fui-input>-->
        </view>
        <br>


      <fui-card v-for="(item,index) in table" @click="RouteInfo(item.expressId)" :title="addtitle(item.expressId)"  style="margin-top:1em">
          <view class="fui-card__content" style="padding:1em;font-size:15px">

              <u-row>
                  <u-col style="margin:1em 0 0 1em" :span="3">
                      <span style="font-weight: 800;text-align: center">{{item.senderName}}</span>
                      <p>{{item.senderPhone}}</p>
                  </u-col>
                  <u-col :span="4" style="margin:1em 0 0 0;font-weight: 800">
                      <span style="text-align: center;margin-left: 1em;"> {{Status[item.status]}} </span>
                      <p style="margin-left: 1em;text-align: center"><fui-icon name="receive" :size="30"/></p>
                  </u-col>
                  <u-col style="margin:1em 0 0 1em" :span="4">
                      <span style="font-weight: 800;text-align:center">{{item.addresseeName}}</span>
                      <p>{{item.addresseePhone}}</p></u-col>

              </u-row>
              <u-row style="padding:2em 0 0 0em">创建时间：{{item.createTime}}</u-row>
          </view>
      </fui-card>





<!--        <view v-for="(item,index) in table" class="packlist">-->
<!--            <view class="base-list" @click="RouteInfo(item.expressId)">-->
<!--                <u-row>-->
<!--                    <u-col style="margin:1em 0 0 1em;font-size:15px;color:gray">运单号：{{item.expressId}}</u-col>-->
<!--                </u-row>-->
<!--                <u-row>-->
<!--                    <u-col style="margin:1em 0 0 1em" :span="3">-->
<!--                        <span style="font-weight: 800;text-align: center">{{item.senderName}}</span>-->
<!--                    <p>{{item.senderPhone}}</p>-->
<!--                    </u-col>-->
<!--                    <u-col :span="4" style="margin:1em 0 0 0;font-weight: 800">-->
<!--                        <span style="text-align: center;margin-left: 1em;"> {{Status[item.status]}} </span>-->
<!--                        <p style="margin-left: 1em;text-align: center"><fui-icon name="receive" :size="30"/></p>-->
<!--                    </u-col>-->
<!--                    <u-col style="margin:1em 0 0 1em" :span="4">-->
<!--                        <span style="font-weight: 800;text-align:center">{{item.addresseeName}}</span>-->
<!--                        <p>{{item.addresseePhone}}</p></u-col>-->

<!--                </u-row>-->

<!--                <u-row style="padding:2em 0 0 1em">创建时间：{{item.createTime}}</u-row>-->
<!--            </view>-->

<!--        </view>?-->
	</view>
    <tab :current="1"></tab>
</template>

<script setup>
import fuiButton from "@/components/firstui/fui-button/fui-button.vue"
import fuiCard from "@/components/firstui/fui-card/fui-card.vue"
import fuiInput from "@/components/firstui/fui-input/fui-input.vue"
import fuiIcon from "@/components/firstui/fui-icon/fui-icon.vue"
import UCol from "../../uni_modules/uview-plus/components/u-col/u-col";
import {GetEmi} from "../../api/User";
import {ref} from "vue";
const queryid=ref('')
const table = ref("")

const Status = {
    "0": '拒绝接单',
    "1": '等待揽收',
    "2": '站点收入',
    "3": '运送中',
    "4": '异常',
    "5": '派件中',
    "6": '签收'
};

const tablist = [{
    name: '寄件',
}, {
    name: '收件',
}
]

const addtitle=(id)=>
{
    return "单号:"+id
}


const RouteInfo=(num)=>
{
    uni.$u.route({
        type:"redirect",
        url: '/pages/info/info?id='+num,

    })
}

const tabclick=async(index,item)=>{
    const resp=await GetEmi({"type":index.index,"page":1,"size":5})//寄件
    table.value=resp.data
    // console.log("被点了",index.index)
}
const initdata = async()=>{
    const resp=await GetEmi({"type":0,"page":1,"size":5})//收件
    table.value=resp.data
    console.log(resp.data)
}

initdata()






</script>

<style>


page {
    background-color: var(--fui-bg-color-grey,#F1F4FA);
    font-size: 32rpx;
    font-weight: 500;
    color: var(--fui-color-title,#181818);
    font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
}

.packlist{
    padding: 1em;
}

.base-list {
    border-radius: 1em;
    height: 10em;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.cardlist{
    background-color:red;
    padding: 10px;
    position: relative;
}

.headercard {
    padding: 10px;
    position: relative;
    /*border-radius: 1em;*/
    height: 6em;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 5%);
}

.fui-left__icon {
    padding-right: 24rpx;
}
.header{
    padding:1em
}
</style>
