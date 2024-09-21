'use client'

import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { ProductGrid } from '../../../../components/products/product-grid/ProductGrid';
import { Title } from "@/components";
import { ValidCategory } from "@/interfaces";

const seedProducts = initialData.products;
interface Props {
    params: {
        id: ValidCategory;
    }
}

export default function ({ params }: Props) {

    const { id } = params;
    const products = seedProducts.filter(product => product.gender === id)
    const labels: Record<ValidCategory, string> = {
        'men': "para hombres",
        'women': "para mujeres",
        'kid': "para niños",
        'unisex': "para todos"
    }

    const labelsSubtitle: Record<ValidCategory, string> = {
        'men': "para ellos",
        'women': "para ellas",
        'kid': "para niños",
        'unisex': "para todos"
    }
    return (
        <>
            <Title
                title={`Articulos ${labels[id]}`}
                subtitle={`Productos ${labelsSubtitle[id]}`}
                className="mb-2"
            />

            <ProductGrid
                products={products}
            />
        </>
    )
};