<template>
  <div id="app">
    <h1>Listagem de Agendamentos Cirúrgicos</h1>
    <FilterRequests @filter="applyFilter" @sort="sortRequests" />
    <SurgicalRequestList
      :requests="filteredRequests"
      @pageChange="handlePageChange"
    />
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @changePage="handlePageChange"
    />
  </div>
</template>

<script>
import api from "@/utils/api";
import SurgicalRequestList from "@/components/SurgicalRequestList.vue";
import Pagination from "@/components/Pagination.vue";
import FilterRequests from "@/components/FilterRequests.vue";

export default {
  components: {
    SurgicalRequestList,
    Pagination,
    FilterRequests,
  },
  data() {
    return {
      requests: [],
      currentPage: 1,
      itemsPerPage: 5,
      filterText: "",
      sortOrder: "desc",
    };
  },
  computed: {
    filteredRequests() {
      return this.requests
        .filter((request) => {
          const medicoMatch = request.medico.nome
            .toLowerCase()
            .includes(this.filterText.toLowerCase());
          const pacienteMatch = request.paciente.nome
            .toLowerCase()
            .includes(this.filterText.toLowerCase());
          return medicoMatch || pacienteMatch;
        })
        .sort((a, b) => {
          const dateA = new Date(a.dataCriacao);
          const dateB = new Date(b.dataCriacao);
          return this.sortOrder === "desc" ? dateB - dateA : dateA - dateB;
        })
        .slice(
          (this.currentPage - 1) * this.itemsPerPage,
          this.currentPage * this.itemsPerPage
        );
    },
    totalPages() {
      return Math.ceil(this.requests.length / this.itemsPerPage);
    },
  },
  methods: {
    async fetchRequests() {
      try {
        const response = await api.get("data");
        this.requests = response.data;
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    },
    applyFilter(filterText) {
      this.filterText = filterText;
      this.currentPage = 1;
    },
    sortRequests(order) {
      this.sortOrder = order;
      this.currentPage = 1;
    },
    handlePageChange(page) {
      this.currentPage = page;
    },
  },
  mounted() {
    this.fetchRequests();
  },
};
</script>

<style></style>
