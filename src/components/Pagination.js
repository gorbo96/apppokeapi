import React, { Fragment } from "react";
import { Button } from "@mui/material";

const Pagination = ({ increment, decrement, page }) => {

	return(
		<Fragment>
			<Button variant="outlined" color="primary" onClick={decrement} >Anterior</Button>
			<Button variant="contained" color="primary">
				{page}
			</Button>
			<Button variant="outlined" color="primary" onClick={increment} >Siguiente</Button>
		</Fragment>
	);
}

export default Pagination;