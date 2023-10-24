import getFormattedDate from '@/lib/getFormattedDate'
import Link from 'next/link'

type Props = {
  blog: BlogPost
}

const ListItem = ({ blog: { id, title, date } }: Props) => {
  const formattedDate = getFormattedDate(date)
  const idAsPath = id.replaceAll(' ', '-')

  return (
    <li>
      <Link href={`/blog/${idAsPath}`}>{title}</Link>
      <p>{formattedDate}</p>
    </li>
  )
}

export default ListItem
