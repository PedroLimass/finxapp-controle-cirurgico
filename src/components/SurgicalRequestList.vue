<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Médico</th>
          <th>Paciente</th>
          <th>Idade do Paciente</th>
          <th>Data de Criação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="request in requests" :key="request.id">
          <td>{{ request.medico.nome }}</td>
          <td>{{ request.paciente.nome }}</td>
          <td>{{ calculateAge(request.paciente.dataNascimento) }}</td>
          <td>{{ formatDate(request.dataCriacao) }}</td>
          <!-- {{ new Date(request.dataCriacao).toLocaleDateString() }} -->
        </tr>
        <tr v-if="requests.length === 0">
          <td colspan="4" style="text-align: center">Nenhum dado encontrado</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { formatDate, calculateAge } from "../utils/formatters";

export interface SurgicalRequest {
  id: number;
  medico: {
    nome: string;
  };
  paciente: {
    nome: string;
    dataNascimento: string;
  };
  dataCriacao: string;
}

export default defineComponent({
  name: "SurgicalRequestList",
  props: {
    requests: {
      type: Array as () => SurgicalRequest[],
      required: true,
    },
  },
  methods: {
    formatDate,
    calculateAge,
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/global.scss";

table {
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  position: relative;

  td,
  th {
    padding-left: 8px;
  }

  thead tr {
    height: 60px;
    background: $color-primary;
    font-size: 16px;
    color: $color-white;
    font-weight: bold;
  }

  tbody tr {
    height: 48px;
    border-bottom: 1px solid $color-grey-light;
    &:last-child {
      border: 0;
    }
  }

  td,
  th {
    text-align: center;
    align-content: center;
  }

  tbody tr:hover {
    background-color: $color-grey-light;
  }
}
</style>
