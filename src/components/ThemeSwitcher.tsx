import { PropsOf } from "@emotion/react";
import { DarkMode, LightMode } from "@mui/icons-material";
import { Button, IconButton, Switch, ToggleButtonGroup, useColorScheme } from "@mui/joy";
import { useEffect } from "react";

export default function ThemeSwitcher(props: Omit<PropsOf<typeof ToggleButtonGroup>, "checked">) {
	const { mode, setMode } = useColorScheme();
	useEffect(() => {
		if (mode === 'dark' || mode === 'light') document.documentElement.style.colorScheme = mode;
		else document.documentElement.style.colorScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light';
	}, [mode]);
	const { onChange: _, ...propsWithoutOnChange } = props;
	return (
		<ToggleButtonGroup value={mode} onChange={(event, newValue) => {
			//@ts-ignore
			setMode(newValue);
		}} {...propsWithoutOnChange}>
			<IconButton aria-label="Dark theme" value="dark"><DarkMode /></IconButton>
			<Button aria-label="System theme" value="system">System</Button>
			<IconButton aria-label="Light theme" value="light"><LightMode /></IconButton>
		</ToggleButtonGroup>
	)
}