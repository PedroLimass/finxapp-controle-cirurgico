import type { SurgicalRequest } from "@/types/surgicalRequest";

export function filterRequests(
  requests: SurgicalRequest[],
  filterText: string
): SurgicalRequest[] {
  return requests.filter((request) => {
    const medicoMatch = request.medico.nome
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const pacienteMatch = request.paciente.nome
      .toLowerCase()
      .includes(filterText.toLowerCase());
    return medicoMatch || pacienteMatch;
  });
}

export function sortRequests(
  requests: SurgicalRequest[],
  sortOrder: string
): SurgicalRequest[] {
  return requests.sort((a, b) => {
    const dateA = new Date(a.dataCriacao);
    const dateB = new Date(b.dataCriacao);
    return sortOrder === "desc"
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime();
  });
}
