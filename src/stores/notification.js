import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref([])

  const addNotification = (message, type = 'success', duration = 3000) => {
    const id = Date.now()
    notifications.value.push({ id, message, type })

    setTimeout(() => {
      removeNotifcation(id)
    }, duration)
  }

  const removeNotifcation = (id) => {
    notifications.value = notifications.value.filter((n) => n.id !== id)
  }

  return { notifications, addNotification }
})
