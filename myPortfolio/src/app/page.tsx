import home from '@/styles/home.module.scss';
import Description from '@/components/Description/Description';
import ProfileInfo from '@/components/ProfileInfo/ProfileInfo';
import Projects from '@/components/Projects/Projects';
import Technologies from '@/components/Technologies/Technologies';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <main className={home.main}>
      <ProfileInfo />
      <Description />  
      <Projects />
      <Technologies />
      <Contact />
    </main>
  )
}
