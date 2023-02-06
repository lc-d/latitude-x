<template>
<div class="sm:flex sm:space-x-4">
    <div class="sm:w-1/2">
        <slot name="left" />
    </div>
    <div class="sm:w-1/2 mt-12 sm:mt-0">
        <slot name="right" />
    </div>
</div>
</template>