import { useTranslation } from 'react-i18next'

import Login from './pages/Login'
import { translationKeys } from './translationKeys'
import './App.css'

function App() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
    localStorage.setItem('lang', lang)
  }

  return (
    <>
      <div>
        <h1>{t(translationKeys['Welcome to React'])}</h1>
        <h1>{t('count')}</h1>
      </div>
      <button onClick={() => changeLanguage('en')}>En</button>
      <button onClick={() => changeLanguage('ru')}>ru</button>
      <button onClick={() => changeLanguage('uz')}>UZ</button>
      <Login />
    </>
  )
}

export default App
