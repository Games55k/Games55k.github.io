<template>
  <div class="flex bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer p-4 gap-4 w-full" @click="handleClick">
    <div class="relative flex-shrink-0 w-30 h-40 rounded-md overflow-hidden shadow-md">
      <div class="w-full h-full">
        <img :src="anime.cover" :alt="anime.title" class="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <div v-if="anime.status" class="absolute top-0 right-0 bg-tag-bg text-tag-color text-xs px-2 py-1 rounded-bl-md font-bold">
        {{ anime.status }}
      </div>
    </div>
    <div class="flex-1 min-w-0 flex flex-col gap-1.5">
      <div class="text-base font-semibold text-text-color leading-relaxed text-clamp-1">{{ anime.title }}</div>
      <div class="text-sm text-light-text leading-relaxed text-clamp-2" v-if="anime.description">
        {{ anime.description }}
      </div>
      <div class="text-xs text-gray-400 leading-relaxed">年份·{{ anime.year}}</div>
      <div class="text-xs text-gray-400 leading-relaxed">全{{ anime.total_episodes }}话</div>
      <div class="text-xs text-gray-400 leading-relaxed">{{ anime.progress_text }}</div>
    </div>
    <div class="flex-shrink-0 w-7 h-7 flex items-center justify-center text-gray-400 cursor-pointer hover:text-primary">
      <i class="text-lg font-bold">⋮</i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    anime: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleClick() {
      // 点击处理逻辑
    }
  }
}
</script>