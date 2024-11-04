import { useState } from 'react'
import { BookingCreate } from '../components/booking'
import { ListField } from '../components/contact/contact-entry/list-field'

const Home = () => {
  const [value, setValue] = useState<string[]>([])

  return (
    <div>
      <BookingCreate />

      <ListField value={value} onChange={setValue} />
    </div>
  )
}

export default Home
