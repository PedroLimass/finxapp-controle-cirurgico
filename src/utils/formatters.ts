export function formatDate(dateString: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const date = new Date(dateString);
  return (
    // date.toLocaleDateString("pt-BR", options).replace(/\//g, "-") +
    // " " +
    date.toLocaleTimeString("pt-BR", options)
  );
}

export function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const ageDiff = Date.now() - birth.getTime();
  const ageDate = new Date(ageDiff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}
