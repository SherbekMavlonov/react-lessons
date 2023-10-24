import PropTypes from 'prop-types'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

import { instance } from '@/utils/use-request'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login({ setIsLogged }) {
  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { value, name } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const onLogin = async () => {
    setIsLoading(true)
    try {
      const data = await instance.post('/login', formData)
      if (data?.data?.user) {
        localStorage.setItem('access_token', data.data?.user)
        setIsLogged(true)
        navigate('/')
        return
      }
      throw Error()
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      })
      setFormData({
        userEmail: '',
        userPassword: '',
      })
    }
    setIsLoading(false)
  }
  return (
    <div className='mt-5 flex gap-5 flex-col w-1/2 mx-auto bg-slate-300 p-4'>
      <Input
        name='userEmail'
        placeholder={'Email'}
        type='email'
        value={formData.userEmail}
        onChange={handleChange}
      />
      <Input
        name='userPassword'
        placeholder={'Password'}
        type='password'
        value={formData.userPassword}
        onChange={handleChange}
      />
      <Button onClick={onLogin} disabled={isLoading}>
        Login
      </Button>
      <Link to={'/sign-up'}>Sign up</Link>
    </div>
  )
}
export default Login

Login.propTypes = {
  setIsLogged: PropTypes.func,
}
