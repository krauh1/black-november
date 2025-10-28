import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { productCategories, totalValue } from '@/data/products'

export const ProductListSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 bg-white/5 px-4"
    >
      <div
        className={cn(
          'container mx-auto max-w-4xl',
          isVisible ? 'animate-fade-in-up' : 'opacity-0',
        )}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          Conteúdo Completo do Combo
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-0"
        >
          {productCategories.map((category, index) => (
            <AccordionItem
              key={category.title}
              value={`item-${index}`}
              className="border-b border-white/10"
            >
              <AccordionTrigger className="text-left text-lg hover:no-underline text-primary">
                {category.title}
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pt-4">
                  {category.products.map((product) => (
                    <li
                      key={product.name}
                      className="flex justify-between items-center text-white/80 pl-4"
                    >
                      <span>{product.name}</span>
                      <span className="text-sm text-muted-foreground line-through whitespace-nowrap">
                        R${product.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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
