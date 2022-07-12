// views/deck/Quote.tsx

export interface QuoteProps {
  quote: {
    quote: string;
    author: string;
  };
}

export default ({ quote: { quote, author } }: QuoteProps) => (
  <section>
    <h4 className="align-center">
      <pre className="align-center">{quote}</pre>
      <br />~ {author}
    </h4>
  </section>
);
