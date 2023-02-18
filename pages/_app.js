import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <>
    <h1>My App</h1>
    <Component {...pageProps} />
  </>
}
