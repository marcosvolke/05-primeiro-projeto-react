import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        {/* Esse + indica q tudo que vier depois da barra é do parâmetro (pq esse parâmetro vem com barra e aí achava q era outra rota) */}
        <Route path="/repository/:repository+" component={Repository} />
    </Switch>
)

export default Routes;