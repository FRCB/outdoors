import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Playground from './components/Playground/Playground';
import Welcome from './components/Welcome/Welcome';
import Search from './components/Search/Search';
import About from './components/About/About';
import Favorites from './components/Favorites/Favorites';
import Result from './components/Result/Result';
import Contact from './components/Contact/Contact';
import Facts from './components/Facts/Facts';

export default (
    <Switch>
        <Route path='/' exact component={Welcome} />
        <Route path='/playground' component={Playground} />
        <Route path='/search' component={Search} />
        <Route path='/result' component={Result} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={ Contact } />
        <Route path='/facts' component={Facts}/>

    </Switch>
)