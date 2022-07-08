// data/businessModels.ts

import _ from "lodash";

import { normalizeBusinessModelName } from "../utils/misc";

// From: https://www.nerdwallet.com/article/small-business/what-is-a-business-model
const businessModelsDescriptions = `
1. Subscription model
A subscription business model can be applied to both traditional brick-and-mortar businesses and online businesses alike. Essentially, as we explained in reference to Netflix, the customer pays a recurring payment on a monthly basis (or another specified timeframe) for access to a service or product. A company may directly ship its product in the mail, or you may pay a fee to use an app.
Examples: In addition to Netflix, other businesses using the subscription model include HelloFresh, Beer Cartel, StitchFix, as well as other streaming services like Hulu, HBO Go, and Disney+.
2. Bundling model
Exactly like it sounds, the bundling business model involves companies selling two or more products together as a single unit, often for a lower price than they would charge selling the products separately.
This type of business model allows companies to generate a greater volume of sales and perhaps market products or services that are more difficult to sell. However, profit margins often shrink since businesses sell the products for less.
Examples: Businesses that use the bundling model include AT&T, Adobe Creative Suite and Burger King, as well as other fast-food companies that offer value meals or deals.
3. Freemium model
The freemium business model has gained popularity with the prevalence of online and Software-as-a-Service (SaaS) businesses.
The basic framework goes like this: a software company hosts and provides a proprietary tool for their users to freely access, such as an app or tool suite. However, the company withholds or limits the use of certain key features that, over time, their users will likely want to use more regularly. To gain access to those key features, users must pay for a subscription.
You can see how Spotify follows this model — it gives users free and open access to its entire database of music while sprinkling in ads between songs. At some point, many users opt to pay a recurring monthly fee for the premium service so they can stream music without interruption.
Examples: Spotify, LinkedIn, Skype and MailChimp are all businesses that use the freemium model.
4. Razor blades model
To understand the razor blades model, you can simply look to your local drugstore. You’ll notice that replacement razor blades cost more than razors themselves.
Companies offer a cheaper razor with the understanding that you’ll continue to purchase more expensive accessories — in this case, razor blades — in the future. For this reason, this model is referred to as the "razor blades model."
In addition to the traditional razor blades model, you'll also see companies use the reverse razor blades model — in which they offer customers a high-margin product and then promote the sales of lower-margin products that accompany that initial product.
A classic example of this model is Apple iPhones and Macs — you purchase the high-margin item, the phone or computer, and then Apple pushes additional products, tools, and services that accompany that item.
Examples: On top of razor companies, examples of the general razor blades model include Keruig, Brita, Xbox, and printer and ink companies.
5. Product to service model
Imagine that you are the owner of a company that makes scooters. Let’s say you need two pieces of metal welded together. You might ask another company to weld the pieces of metal together instead of purchasing a welding machine yourself. In essence, this example shows how the product to service business model works.
Companies that follow this type of business model allow customers to purchase a result rather than the equipment that delivers that result.
Examples: Companies that use the product to service model include Zipcar, Uber, Lyft and LIME.
6. Leasing model
Under a leasing business model, a company buys a product from a seller. That company then allows another company to use the product they purchased for a periodic fee. Leasing agreements work best with big-ticket items like manufacturing and medical equipment.
Examples: U-Haul, Enterprise and Rent-a-Center are all examples of companies that use the leasing model.
7. Crowdsourcing model
Crowdsourcing involves receiving opinions, information, or work from many different people using the internet or social media. These types of business models allow companies to tap into a vast network of talent without having to hire in-house employees.
Some traffic apps, for example, encourage drivers to report accidents in real-time for the benefit of other app users.
Examples: Wikipedia, YouTube, IMDB and Indiegogo are all examples of businesses using the crowdsourcing model.
8. One-for-one model
As the name suggests, the one-for-one business model means that a company donates one item to a charitable cause for every item that is purchased. This model appeals to the charitable nature and social consciousness of customers to encourage them to purchase a product or service, while also allowing both the business and the customer to actually engage in philanthropic efforts.
Blake Mycoskie, the founder of TOMS, pioneered this form of social entrepreneurship.
Examples: In addition to TOMS, SoapBox, Smile Squared and Warby Parker are all companies that use this type of business model.
9. Franchise model
Of all the different types of business models, the franchise model is perhaps the one that people are most familiar with — after all, we each see and likely visit franchise businesses often in our daily lives.
In short, a franchise works like this: A franchise is an established business blueprint that is simply purchased and reproduced by the buyer, the franchisee. The franchiser, or original owner, works with the franchisee to help them with financing, marketing, and other business operations to ensure the business functions as it should. In return, the franchisee pays the franchiser a percentage of the profits.
Examples: Starbucks, Domino's, Subway, McDonald's and the UPS Store are all common examples of the franchise model.
10. Distribution model
A company operating as a distributor is responsible for taking manufactured goods to the market.
Hershey’s, for example, manufactures and packages its chocolate, but distributors are the agents that transfer and sell the goods from the factory to a retailer. To make a profit, distributors buy the product in bulk and sell it to retailers at a higher price.
Examples: Other examples of companies that use the distribution business model are HD Supply, Avent, Cheney Brothers, and ABC Supply Co.
11. Manufacturer model
One of the most traditional business models, the manufacturer model refers to when a manufacturer converts raw materials into a product.
Companies like Dell Computers or Hewlett-Packard, both of which assemble computers with parts manufactured by other companies, would still be considered manufacturers.
Examples: Additional examples of this type of business model include Intel, Magic Bullet, Black + Decker and LG Electronics.
12. Retailer model
The last business model on our list is the retailer model.
A retailer is the last link in the supply chain. These businesses purchase goods from distributors and then sell them to customers for a price that will both cover expenses and turn a profit. Retailers may specialize in a particular niche, such as kitchenware, or carry a range of products.
Examples: This is a popular type of business model — used by big-name companies like Nordstrom, Home Depot, Target and Best Buy.
`;

// Most of this processing is very ad hoc
export const businessModels = businessModelsDescriptions
  .split(/\n\d{1,2}\.\s/)
  .filter(_.identity)
  .map(x => {
    let [name, ...rest] = x.split('\n');
    return { name: name.trim(), rest: rest.join() };
  })
  .map(({ name, rest }) => {
    const [description, examples] = rest.split("Examples: ");
    return { name, description: description.replace(/\s+/g, " "), examples };
  })
  .reduce(
    (prev, { name, description, examples }) => ({
      ...prev,
      [normalizeBusinessModelName(name)]: {name: _.startCase(name), description, examples}
    }),
    {}
  );

export default businessModels;
