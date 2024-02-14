import { PropsOf } from "@emotion/react";
import { Check, ContentCopy } from "@mui/icons-material";
import { Chip } from "@mui/joy";
import { useState } from "react";
import { useCopyToClipboard } from "usehooks-ts";

export default function CopyChip({copyValue, onClick, ...props}: PropsOf<typeof Chip> & { copyValue: string }) {
	const [copiedText, copy] = useCopyToClipboard();
	const [ showCheck, setShowCheck ] = useState(false);
	return <Chip endDecorator={showCheck ? <Check/> : <ContentCopy/>} onClick={() => {copy(copyValue); setShowCheck(true); setTimeout(() => setShowCheck(false), 8000)}}  {...props}></Chip>
}