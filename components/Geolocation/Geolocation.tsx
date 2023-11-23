'use client'


import React, { useEffect, useState} from 'react'
import { getLocation } from "@/app/_utils/actions";

const Geolocation =  () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getLocation(window.location.origin)
                const resData = await response.json()
                setData(resData)
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData()
    }, [])

  return (
    <div >
        Geolocation
    </div>
  )
}

export default Geolocation