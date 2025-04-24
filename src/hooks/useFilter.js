import React, { useState } from 'react'

export default function useFilter(data,callback) {
    const [query,setQuery] =  useState('')
    const filteredData = data.filter((item) => callback(item).toLowerCase().includes(query));
    return [filteredData,setQuery]
}