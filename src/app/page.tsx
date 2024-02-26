import Image from "next/image";
import { client } from './../../sanity/lib/client';
import React from 'react'
import myConfiguredSanityClient from './sanityClient'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const getProductData = async () => {
  const res = await client.fetch('*[_type=="product"]');
  return res;
}

[
  images: "url"
]

interface IProduct {
  title: string,
  description: string
}
const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export default async function Home() {
  const data: IProduct[] = await getProductData();
  console.log(data);
  return (
    <div>
      {data.map((item) => (
        <>
        <div key={item.title}>
          <h1>{item.title}</h1>
          {/* {
            item.image.map((img)=>{

            })
          } */}
          </>
          <p>{item.description}</p>
        </div>
      ))}

    </div>
  );
}
