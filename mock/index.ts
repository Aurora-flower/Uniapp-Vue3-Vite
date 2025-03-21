function generateToken() {
  const token = `token-${Date.now()}-${Math.random().toString(36).substring(2)}`;
  return token;
}

export default [
  {
    url: '/api/token',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '成功',
        data: generateToken()
      };
    }
  }
];
