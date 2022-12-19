<template>
    <view class="fui-wrap">

        <view class="fui-page__bd">

            <view class="fui-section__title">添加站点</view>
            <fui-input :padding="['20rpx','32rpx']" label="添加站点" v-model="addname" clearable :bottomLeft="0" placeholder="输入站点名称">
                <fui-button type="gray" bold width="200rpx" height="64rpx" :size="28"  @click="addsite" text="添加"></fui-button>
            </fui-input>


            <view class="fui-section__title">编辑站点</view>
            <fui-list-cell :highlight="false">
                <view class="fui-list__cell fui-flex__center" @click="show = true">
                    选择站点
                    <u-icon style="display: inline-block;" name="arrow-right" color="#939090" ></u-icon>
                    {{columns[0][fukuan]}}

                    <u-picker :show="show" :columns="columns" @confirm="confirmfukuan" @cancel="cancelfukuan"> </u-picker>
<!--                    <fui-button type="gray" bold width="200rpx" height="64rpx" :size="28" text="添加"></fui-button>-->
                </view>


            </fui-list-cell>

            <fui-input :padding="['20rpx','32rpx']" label="编辑名称" v-model="editname" clearable :bottomLeft="0" placeholder="输入站点名称">
                <fui-button type="gray" bold width="100rpx" height="64rpx" :size="14"  @click="editsite" text="编辑"></fui-button>
                <fui-button type="gray" bold width="100rpx" height="64rpx" :size="14"  @click="delsite" text="删除"></fui-button>
            </fui-input>
        </view>
        <fui-toast ref="Toast"></fui-toast>
    </view>

    <admintab :current="2"></admintab>

</template>

<script setup>
import fuiToast from "@/components/firstui/fui-toast/fui-toast.vue"
import Admintab from "../../../components/tab/admintab";
import fuiDropdownMenu from "@/components/firstui/fui-dropdown-menu/fui-dropdown-menu.vue"
import fuiListCell from "@/components/firstui/fui-list-cell/fui-list-cell.vue"
import fuiInput from "@/components/firstui/fui-input/fui-input.vue"
import fuiButton from "@/components/firstui/fui-button/fui-button.vue"
import fuiIcon from "@/components/firstui/fui-icon/fui-icon.vue"
import {AddSite, DelSite, GetSite, UpdateSite} from "../../../api/User";
import {ref} from "vue";
const show = ref(false)
const fukuan=ref(0)
const Toast = ref(null)
const addname=ref('')
const editname=ref('')
const IDList=ref({})
let options = {}
const addsite=async()=>{

    const resp=await AddSite({stationName: addname.value})
    if(resp.code==200){

        //提示信息
        options.text = '添加成功';
        Toast.value.show(options)
        await init()
    }
}

const delsite=async()=>{

    const resp=await DelSite(IDList.value[columns.value[0][fukuan.value]])
    if (resp.code==200){
        options.text = '删除成功';
        Toast.value.show(options)
        await init()
    }
}
const editsite=async()=>{
    const resp=await UpdateSite({expressId:IDList.value[columns.value[0][fukuan.value]],stationName:editname.value})
    if (resp.code==200){
        options.text = '修改成功';
        Toast.value.show(options)
        await init()
    }
}





const columns=ref([
    ['中国', '美国', '日本']
])
const init=async()=>{
    const resp=await GetSite()
    // console.log("res:",resp)
    let temp=Array()
    for(let i=0;i<resp.data.length;i++) {

        IDList.value[resp.data[i].stationName]=resp.data[i].expressId
        temp.push(resp.data[i].stationName)
    }
    console.log(IDList.value)
    columns.value[0]=temp
    // console.log(columns)


    // columns.value=await GetSite()
}
init()
const cancelfukuan =(val)=>
{

    show.value=false
}

// dref.show()
// console.log(ddref.show())


const confirmfukuan=(val)=>
{
    fukuan.value=val.indexs[0]
    show.value=false
}


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