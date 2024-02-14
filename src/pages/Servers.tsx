import { Box, Stack } from "@mui/joy";
import ServerItem from "../components/ServerItem";

export default function Servers() {
	return <Box sx={{width: '100%', height: '100%', padding: '12px', overflowY: 'auto'}}>
		<Stack direction="column" gap={"12px"}>
			<ServerItem ip="c.spct.xyz" name="Creative"/>
			<ServerItem ip="v.spct.xyz" name="Vehicle Wars"/>
			<ServerItem ip="struct.spct.xyz" name="Structure"/>
			<ServerItem ip="lckd.spct.xyz" name="Locked In"/>
			<ServerItem ip="rauto.spct.xyz" name="Rautomizer"/>
			<ServerItem ip="mc.repl.game" name="Replit"/>
		</Stack>
	</Box>
}