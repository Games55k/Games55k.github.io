<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-2xl font-bold text-gray-800 mb-8">我的追番</div>
      
      <div v-if="loading" class="flex items-center justify-center py-12">
        <i class="fas fa-spinner fa-spin text-primary text-xl mr-2"></i>
        <span class="text-gray-600">加载番剧中...</span>
      </div>
      
      <div v-else>
        <div class="grid gap-6">
          <AnimeCard 
            v-for="anime in animeList" 
            :anime="anime"
          />
        </div>
        
        <div class="text-center py-8">
          <p class="text-gray-500">已加载全部番剧 · 共{{ animeList.length }}部</p>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import AnimeCard from '@/components/AnimeCard.vue'
import { ref, onMounted } from 'vue'

export default {
  name: 'App',
  components: {
    AnimeCard
  },
  setup() {
    const animeList = ref([])
    const loading = ref(true)
    
    const loadAnimeData = async () => {
      try {
        loading.value = true
        const response = await fetch('/data/animeData.json')
        const data = await response.json()
        animeList.value = data
      } catch (error) {
        console.error('加载番剧数据失败:', error)
        animeList.value = []
      } finally {
        loading.value = false
      }
    }
    
    onMounted(() => {
      loadAnimeData()
    }) 
    
    return {
      animeList,
      loading,
    }
  }
}
</script>