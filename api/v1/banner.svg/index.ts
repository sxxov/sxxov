import { ipAddress } from '@vercel/edge';

const render = (ip: string) => /* html */ `
<svg fill="none" viewBox="0 0 800 400" width="800" height="400" xmlns="http://www.w3.org/2000/svg">
<foreignObject width="100%" height="100%">
<div xmlns="http://www.w3.org/1999/xhtml">
	<style>
		@keyframes rotate {
			0% {
				transform: rotate(3deg);
			}
			100% {
				transform: rotate(-3deg);
			}
		}

		.component {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 400px;
			color: currentColor;
			text-align: center;
		}

		h1 {
			font-family:
				Helvetica,
				Arial,
				sans-serif,
				'Apple Color Emoji',
				'Segoe UI Emoji';
			font-size: 100px;
			letter-spacing: -0.06em;
			line-height: 0.8;
			font-weight: 300;
			
			animation: rotate ease-in-out 1s infinite alternate;
		}
	</style>
	<div class="component">
		<h1>${ip}</h1>
	</div>
</div>
</foreignObject>
</svg>
`;

export const config = {
	runtime: 'edge',
};

export function GET(request: Request) {
	const ip = ipAddress(request);
	return new Response(render(ip ?? '🤔'), {
		headers: {
			'Content-Type': 'image/svg+xml',
			'Access-Control-Allow-Origin': '*',
		},
	});
}
