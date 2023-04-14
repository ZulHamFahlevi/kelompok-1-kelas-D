export const currencyFormatter = (prefix, str) => {
  if (!str) return "";

  const separated = str
    .replace(/[^\d]/g, "")
    .replace(/\d{1,3}(?=(\d{3})+$)/g, "$&.");

  return prefix === undefined ? separated : `${prefix} ${separated}`;
};
