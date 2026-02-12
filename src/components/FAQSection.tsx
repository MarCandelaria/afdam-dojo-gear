/*
 * FAQ Section — Recurso adaptado de 21st.dev (shadcn Accordion component)
 * Se utiliza el componente Accordion de shadcn/ui como base para esta sección.
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "¿Cómo sé qué talla elegir?", a: "Nuestras camisetas tienen corte unisex estándar. Si dudas entre dos tallas, elige la más grande. Puedes probar tallas en recepción antes de pedir." },
  { q: "¿Qué formas de pago aceptan?", a: "Efectivo y tarjeta (débito/crédito). Pagas al momento de recoger tu pedido en la recepción del dojo AFDAM." },
  { q: "¿Dónde recojo mi pedido?", a: "En la recepción del dojo AFDAM. Te avisamos por WhatsApp cuando esté listo." },
  { q: "¿Puedo hacer cambios o devoluciones?", a: "Sí, puedes cambiar de talla dentro de los 7 días posteriores a la recogida, siempre que la camiseta esté sin usar y con etiquetas." },
  { q: "¿Cuánto tardan en llegar?", a: "Normalmente entre 5 y 10 días hábiles después de confirmar tu pedido por WhatsApp." },
  { q: "¿Hacen envíos a domicilio?", a: "Por el momento solo manejamos recogida en el dojo. Esto nos permite ofrecerte mejor precio sin costos de envío." },
];

const FAQSection = () => (
  <section id="faq" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-4xl sm:text-5xl text-foreground text-center mb-12">PREGUNTAS FRECUENTES</h2>
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-medium text-left hover:text-primary py-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm pb-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
