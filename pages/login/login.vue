<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">欢迎登录芜湖快递</view>
			<input class="u-border-bottom"  v-model="loginform.account" placeholder="请输入手机号" />
            <view class="tips">未注册的手机号验证后自动创建账号</view>
            <input class="u-border-bottom" type="password" v-model="loginform.password" placeholder="请输入密码" />
<!--            <view class="tips">未注册的手机号验证后自动创建账号</view>-->
            <view>&nbsp;</view>
<!--            <u-button  @tap="submit" type="warning" text="登录" size="large"></u-button>-->
            <fui-button  @tap="login" type="primary">登录</fui-button>
            <fui-button  @tap="loginadmin" type="warning">管理员登录</fui-button>
<!--			<button @tap="submit"  type='warning' class="getCaptcha">登录</button>-->
			<view class="alternative">
				<view class="password">验证码登录</view>
				<view class="issue">遇到问题</view>
			</view>
		</view>
		<view class="buttom">
			<view class="loginType">
				<view class="wechat item">
					<view class="icon"><u-icon size="70" name="weixin-fill" color="rgb(83,194,64)"></u-icon></view>
					微信
				</view>
				<view class="QQ item">
					<view class="icon"><u-icon size="70" name="qq-fill" color="rgb(17,183,233)"></u-icon></view>
					QQ
				</view>
			</view>
			<view class="hint">
				登录代表同意
				<text class="link">用户协议、隐私政策等霸王条款</text>
				并授权使用您的账号信息（如昵称、头像、收获地址等）以便我们做大数据杀熟
			</view>
            <fui-toast ref="Toast"></fui-toast>
		</view>

	</view>
</template>

<script setup>
import fuiButton from "@/components/firstui/fui-button/fui-button.vue"
import fuiToast from "@/components/firstui/fui-toast/fui-toast.vue"
import {Login, LoginAdmin} from '/api/User.js'
import {ref} from 'vue'
const Toast = ref(null)
let username=localStorage.getItem("username")
if (username!="" && username!=undefined){
    uni.$u.route({
        type:"redirect",
        url: '/pages/index/index',
    })
}
const loginform=ref({
    account:'',
    password:''
})




const loginadmin =async()=>
{
    let options = {}
    const resp=await LoginAdmin({...loginform.value})
    console.log(resp)
    if (resp.code==200){
        options.text = '登录成功';
        Toast.value.show(options)
        localStorage.setItem("token",resp.data.token)
        localStorage.setItem("username",resp.data.user.account)
        uni.reLaunch({
            url: '/pages/my/my'
        });
    }else{
        options.text = '登录失败 请检查账号密码是否正确';
        Toast.value.show(options)
    }
}
const login=async()=>
{
    //正则验证手机号
    let options = {}
    // console.log(loginform.value.account)
    if(!uni.$u.test.mobile(loginform.value.account))
    {
        //提示信息
        options.text = '请输入正确的手机号';
        Toast.value.show(options)

    }else
    {

        if(loginform.value.password=="")
        {
            options.text = '请输入密码';
            Toast.value.show(options)
        }
        const resp=await Login({...loginform.value})
        console.log(resp.data)
        if (resp.data.code==1002)
        {
            options.text = '输入的信息不正确';
            Toast.value.show(options)
        }else if(resp.code==200)
        {
            console.log(resp.data)
            if(resp.data.user!=undefined)
            {
                options.text = '登录成功';
                Toast.value.show(options)
                localStorage.setItem("token",resp.data.token)
                localStorage.setItem("username",resp.data.user.name)
                uni.reLaunch({
                    url: '/pages/my/my'
                });
                //登录成功
            }else {
                options.text = '新用户 已自动注册 请重新点击登录';
                Toast.value.show(options)
            }
        }else if(resp.data.code==2)
        {
            options.text = '密码错误';
            Toast.value.show(options)
        }
        // const resp={code:0,
        // username:"testname"}
        // if (resp.code==0)
        // {
        //     options.text = '登录成功';
        //     Toast.value.show(options)
        //     localStorage.setItem("username",resp.username) //哎呀 登录成功了
        //     uni.reLaunch({
        //         url: '/pages/my/my'
        //     });
        //
        // }
    }



}




</script>


<!--<script>-->
<!--	export default {-->
<!--		data() {-->
<!--			return {-->

<!--			}-->
<!--		},-->
<!--		methods: {-->

<!--		}-->
<!--	}-->
<!--</script>-->

<style lang="scss" scoped>
.wrap {
    font-size: 28rpx;
    .content {
        width: 600rpx;
        margin: 80rpx auto 0;

        .title {
            text-align: left;
            font-size: 60rpx;
            font-weight: 500;
            margin-bottom: 100rpx;
        }
        input {
            text-align: left;
            margin-bottom: 10rpx;
            padding-bottom: 6rpx;
        }
        .tips {
            color: $u-info;
            margin-bottom: 60rpx;
            margin-top: 8rpx;
        }
        .getCaptcha {
            //background-color: rgb(253, 243, 208);
            //color: $u-tips-color;
            //border: none;
            //font-size: 30rpx;
            //padding: 12rpx 0;
            //
            //&::after {
            //    border: none;
            //}
        }
        .alternative {
            color: $u-tips-color;
            display: flex;
            justify-content: space-between;
            margin-top: 30rpx;
        }
    }
    .buttom {
        .loginType {
            display: flex;
            padding: 350rpx 150rpx 150rpx 150rpx;
            justify-content:space-between;

            .item {
                display: flex;
                flex-direction: column;
                align-items: center;
                color: $u-content-color;
                font-size: 28rpx;
            }
        }

        .hint {
            padding: 20rpx 40rpx;
            font-size: 20rpx;
            color: $u-tips-color;

            .link {
                color: $u-warning;
            }
        }
    }
}
</style>
