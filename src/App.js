import React from 'react';
import CardList from './components/CardList';
import Header from './components/Header';
import {Pizza} from './components/Pizza';
import SearchBox from './components/SearchBox';


const App = () => {
    return (
        <div>
            <Header/>
            <SearchBox/>
            <CardList Pizza={Pizza}/>
        </div>
    )
}

export default App;