import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { productCategories, totalValue } from '@/data/products'
import { CheckCircle2 } from 'lucide-react'

export const ProductListSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productCategories.map((category, index) => (
            <Card
              key={category.title}
              className="bg-card border-white/10 shadow-lg"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-primary">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {category.products.map((product) => (
                    <li
                      key={product.name}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <span>{product.name}</span>
                        <span className="ml-2 text-sm text-muted-foreground line-through">
                          R${product.price}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-2xl text-white/80">
            Valor total de todos os produtos:
          </p>
          <p className="text-5xl md:text-7xl font-extrabold text-primary mt-2">
            DE R${totalValue}
          </p>
        </div>
      </div>
    </section>
  )
}
