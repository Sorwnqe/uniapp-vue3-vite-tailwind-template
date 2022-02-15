import { defineStore } from 'pinia';
import { store } from '../index';

interface AppState {
  systemInfo: any;
}
export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => ({
    systemInfo: {},
  }),
  getters: {
    getSystemInfo(): any {
      return this.systemInfo;
    },
  },
  actions: {
    setSystemInfo(systemInfo: any): void {
      this.systemInfo = systemInfo;
    },
  },
});

export function useAppStoreWithOut() {
  return useAppStore(store);
}
