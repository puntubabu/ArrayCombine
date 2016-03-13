import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import arrayCombine from './reducers/arrayCombine'

import Layout from "./components/Layout"

let store = createStore(arrayCombine)

render (
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById("app")
)