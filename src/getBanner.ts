export const getBanner = (ip: string, mode: 'dark' | 'light') => /* html */ `
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
			color: ${mode === 'dark' ? 'white' : 'black'};
			
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
