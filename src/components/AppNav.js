import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

function AppNav(props){

	const { classes } = props;

	return(
		<AppBar position="static">
			<Toolbar variant="dense">
				<Typography variant="h6" component="p">PokeApp</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default AppNav;