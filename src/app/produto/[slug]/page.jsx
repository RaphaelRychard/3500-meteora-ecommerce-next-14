import styles from "./page.module.css";
import Produto from "@/app/components/Produto";

async function getProdutos(slug) {
  const res = await fetch(`https://api.npoint.io/89e2e9548145fca0f8e1/produtos`);

  const produtos = await res.json();
  const produto = produtos.find(produto => produto.id.toString() === slug)

  return produto;
}

export default async function ProdutoPage({ params }) {
  const produto = await getProdutos(params.slug);

  return (
    <main className={styles.main}>
      <Produto produto={produto} />
    </main>
  );
}

export async function generateStaticParams() {
  const res = await fetch("https://api.npoint.io/89e2e9548145fca0f8e1/produtos")
  const produtos = await res.json()

  const result = produtos.map((produto) => ({
    slug: produto.id.toString()
  }))
  
  return result;
}