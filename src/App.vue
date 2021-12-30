<script lang="ts" setup>
import { NConfigProvider, NGlobalStyle } from 'naive-ui'
import config from '@config'
import layout from './layout/index.vue'
</script>

<template>
  <n-config-provider :theme-overrides="config.defaultTheme">
    <layout>
      <template v-slot:header ></template>
      <template v-slot:content ></template>
    </layout>
    <n-global-style />
  </n-config-provider>
</template>
