<template>
  <div id="pagination">
    <button :disabled="currentPage === 1" @click="changePage(currentPage - 1)">
      Anterior
    </button>
    <span>Página {{ currentPage }} de {{ totalPages }}</span>
    <button
      :disabled="currentPage === totalPages"
      @click="changePage(currentPage + 1)"
    >
      Próxima
    </button>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
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

<style lang="scss" scoped>
span {
  margin: 0 0.5rem;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
}

#pagination {
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 1rem;
}
</style>
