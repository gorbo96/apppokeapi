import React,{ Component } from 'react';
import AppNav from "../components/AppNav";
import { Card,CardContent, Typography } from '@mui/material';
import axios from "axios";
import withRouter from '../router/withRouter';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Grid,Container } from '@mui/material';

class APIDetails extends Component{
    state={pokeData:[],pokeType:[],pokeAbilities:[],pokeMoves:[]}    

    componentDidMount(){        
        const { params } = this.props;        
        const url = 'https://pokeapi.co/api/v2/pokemon/'+params.pokeIndex;
        axios.get(url)
        .then(res => {
            this.setState({
                pokeData: res.data,
                pokeType: res.data.types,
                pokeAbilities: res.data.abilities,
                pokeMoves: res.data.moves
            })
        })
        .catch(error =>{
            console.log("Error en APIDetails,"+error);
        })
    }
    render(){
        const {pokeData,pokeType,pokeAbilities,pokeMoves}=this.state        
        const img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.props.params.pokeIndex+".png?raw=true"        
            return(
                <>
                <AppNav />
                <Container >
                        <img className='media' src={img}/>
                        <Typography component="p" variant="h6">{this.props.params.pokeName}</Typography>
                        <Typography component="p" variant="h6">Weight</Typography>
                        <Typography component="p" variant="h6">{pokeData.weight}</Typography>
                        <Typography component="p" variant="h6">Height</Typography>
                        <Typography component="p" variant="h6">{pokeData.height}</Typography>
                        <Typography component="p" variant="h6">Type</Typography>
                        {pokeType.map((tipo)=>{
                            return <Typography component="p" variant="h6">{tipo.type.name}</Typography>
                        })}
                        <Typography component="p" variant="h6">Abilities</Typography>
                        <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                            '& ul': { padding: 0 },
                        }}
                        subheader={<li />}
                        >
                        {pokeAbilities.map((ability) => (
                            <li >
                                <ul>
                                    <ListItem >
                                        <ListItemText primary={ability.ability.name} />
                                    </ListItem>
                                </ul>
                            </li>
                        ))}
                        </List>
                        <Typography component="p" variant="h6">Moves</Typography>
                        <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                            '& ul': { padding: 0 },
                        }}
                        subheader={<li />}
                        >
                        {pokeMoves.map((move) => (
                            <li >
                                <ul>
                                    <ListItem >
                                        <ListItemText primary={move.move.name} />
                                    </ListItem>
                                </ul>
                            </li>
                        ))}
                        </List>
                </Container>
                </>
            )
    }
}
export default withRouter(APIDetails);