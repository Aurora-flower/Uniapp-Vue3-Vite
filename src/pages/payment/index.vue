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
		label: '电费',
		image: '/static/images/electricity.png'
	},
	{
		label: '水费',
		image: '/static/images/water.png'
	},
	{
		label: '地暖费',
		image: '/static/images/heating.png'
	},
	{
		label: '物业费',
		image: '/static/images/property.png'
	},
]
	
</script>

<style></style>
