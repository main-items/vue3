<template>
  <div>
    <router-link :to="{ path: '/' }">首页</router-link>
    &nbsp;&nbsp;&nbsp;
    <router-link :to="{ path: '/overview' }">概览</router-link>
    &nbsp;&nbsp;&nbsp;
    <router-link :to="{ path: '/vue3' }">vue3</router-link>
    <router-view></router-view>
    <div id="cnbi-viewport"></div>
  </div>
</template>
