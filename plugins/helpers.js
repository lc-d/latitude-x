export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
          date: (date) => {
            const options = {
              month: 'short',
              day: '2-digit',
              year: 'numeric'
            }
            return new Date(date).toLocaleString(['it-IT'], options)
          }
        }
      }
  })