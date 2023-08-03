import Content from "@/components/Content"
import Head from "next/head"
import Script from "next/script"

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/vitejs.png" type="image/x-icon" />
        <title> Reviews </title>
      </Head>
      <Script defer src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" integrity="sha384-rOA1PnstxnOBLzCLMcre8ybwbTmemjzdNlILg8O7z1lUkLXozs4DHonlDtnE7fpc" crossorigin="anonymous"></Script>

      <main className='bg-[#f8fafc] min-h-screen flex justify-center items-center'> 
        <div className='bg-white h-[475px] w-[600px] mx-5'>
          
          <Content />

        </div>
      </main>
    </>
  )
}
