<template>
	<view>
		累计快递数量：123
        已送达数量：111
        异常数量：111
	</view>
    <admintab :current="0"></admintab>
</template>




<script setup>
import Admintab from "../../../components/tab/admintab";
import {GetInfo} from "../../../api/User";

const init =async()=>{
    const resp=await GetInfo()
    console.log(resp)
}
init()
</script>

<style>

</style>
<!--<script>-->

<!--export default {-->
<!--    components: {Admintab}-->
<!--}-->
<!--</script>-->