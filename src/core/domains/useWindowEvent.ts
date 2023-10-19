import { reactive } from 'vue';

type EventType = 'resize' | 'orientationchange';

export const useWindowEvent = () => {
  const eventLogs = reactive<Record<EventType, string[]>>({
    resize: [],
    orientationchange: [],
  });

  const _handleResize = () => {
    eventLogs.resize.unshift(
      `resize to ${window.innerWidth} x ${window.innerHeight}`,
    );
  };

  const _handleOrientationchange = () => {
    eventLogs.orientationchange.unshift(
      `orientationchange to ${screen.orientation.angle}`,
    );
  };

  const addEventListeners = () => {
    window.addEventListener('resize', _handleResize);
    window.addEventListener('orientationchange', _handleOrientationchange);
  };

  const removeEventListeners = () => {
    window.removeEventListener('resize', _handleResize);
    window.removeEventListener('orientationchange', _handleOrientationchange);
  };

  return {
    eventLogs,
    addEventListeners,
    removeEventListeners,
  };
};
