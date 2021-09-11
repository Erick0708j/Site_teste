import commerce from "../lib/commerce";
import ProductsList from '../components/ProductsList';

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function IndexPage({ merchant, categories, products }) {
    return (
      <React.Fragment>
        <pre>{JSON.stringify(merchant, null, 2)}</pre>
        <pre>{JSON.stringify(categories, null, 2)}</pre>
        <ProductsList product={products} />
      </React.Fragment>
    );
  }
