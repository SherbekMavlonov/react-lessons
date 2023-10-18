import { useTranslation } from 'react-i18next'

function Login() {
  const { t } = useTranslation()
  return <div>{t('Login')}</div>
}
export default Login
