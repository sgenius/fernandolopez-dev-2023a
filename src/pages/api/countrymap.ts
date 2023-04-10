import type { NextApiRequest, NextApiResponse } from 'next'
import { getCountryBoundsStr } from '../countries/helpers';
import { GN_COUNTRIES_BY_CCA3 } from "@/components/Countries/data/gnCountries";

// https://github.com/vercel/next.js/discussions/39932
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    try {
        const { code } = req.query;
        if (typeof code !== 'string') {
            res.status(400).json({ error: 'Code is invalid or missing' });
        } else {
            const found = GN_COUNTRIES_BY_CCA3[code] !== undefined;
            if (!found) {
                res.status(404).json({ err: `Data for ${code} is not available` });
            }
            const boundsStr = getCountryBoundsStr(code);
            const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${boundsStr}/300x200?access_token=${process.env.MAPBOX_API_KEY}`;
            const response = await fetch(url);
            if (response.ok) {
                const imgBlob = await response.blob();
                const imgBuffer = await imgBlob.arrayBuffer();
                // await new Promise((resolve) => {
                //     imgStream.pipeTo();

                // })
                // console.log('response.type: ', response.type);
                console.log(imgBuffer);
                const contentType = response.headers.get("Content-Type");
                console.log(contentType);
                res.setHeader('Content-Type', contentType ?? 'image/png');

                const contentLength = response.headers.get('Content-Length');
                if (contentLength) {
                    res.setHeader('Content-Length', contentLength);
                }
                res.status(200).send(imgBuffer);
            } else {
                res.status(response.status).json({ error: response.statusText });
            }
        }
    } catch (err) {
        console.error({ err });
        res.status(500).json({ err });
    }

};