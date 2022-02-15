import { Ref, ref } from 'vue';

type State<T> = [Ref<T>, Function];

export function useState<T = any>(initialValues): State<T> {
  const value = ref<Ref<T>>(initialValues);

  const setValue = (newState: T) => {
    value.value = newState;
  };

  return [value, setValue];
}
