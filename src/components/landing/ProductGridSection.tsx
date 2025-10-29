import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { productCategories, totalValue } from '@/data/products'
import { ProductCard } from './ProductCard'

export const ProductGridSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const allProducts = productCategories.flatMap((category) => category.products)

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 bg-white/5 px-4"
    >
      <div
        className={cn(
          'container mx-auto',
          isVisible ? 'animate-fade-in-up' : 'opacity-0',
        )}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Conteúdo Completo do Combo
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {allProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-2xl text-white/80">
            Valor total de todos os produtos:
          </p>
          <p className="text-5xl md:text-7xl font-extrabold text-primary mt-2">
            DE <span className="line-through">R${totalValue}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
