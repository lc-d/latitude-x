export default defineNuxtPlugin(() => {
    return {
      provide: {
        tel: () => `+393333508514`,
        mail: () => `lorenzo@cataldi.design`
      }
    }
  })