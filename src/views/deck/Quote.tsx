// views/deck/Quote.tsx

export interface QuoteProps {
  quote: {
    text: string;
    author: string;
  };
}

export default ({ quote: { text, author } }: QuoteProps) => (
  <section>
    <h4 className="align-center">
      <pre className="align-center">{text}</pre>
      <br />~ {author}
    </h4>
  </section>
);
