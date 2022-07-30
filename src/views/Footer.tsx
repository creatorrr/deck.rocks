// views/deck/Footer.tsx

export interface FooterProps {
  slideInstructions?: boolean;
}

export default ({ slideInstructions = false }: FooterProps) => (
  <footer>
    {slideInstructions && (
      <p>
        <cite>
          You can use arrow keys <kbd>←</kbd> <kbd>→</kbd> to navigate between
          slides. On touch-screen devices, swiping left/right will also work.
        </cite>
      </p>
    )}

    <nav>
      <a href="/">Home</a> <a href="/gallery">Gallery</a>{" "}
      <a href="//github.com/creatorrr/deck.rocks">Github</a>{" "}
      <a href="//diwank.name">Author</a>{" "}
    </nav>
  </footer>
);
