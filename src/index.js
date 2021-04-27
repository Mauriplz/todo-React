import React from 'react'
import ReactDom from 'react-dom'
import { TodoApp } from './TodoApp'
import './index.css'

const divRoot = document.querySelector('#root')

ReactDom.render(
    <TodoApp />,
    divRoot
)