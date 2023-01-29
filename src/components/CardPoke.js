import React,{Component} from 'react';
import { Card,CardContent, Typography } from '@mui/material';
import axios from 'axios';
import './CardPoke.css';
import { Link } from 'react-router-dom';


class CardPoke extends Component{
    state={pokeData:[],pokeType:[]}
    
    constructor(props){
        super(props);        
    }
    
    componentDidMount(){        
        const url = 'https://pokeapi.co/api/v2/pokemon/'+this.props.index;
        axios.get(url)
        .then(res => {
            this.setState({
                pokeData: res.data,
                pokeType: res.data.types                
            })
        })
        .catch(error =>{
            console.log("Error en CardPoke,"+error);
        })
    }
    render(){
        const {pokeData,pokeType}=this.state
        const img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.props.index+".png?raw=true"
        const url="/poke-info/"+this.props.index+"/"+this.props.name
            return(                
                <Card className='item'>
                    <img className='media' src={img}/>
                    <CardContent>                    
                        <Link to={url}><Typography component="p" variant="h6">{this.props.name}</Typography></Link>
                        <Typography component="p" variant="h6">Weight</Typography>
                        <Typography component="p" variant="h6">{pokeData.weight}</Typography>
                        <Typography component="p" variant="h6">Height</Typography>
                        <Typography component="p" variant="h6">{pokeData.height}</Typography>
                        <Typography component="p" variant="h6">Type</Typography>
                        {pokeType.map((tipo)=>{
                            return <Typography component="p" variant="h6">{tipo.type.name}</Typography>
                        })}
                        
                    </CardContent>
                </Card>
            )
    }
}

export default CardPoke;