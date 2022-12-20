<template>
    <view class="fui-wrap">

        <view class="fui-page__bd">

            <view class="fui-section__title">快递编辑</view>
            <fui-input :padding="['20rpx','32rpx']" label="快递单号" v-model="queryid" clearable :bottomLeft="0" placeholder="输入运单号">
                <fui-button type="gray" bold width="200rpx" height="64rpx" :size="28" @tap="query" text="查询"></fui-button>
            </fui-input>

            <view class="fui-section__title">运单详情</view>

            <fui-card :src="src" title="运单号:" :tag="queryid" >
                <view class="fui-card__content" style="padding:1em">
                    <p> 寄件人姓名：{{EmiInfo.senderName}}</p>
                    <p> 寄件人地址：{{EmiInfo.senderAddress}}</p>
                    <p> 寄件人电话：{{EmiInfo.senderPhone}}</p>
                    <p> 收件人姓名：{{EmiInfo.addresseeName}}</p>
                    <p> 收件人地址：{{EmiInfo.addresseeAddress}}</p>
                    <p> 收件人电话：{{EmiInfo.addresseePhone}}</p>
<!--                    <p> 当前状态:</p>-->
                </view>
            </fui-card>



            <view class="fui-section__title">编辑快递</view>
            <fui-list-cell :highlight="false">
                <view class="fui-list__cell fui-flex__center" @click="showedit = true">
                    编辑类型
                    <u-icon style="display: inline-block;" name="arrow-right" color="#939090" ></u-icon>
                    {{columnsedit[0][editype]}}
                    <u-picker :show="showedit" :columns="columnsedit" @confirm="confirmedit" @cancel="canceledit"> </u-picker>

                </view>

            </fui-list-cell>
            <fui-list-cell :highlight="false">
                <view class="fui-list__cell fui-flex__center" @click="showsite = true">
                    选择站点
                    <u-icon style="display: inline-block;" name="arrow-right" color="#939090" ></u-icon>
                    {{columnssite[0][siteid]}}
                    <u-picker :show="showsite" :columns="columnssite" @confirm="confirmsite" @cancel="cancelsite"> </u-picker>

                </view>

            </fui-list-cell>

            <fui-input :padding="['20rpx','32rpx']" :label="TypeText" clearable :bottomLeft="0" placeholder="信息">
                <fui-button type="gray" bold width="200rpx" height="64rpx" @tap="confrimedit" :size="28" text="提交"></fui-button>
            </fui-input>

    </view>

        </view>
    <fui-toast ref="Toast"></fui-toast>
    <admintab :current="1"></admintab>

</template>

<script setup>
import fuiCard from "@/components/firstui/fui-card/fui-card.vue"
import Admintab from "../../../components/tab/admintab";
import fuiToast from "@/components/firstui/fui-toast/fui-toast.vue"
import {ref} from "vue";
const TypeText=ref("")
const queryid=ref("")
const showsite = ref(false)
const showedit = ref(false)
const editype=ref(0)
const siteid=ref(0)
const Toast = ref(null)
const columnsedit=ref([
    ['拒绝揽收', '同意揽收', '站点收入',"运往下一个站点","异常","派件中","签收"]
])
const columnssite=ref([
    ["默认站点"]
])

const EmiInfo=ref({
    addresseeAddress:"",
    addresseeName:"",
    addresseePhone:"",
    senderAddress:"",
    senderName:"",
    senderPhone:""
})

let options = {}
const confrimedit=async()=>{
    let editypee=editype.value
    if (editypee==1)
    {
        const resp=await AcceptEmi({deliveryId:queryid})
    } else if(editypee==2){
        const resp=await  EditEmi({expressId:queryid,status:editypee,location:columnssite[0][siteid]+"收入"})
    } else if(editypee==3){
        const resp=await  EditEmi({expressId:queryid,status:editypee,location:"发往:"+columnssite[0][siteid]})
    } else if(editypee==4){
        const resp=await  EditEmi({expressId:queryid,status:editypee,location:TypeText.value})
    } else if(editypee==5){
        const resp=await  EditEmi({expressId:queryid,status:editypee,location:"派件中"})
    } else if(editypee==6){
        const resp=await  EditEmi({expressId:queryid,status:editypee,location:"签收"})
    }
    options.text = '操作成功';
    Toast.value.show(options)
}


const query=async()=>{
    const resp=await QueryEmi({expressId:queryid.value})
    console.log(resp)
    EmiInfo.value=resp.data
    //1605174572245774337
}



const canceledit =(val)=>
{
    showedit.value=false
}
const confirmedit=(val)=>
{
    editype.value=val.indexs[0]
    showedit.value=false
}


const cancelsite =(val)=>
{
    showsite.value=false
}
const confirmsite=(val)=>
{
    siteid.value=val.indexs[0]
    showsite.value=false
}

import fuiDropdownMenu from "@/components/firstui/fui-dropdown-menu/fui-dropdown-menu.vue"
import fuiListCell from "@/components/firstui/fui-list-cell/fui-list-cell.vue"

import fuiInput from "@/components/firstui/fui-input/fui-input.vue"
import fuiButton from "@/components/firstui/fui-button/fui-button.vue"
import fuiIcon from "@/components/firstui/fui-icon/fui-icon.vue"
import {AcceptEmi, EditEmi, GetEmi, QueryEmi} from "../../../api/User";
// dref.show()
// console.log(ddref.show())




</script>

<!--<script>-->
<!--import fuiInput from "@/components/firstui/fui-input/fui-input.vue"-->
<!--export default {-->
<!--    data() {-->
<!--        return {-->
<!--            text: ''-->
<!--        }-->
<!--    },-->
<!--    methods: {-->
<!--    }-->
<!--}-->
<!--</script>-->

<style>


page {
    background-color: var(--fui-bg-color-grey,#F1F4FA);
    font-size: 32rpx;
    font-weight: 500;
    color: var(--fui-color-title,#181818);
    font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
}

.fui-page__hd {
    width: 100%;
    padding: 52rpx 32rpx;
    box-sizing: border-box;
}

.fui-page__bd {

    width: 100%;
    padding-top: 64rpx;
}


.fui-page__title {
    text-align: left;
    font-size: 36rpx;
    font-weight: 600;
}

.fui-page__desc {
    margin-top: 8rpx;
    color: #B2B2B2;
    text-align: left;
    font-size: 28rpx;
    font-weight: 400;
    word-break: break-all;
}

.fui-page__spacing {
    padding-left: 32rpx;
    padding-right: 32rpx;
    box-sizing: border-box;
}

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

.fui-page__title image {
    width: 48rpx;
    height: 48rpx;
    margin-left: 16rpx;
    /* #ifdef H5 */
    cursor: pointer;
    /* #endif */
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


::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
    color: transparent !important;
    display: none;
}

.fui-wrap {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
}

</style>