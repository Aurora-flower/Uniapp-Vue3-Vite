export function relaunch(url: string, showTab: boolean) {
  showTab ? uni.showTabBar() : uni.hideTabBar();
  uni.reLaunch({
    url,
    success: function () {
      console.log('Jump');
    }
  });
}
