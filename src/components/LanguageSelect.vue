<script setup lang="ts">
const settingsStore = useSettingsStore();
const { locale } = useI18n();

const options = [
  { value: 'en', label: 'EN' },
  { value: 'ru', label: 'RU' },
];

watch(
  () => settingsStore.currentLocale,
  (val) => {
    locale.value = val as 'en' | 'ru';
  },
  { immediate: true },
);
</script>

<template>
  <Select
    :model-value="settingsStore.currentLocale"
    size="small"
    class="m-1"
    :options="options"
    option-label="label"
    option-value="value"
    @update:model-value="(v) => (settingsStore.currentLocale = v as 'en' | 'ru')"
  />
  <span class="text-surface-300 text-xs ms-2">{{ settingsStore.currentLocale.toUpperCase() }}</span>
</template>


