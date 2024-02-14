import { Badge, Box, Card, CardOverflow, Chip, Divider, Stack, Typography, useColorScheme } from "@mui/joy";
import serverImage from '../assets/download.webp';
import { useEffect, useRef, useState } from "react";
import { SxProps } from "@mui/joy/styles/types";
import CopyChip from "./CopyChip";

export default function ServerItem(props: { ip: string, name: string, sx?: SxProps }) {
	const { colorScheme } = useColorScheme();
	const [loading, serverInfo] = useServerStatus(props.ip);
	return (
		<Card sx={{ overflow: 'hidden', display: 'flex', flexDirection: 'row', height: '96px', padding: '8px', width: '100%', minHeight: '96px', maxWidth: '800px', alignSelf: 'center', ...props.sx}} /* color={loading ? "primary" : (serverInfo?.online ? 'success' : 'danger')}*/ variant="outlined">
			<CardOverflow sx={(theme) => ({ width: '96px', height: '96px', borderRightColor: theme.palette.neutral.outlinedBorder, borderRightWidth: '1px', borderRightStyle: 'solid', padding: '0', display: 'flex', flexDirection: 'row', marginRight: '0px', marginBottom: '-16px' })}>
				<img
					src={!loading && serverInfo?.online && serverInfo.icon ? serverInfo.icon : serverImage}
					style={{ width: '96px', height: '96px', margin: 'none', filter: !serverInfo?.online ? 'grayscale(1)' : undefined }}
				/>
				{/* <Divider orientation="vertical"/> */}
			</CardOverflow>
			<Stack direction="column" gap={"4px"} sx={{width: '100%'}}>
				<Stack direction="row" gap={"12px"} sx={{ alignItems: 'center' }}>
					<Typography level="title-lg">{props.name}</Typography>
					<CopyChip copyValue={props.ip}>{props.ip}</CopyChip>
					{/* <Typography level="body-sm">{props.ip}</Typography> */}
				</Stack>
				<Stack direction="column" sx={{overflowX: 'auto', textWrap: 'nowrap', scrollbarWidth: 'none' }}>
					<Typography sx={{ filter: colorScheme === 'light' ? 'brightness(0.65) saturate(1.25) ' : undefined, maxWidth: '100%' }} component={'div'}>
						{
							loading ? <Typography color="primary">Connecting to server</Typography> : (serverInfo?.online ? serverInfo.motd.html.map((v, i) => <div key={i} dangerouslySetInnerHTML={{ __html: v }}></div>) : <Typography color="danger">Could not connect to server</Typography>)
						}
					</Typography>
				</Stack>
				{/* <Typography level="body-sm">{loading ? "Connecting to server..." : ( serverInfo?.online ? serverInfo.motd.html.map((v, i) => <div key={i} dangerouslySetInnerHTML={{__html: v}}></div>) : '' )}</Typography> */}
			</Stack>
		</Card>
	)
}

interface ServerStatusResponseDebug {
	ping: boolean;
	query: boolean;
	srv: boolean;
	querymismatch: boolean;
	ipinsrv: boolean;
	cnameinsrv: boolean;
	animatedmotd: boolean;
	cachehit: boolean;
	cachetime: number;
	cacheexpire: number;
	apiversion: number;
}

interface ServerStatusResponseOnline {
	online: true,
	ip: string,
	port: number,
	hostname?: string,
	debug: ServerStatusResponseDebug,
	version: string,
	protocol?: {
		version: number,
		name?: string
	},
	icon?: string,
	software?: string,
	map: {
		raw: string,
		clean: string,
		html: string
	},
	gamemode?: string,
	serverid?: string,
	eula_blocked?: boolean,
	motd: {
		raw: [string, string],
		clean: [string, string],
		html: [string, string]
	},
	players: {
		online: number,
		max: number,
		list?: {
			name: string,
			uuid: string
		}[]
	},
	plugins?: {
		name: string,
		version: string
	}[],
	mods?: {
		name: string,
		version: string
	}[],
	info?: {
		raw: [string, string],
		clean: [string, string],
		html: [string, string]
	}
};
interface ServerStatusResponseOffline {
	online: false,
	ip: string,
	port: number,
	hostname?: string,
	debug: ServerStatusResponseDebug
}

export function useServerStatus(ip: string, refreshInterval: number = 30000): [boolean, ServerStatusResponseOnline | ServerStatusResponseOffline | null] {
	const [responseData, setResponseData] = useState<ServerStatusResponseOnline | ServerStatusResponseOffline | null>(null);
	const interval = useRef<number | null>(null);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		if (typeof interval === 'number') clearInterval(interval);
		setLoading(true);
		fetch(`https://api.mcsrvstat.us/3/${ip}`).then(async (v) => {
			setResponseData(await v.json());
			setLoading(false);
		});
		interval.current = setInterval(() => {
			setLoading(true);
			fetch(`https://api.mcsrvstat.us/3/${ip}`).then(async (v) => {
				setResponseData(await v.json());
				setLoading(false);
			});
		}, refreshInterval);
	}, [ip, refreshInterval]);

	return [loading, responseData];
}