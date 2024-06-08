<template>
  <div></div>
</template>

<script lang="js" setup>
import { liff } from './plugins/lineliff.js'

if (liff.isLoggedIn()) {
  liff.logout()
}
</script>

<style></style>
