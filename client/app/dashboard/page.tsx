import React from 'react'
import Feeds from '../components/feeds'
import Uploadbox from '../components/uploadbox'
import Sidebar from '../components/sidebar'

function Dashboard() {
  return (
    <main className="flex min-h-screen flex-row">
        < Sidebar />
        <Feeds />
        <Uploadbox />
    </main>
  )
}

export default Dashboard
