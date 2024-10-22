import { SurgicalRequest } from "../types/surgicalRequest";

export function filterRequests(
  requests: SurgicalRequest[],
  searchTerm: string
): SurgicalRequest[] {
  return requests.filter(
    (request) =>
      request.medico.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.paciente.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

export function sortRequestsByDate(
  requests: SurgicalRequest[],
  ascending: boolean
): SurgicalRequest[] {
  return requests.sort((a, b) => {
    const dateA = new Date(a.dataCriacao).getTime();
    const dateB = new Date(b.dataCriacao).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
}
