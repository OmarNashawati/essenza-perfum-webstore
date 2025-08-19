import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const activeTheme = ref(initializeThemeSettings())

  function initializeThemeSettings() {
    const localStorageTheme = localStorage.getItem('theme')
    const systemSettingDark = window.matchMedia('(prefers-color-scheme: dark)')
    let currentTheme = ''

    if (localStorageTheme) {
      currentTheme = localStorageTheme
    } else if (systemSettingDark.matches) {
      currentTheme = 'dark'
    } else {
      currentTheme = 'light'
    }

    setTheme(currentTheme)
    return currentTheme
  }

  const toggleTheme = () => {
    activeTheme.value === 'dark'
      ? (activeTheme.value = 'light')
      : (activeTheme.value = 'dark')
    setTheme(activeTheme.value)
  }

  function setTheme(value) {
    localStorage.setItem('theme', value)
    document.querySelector('html').setAttribute('data-theme', value)
  }

  return { activeTheme, toggleTheme }
})
