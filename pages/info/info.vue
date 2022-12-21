<template>
	<view>

      <fui-card :src="src" title="运单号:" :tag="route.query.id" >
          <view class="fui-card__content" style="padding:1em;font-size:15px">
              <p> 寄件人姓名：{{EmiInfo.senderName}}</p>
              <p> 寄件人地址：{{EmiInfo.senderAddress}}</p>
              <p> 寄件人电话：{{EmiInfo.senderPhone}}</p>
              <p> 收件人姓名：{{EmiInfo.addresseeName}}</p>
              <p> 收件人地址：{{EmiInfo.addresseeAddress}}</p>
              <p> 收件人电话：{{EmiInfo.addresseePhone}}</p>
              <br>
              <u-steps :current="jsonstr.length-1" direction="column">
                  <u-steps-item v-for="(item,index) in jsonstr" :error="item.status=='快递状态异常' || item.status=='拒收'" :title="showtext(item)" :desc="formattedDate(item.date)"/>
              </u-steps>
          </view>

      </fui-card>



	</view>
</template>

<script setup>
import fuiCard from "@/components/firstui/fui-card/fui-card.vue"
import { useRoute } from "vue-router";
import {QueryEmi} from "../../api/User";
import {ref} from "vue";
const jsonstr=ref([{}])
const route = useRoute(); // 第一步


const formattedDate = timestamp => {
    const date = new Date(timestamp * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth 返回的月份从 0 开始，所以要加 1
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // 使用字符串模板的方式将日期部分的值组合在一起
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


const showtext =(item)=>{

    if(item.where!="null" && item.where!="")
    {
        return item.where
    }
    else {
        return item.status
    }
}

const EmiInfo=ref({
    addresseeAddress:"",
    addresseeName:"",
    addresseePhone:"",
    senderAddress:"",
    senderName:"",
    senderPhone:""
})
const init =async()=>{
    const resp=await QueryEmi({expressId:route.query.id})
    EmiInfo.value=resp.data
    jsonstr.value=JSON.parse(resp.data.deliveryMessage)
}
init()


</script>
<style>

page {
    background-color: var(--fui-bg-color-grey,#F1F4FA);
    font-size: 32rpx;
    font-weight: 500;
    color: var(--fui-color-title,#181818);
    font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
}
</style>
