<template>
  <div class="filter-container">
    <input
      type="text"
      v-model="filterText"
      @input="onFilterChange"
      placeholder="Filtrar por médico ou paciente"
    />
    <select v-model="sortOrder" @change="onSortChange">
      <option value="desc">Mais Recente</option>
      <option value="asc">Mais Antiga</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterText: "",
      sortOrder: "desc",
    };
  },
  methods: {
    onFilterChange() {
      this.$emit("filter", this.filterText);
    },
    onSortChange() {
      this.$emit("sort", this.sortOrder);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-container {
  display: flex;
  margin-top: 16px;
  padding: 1px;
  padding-bottom: 1rem;
}

input[type="text"] {
  flex-grow: 1;
  border: 2px solid #b3b3b3;
  border-radius: 100px 0 0 100px;
  padding: 10px;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  @media (max-width: 768px) {
    border-radius: 100px;
  }
}

input[type="text"]:focus {
  border-color: #1496e6;
  box-shadow: 0 0 5px rgba(20, 150, 230, 0.5);
}

select {
  border-radius: 0 100px 100px 0;
  border: 2px solid #b3b3b3;
  border-left: transparent;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.2s ease;
  width: 150px;

  @media (max-width: 768px) {
    border-radius: 100px;
    border-left: 2px solid #b3b3b3;
  }
}

select:focus {
  border-color: #1496e6;
}

@media (max-width: 768px) {
  .filter-container {
    flex-direction: column;
    align-items: flex-start;
  }

  input[type="text"] {
    width: 100%;
    margin-bottom: 10px;
  }

  select {
    width: 100%;
  }
}
</style>
