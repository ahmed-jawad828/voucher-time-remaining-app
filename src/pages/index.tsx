import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  var today: any = new Date();
  var end: any = new Date();
  end.setHours(23, 59, 59, 999);

  var diffMs = (end - today);
  var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
  var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes
  today.setDate(today.getDate() + 3);
  let options: any = {
    weekday: 'long', month: 'long', day: 'numeric'
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <div style={{ display: 'flex', columnGap: '6px',fontSize:'14px' }} className={inter.className}>
          <span>

            Order within {diffHrs} hr {diffMins} mins & Get it <strong> {new Date(today).toLocaleString("en-US", options)}</strong>
          </span>
        </div>
      </main>
    </>
  )
}
