import { Select, SelectItem } from '@heroui/react';
import React from 'react'

export default function SelectInput({setSelectQuery}) {
    const categories = [
        {key: "men's clothing", label: "Men's Clothing"},
        {key: "jewelery", label: "Jewelery"},
        {key: "electronics", label: "Electronics"},
        {key: "women's clothing", label: "women's Clothing"},
      ];
  return (
    <Select
      aria-label='category'
      placeholder="Select category"
      size='md'
      onChange={(e)=>setSelectQuery(e.target.value)}
    >
      {categories.map((category) => (
        <SelectItem color='warning' key={category.key}>{category.label}</SelectItem>
      ))}
    </Select>
  )
}
