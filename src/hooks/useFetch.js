import { useState, useEffect } from "react";

export default function useFetch(childId) {
  useEffect(() => {
    fetch(`${config.baseUrl}/${config.dataUrl}/${childId}`, {
      method: "GET",
    })
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          console.log(response.error)
          return null
        } else {
          console.log(response.data)
          return response.data
        }
      })
  }, [])
}