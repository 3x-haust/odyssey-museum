import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { SmoothScrollProvider, useScrollLock } from './hooks/useSmoothScroll';
import { Cursor } from './components/Cursor';
import { Grain } from './components/Grain';
import { ScrollProgress } from './components/ScrollProgress';
import { Loader } from './components/Loader';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { WorksSection } from './components/WorksSection';
import { Footer } from './components/Footer';

function ScrollLock({ locked }: { locked: boolean }) {
  useScrollLock(locked);
  return null;
}

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SmoothScrollProvider>
        <ScrollLock locked={!loaded} />
        <Cursor />
        <Grain />
        <ScrollProgress />
        <Nav />

        <AnimatePresence>
          {!loaded && <Loader key="loader" onComplete={() => setLoaded(true)} />}
        </AnimatePresence>

        <main>
          <Hero start={loaded} />
          <Manifesto />
          <WorksSection />
        </main>
        <Footer />
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
