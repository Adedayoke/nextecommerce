import '@/styles/globals.css'
import { Layout } from '@/components'
import StateContext from '@/context/StateContext'
import {ToastBar} from 'react-hot-toast'
export default function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  )
}
