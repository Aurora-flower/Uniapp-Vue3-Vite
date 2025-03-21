<template>
  <view class="bg-gray-200 w-[100vw] h-[calc(100vh-50px)]">
    <van-pull-refresh
      v-model="refreshing"
      success-text="加载成功"
      @refresh="onRefresh">
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad">
        <view
          class="bg-gray-200 p-2"
          v-for="(item, index) in 100"
          :key="item">
          <van-swipe-cell>
            <van-card
              centered
              desc="描述信息"
              :title="`大房子${index}`">
			  <template #thumb>
				<view class="bg-gray-400 rounded-md">
					<van-image
					src="/static/images/home.png"
					/>
				</view>
			  </template>
              <template #tags>
                <van-tag
                  plain
                  type="primary">
                  House
                </van-tag>
              </template>
              <template #num>
                <van-button size="small">编辑</van-button>
              </template>
            </van-card>
            <template #right>
              <view class="h-full flex items-center">
                <van-button
                  square
                  type="danger"
                  text="删除" />
              </view>
            </template>
          </van-swipe-cell>
        </view>
      </van-list>
    </van-pull-refresh>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { showToast } from 'vant';
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

const finished = ref(false);
const loading = ref(false);
const refreshing = ref(false);

onLaunch(() => {});

function onRefresh() {
  setTimeout(() => {
    showToast('刷新成功');
    refreshing.value = false;
  }, 1000);
}

function onLoad() {
  setTimeout(() => {
    loading.value = false;
    finished.value = true;
  }, 1000);
}
</script>
