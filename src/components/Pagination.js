import React, { Fragment } from "react";
import { Button } from "@mui/material";
import {Typography } from '@mui/material';


const Pagination = ({ increment, decrement, page }) => {

	return(
		<Fragment>
			<Button size="large" variant="outlined" color="primary" onClick={decrement} ><Typography component="p" variant="subtitle1">Anterior</Typography></Button>
			<Button size="large" variant="contained" color="primary">
				<Typography component="p" variant="subtitle1">{page}</Typography>
			</Button>
			<Button variant="outlined" color="primary" onClick={increment} size="large"><Typography component="p" variant="subtitle1">Siguiente</Typography></Button>
		</Fragment>
	);
}

export default Pagination;