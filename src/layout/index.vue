<template>
  <n-space vertical>
    <n-layout has-sider>
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="240"
        :collapsed="collapsed"
        show-trigger="bar"
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
          v-model:value="activeKey"
        />
      </n-layout-sider>
      <n-layout>
        <slot name="header">
          <n-switch v-model:value="collapsed" />
        </slot> 
        <slot name="content">
          <div class="ml20 mr20">
            <content />
          </div>
        </slot> 
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script lang="ts" setup>
import { NMenu, NSpace, NLayout, NLayoutSider, NSwitch } from 'naive-ui'
import content from './content.vue'
import { collapsed, activeKey, menuOptions } from './ref'
</script>