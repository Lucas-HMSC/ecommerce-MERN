export const getHeaders = (token) => ({
  headers: {
    Authorization: `Ecommerce ${token}`,
  },
});
