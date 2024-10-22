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

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tbody tr:hover {
  background-color: #f5f5f5;
}
</style>
