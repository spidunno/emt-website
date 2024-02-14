import { Badge, Box, Card, CardOverflow, Chip, Divider, Stack, Typography, useColorScheme } from "@mui/joy";
import serverImage from '../assets/download.webp';
import { useEffect, useRef, useState } from "react";
import { SxProps } from "@mui/joy/styles/types";
import CopyChip from "./CopyChip";

export default function GameItem(props: { description: string, name: string, sx?: SxProps, icon: string }) {
	const { colorScheme } = useColorScheme();
	return (
		<Card sx={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', aspectRatio: '196/233', width: '100%', ...props.sx}} /* color={loading ? "primary" : (serverInfo?.online ? 'success' : 'danger')}*/ variant="outlined">
			<CardOverflow sx={{padding: '0'}}>
				<img
					src={props.icon}
					style={{width: '100%', aspectRatio: '1/1'}}
				/>
			</CardOverflow>
			<Typography level="title-lg">{props.name}</Typography>
		</Card>
	)
}