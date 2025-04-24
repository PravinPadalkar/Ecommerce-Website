import React from 'react'

export default function useStars(rating) {
    let stars = ''
    for(let i=0;i<rating;i++)
    {
      stars = stars + '⭐'
    }
    return stars+"("+ rating +")"
}
