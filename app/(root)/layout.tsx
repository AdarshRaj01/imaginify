import SideBar from '@/components/shared/SideBar'
import React from 'react'
import MobileNav from '@/components/shared/MobileNav'
import { Toaster } from '@/components/ui/toaster'

const Layout = ({ children }: { children : React.ReactNode}) => {
  return (
    <main className='root'>

      <SideBar />
      {/* {<MobileNav />} */}

      <MobileNav /> 
      <div className='root'>
        <div className='wrapper'>
          {children}
        </div>
      </div>
      <Toaster />
    </main>
  )
}

export default Layout