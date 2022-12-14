<template>
    <view class="nav-wrap">


        <u-swiper
            :list="bannerlist"
            circular
            indicator
            indicatorMode="line"
        ></u-swiper>
        <view class='nav-tabs'>
            <u-tabs :list="tablist" @click="click"></u-tabs>
        </view>

    </view>

    <view class="nav-wrap">
        <u-row class="base-list">
            <u-col span="6" style='text-align: center;'>
                <u-row >
                				<ul-col span="6" @click="ji">
                					 <p  style='font-size:18px;font-weight: 700; text-align: left;padding-left:1em'>寄快递</p>
                					<p style='font-size:10px;margin-left:2em'>一小时内取件</p>
                				</ul-col>
                <ul-col span="6">
                	 <p style="margin-left: 20px;float:right">
						 <u--image :showLoading="true" height="40px" src="/static/ji.png" @click="ji" width="40px"></u--image>
						 </p>
                </ul-col>
                </u-row >

            </u-col>
            <u-line direction="col"></u-line>
            <u-col span="6">
				<u-row >
				<ul-col span="6">
					 <p  style='font-size:18px;font-weight: 700; text-align: left;padding-left:1.5em'>扫码寄件</p>
					<p style='font-size:10px;margin-left:2.5em'>二维码下单/查件</p>
				</ul-col>
               <ul-col span="6">
               	 <p style="margin-left: 15px;float:right"><u--image :showLoading="true" height="40px" src="/static/qrcode.png" width="40px"></u--image></p>
               </ul-col>
			   </u-row >
				<!-- <p style="float:right"><u--image :showLoading="true" height="40px" src="/static/ji.png" width="40px"></u--image></p> -->

            </u-col>

        </u-row>
    </view>
	<view class="nav-wrap">
	<u-row class="banner-card">
		 <u-notice-bar icon='' color='black' bgColor='#' :text="notice" speed="100" ></u-notice-bar>
		</u-row>

	</view>

    <view class="grid-list">
        <!-- <u-row :gutter="20">
            <u-col span="6">
                <view style="height:5em; center;background-color:rgba(204, 204, 204,0.2);border-radius: 1em">
                    <view class="text" style='padding:1em;margin-left:1px;'>
                        <p style='font-weight:600;text-align:left'>寄大件</p>
                        <p style='margin-top:5px;font-weight:100;text-align:left'>20吨以上免费</p>
                        <p style='float:right;margin-top: -40px;: relative;'>
                            <u--image :showLoading="true" height="40px" src="/static/ji.png" width="40px"></u--image>
                        </p>
                    </view>
                    <view class="icon"></view>
                </view>
            </u-col>
            <u-col  span="6">
				<view style="height:5em; center;background-color:rgba(204, 204, 204,0.2);border-radius: 1em">
				    <view class="text" style='padding:1em;margin-left:1px;'>
				        <p style='font-weight:600;text-align:left'>寄大件</p>
				        <p style='margin-top:5px;font-weight:100;text-align:left'>20吨以上免费</p>
				        <p style='float:right;margin-top: -40px;: relative;'>
				            <u--image :showLoading="true" height="40px" src="/static/ji.png" width="40px"></u--image>
				        </p>
				    </view>
				    <view class="icon"></view>
				</view>
            </u-col>
        </u-row> -->



		<u-row customStyle="margin-bottom: 20px" :gutter="20"
			v-for="(griditem,index) in gridlist"
			:key="index">
		    <u-col span="6" v-for="(item,colindex) in griditem.child" :key="colindex" @click='routergrid(item.name)'>
		        <view style="height:5em; center;background-color:rgba(204, 204, 204,0.2);border-radius: 1em">
		            <view class="text" style='padding:1.2em 0.5em 1em 1.2em;margin-left:1px;'>
		                <p style='font-weight:600;text-align:left'>{{item.name}}</p>
		                <p style='margin-top:5px;font-size:11px;font-weight:100;text-align:left'>{{item.description}}</p>
		                <p style='float:right;margin-top: -40px;margin-left:1em;'>
		                    <u--image :showLoading="true" height="40px" :src="item.image" width="40px"></u--image>
		                </p>
		            </view>
		            <view class="icon"></view>
		        </view>
		    </u-col>

		</u-row>



    </view>

    <tab :current="0"></tab>

</template>

<script setup>
import Tab from "../../components/tab/tab";
import {ref} from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const bannerlist = [
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
]
//
// const routergrid=(val)=>
// {
//     console.log(val)
//     if(val=="寄大件")
//     {
//         uni.$u.route({
//
//             url: '/pages/login/login',
//             params: {
//                 name: 'lisa'
//             }
//         })
//
//     }
//
// }

const ji=()=>
{
    uni.$u.route({
        type:"reLaunch",
        url: '/pages/sendpack/send',
    })
}

const notice="我是一条公告我是一条公告我是一条公告我是一条公告我是一条公告我是一条公告我是一条公告我是一条公告我是一条公告我是一条公告我是一条公告"
const tablist = [{
    name: '寄内地',
}, {
    name: '寄国际',
}
]
const value6 = ref(0)


const gridlist=[
	{
		"index":1,
		child:[
			{"name":"寄大件","description":"20吨以上免费","image":"/static/dajian.png"},
			{"name":"同城急送","description":"平均一小时送全城","image":"/static/tc.png"}
		]
	},
	{
		"index":2,
		child:[
			{"name":"网点自寄","description":"去芜湖网点自寄","image":"/static/ji.png"},
			{"name":"代收货款","description":"放心发货 代您收钱","image":"/static/ji.png"},

		]
	}
]



const list = [{
    name: 'photo',
    title: '图片'
},
    {
        name: 'lock',
        title: '锁头'
    },
    {
        name: 'star',
        title: '星星'
    },
    {
        name: 'hourglass',
        title: '沙漏'
    },
    {
        name: 'home',
        title: '首页'
    },
    {
        name: 'star',
        title: '音量'
    },
]

const title = ''
</script>

<style>
.banner-card
{
	padding: 10px;
	position: relative;
	border-radius: 1em;
	height:1.5em;
	background: linear-gradient(to right, rgba(255,0,0,0.3) , rgba(255,0,0,0.2), rgba(255,0,0,0.3));
	/* box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%); */
}

.base-list {
    padding: 10px;
    position: relative;
    border-radius: 1em;
    height: 3em;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
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
