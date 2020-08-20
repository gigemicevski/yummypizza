import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2 tc'>
            <input 
            className='tc pa2 ba b--brown bg-lightest-red'
            type='search' 
            placeholder='search pizzas'
            onChange={searchChange}
            />
            
        </div>
        
    )
}

export default SearchBox;