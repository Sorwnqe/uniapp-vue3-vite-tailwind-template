<script setup lang="ts">
  import { onLaunch, onShow, onHide } from '@dcloudio/uni-app';
  import { useAppStore } from '/@/store/modules/app';

  const appStore = useAppStore();

  onLaunch(() => {
    wx.getSystemInfo({
      success: (result) => {
        appStore.setSystemInfo(result);
      },
    });
  });
  onShow(() => {
    console.log('App Show');
  });
  onHide(() => {
    console.log('App Hide');
  });
</script>
<style>
  @import url('./tailwind.css');
</style>
<style lang="scss">
  @import 'global.scss';
  @import 'uni-ui/uni-scss';
  .page {
    font-size: 16px;
  }
</style>
