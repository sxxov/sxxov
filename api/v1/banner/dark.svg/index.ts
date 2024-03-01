import { ipAddress } from "@vercel/edge";
import { getBanner } from "../../../../src/getBanner";

export const config = {
	runtime: 'edge',
};

export function GET(request: Request) {
	const ip = ipAddress(request);
	return new Response(getBanner(ip ?? '🤔', 'dark'), {
		headers: {
			'Content-Type': 'image/svg+xml',
			'Access-Control-Allow-Origin': '*',
		},
	});
}
