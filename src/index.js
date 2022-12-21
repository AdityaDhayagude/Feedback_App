import { getElementError } from '@testing-library/react'
import  React from 'react' //We imported React
import ReactDOM from 'react-dom'//We imported React DOM
import './index.css'
import App from './App'// We imported my App function from App.js

//THIS TELLS WHAT AND WHERE TO RENDER THE CODE
ReactDOM.render(<App />,document.getElementById('root'))