<template>
  <div>
    <input
      type="text"
      v-model="filterText"
      @input="onFilterChange"
      placeholder="Filtrar por médico ou paciente"
    />
    <select v-model="sortOrder" @change="onSortChange">
      <option value="desc">Data: mais recente</option>
      <option value="asc">Data: mais antiga</option>
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
