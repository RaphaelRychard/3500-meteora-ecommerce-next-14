import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";

async function fetchProdutosApi() {
  const res = await fetch("https://api.npoint.io/89e2e9548145fca0f8e1/produtos")

  if (!res.ok) {
    throw new Error("Não foi possivel obter os dados")
  }

  const produtos = await res.json()

  return produtos
}

async function fetchCategoriasApi() {
  const res = await fetch("https://api.npoint.io/5129564c720ee284bc54/categorias")

  if (!res.ok) {
    throw new Error("Não foi possivel obter os dados")
  }

  const categoria = await res.json()

  return categoria
}

export default async function Home() {
  const produtos = await fetchProdutosApi();
  const categorias = await fetchCategoriasApi();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}