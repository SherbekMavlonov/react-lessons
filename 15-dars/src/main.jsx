import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript
        initialColorMode={{
          initialColorMode: 'dark',
          useSystemColorMode: true,
        }}
      />
      <App />
    </ChakraProvider>
  </React.StrictMode>
)
