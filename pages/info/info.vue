<template>
	<view>

      <fui-card :src="src" title="运单号:" :tag="route.query.id" >
          <view class="fui-card__content" style="padding:1em">
              <p> 寄件人姓名：{{EmiInfo.senderName}}</p>
              <p> 寄件人地址：{{EmiInfo.senderAddress}}</p>
              <p> 寄件人电话：{{EmiInfo.senderPhone}}</p>
              <p> 收件人姓名：{{EmiInfo.addresseeName}}</p>
              <p> 收件人地址：{{EmiInfo.addresseeAddress}}</p>
              <p> 收件人电话：{{EmiInfo.addresseePhone}}</p>
              <u-steps current="1" direction="column">
                  <u-steps-item title="已下单" desc="10:30">
                  </u-steps-item>
                  <u-steps-item title="已出库" desc="10:35">
                  </u-steps-item>
                  <u-steps-item title="运输中" desc="11:40"></u-steps-item>
                  <u-steps-item title="运输中" desc="11:40"></u-steps-item>
                  <u-steps-item title="运输中" desc="11:40"></u-steps-item>
                  <u-steps-item title="运输中" desc="11:40"></u-steps-item>
                  <u-steps-item title="运输中" desc="11:40"></u-steps-item>
                  <u-steps-item title="运输中" desc="11:40"></u-steps-item>
                  <u-steps-item title="运输中" desc="11:40"></u-steps-item>
                  <u-steps-item title="运输中" desc="11:40"></u-steps-item>
                  <u-steps-item title="运输中" desc="11:40"></u-steps-item>
                  <u-steps-item title="运输中" desc="11:40"></u-steps-item>
                  <u-steps-item title="运输中" desc="11:40"></u-steps-item>
                  <u-steps-item title="运输中" desc="11:40"></u-steps-item>
                  <u-steps-item title="运输中" desc="11:40"></u-steps-item>
                  <u-steps-item title="运输中" desc="11:40"></u-steps-item>
              </u-steps>
          </view>

      </fui-card>



	</view>
</template>

<script setup>
import fuiCard from "@/components/firstui/fui-card/fui-card.vue"
import { useRoute } from "vue-router";
import {QueryEmi} from "../../api/User";

const route = useRoute(); // 第一步

const resp=QueryEmi({expressId:route.query.id})
console.log(resp)


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
