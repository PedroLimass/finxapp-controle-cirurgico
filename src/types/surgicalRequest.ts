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
