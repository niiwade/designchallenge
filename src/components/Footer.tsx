import Link from './Link'
import siteMetadata from '../../src/siteMetadata'
import SocialIcon from '../components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
          <SocialIcon kind="threads" href={siteMetadata.threads} size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>

      <div className="bg-gray-100">
    <div className="mx-auto flex max-w-screen-3xl flex-col gap-y-4 px-10 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
      <div className="">Valley Sales Inc.</div>
      <div className="space-x-7">
        <a className="text-textgray" href="#">Contact Support</a>
      
        <a className="text-textgray " href="#">About Us</a>

        <a className="text-textgray " href="#">Terms</a>

        <a className=" text-textgray" href="#">Privacy</a>

        <a className="text-textgray " href="#">Linkedin</a>
        <a className="text-textgray " href="#">X</a>
      </div>
    </div>
  </div>
    </footer>
  )
}
