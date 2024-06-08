<template>
  <div></div>
</template>

<script lang="js" setup>
import { liff } from './plugins/lineliff.js'

if (!liff.isLoggedIn()) {
  liff.login({ redirectUri: 'https://localhost:3000/profile' })
}
</script>

<style></style>
