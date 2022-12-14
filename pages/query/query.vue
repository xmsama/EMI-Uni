<template>
	<view>
		<view class="headercard">
<!--            <fui-input isFillets inputBorder placeholder="请输入运单号">-->
            <fui-input :marginTop="20" isFillet inputBorder placeholder="请输入运单号">
                <template v-slot:left>
                    <view class="fui-left__icon">
                        <fui-icon name="search" color="#333" :size="48"></fui-icon>
                    </view>
                </template>
            </fui-input>
            <view class='nav-tabs'>
                <u-tabs :list="tablist" @click="click"></u-tabs>
            </view>
            <!--            <fui-input  isFillet inputBorder placeholder="请输入文本"></fui-input>-->
        </view>
        <br>
        <view class="packlist">
            <view class="base-list">
                <u-row>
                    <u-col style="margin:1em 0 0 1em;font-size:15px;color:gray">运单号：12312312312312312</u-col>
                </u-row>
                <u-row>
                    <u-col style="margin:1em 0 0 2em" :span="4">
                        <span style="font-weight: 800">默认寄件人</span>
                    <p>1341213...</p>
                    </u-col>
                    <u-col :span="3" style="margin:1em 0 0 0;font-weight: 800">
                        <span>已签收 </span>
                        <p style="margin-left: 1em"><fui-icon name="receive" :size="30"/></p>
                    </u-col>
                    <u-col style="margin:1em 0 0 1em" :span="4">
                        <span style="font-weight: 800">默认寄件人</span>
                        <p>1341233...</p></u-col>

                </u-row>

                <u-row style="padding:2em 0 0 1em">更新时间：2012-55-55 11:22:33</u-row>
            </view>
<!--            <u-row class="base-list">-->
<!--                <u-col span="5" style='text-align: center;'>-->

<!--                    <u-row >-->
<!--                        <ul-col span="6" @click="ji">-->
<!--                            <p  style='font-size:18px;font-weight: 700; text-align: left;padding-left:1em'>寄快递</p>-->
<!--                            <p style='font-size:10px;margin-left:2em'>一小时内取件</p>-->
<!--                        </ul-col>-->
<!--                        <ul-col span="6">-->
<!--                            <p style="margin-left: 20px;float:right">-->
<!--                                <u&#45;&#45;image :showLoading="true" height="40px" src="/static/ji.png" @click="ji" width="40px"></u&#45;&#45;image>-->
<!--                            </p>-->
<!--                        </ul-col>-->
<!--                    </u-row >-->

<!--                </u-col>-->

<!--                <u-col span="6">-->
<!--                    <u-row >-->
<!--                        <ul-col span="6">-->
<!--                            <p  style='font-size:18px;font-weight: 700; text-align: left;padding-left:1.5em'>扫码寄件</p>-->
<!--                            <p style='font-size:10px;margin-left:2.5em'>二维码下单/查件</p>-->
<!--                        </ul-col>-->
<!--                        <ul-col span="6">-->
<!--                            <p style="margin-left: 15px;float:right"><u&#45;&#45;image :showLoading="true" height="40px" src="/static/qrcode.png" width="40px"></u&#45;&#45;image></p>-->
<!--                        </ul-col>-->
<!--                    </u-row >-->
<!--                    &lt;!&ndash; <p style="float:right"><u&#45;&#45;image :showLoading="true" height="40px" src="/static/ji.png" width="40px"></u&#45;&#45;image></p> &ndash;&gt;-->

<!--                </u-col>-->

<!--            </u-row>-->
        </view>
	</view>
    <tab :current="1"></tab>
</template>

<script setup>

import fuiInput from "@/components/firstui/fui-input/fui-input.vue"
import fuiIcon from "@/components/firstui/fui-icon/fui-icon.vue"
import UCol from "../../uni_modules/uview-plus/components/u-col/u-col";
const tablist = [{
    name: '寄件',
}, {
    name: '收件',
}
]
</script>
<!--<script>-->
<!--	export default {-->
<!--		data() {-->
<!--			return {-->
<!--				-->
<!--			}-->
<!--		},-->
<!--		methods: {-->
<!--			-->
<!--		}-->
<!--	}-->
<!--</script>-->

<style>

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
