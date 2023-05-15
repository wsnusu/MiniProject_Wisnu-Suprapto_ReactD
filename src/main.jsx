import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom'
import { client } from './config/apollo-client.jsx'
import { ThemeConfig } from "./themes/themeConfig";
import { ConfigProvider } from 'antd'
ReactDOM.createRoot(document.getElementById('root')).render(

   <ApolloProvider client={client}>
   <ConfigProvider theme={ThemeConfig}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ConfigProvider>
  
  </ApolloProvider>
)
