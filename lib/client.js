import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// import { ImageUrlBuilder } from 'next-sanity-image';

export const client = sanityClient(
    {
        projectId: 'zzcdtxzz',
        dataset: 'production',
        apiVersion: '2023-03-18',
        useCdn: true,
        token: process.env.NEXT_PUBLIC_SANITY_TOKEN
    }
)
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);