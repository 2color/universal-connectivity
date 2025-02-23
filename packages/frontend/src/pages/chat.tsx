import Head from 'next/head'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'
import Nav from '@/components/nav'
import { useLibp2pContext } from '@/context/ctx'
import { useEffect, useState } from 'react'
import ChatContainer from '@/components/chat'

export default function Chat() {
  return (
    <>
      <Head>
        <title>js-libp2p Chat</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-full">
        <Nav />
        <div className="">
          <main>
            <ChatContainer />
          </main>
        </div>
      </main>
    </>
  )
}
