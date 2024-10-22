<template>
  <div id="app">
    <header>
      <img src="../assets/logoFixapp.png" alt="Logo FinxApp" class="logo" />
      <h1>Solicitações cirúrgicas</h1>
    </header>
    <FilterRequests @filter="applyFilter" @sort="sortRequests" />
    <SurgicalRequestList
      :requests="paginatedRequests"
      @pageChange="handlePageChange"
    />
    <Pagination
      :currentPage="currentPage"
      :totalPages="totalPages"
      @changePage="handlePageChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import api from "@/utils/api";
import SurgicalRequestList from "@/components/SurgicalRequestList.vue";
import Pagination from "@/components/Pagination.vue";
import FilterRequests from "@/components/FilterRequests.vue";
import { filterRequests, sortRequests } from "@/utils/requestHelpers";
import type { SurgicalRequest } from "@/types/surgicalRequest"; // Importando o tipo

export default defineComponent({
  components: {
    SurgicalRequestList,
    Pagination,
    FilterRequests,
  },
  setup() {
    const requests = ref<SurgicalRequest[]>([]);
    const currentPage = ref(1);
    const itemsPerPage = 5;
    const filterText = ref("");
    const sortOrder = ref("desc");

    const filteredRequests = computed(() =>
      filterRequests(requests.value, filterText.value)
    );

    const sortedRequests = computed(() =>
      sortRequests(filteredRequests.value, sortOrder.value)
    );

    const paginatedRequests = computed(() => {
      const start = (currentPage.value - 1) * itemsPerPage;
      return sortedRequests.value.slice(start, start + itemsPerPage);
    });

    const totalPages = computed(() =>
      Math.ceil(sortedRequests.value.length / itemsPerPage)
    );

    const fetchRequests = async () => {
      try {
        const response = await api.get("data");
        requests.value = response.data;
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    const applyFilter = (filterTextValue: string) => {
      filterText.value = filterTextValue;
      currentPage.value = 1;
    };

    const sortRequestsHandler = (order: string) => {
      sortOrder.value = order;
      currentPage.value = 1;
    };

    const handlePageChange = (page: number) => {
      currentPage.value = page;
    };

    onMounted(fetchRequests);

    return {
      requests,
      currentPage,
      paginatedRequests,
      totalPages,
      applyFilter,
      sortRequests: sortRequestsHandler,
      handlePageChange,
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";

#app {
  width: 960px;
  margin: 0 auto;
  background-color: #fff;
  padding: 2rem;
  border-radius: 16px;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem;
    border-radius: 0;
  }
}

h1 {
  font-family: "Manrope", Sans-serif;
  font-weight: bold;
  font-size: 2.5rem;
  padding: 1rem 0;
  color: $color-secondary;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    text-align: center;
  }
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.logo {
  height: fit-content;
  border: none;
  border-radius: 0;
  box-shadow: none;

  @media (max-width: 768px) {
    max-width: 200px;
  }
}
</style>
