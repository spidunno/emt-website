import { PropsOf } from "@emotion/react";
import { Button, styled } from "@mui/joy";
import { SxProps } from "@mui/joy/styles/types";
import { PropsWithChildren } from "react";
import { Link, useLocation } from "react-router-dom";

const StyledLink = styled(Link)(({theme})=>({}));

export default function LinkButton({href, sx, ...props}: { href: string } & PropsOf<typeof Button>) {
	const location = useLocation();
	return (
		<StyledLink to={href}>
			<Button sx={{background: location.pathname === href ? 'linear-gradient(to right top, #5740B488 -10%, #3BB96688 110%) !important' : undefined, borderTop: location.pathname === href ? '0px solid black' : undefined, borderBottom: location.pathname === href ? '0px solid black' : undefined, boxShadow: location.pathname === href ? 'inset 0px 0px 0px 1px rgba(255, 255, 255, 0.32)' : undefined, ...sx}} color={'neutral'} variant={'outlined'} {...props}></Button>
		</StyledLink>
	)
}