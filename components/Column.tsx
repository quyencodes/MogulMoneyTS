// npm imports
// local imports
import Question from '@components/Question'
// type imports
interface Props {}

export default function Column({ columns, title }: Props) {
  return (
    <div className="flex flex-col">
      <h2 className="text-main font-main text-goldenDark text-3xl">
        {title.toUpperCase()}
      </h2>
      <Question />
    </div>
  )
}
