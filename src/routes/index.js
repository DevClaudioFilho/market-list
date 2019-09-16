import React from 'react'
import { Switch ,Route } from 'react-router-dom'

import Market from '../pages/market'
import Products from '../pages/products'

export default function Routes () {
    return (
        <Switch>
            <Route exact path="/" component={Market} />
            <Route exact path="/market/:id/products" component={Products} />
        </Switch>
    )
} 