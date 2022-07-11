// views/format-deck/Quote.tsx

interface QuoteProps {
  quote: string;
  author: string;
}

export default ({ quote, author }: QuoteProps) => (
  <section>
    <h4 className="align-center">
      <pre className="align-center">{quote}</pre>
      <br />~ {author}
    </h4>
  </section>
);
