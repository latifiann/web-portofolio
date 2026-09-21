import SelectedWorkSection from "./components/sections/SelectedWorkSection";

function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <main
        id="main-content"
        className="mx-auto min-h-svh w-full max-w-(--container-max) px-(--container-padding-mobile) py-(--space-16) md:px-(--container-padding-tablet) lg:px-(--container-padding-desktop)"
      >
        <header className="max-w-3xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-(--color-primary)">
            Software Developer
          </p>

          <h1 className="mt-(--space-3) text-4xl leading-tight font-semibold tracking-tight text-(--color-ink) md:text-5xl">
            Hi, I&apos;m Latifian.
          </h1>

          <p className="mt-(--space-4) text-base text-(--color-ink-secondary) md:text-lg">
            I build mobile and web products, integrate APIs and real-time
            systems, and organize software around clear, maintainable
            structures.
          </p>
        </header>

        <div className="mt-(--space-24)">
          <SelectedWorkSection />
        </div>
      </main>
    </>
  );
}

export default App;
