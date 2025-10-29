import { Card, CardContent } from '@/components/ui/card'
import { type Product } from '@/data/products'

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="bg-card border-white/10 overflow-hidden group transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 flex flex-col">
      <div className="aspect-w-16 aspect-h-7 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-3 md:p-4 flex flex-col flex-grow text-center">
        <h3 className="text-xs md:text-base font-semibold text-white/90 flex-grow">
          {product.name}
        </h3>
        <p className="mt-2 text-sm md:text-lg font-bold text-muted-foreground line-through">
          R${product.price}
        </p>
      </CardContent>
    </Card>
  )
}
