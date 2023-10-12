// npm imports
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
  return (
    <div className="bg-violet flex h-[103px] w-[232px] cursor-pointer items-center justify-center rounded-full text-3xl text-goldenDark">
      <p className="text-5xl font-semibold">{price}</p>
    </div>
  )
}
