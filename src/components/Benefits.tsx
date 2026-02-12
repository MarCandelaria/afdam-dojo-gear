const benefits = [
  { icon: "💪", title: "Algodón resistente", desc: "Tela gruesa que aguanta entrenamiento tras entrenamiento." },
  { icon: "🥋", title: "Cómoda para entrenar", desc: "Corte que no restringe movimiento en el tatami." },
  { icon: "🔥", title: "Tiradas limitadas", desc: "Diseños exclusivos en cantidades reducidas." },
  { icon: "🤝", title: "Comunidad AFDAM", desc: "Llévala con orgullo dentro y fuera del dojo." },
  { icon: "💸", title: "Pago flexible", desc: "Efectivo o tarjeta al recoger. Sin complicaciones." },
  { icon: "📦", title: "Sin envíos", desc: "Recoge directo en recepción. Rápido y sin costo extra." },
];

const Benefits = () => (
  <section className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-4xl sm:text-5xl text-foreground text-center mb-12">¿POR QUÉ AFDAM?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {benefits.map((b) => (
          <div key={b.title} className="bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-colors">
            <span className="text-3xl mb-3 block">{b.icon}</span>
            <h3 className="font-display text-lg text-foreground mb-1">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
