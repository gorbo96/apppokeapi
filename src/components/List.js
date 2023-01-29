import React,{Fragment} from 'react';
import { Grid } from '@mui/material';
import CardPoke from './CardPoke'

function List ({ pokemonList }) {    
    return(
        <Fragment>
                                            
                {pokemonList.map((pokemon) => {
                    let index = pokemon.url.split('/')[pokemon.url.split('/').length-2]                                                           
                    return (
                        <div key={pokemon.name}>
                            <CardPoke name={pokemon.name} index={index}/>
                        </div>                    
                    )}
                )}                
            
        </Fragment>
    );
}
export default List;