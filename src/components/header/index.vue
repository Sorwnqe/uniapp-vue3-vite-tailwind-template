<template>
  <div class="header text-center" :style="safeStyle"> header </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import { useAppStore } from '/@/store/modules/app';
  import { useProps } from '/@/hooks/appHooks';

  import { useHeaderDynamicStyle } from './hooks';

  export default defineComponent({
    name: 'CHeader',
    props: {
      type: String,
    },
    setup(props) {
      const appStore = useAppStore();
      const getProps = useProps(props);
      const { safeStyle } = useHeaderDynamicStyle({ ...appStore.getSystemInfo, ...getProps.value });

      const back = () => uni.navigateBack({});

      return { safeStyle, getProps, back };
    },
  });
</script>
<style lang="scss" scoped>
  .header {
    padding: 20rpx 30rpx;
  }
</style>
