import { signIn } from '@src/auth'

export function SignIn() {
  return (
    <form
      action={async (formData) => {
        'use server'
        await signIn('credentials', formData)
      }}
    >
      <label>
        username
        <input name='username' type='text' />
      </label>
      <label>
        Password
        <input name='password' type='password' />
      </label>
      <button>Sign In</button>
    </form>
  )
}
