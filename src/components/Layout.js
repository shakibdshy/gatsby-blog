import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <>
            <div className='flex flex-col min-h-full'>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}
