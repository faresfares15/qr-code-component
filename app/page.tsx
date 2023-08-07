import QRCodeCard from "@/components/QRCodeCard";
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen w-screen justify-center items-center">
        <QRCodeCard />
    </main>
  )
}
