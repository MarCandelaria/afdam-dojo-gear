//import heroFemale from "@/assets/hero-female.png";
import heroMale from "@/assets/hero-male.png";
import luchadora from "@/assets/luchadora_afdam.mp4";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(0_80%_50%/0.08),transparent_60%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium border border-primary/20">
              Merch oficial del dojo
            </span>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-foreground leading-[0.95]">
              ENTRENA CON{" "}
              <span className="text-gradient">ORGULLO.</span>
              <br />
              REPRESENTA TU{" "}
              <span className="text-gradient">DOJO.</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-md">
              Camisetas AFDAM diseñadas para la comunidad. Algodón resistente, estilo que impone dentro y fuera del tatami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#pedir"
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-semibold text-center hover:opacity-90 transition-opacity animate-pulse-glow"
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#disenos"
                className="border border-border text-foreground px-8 py-3.5 rounded-md font-semibold text-center hover:bg-secondary transition-colors"
              >
                Ver diseños
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Tiradas limitadas · Recogida en el dojo · Pago en efectivo o tarjeta
            </p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-4 mt-8 lg:mt-0">
            <video
              src={luchadora}
              className="w-64 h-[320px] rounded-lg object-cover shadow-[var(--shadow-card)] border border-border"
              autoPlay
              muted
              loop
              playsInline
            >
            Tu navegador no admite el elemento video.
          </video>

          <img
              src={heroMale}
              alt="Alumno AFDAM con camiseta del dojo"
              className="w-64 h-[320px] rounded-lg object-cover shadow-[var(--shadow-card)] border border-border"
              loading="lazy"
          />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
