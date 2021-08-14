export const getConfig = () => {
  const jwt = localStorage.getItem('jwt');
  return (jwt ? {
    headers: {Authorization: `Bearer ${jwt}`}
  } : {});
}