import { reactive } from 'vue';

export const useScreenState = () => {
  const screenState = reactive({
    pixelDepth: window.screen.pixelDepth || null,
    size: `${window.screen.width || null} x ${window.screen.height || null}`,
    availSize: `${window.screen.availWidth || null} x ${
      window.screen.availHeight || null
    }`,
    orientationType: window.screen.orientation.type,
    orientationAngle: window.screen.orientation.angle,
  });

  return { screenState };
};
