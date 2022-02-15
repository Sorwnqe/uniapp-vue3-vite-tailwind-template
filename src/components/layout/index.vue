<template>
  <div class="layout">
    <CHeader :type="getProps.headerType" />

    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import CHeader from '/@/components/header/index.vue';
  import { useProps } from '/@/hooks/appHooks';

  export default defineComponent({
    name: 'CLayout',
    components: {
      CHeader,
    },
    props: {
      // header
      headerType: {
        type: String,
        default: 'back',
      },
      // footer
      menuIndex: Number,
    },
    setup(props) {
      const getProps = useProps(props);

      return { getProps };
    },
  });
</script>

<style lang="scss" scoped>
  .layout {
    position: relative;
  }
</style>
