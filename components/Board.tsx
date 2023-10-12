// npm imports
// local imports
import { columns } from '@utils/data'
import Column from '@components/Column'
// type imports

interface Props {}

export default function Board({}: Props) {
  const { board } = columns
  return (
    <section>
      <Header />
      <div className="m-12 flex flex-row justify-center gap-24">
        {board.map((column, index) => (
          <Column key={index} board={board} title={column.category.label} />
        ))}
      </div>
    </section>
  )
}

const Header = () => {
  return (
    <div className="flex justify-center pt-8">
      <h2 className="font-main text-5xl text-goldenDark">
        {columns['title'].toUpperCase()}
      </h2>
    </div>
  )
}
