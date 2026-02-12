const steps = [
  { num: "01", title: "Elige tu diseño", desc: "Selecciona tu camiseta favorita del catálogo." },
  { num: "02", title: "Talla y cantidad", desc: "Indica tu talla (XS–XXL) y cuántas quieres." },
  { num: "03", title: "Pide por WhatsApp", desc: "Envía tu pedido con un clic. Sin cuentas ni registros." },
  { num: "04", title: "Recoge en el dojo", desc: "Pasa por recepción. Paga en efectivo o con tarjeta." },
];

const HowItWorks = () => (
  <section id="como-funciona" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-4xl sm:text-5xl text-foreground text-center mb-12">CÓMO FUNCIONA</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s) => (
          <div key={s.num} className="text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
              <span className="font-display text-2xl text-primary">{s.num}</span>
            </div>
            <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
