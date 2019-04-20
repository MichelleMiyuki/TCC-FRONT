const ehLocal = false;
const local = 'http://localhost:8888/api';
const producao = 'https://sistema-login.herokuapp.com/api';
const base = ehLocal ? local : producao;
const endpoints = {
  login: `${base}/login.php`,
  cadastro: `${base}/usuario.php`,
  dashboard: `${base}/dashboard/{{ID}}`
};

export default endpoints;
