import { ref, reactive } from 'vue';
import { createMqFunctions, type MqFunctions } from 'mqfunctions';

export type MatchMediaConfig = {
  query: string;
  value: MatchMediaConfigValue;
};

export type MatchMediaConfigValue = string | number;

export type MatchMediaState = Record<string, MatchMediaConfigValue | null>;

const MEDIA_CONFIGS: Record<string, MatchMediaConfig[]> = {
  orientation: [
    {
      query: '(orientation: portrait)',
      value: 'portrait',
    },
    {
      query: '(orientation: landscape)',
      value: 'landscape',
    },
  ],
  'horizontal-viewport-segments': [
    {
      query: '(horizontal-viewport-segments: 1)',
      value: 1,
    },
    {
      query: '(horizontal-viewport-segments: 2)',
      value: 2,
    },
  ],
  'vertical-viewport-segments': [
    {
      query: '(vertical-viewport-segments: 1)',
      value: 1,
    },
    {
      query: '(vertical-viewport-segments: 2)',
      value: 2,
    },
  ],
};

export const useMatchMediaState = () => {
  const state = reactive<MatchMediaState>({});
  const mqfs = ref<MqFunctions[]>([]);

  const _initState = () => {
    for (const queryKey of Object.keys(MEDIA_CONFIGS)) {
      const configs = MEDIA_CONFIGS[queryKey];
      state[queryKey] = null;

      for (const config of configs) {
        const mqf = createMqFunctions(config.query);
        const mqfId = `${config.query}_${config.value}`;

        mqf.add(mqfId, ({ matches }) => {
          if (matches) {
            state[queryKey] = config.value;
          }
        });

        mqf.run(mqfId);
        mqfs.value.push(mqf);
      }
    }
  };

  _initState();

  return { matchMediaState: state, mqfs };
};
