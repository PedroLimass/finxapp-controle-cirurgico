<template>
  <div>
    <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">Anterior</button>
    <span>Página {{ currentPage }} de {{ totalPages }}</span>
    <button :disabled="currentPage === totalPages" @click="changePage(currentPage + 1)">Próxima</button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    totalPages: Number,
  },
  methods: {
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para o Pagination.vue */
</style>
