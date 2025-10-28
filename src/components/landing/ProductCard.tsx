import { Card, CardContent } from '@/components/ui/card'
import { type Product } from '@/data/products'

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="bg-card border-white/10 overflow-hidden group transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 flex flex-col">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4 flex flex-col flex-grow">
        <h3 className="font-semibold text-white/90 flex-grow">
          {product.name}
        </h3>
        <p className="mt-2 text-lg font-bold text-muted-foreground line-through">
          R${product.price}
        </p>
      </CardContent>
    </Card>
  )
}
