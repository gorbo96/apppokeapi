import React,{Component} from 'react';
import List from "../components/List"
import AppNav from "../components/AppNav"
import Pagination from "../components/Pagination"
import axios from 'axios';
import { Grid,Container } from '@mui/material';
class APIConsumer extends Component{

    state={ pokemonList:[],
        currentOffset: 0,
        pageCounter: 1}

    fetchData = (offset = 0) => {
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        let params = {
            offset: offset,
            limit: 20
        }
        axios.get(url, { params })
        .then(res => {
            const { results } = res.data;    
            this.setState({
                pokemonList: results,
            })
    
        })
        .catch(error =>{
            console.log("Error en APIconsumer,"+error);
        })
    }

    increment= () => {
    const { currentOffset, pageCounter } = this.state;
    this.setState({
        currentOffset: currentOffset + 20,
        pageCounter: pageCounter + 1,
    });
    }
    
    decrement= () => {
    const { currentOffset, pageCounter } = this.state;
    this.setState({
        currentOffset: currentOffset - 20,
        pageCounter: pageCounter - 1,
    });
    }    

    componentDidMount(){
        this.fetchData();        
    }
    componentDidUpdate(prevProps,prevState) {
        const { currentOffset } = this.state;
        if (currentOffset !== prevState.currentOffset) {
          if (currentOffset < 0 ) {
            this.setState({
              currentOffset: 0,
              pageCounter: 1,
            });
            this.fetchData(prevState.currentOffset);
          }
          this.fetchData(currentOffset);
        }
      }



      render() {
        const { pokemonList, pageCounter } = this.state;
    
        return(
          <>
          <Grid container justify="center">
            <AppNav />            
            <List pokemonList={pokemonList} />            
          </Grid>
          <Container>
          <Pagination 
          increment={this.increment} 
          decrement={this.decrement} 
          page={pageCounter} 
          />
        </Container>
        </>
        );
      }
}
export default APIConsumer;
