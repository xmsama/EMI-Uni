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
                寄快递
                <p>一小时内取件</p>

            </u-col>
            <u-line direction="col"></u-line>
            <u-col span="6">
                <p  style='font-weight: 500; text-align: left;padding-left:1em'>扫码寄件</p>
                <p>二维码下单/查件</p>
				
				<!-- <u--image :showLoading="true" height="40px" src="/static/ji.png" width="40px"></u--image> -->
            </u-col>

        </u-row>
    </view>


    <view class="grid-list">
        <u-row>
            <u-col span="6">
                <view style="height:5em; center;background-color:rgba(204, 204, 204,0.1);border-radius: 1em">
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
            <u-col customStyle="text-align: center;" span="6">124563
            </u-col>
        </u-row>
    </view>

    <u-tabbar
        :fixed="true"
        :placeholder="true"
        :safeAreaInsetBottom="true"
        :value="value6"
        @change="changetab"
    >
        <u-tabbar-item icon="home" text="寄快递"></u-tabbar-item>
        <u-tabbar-item icon="photo" text="查快递"></u-tabbar-item>
        <u-tabbar-item icon="play-right" text="广告位"></u-tabbar-item>
        <u-tabbar-item icon="account" text="我的"></u-tabbar-item>
    </u-tabbar>

</template>

<script setup>
import {ref} from 'vue'

const bannerlist = [
    'https://cdn.uviewui.com/uview/swiper/swiper1.png',
    'https://cdn.uviewui.com/uview/swiper/swiper2.png',
    'https://cdn.uviewui.com/uview/swiper/swiper3.png',
]
const tablist = [{
    name: '寄内地',
}, {
    name: '寄国际',
}
]
const value6 = ref(0)
const changetab = (val) => {
    console.log(val)
    value6.value = val
}

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

<!--
<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>
 -->
<style>
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
