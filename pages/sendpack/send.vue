<template>
	<view>
        <view class="nav-wrap">
            <view class="base-list">
                <view class="addresscard">
                    <u-row>
                        <u-col :span="1">
                            <u--image :showLoading="true" height="30px" width="30px" src="/static/sendji.png"></u--image>
                        </u-col>
                        <u-col :span="10" :offset="1">
                            <p><span style="font-weight: 800">默认寄件人</span><span style="font-weight: 500"> 13412345678</span></p>
                            <p class="addressinfo" style="font-size:15px">
                            <u--textarea  border="bottom" v-model="packform.sendaddress" placeholder="请输入地址" ></u--textarea>
                            </p>
                        </u-col>
                    </u-row>
                </view>
                <u-divider ></u-divider>

                <view class="addresscard">
                    <u-row>
                        <u-col :span="2">
                            <u--image :showLoading="true" height="30px" src="/static/sendshou.png" width="30px"></u--image>
                        </u-col>
                        <u-col :span="10">
                            <p><span style="font-weight: 800">默认收件人</span><span style="font-weight: 500"> 13587654321</span></p>
                            <p class="addressinfo" style="font-size:15px">
                                <u--textarea  border="bottom" v-model="packform.reciveaddress" placeholder="请输入地址" ></u--textarea>
                            </p>
                        </u-col>

                    </u-row>
                </view>


            </view>
            <br>
            <view class="smallcard" style="padding:1em">
                <u-row>
                    <u-col span="6">
                        <view class="jc">付款方式</view>
                    </u-col>

                    <u-col span="6" style="text-align: right">
                        <view  @click="show = true">
                            <span class="jc descriptiontext">
                        		{{columns[0][fukuan]}}
                                <u-icon style="display: inline-block;" name="arrow-right" color="#939090" ></u-icon>
                            </span>
<!--                            <span>{{columns[0][fukuan]}} </span><span style="font-weight: 800"> ></span>-->
                            <u-picker :show="show" :columns="columns" @confirm="confirmfukuan" @cancel="cancelfukuan"> </u-picker>

                        </view>
                    </u-col>
                </u-row>

            </view>
            <br>
            <view class="smallcard" style="padding:1em">
                <u-row>
                    <u-col :span="5">
                        <span class="jc">
                            保价
                            <u-icon style="display: inline-block;" name="question-circle-fill" ></u-icon>
                        </span>
                    </u-col>
                    <u-col :span="7" style="text-align: right">
                        <span class="jc descriptiontext">
                            未保价最高赔付0倍运费
                        </span>
                    </u-col>
                </u-row>
            </view>
            <br>
            <view class="smallcard" style="padding:1em">
                <u-row>
                    <u-col :span="5">
                        <span class="jc">
                            增值服务
<!--                            <u-icon style="display: inline-block;" name="question-circle-fill" ></u-icon>-->
                        </span>
                    </u-col>
                    <u-col :span="7" style="text-align: right">
                         <span class="jc descriptiontext">
                        		没的增值
                                <u-icon style="display: inline-block;" name="arrow-right" color="#939090" ></u-icon>
                            </span>
                    </u-col>
                </u-row>
            </view>
            <br>
            <view class="bigcard" style="padding:1em">
                <u-row>
                    <u-col :span="10">
                        <span class="jc">
                            信息加密
                            <!--                            <u-icon style="display: inline-block;" name="question-circle-fill" ></u-icon>-->
                        </span>
                    </u-col>
                    <u-col :span="2" style="text-align: right">
                         <span class="jc descriptiontext">
                        		<u-switch v-model="encryptmsg" @change="change"></u-switch>
                         </span>
                    </u-col>
                </u-row>
                <br>
                <u-row style="color:rgba(128,128,128);font-size:15px">
                    纸质单和自助查单渠道(APP/小程序等)均会对收寄双方姓名/电话/地址进行隐藏处理，使用即同意《信息加密霸王条款》不同意也得给我同意;
                </u-row>
            </view>





        </view>

        <view class='footer' style="">

            <u-row>
                <u-col :span="8">
                    <view>预估总价 <span class="price">$999999</span></view>

                    <p>
                        <u-radio-group v-model="value">
                            <u-radio label="阅读并同意《电子运单契约条款》"></u-radio>
                        </u-radio-group>
                    </p>
                </u-col>
                <u-col :span="3">
                    <u-button type="primary" text="下单" @click="sendpack" shape="circle"></u-button>
                </u-col>
            </u-row>

        </view>
	</view>

</template>


<script setup>

import {ref} from "vue";
import fuiButton from "@/components/firstui/fui-button/fui-button.vue"

//登录态检测
let username=localStorage.getItem("username")
if (username=="" ||username==undefined){
    uni.$u.route({
        type:"redirect",
        url: '/pages/login/login',
    })
}
const packform=ref({
    sendname:"默认寄件人",
    sendphone:"13412345678",
    sendaddress:'',
    recivename:"默认收件人",
    recivephone:"13587654321",
    reciveaddress:''
})
const show = ref(false)
const fukuan=ref(0)
const encryptmsg=ref(false)
const cancelfukuan =(val)=>
{

    show.value=false
}
const confirmfukuan=(val)=>
{
    fukuan.value=val.indexs[0]

    show.value=false
}



const sendpack=async ()=>{
    console.log("fucking crazy")
}



const  columns=[
        ['寄付现结', '到付', '霸王单']
    ]



</script>
<style>
.descriptiontext{
    font-size:14px;
}
/*body{*/
/*    background-color: rgba(128,128,128,0.05);*/
/*}*/

.price{
    font-weight: 800;
    color:rgba(255,0,0,0.8)
}
.banner-card
{
    padding: 10px;
    position: relative;
    border-radius: 1em;
    height:1.5em;
    background: linear-gradient(to right, rgba(255,0,0,0.3) , rgba(255,0,0,0.2), rgba(255,0,0,0.3));
    /* box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%); */
}

.jc{
    font-weight: 600;
}
.bigcard{

    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 1em;
    height: 8em;
}
.footer{
    padding:1em;
    width:100%;
    position:fixed;
    bottom:0;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    /*border-radius: 1em;*/
    height:3em;
}
.smallcard{

    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 1em;
    height: 1.5em;
}

.base-list {
    /*padding: 1px;*/
    /*position: relative;*/
    border-radius: 1em;
    height: 20em;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.addresscard
{

    padding:1em;

    /*height: 7em;*/

}

.addressinfo{
    width: 95%;
    overflow: hidden;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow:ellipsis;

}

.grid-list {
    padding: 15px;
    text-align: center;
}

.nav-wrap {
    padding: 15px;
    position: relative;
}

.content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo {
    height: 200 rpx;
    width: 200 rpx;
    margin-top: 200 rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50 rpx;
}

.text-area {
    display: flex;
    justify-content: center;
}

.title {
    font-size: 36 rpx;
    color: #8f8f94;
}
</style>
