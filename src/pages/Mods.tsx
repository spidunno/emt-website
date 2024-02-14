import { Box, Stack } from "@mui/joy";
import ModItem from "../components/ModItem";

export default function Mods() {
	return <Box sx={{width: '100%', height: '100%', padding: '12px', overflowY: 'auto'}}>
		<Stack direction="column" gap={"12px"}>
			<ModItem
				image="https://media.forgecdn.net/avatars/572/135/637932846623445089.png"
				name="Murray3"
				url="https://www.curseforge.com/minecraft/mc-mods/murray3"
				creator="Minecatr"
				info={`Murray3 has a ton of fun blocks with a bunch of options for late game armor. It's called Murray3 because it was suggested by my brother Murray, and it's 3 mods combined: EmmTech, Utility, and Minecatr's Random Stuff.`}
				tags={["Minecraft", "Mod"]}
			/>
			<ModItem
				image="https://media.forgecdn.net/avatars/864/925/638275551423917173.png"
				name="Locked In"
				url="https://www.curseforge.com/minecraft/modpacks/locked-in"
				creator="Minecatr"
				info={`A forge modpack with various RPG mods meant to be played with friends. If your server crashes remove any client mods like Modern UI and Real Camera.`}
				tags={["Minecraft", "Modpack"]}
			/>
		</Stack>
	</Box>
}