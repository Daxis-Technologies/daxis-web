import React from "react";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Partners } from "./components/Partners/Partners";
import { Services } from "./components/Services/Services";
import { PageWrapper } from "./styles/layout";

export type ThemeName = "light" | "dark";

interface AppProps {
  theme: ThemeName;
  onToggleTheme: () => void;
  onIncreaseFont: () => void;
  onDecreaseFont: () => void;
}

export const App: React.FC<AppProps> = ({
  theme,
  onToggleTheme,
  onIncreaseFont,
  onDecreaseFont,
}) => {
  return (
    <PageWrapper>
      <Header
        theme={theme}
        onToggleTheme={onToggleTheme}
        onIncreaseFont={onIncreaseFont}
        onDecreaseFont={onDecreaseFont}
      />
      <main>
        <Hero />
        <About />
        <Services />
        <Partners />
        <Contact />
      </main>
      <Footer />
    </PageWrapper>
  );
};
