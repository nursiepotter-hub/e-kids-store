import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { CartProvider } from '@/context/CartContext'
import TopBanner from '@/components/TopBanner'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import InstagramFloatingButton from '@/components/InstagramFloatingButton'
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import Cart from '@/pages/Cart'
import Checkout from '@/pages/Checkout'

function AnalyticsTracker() {
  const location = useLocation()
  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search })
  }, [location])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <CartProvider>
        <TopBanner />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produits" element={<Products />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
        <InstagramFloatingButton />
      </CartProvider>
    </BrowserRouter>
  )
}
