<template>
  <div>
    <p>userId: {{ userId }}</p>
    <p><img :src="pictureUrl" /></p>
    <p>displayName: {{ displayName }}</p>
    <p>statusMessage: {{ statusMessage }}</p>
    <RouterLink to="/line-logout">LINE Logout</RouterLink>
  </div>
</template>

<script lang="js" setup>
import { liff } from './plugins/lineliff.js'

import { ref } from 'vue'

const userId = ref('')
const pictureUrl = ref('')
const displayName = ref('')
const statusMessage = ref('')

if (!liff.isLoggedIn()) {
  liff.login({ redirectUri: 'https://loalhost:3000/profile' })
}

liff
  .getProfile()
  .then((profile) => {
    userId.value = profile.userId
    pictureUrl.value = profile.pictureUrl
    displayName.value = profile.displayName
    statusMessage.value = profile.statusMessage
    console.log(profile)
  })
  .catch((err) => {
    console.log('error', err)
  })
</script>

<style></style>
