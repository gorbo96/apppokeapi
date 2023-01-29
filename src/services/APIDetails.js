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
        const imgF="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+this.props.params.pokeIndex+".png?raw=true"
        const imgB="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/"+this.props.params.pokeIndex+".png?raw=true"                
            return(
                <>
                <AppNav />
                <Container >
                        <img className='media' src={imgF} height='360'/>
                        <img className='media' src={imgB} height='360'/>                        
                        <Typography component="p" variant="h3" align='center'>{this.props.params.pokeName.toUpperCase()}</Typography>
                        <Typography component="p" variant="h4" align='center'>Weight</Typography>
                        <Typography component="p" variant="h5" align='center'>{pokeData.weight}</Typography>
                        <Typography component="p" variant="h4" align='center'>Height</Typography>
                        <Typography component="p" variant="h5" align='center'>{pokeData.height}</Typography>
                        <Typography component="p" variant="h4" align='center'>Type</Typography>
                        {pokeType.map((tipo)=>{
                            return <Typography component="p" variant="h5" align='center'>{tipo.type.name.toUpperCase()}</Typography>
                        })}
                        <Typography component="p" variant="h4" align='center'>Abilities</Typography>
                        <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                            '& ul': { padding: 0},
                        }}                        
                        >
                        {pokeAbilities.map((ability) => (
                            <li >
                                <ul>
                                    <ListItem >
                                        <Typography component="p" variant="h6" align='center'>{ability.ability.name}</Typography>                                        
                                    </ListItem>
                                </ul>
                            </li>
                        ))}
                        </List>
                        <Typography component="p" variant="h6" align='center'>Moves</Typography>
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
                                        <Typography component="p" variant="h6" align='center'>{move.move.name}</Typography>                                        
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