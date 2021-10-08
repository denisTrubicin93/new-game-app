import React, { useEffect } from 'react';
import { BrowserRouter, Switch, useHistory } from 'react-router-dom';
import Routes from './Routes';

const App: React.FC = () => {
    const history = useHistory();
    useEffect(() => {
        history.push('/');
    }, []);
    return (
        <Switch>
            <Routes />
        </Switch>
    )
}

export default App;