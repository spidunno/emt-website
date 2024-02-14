import { useEffect, useRef, useState } from "react";
import { Shader } from "react-shaders";
import shaderCode from '../assets/test.glsl?raw';

export default function Stars() {
	// const pixelDensity = usePixelDensity();
	const pixelDensity = 0.5;
	return <Shader style={{ filter: 'blur(4px)', zIndex: '-1', width: 'calc(100vw)', height: 'calc(100vh)', position: 'absolute', left: '0', top: '0' } as CSSStyleDeclaration} 
	fs={shaderCode}
	devicePixelRatio={pixelDensity}/>;
}

export function useFetch(url: Parameters<typeof fetch>[0], options?: Parameters<typeof fetch>[1]): string | null {
	const [ text, setText ] = useState<string | null>(null);
	fetch(url, options).then(async v => setText(await v.text()));
	return text;
}

function cyrb128(str: string): [number, number, number, number] {
	let h1 = 1779033703, h2 = 3144134277,
		h3 = 1013904242, h4 = 2773480762;
	for (let i = 0, k; i < str.length; i++) {
		k = str.charCodeAt(i);
		h1 = h2 ^ Math.imul(h1 ^ k, 597399067);
		h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
		h3 = h4 ^ Math.imul(h3 ^ k, 951274213);
		h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
	}
	h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067);
	h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
	h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213);
	h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
	h1 ^= (h2 ^ h3 ^ h4), h2 ^= h1, h3 ^= h1, h4 ^= h1;
	return [h1 >>> 0, h2 >>> 0, h3 >>> 0, h4 >>> 0];
}

function sfc32(a: number, b: number, c: number, d: number) {
	return function () {
		a |= 0; b |= 0; c |= 0; d |= 0;
		var t = (a + b | 0) + d | 0;
		d = d + 1 | 0;
		a = b ^ b >>> 9;
		b = c + (c << 3) | 0;
		c = (c << 21 | c >>> 11);
		c = c + t | 0;
		return (t >>> 0) / 4294967296;
	}
}


	// const canvasRef = useRef<HTMLCanvasElement>(null);
	// const canvas = canvasRef.current;

	// useEffect(() => {
	// 	if (!canvas) return;
	// 	const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
	// 	const frame = (time: number) => {
	// 		canvas.width = canvas.offsetWidth * devicePixelRatio;
	// 		canvas.height = canvas.offsetHeight * devicePixelRatio;
	// 		// const random = sfc32(...cyrb128("seed"));
	// 		const stars = Array(Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 16384)).fill(0).map(() => ({ x: random() * canvas.offsetWidth, y: random() * canvas.offsetHeight }));
	// 		// console.log(stars.length);
	// 		for (const star of stars) {
	// 			const starGradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, 4);
	// 			starGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
	// 			starGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
	// 			ctx.fillStyle = starGradient;
	// 			ctx.ellipse(star.x, star.y, 4, 4, 0, 0, Math.PI * 2);
	// 			ctx.fill();
	// 		}
	// 		window.requestAnimationFrame(frame);
	// 	}
	// 	window.requestAnimationFrame(frame);
	// }, []);
	// return <canvas
	// 	style={{ zIndex: '-1', width: 'calc(100%)', height: 'calc(100%)', position: 'absolute', left: '0' }}
	// 	ref={canvasRef}
	// />;
	
	function usePixelDensity() {
		const [ pixelDensity, setPixelDensity ] = useState(devicePixelRatio);
		onDevicePixelRatio(setPixelDensity);
		return pixelDensity;
	}
	function onDevicePixelRatio(onChange: (pixelRatio: number) => void) {
		matchMedia(
			`(resolution: ${window.devicePixelRatio}dppx)`
		).addEventListener("change", () => {onChange(devicePixelRatio); onDevicePixelRatio(onChange)}, { once: true });
	}