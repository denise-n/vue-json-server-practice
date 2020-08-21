<template>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Department</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="person in people" :key="person.id">
        <td>{{ person.name }}</td>
        <td>{{ person.email }}</td>
        <td>{{ person.phone }}</td>
        <td>{{ person.department }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from 'axios'

export default {
  name: 'simple-list',
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

<style scoped>
td {
  padding: 8px;
}
</style>
