import { NextRequest, NextResponse } from "next/server";
export const GET = async () => {
        const rrr ='hello'
        console.log('uuuuuuuuuuuuuu')
        return NextResponse.json(rrr);
}


/*
  const url=  'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/';
  console.log('sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss')
        const response = await fetch(url, {
            method: "GET",
            headers: {
              'X-RapidAPI-Key': String(process.env.RAPID_API_KEY),
              'X-RapidAPI-Host': String(process.env.RAPID_API_HOST),
            }
        });
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(response,'response')

        */