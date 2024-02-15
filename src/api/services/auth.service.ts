export default {
  login: ({ email, password }: { email: string, password: string }) => fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }),
}