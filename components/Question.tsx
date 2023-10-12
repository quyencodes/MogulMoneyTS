// npm imports
import React, { useState } from 'react'
// local imports
// type imports
interface Props {}

interface BubbleProps {
  price: string
}

export default function Question({}: Props) {
  return (
    <div className="flex flex-col gap-6">
      <Bubble price={'100'} />
      <Bubble price={'200'} />
      <Bubble price={'300'} />
      <Bubble price={'400'} />
      <Bubble price={'500'} />
    </div>
  )
}

const Bubble = ({ price }: BubbleProps) => {
  const [modal, setModal] = useState(false)

  const modalHandler = (): void => {
    setModal((prev) => !prev)
  }

  return (
    <div>
      <button
        onClick={modalHandler}
        className="bg-violet flex h-[103px] w-[232px] items-center justify-center rounded-full text-3xl text-goldenDark"
      >
        <p className="text-5xl font-semibold">{price}</p>
      </button>

      {modal && (
        <div className="fixed bottom-0 left-0 right-0 top-0 h-screen w-full bg-slate-200 opacity-20">
          <button
            onClick={modalHandler}
            className="rounded-lg border-2 border-gray-700 p-2 shadow-lg"
          >
            Close
          </button>
        </div>
      )}
    </div>
  )
}
