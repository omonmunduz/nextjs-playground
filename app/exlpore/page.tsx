

import React from 'react'
import Geolocation from '@/components/Geolocation/Geolocation'
import styles from "./exlpore.module.scss"

const ExlporePage = async () => {

  return (
    <div className={styles.exlporePage}>
        ExlporePage
        <Geolocation/>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
        </button>
    </div>
  )
}

export default ExlporePage