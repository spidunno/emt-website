import { Outlet } from "react-router-dom";
import '@fontsource/inter';
import { Box, Button, ButtonGroup, Stack, useColorScheme } from "@mui/joy";
import ThemeSwitcher from "./components/ThemeSwitcher";
import LinkButton from "./components/LinkButton";
import { PropsWithChildren } from "react";
import { CopyAll } from "@mui/icons-material";

export default function Root(props: PropsWithChildren<{}>) {
	const { colorScheme, setMode } = useColorScheme();
	setMode('dark');
	return (
		<Stack sx={{ width: '100vw', height: '100vh', overflow: 'hidden' }} direction={"column"}>
			<Box sx={theme => ({ width: '100%', height: '56px' })}>
				<Stack gap={'0'} direction="row" sx={theme => ({ width: '100%', height: '100%', padding: '12px', borderBottomColor: theme.palette.divider, borderBottomStyle: 'solid', borderBottomWidth: '1px', justifyContent: 'center', alignItems: 'center', backgroundColor: '#00000040', backdropFilter: 'blur(15px)' })}>
					<LinkButton sx={{ borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px', borderTopRightRadius: '0', borderBottomRightRadius: '0' }} href="/games">Games</LinkButton>
					<LinkButton sx={{borderRadius: '0'}} href="/mike">Mike</LinkButton>
					<LinkButton sx={{borderRadius: '0'}} href="/">Home</LinkButton>
					<LinkButton sx={{borderRadius: '0'}} href="/servers">Servers</LinkButton>
					<LinkButton sx={{ borderTopRightRadius: '8px', borderBottomRightRadius: '8px', borderTopLeftRadius: '0', borderBottomLeftRadius: '0' }} href="/mods">Mods</LinkButton>
				</Stack>
			</Box>
			<Outlet />
			{props.children}
		</Stack>
	)
}