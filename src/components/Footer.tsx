import Link from "next/link"

export default function Footer() {
  return (
    <footer>
  

      <div className="">
    <div className="mx-auto flex max-w-screen-3xl flex-col gap-y-4 px-10 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
      <div className="">Valley Sales Inc.</div>
      <div className="space-x-8">
        <Link className="text-textgray" href="#">Contact Support</Link>
      
        <Link className="text-textgray " href="#">About Us</Link>

        <Link className="text-textgray " href="#">Terms</Link>

        <Link className=" text-textgray" href="#">Privacy</Link>

        <Link className="text-textgray " href="#">Linkedin</Link>
        <Link className="text-textgray " href="#">X</Link>
      </div>
    </div>
  </div>
    </footer>
  )
}
