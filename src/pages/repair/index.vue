<template>
  <view
    class="bg-gray-200 w-[100vw] h-[calc(100vh-50px)] flex flex-wrap content-start">
    <view 
	v-for="(btn, index) in btns" :key="index"
	class="w-[calc(50%-10px)] h-[calc(50%-10px)] m-[5px] flex items-center justify-center"
      >
	  <view class="bg-gray-400 w-[calc(50%+10px)] p-2 rounded-md flex flex-col">
		  <view>
			  <van-image
				width="100%"
				height="100%"
				class="profile"
				:src="btn.image" />
		  </view>
		  <view class="text-center">
			  {{btn.label}}
		  </view>
	  </view>
	  </view
    >
  </view>
</template>

<script setup>

const btns = [
	{
		label: '报修',
		image: '/static/images/repair.png'
	},
	{
		label: '查询进度',
		image: '/static/images/progress.png'
	},
]
	
</script>

<style></style>
