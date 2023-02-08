export default defineNuxtPlugin(nuxtApp => {
    return {
        provide: {
          date: (date) => {
            const options = {
              month: 'short',
              year: 'numeric'
            }
            return new Date(date).toLocaleString(['it-IT'], options)
          }
        }
      }
  })