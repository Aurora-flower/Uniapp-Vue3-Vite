<script setup lang="ts">
import { relaunch } from '@/utils/routeJump';
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';

onLaunch(() => {
  uni.removeStorageSync('token'); // test
  const token = uni.getStorageSync('token');
  if (!token) {
    relaunch('pages/login/index', false);
    uni.showToast({
      title: '未授权，请登录',
      icon: 'none'
    });
  }
  console.log('App Launch');
});

onShow(() => {
  console.log('App Show');
});

onHide(() => {
  console.log('App Hide');
});
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  font-size: 14px;
  color: #535456;
}
</style>
