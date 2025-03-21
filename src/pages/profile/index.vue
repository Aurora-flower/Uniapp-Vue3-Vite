<template>
  <view class="bg-gray-200 w-[100vw] h-[calc(100vh-50px)]">
    <view class="bg-[#c8c8c8] h-1/4 flex justify-center items-center bg-gradient-to-r from-gray-500 via-white-500 to-pink-100"> 
		<view class="h-2/3 overflow-hidden px-2 flex flex-col">
			<view class="h-2/3">
				<van-image
				  round
				  width="100%"
				  height="100%"
				  class="profile"
				  src="/static/images/profile.png" />
			</view>
			<view class="text-center m-2">未登录</view>
		</view>
	 </view>
	<view>
		<van-cell title="查看反馈" />
		<van-cell title="发布公告" />
	</view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { showToast } from 'vant';
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

const userInfo = ref()

onLaunch(()=>{
	
})
	
</script>

<style></style>
