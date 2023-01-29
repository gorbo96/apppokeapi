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
                <Container 
                sx={{background:'#70b8f0'}}
                >
                        <img className='media' src={imgF} height='360'/>
                        <img className='media' src={imgB} height='360'/>                        
                        <Typography component="p" variant="h3" align='right'
                        sx={{borderBottom:2}}
                        >{this.props.params.pokeName.toUpperCase()}</Typography>
                        <Typography component="p" variant="h4" align='left'
                        sx={{borderBottom:1}}
                        >Weight</Typography>
                        <Typography component="p" variant="h5" align='right'>{pokeData.weight}</Typography>
                        <Typography component="p" variant="h4" align='left'
                        sx={{borderBottom:1}}
                        >Height</Typography>
                        <Typography component="p" variant="h5" align='right'>{pokeData.height}</Typography>
                        <Typography component="p" variant="h4" align='left'
                        sx={{borderBottom:1}}
                        >Type</Typography>
                        {pokeType.map((tipo)=>{
                            return <Typography component="p" variant="h5" align='right'>{tipo.type.name.toUpperCase()}</Typography>
                        })}
                        <Typography component="p" variant="h4" align='left'
                        sx={{borderBottom:1}}
                        >Abilities</Typography>
                        <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                            background:'#70b8f0',
                            '& ul': { padding: 0},
                        }}                        
                        >
                        {pokeAbilities.map((ability) => (
                            <li >
                                <ul>
                                    <ListItem >
                                        <Typography component="p" variant="h5" align='left'>{ability.ability.name}</Typography>                                        
                                    </ListItem>
                                </ul>
                            </li>
                        ))}
                        </List>
                        <Typography component="p" variant="h4" align='left'
                        sx={{borderBottom:1}}
                        >Moves</Typography>
                        <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                            position: 'relative',
                            overflow: 'auto',
                            maxHeight: 300,
                            background:'#70b8f0',
                            '& ul': { padding: 0 },
                        }}
                        subheader={<li />}
                        >
                        {pokeMoves.map((move) => (
                            <li >
                                <ul>
                                    <ListItem >
                                        <Typography component="p" variant="h5" align='left'>{move.move.name}</Typography>                                        
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