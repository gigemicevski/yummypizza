import React,{Component} from 'react';
import CardList from './components/CardList';
import Header from './components/Header';
import {Pizza} from './components/Pizza';
import SearchBox from './components/SearchBox';


class App extends Component {

    constructor(){
        super();
        this.state={
            Pizza:Pizza,
            searchField:''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value}) 
    }

    render() {
        const filteredPizza = this.state.Pizza.filter(pizza => {
        return pizza.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })
        return (
            <div>
                <Header/>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList Pizza={filteredPizza}/>
            </div>
        )
    }
    

}


export default App;