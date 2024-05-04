import Forget from './forget'
import Login from './login'

export default function Form({ type }: { type: 'login' | 'forget' }) {
  return (
    <div>
      {type === 'login' && <Login />}
      {type === 'forget' && <Forget />}
    </div>
  )
}
