import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getRelatedProducts } from "@/lib/products";
import { ProductDetail } from "@/components/shop/product-detail";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata(
  props: PageProps<"/shop/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  return {
    title: product ? `${product.name.en} — GRAV FIGHT` : "Product — GRAV FIGHT",
    description: product?.description.en,
  };
}

export default async function ProductPage(props: PageProps<"/shop/[slug]">) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const related = getRelatedProducts(product, 3);

  return <ProductDetail product={product} related={related} />;
}
