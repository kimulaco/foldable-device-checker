<script setup lang="ts">
  import { onUnmounted } from 'vue';
  import TableHeadingRow from './components/atoms/TableHeadingRow.vue';
  import LogsBox from './components/atoms/LogsBox.vue';
  import TopHero from './components/molecules/TopHero.vue';
  import { useDeviceState } from './core/domains/useDeviceState';
  import { useScreenState } from './core/domains/useScreenState';
  import { useMatchMediaState } from './core/domains/useMatchMediaState';
  import { useWindowEvent } from './core/domains/useWindowEvent';

  const { deviceState } = useDeviceState();
  const { screenState } = useScreenState();
  const { matchMediaState } = useMatchMediaState();
  const { eventLogs, addEventListeners, removeEventListeners } =
    useWindowEvent();

  addEventListeners();

  onUnmounted(() => {
    removeEventListeners();
  });
</script>

<template>
  <div>
    <TopHero>Foldable Device Checker</TopHero>

    <div class="p-3">
      <table class="table align-text-top">
        <tbody>
          <TableHeadingRow>Device</TableHeadingRow>
          <tr v-for="(value, key) in deviceState" :key="`device_state_${key}`">
            <th class="align-top">{{ key }}</th>
            <td>{{ `${value}` }}</td>
          </tr>

          <TableHeadingRow>Screen</TableHeadingRow>
          <tr v-for="(value, key) in screenState" :key="`screen_state_${key}`">
            <th class="align-top">{{ key }}</th>
            <td>{{ `${value}` }}</td>
          </tr>

          <TableHeadingRow>Match Media</TableHeadingRow>
          <tr
            v-for="(value, key) in matchMediaState"
            :key="`media_query_state_${key}`"
          >
            <th class="align-top">{{ key }}</th>
            <td>{{ `${value}` }}</td>
          </tr>

          <TableHeadingRow>Window Event</TableHeadingRow>
          <tr
            v-for="(logs, key) in eventLogs"
            :key="`media_query_state_${key}`"
          >
            <th class="align-top">{{ key }}</th>
            <td>
              <LogsBox>
                <div
                  v-for="(log, i) in logs"
                  :key="`media_query_state_${key}_${i}`"
                >
                  {{ log }}
                </div>
              </LogsBox>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
./core/domains/useMatchMediaState
