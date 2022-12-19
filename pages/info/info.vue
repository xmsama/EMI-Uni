<template>
	<view>
		快递详情
      <u-steps current="1" direction="column">
          <u-steps-item title="已下单" desc="10:30">
          </u-steps-item>
          <u-steps-item title="已出库" desc="10:35">
          </u-steps-item>
          <u-steps-item title="运输中" desc="11:40"></u-steps-item>
      </u-steps>
	</view>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute(); // 第一步

console.log(route.query.id); // 第二步


</script>
<style>

</style>
