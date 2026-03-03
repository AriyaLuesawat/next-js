import Image from 'next/image' //
import Link from 'next/link'  //

export default function Home() {
  return (
    <div className="bg-[#f6f4eb] min-h-screen text-[#333]">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Image src="/home.png" alt="home" width={23} height={20} />
          <span className="text-2xl">CoC</span>
        </div>
        <div className="hidden md:flex gap-8 font-bold text-sm">
          <Link href="/">HOME</Link>
          <Link href="/about">ABOUT</Link>
          <Link href="/contact">CONTACT</Link>
        </div>
        <div className="md:hidden text-2xl">☰</div>
      </nav>

      {/* Hero Section */}
      <main className="px-4 max-w-7xl mx-auto">
        <section className="relative w-full h-[450px] mb-5">
          <Image 
            src="https://images.unsplash.com/photo-1602595688238-9fffe12d5af3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Hero Room" 
            fill 
            className="object-cover rounded-[20px]"
            priority
          />
          <div className="absolute top-[15%] left-[5%] max-w-md p-5  rounded-lg">
            <p className="font-bold text-[#333] mb-1">Lorem ipsum dolor</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">WE ARE THE BEST</h1>
            <p className="font-bold text-sm mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum repellat blanditiis vero amet tempora est ipsam. Minus, perspiciatis velit.</p>
            <button className="bg-[#2b2320] text-white px-8 py-3 rounded-full font-bold">Join us now</button>
          </div>
        </section>

        {/* Services Tab */}
        <div className="flex border-y border-[#dcd7c9] my-8 font-bold text-xs text-center">
          <div className="flex-1 py-4">SERVICE1</div>
          <div className="flex-1 py-4">SERVICE2</div>
          <div className="flex-1 py-4 hidden md:block">SERVICE3</div>
        </div>

        {/* Gallery (Responsive Grid) */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="relative h-60 w-full"><Image src="https://images.unsplash.com/photo-1554995207-c18c203602cb" alt="R1" fill className="object-cover rounded-xl" /></div>
          <div className="relative h-60 w-full"><Image src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" alt="R2" fill className="object-cover rounded-xl" /></div>
          <div className="relative h-60 w-full"><Image src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" alt="R3" fill className="object-cover rounded-xl" /></div>
          <div className="relative h-60 w-full"><Image src="https://images.unsplash.com/photo-1600607687644-c7171b42498f" alt="R4" fill className="object-cover rounded-xl" /></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center p-10 border-t border-[#dcd7c9]">
        <h3 className="font-bold mb-2">Lorem ipsum dolor sit amet</h3>
        <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
        <p className="font-extrabold text-sm">Copyright © All Right Reserved</p>
      </footer>
    </div>
  )
}