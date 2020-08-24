<template>
  <div>
    <div class="grid grid-cols-4-gap-4">
      <div
        v-for="person in people"
        :key="person.id"
        class="bg-white rounded-lg p-6 shadow"
      >
        <img
          :src="person.avatar"
          :alt="person.name"
          class="h-16 w-16 rounded-full mx-auto"
        />
        <div class="text-center">
          <h2 class="text-lg">
            {{ person.name }}
          </h2>
          <div class="text-purple-500">{{ person.department }}</div>
          <div class="text-gray-600 text-sm">{{ person.email }}</div>
          <div class="text-gray-600 text-sm">{{ person.phone }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      people: []
    }
  },
  created() {
    axios
      .get('http://localhost:3000/people')
      .then(response => {
        this.people = response.data
      })
      .catch(err => {
        console.log('There was an error:', err.response)
      })
  }
}
</script>

<style lang="scss" scoped></style>
