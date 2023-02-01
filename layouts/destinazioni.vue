<template>
  <main>
    <div class="wrapper wrapper-lg prose">
        <div class="pt-24 text-3xl">destinazioni</div>
        <pre>{{page}}</pre>
      <slot />
    </div>
  </main>
</template>

<script setup>
const { page } = useContent() 
console.log(page)
</script>