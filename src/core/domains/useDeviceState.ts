import { reactive } from 'vue';

export const useDeviceState = () => {
  const deviceState = reactive({
    userAgent: window.navigator.userAgent,
  });

  return { deviceState };
};
