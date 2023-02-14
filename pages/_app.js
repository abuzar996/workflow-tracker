import '@/styles/globals.css'
import AppLayout from '@/components/layout/AppLayout/appLayout'
export default function App({ Component, pageProps }) {
  return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
  )
  
}
