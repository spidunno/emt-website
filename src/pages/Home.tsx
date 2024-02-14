import { Box, Stack, Typography } from "@mui/joy";
import Stars from '../components/Stars';
import { useEffect, useRef, useState } from "react";
import { textLerp } from "../util";

export default function Home() {
	const [text, setText] = useState('');
	const textRef = useRef<HTMLDivElement>(null);
	useEffect(() => {
		const startTime = performance.now();
		const frame = (time: number) => {
			if (!textRef.current) return;
			const a = (time - startTime) / 1000;
			textRef.current.innerText = textLerp(
				textLerp(
					textLerp(
						'', 
						'spct.xyz',
						easeInCubic(clamp01(a))
					),
					'spacecat',
					easeInCubic(clamp01(a - 0.75))), 'spacecat.',
				easeInCubic(clamp01(a - 1.75)));
			window.requestAnimationFrame(frame);
		};
		frame(startTime);
	}, []);
	return <Box sx={{ width: '100%', height: '100%', padding: '12px', display: 'flex', flexDirection: 'column', overflowY: 'auto', overflowX: 'hidden', scrollbarGutter: 'stable' }}>
		<Typography ref={textRef} level="h1" fontSize="64px" sx={theme => ({ textAlign: 'center', marginTop: 'calc(50vh - 100px)', marginBottom: 'auto', color: 'rgb(240, 244, 248)' })} component='div'>
			{text}
		</Typography>
		{/* <Stars/> */}
	</Box>
}

function easeInCubic(x: number): number {
	return x * x * x;
}

function clamp01(value: number) {
	return Math.max(0, Math.min(value, 1))
}