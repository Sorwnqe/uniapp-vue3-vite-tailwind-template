import { computed, unref } from 'vue';

export function useProps(props) {
  const getProps = computed(() => ({ ...unref(props) }));

  return getProps;
}
