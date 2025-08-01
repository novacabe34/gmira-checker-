import { useState, useEffect } from 'react'

export default function Home() {
  const [count, setCount] = useState(null)

  useEffect(() => {
    fetch('/api/count')
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [])

  return (
    <main style={{ textAlign: 'center', padding: '40px' }}>
      <h1>gmira Tweet Count</h1>
      {count === null
        ? <p>Loading...</p>
        : <p>"gmira" has been mentioned <strong>{count}</strong> times on Twitter in the past 30 days.</p>}
    </main>
  )
}
