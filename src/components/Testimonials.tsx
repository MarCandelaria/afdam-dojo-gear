const testimonials = [
  { name: "Carlos M.", role: "Alumno de MMA", text: "La uso para entrenar y para salir. La tela es brutal, aguanta todo." },
  { name: "Sofía R.", role: "Alumna de Kickboxing", text: "Me encanta el diseño Fight Team. Cada vez que la uso, la gente pregunta por el dojo." },
  { name: "Diego L.", role: "Alumno de BJJ", text: "Pedí 3 de golpe. El proceso por WhatsApp fue super fácil, en 2 minutos." },
  { name: "Valentina G.", role: "Alumna de Muay Thai", text: "La Limited Batch se agotó rápido. Ahora siempre pido en cuanto salen diseños nuevos." },
  { name: "Andrés P.", role: "Alumno de Boxeo", text: "Después de 6 meses de uso diario sigue como nueva. Calidad real." },
];

const Testimonials = () => (
  <section id="opiniones" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4">
      <h2 className="font-display text-4xl sm:text-5xl text-foreground text-center mb-12">LO QUE DICEN LOS ALUMNOS</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card border border-border rounded-lg p-6">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, j) => (
                <svg key={j} className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-foreground mb-4 italic">"{t.text}"</p>
            <div>
              <p className="font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
