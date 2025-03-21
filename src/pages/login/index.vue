<template>
  <view
    class="flex flex-col items-center justify-center bg-gray-200 w-[100vw] h-[100vh] p-2">
    <view class="">
      <view class="w-[120px] h-[120px]">
        <van-image
          round
          width="100%"
          height="100%"
          class="profile"
          src="/static/images/profile.png" />
      </view>
    </view>
    <view class="w-full">
      <van-form @submit="onSubmit">
        <view class="my-10">
          <van-cell-group inset>
            <van-field
              v-model="username"
              name="username"
              label="用户名"
              placeholder="用户名"
              :rules="[
                { required: true, message: '请填写用户名' }
              ]" />
            <van-field
              v-model="password"
              type="password"
              name="password"
              label="密码"
              placeholder="密码"
              :rules="[
                { required: true, message: '请填写密码' }
              ]" />
          </van-cell-group>
        </view>
        <view class="w-full flex justify-center my-10">
          <van-button
            native-type="submit"
            block
            class="w-2/3"
            >登录</van-button
          >
        </view>
      </van-form>
    </view>
    <!-- 	<view class="w-full justify-between">
		<view> 忘记密码?</view>
	</view>
	<view class="flex">
		<text class="mx-2">没有账号?</text>
		<view class="text-blue-200"> 立即注册</view>
	</view> -->
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getToken } from '@/api/profile';
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

const active = ref(0);
const nickname = ref('');
const username = ref('test');
const password = ref('123456');

onShow(() => {
  uni.hideTabBar();
});

async function onSubmit(values: any) {
  const token = await getToken(values);
  if (token) {
    uni.setStorage({
      key: 'token',
      data: token,
      success: function () {
        console.log('token success');
      }
    });
    uni.switchTab({
      url: '/pages/home/index'
    });
    uni.showTabBar();
  }
  console.log('token', token, values);
}
</script>
