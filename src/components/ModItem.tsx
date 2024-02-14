import { Card, Chip, Link, Stack, Typography, useColorScheme } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import { OpenInNew } from "@mui/icons-material";

export default function ModItem(props: { name: string, creator: string, sx?: SxProps, image: string, info?: string, tags?: string[], url?: string }) {
	const { colorScheme } = useColorScheme();
	return (
		<Card sx={{ overflow: 'hidden', display: 'flex', flexDirection: 'row', minHeight: '128px', height: 'fit-content', padding: '12px', width: '100%', maxWidth: '800px', alignSelf: 'center', backgroundImage: `radial-gradient(#000000cc, #000000ff), url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center', ...props.sx}} /* color={loading ? "primary" : (serverInfo?.online ? 'success' : 'danger')}*/ variant="outlined">
			<Stack direction="column" gap={"4px"} sx={{width: '100%'}}>
				<Stack direction="row" gap={"12px"} sx={{ alignItems: 'center' }}>
					<Typography level="title-lg">{props.url ? <Link href={props.url} target="_blank">{props.name}<OpenInNew style={{width: '16px', height: '16px', alignSelf: 'center'}}/></Link> : props.name}</Typography>
					<Typography level="body-sm">By {props.creator}</Typography>
					<Stack direction="row" gap={"8px"} sx={{ alignItems: 'center', marginRight: '0px', marginLeft: 'auto'}}>
					{
						props.tags ? props.tags.map((value, i) => {
							return <Chip key={i}>{value}</Chip>
						}) : ''
					}
					</Stack>
				</Stack>
				<Stack direction="column" sx={{overflowX: 'auto', textWrap: 'nowrap', scrollbarWidth: 'none' }}>
					<Typography sx={{ width: '100%', textWrap: 'wrap' }} component={'div'}>
						{props.info}
					</Typography>
				</Stack>
				{/* <Typography level="body-sm">{loading ? "Connecting to server..." : ( serverInfo?.online ? serverInfo.motd.html.map((v, i) => <div key={i} dangerouslySetInnerHTML={{__html: v}}></div>) : '' )}</Typography> */}
			</Stack>
		</Card>
	)
}