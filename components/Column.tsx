// npm imports
import React, { useState } from 'react'
// local imports
import Question from '@components/Question'
// type imports
interface Props {}

export default function Column({ columns, title }: Props) {
  const [category, setCategory] = useState('')

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="w-18 flex h-20 items-center ">
        <h2 className="text-main whitespace-normal text-center font-main text-3xl font-semibold text-goldenDark">
          {title.toUpperCase()}
        </h2>
      </div>
      <Question />
    </div>
  )
}
