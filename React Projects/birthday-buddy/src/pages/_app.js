import ImageDescription from '@/components/ImageDescription';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-[#fae8ff] min-h-screen'>
      <Component {...pageProps} />
    </div>
  );
}
