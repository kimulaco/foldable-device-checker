<script setup lang="ts">
  import { DeviceState } from './core/domains/DeviceState';

  const deviceState = new DeviceState();
</script>

<template>
  <div>
    <div class="hero">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Foldable Device Checker</h1>
        </div>
      </div>
    </div>

    <table class="table">
      <tbody>
        <tr>
          <th>User Agent</th>
          <td>{{ deviceState.userAgent }}</td>
        </tr>

        <tr>
          <th>screen.orientation.type</th>
          <td>{{ deviceState.screenOrientationType }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
