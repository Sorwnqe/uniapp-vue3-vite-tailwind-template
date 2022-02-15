export function useHeaderDynamicStyle(systemInfo: any) {
  const { statusBarHeight, type } = systemInfo;

  return {
    safeStyle: {
      paddingTop: `${statusBarHeight}px`,
      height: type === 'tab' ? '120rpx' : '80rpx',
    },
  };
}
