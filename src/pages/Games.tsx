import { Box, Grid } from "@mui/joy";
import GameItem from "../components/GameItem";

export default function Games() {
	return <Box sx={{alignSelf: 'center', width: '100%', height: '100%', padding: '12px', overflowY: 'auto'}}>
		<Grid justifyContent="center" container spacing={"16px"} sx={{maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto'}}>
			<Grid xs={4}>
				<GameItem description="c.spct.xyz" name="Creative"/>
			</Grid>
			<Grid xs={4}>
				<GameItem description="c.spct.xyz" name="Penis2"/>
			</Grid>
			<Grid xs={4}>
				<GameItem description="c.spct.xyz" name="race for baboniang"/>
			</Grid>
			<Grid xs={4}>
				<GameItem description="c.spct.xyz" name="Opsoty"/>
			</Grid>
			<Grid xs={4}>
				<GameItem description="c.spct.xyz" name="Opsotb"/>
			</Grid>
			<Grid xs={4}>
				<GameItem description="c.spct.xyz" name="Opsota"/>
			</Grid>
			<Grid xs={4}>
				<GameItem description="c.spct.xyz" name="asdasd"/>
			</Grid>
			<Grid xs={4}>
				<GameItem description="c.spct.xyz" name="t"/>
			</Grid>
			<Grid xs={4}>
				<GameItem description="c.spct.xyz" name="ergdfg"/>
			</Grid>
			<Grid xs={4}>
				<GameItem description="c.spct.xyz" name="123123123123123123"/>
			</Grid>
			<Grid xs={4}>
				<GameItem description="c.spct.xyz" name="hhhhg"/>
			</Grid>
		</Grid>
	</Box>
}