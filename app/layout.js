import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Portfolio of Nikhil Ailani - Software Developer",
  description:
    "Hey, I’m Nikhil Ailani, a tech-driven problem solver with a Master’s in Computer Science from Lakehead University. I have a passion for software development, automation, and system optimization, with hands-on experience managing event and accommodation services through technology. I thrive at the intersection of innovation and efficiency, building solutions that streamline workflows and enhance user experiences. Whether it’s web development, data management, or API integrations, I bring a structured yet creative approach to solving complex challenges. Currently, I’m actively seeking an IT role where I can apply my skills in software development, backend systems, and automation to make a real impact. Let’s connect and build something amazing!"
  };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
};
