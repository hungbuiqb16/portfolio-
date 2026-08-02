import { Background } from '@/components/common/Background'
import { SpotlightEffect } from '@/components/common/SpotlightEffect'
import { Navbar } from '@/components/common/Navbar'
import { Hero } from '@/components/common/Hero'
import { AvatarCard } from '@/components/common/AvatarCard'
import { About } from '@/components/common/About'
import { StatsRow } from '@/components/common/StatsRow'
import { Projects } from '@/components/common/Projects'
import { TechStack } from '@/components/common/TechStack'
import { Experience } from '@/components/common/Experience'
import { GithubActivity } from '@/components/common/GithubActivity'
import { Services } from '@/components/common/Services'
import { Contact } from '@/components/common/Contact'
import { Footer } from '@/components/common/Footer'

export function Home() {
  return (
    <>
      <Background />
      <SpotlightEffect />
      <Navbar />

      <main className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5">
          <Hero />
          <AvatarCard />
          <About />
          <StatsRow />
          <Projects />
          <TechStack />
          <Experience />
          <GithubActivity />
          <Services />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  )
}
