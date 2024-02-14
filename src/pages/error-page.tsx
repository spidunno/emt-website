import { useRouteError } from "react-router-dom";
import { Box, Stack, Typography } from "@mui/joy";
import Stars from '../components/Stars';
import Root from "../Root";

export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);

	return (
		<Root>
			<Box sx={{ width: '100%', height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', overflowY: 'auto', overflowX: 'hidden', scrollbarGutter: 'stable' }}>
				<Box sx={theme => ({ textAlign: 'center', marginLeft: '0', marginTop: 'calc(50vh - 100px)', marginBottom: 'auto', color: 'rgb(240, 244, 248)' })}>
				<Typography level="h1" fontSize="64px" component='div'>
					{error.status}
				</Typography>
				<Typography level="body-md" component='div'>
					{error.statusText}
				</Typography>
				</Box>
				<Stars />
			</Box>
		</Root>
	);
}