<script setup lang="ts">
  import TableHeadingRow from './components/atoms/TableHeadingRow.vue';
  import TopHero from './components/molecules/TopHero.vue';
  import { useDeviceState } from './core/domains/useDeviceState';
  import { useScreenState } from './core/domains/useScreenState';
  import { useMatchMediaState } from './core/domains/useMatchMediaState';

  const { deviceState } = useDeviceState();
  const { screenState } = useScreenState();
  const { matchMediaState } = useMatchMediaState();
</script>

<template>
  <div>
    <TopHero>Foldable Device Checker</TopHero>

    <div class="p-3">
      <table class="table">
        <tbody>
          <TableHeadingRow>Device</TableHeadingRow>
          <tr v-for="(value, key) in deviceState" :key="`device_state_${key}`">
            <th>{{ key }}</th>
            <td>{{ `${value}` }}</td>
          </tr>

          <TableHeadingRow>Screen</TableHeadingRow>
          <tr v-for="(value, key) in screenState" :key="`screen_state_${key}`">
            <th>{{ key }}</th>
            <td>{{ `${value}` }}</td>
          </tr>

          <TableHeadingRow>Match Media</TableHeadingRow>
          <tr
            v-for="(value, key) in matchMediaState"
            :key="`media_query_state_${key}`"
          >
            <th>{{ key }}</th>
            <td>{{ `${value}` }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
./core/domains/useMatchMediaState
