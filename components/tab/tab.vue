<template>
    <u-tabbar
        :fixed="true"
        :placeholder="true"
        :safeAreaInsetBottom="true"
        :value="current"
        @change="changetab"
    >
        <u-tabbar-item icon="home" text="寄快递"></u-tabbar-item>
        <u-tabbar-item icon="photo" text="查快递"></u-tabbar-item>
        <u-tabbar-item icon="play-right" text="广告位"></u-tabbar-item>
        <u-tabbar-item icon="account" text="我的"></u-tabbar-item>
    </u-tabbar>
</template>
<script setup>
import {ref} from "vue";

const current=ref(0)
const props = defineProps(["current"])
current.value=props.current
console.log(current)


const changetab = (val) => {
    console.log(val)
    if(val==0)
    {
        uni.reLaunch({
            url: '/pages/index/index'
        })
    }else if(val==1)
    {
        uni.reLaunch({
            url: '/pages/query/query'
        })
    }
    else if(val==3)
    {
        uni.reLaunch({
            url: '/pages/my/my'
        })
    }
}
</script>
