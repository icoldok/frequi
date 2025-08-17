<script setup lang="ts">
import { changeLanguage } from "../i18n";
</script>
<template>
  <div class="flex gap-2 items-center p-2 text-sm">
    <span>{{$t('language')}}</span>
    <button class="px-2 py-1 border" @click="changeLanguage('en')">{{$t('language_en')}}</button>
    <button class="px-2 py-1 border" @click="changeLanguage('ru')">{{$t('language_ru')}}</button>
  </div>
</template>
