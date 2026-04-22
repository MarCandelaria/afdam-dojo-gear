import { useState } from "react";

interface Design {
  id: string;
  name: string;
  description: string;
  price: string;
  color: string;
}

const designs: Design[] = [
  { id: "classic", name: "Classic Logo", description: "El escudo AFDAM en el pecho. La esencia del dojo.", price: "$350 MXN", color: "bg-primary/20 border-primary/40" },
  { id: "kanji", name: "Minimal Kanji", description: "Carácter kanji en la espalda. Elegancia marcial.", price: "$350 MXN", color: "bg-secondary border-border" },
  { id: "fight-team", name: "Fight Team", description: "Para los que compiten. Edición competidores.", price: "$400 MXN", color: "bg-primary/10 border-primary/30" },
  { id: "vintage", name: "Vintage Dojo", description: "Estilo retro con el año de fundación. Tradición pura.", price: "$350 MXN", color: "bg-secondary border-border" },
  { id: "limited", name: "Limited Batch", description: "Tirada limitada con diseño exclusivo de temporada.", price: "$450 MXN", color: "bg-primary/20 border-primary/40" },
  { id: "training", name: "Training Day", description: "Corte deportivo, ideal para sesiones intensas.", price: "$380 MXN", color: "bg-secondary border-border" },
];

interface Props {
  selectedDesign: string | null;
  onSelect: (id: string) => void;
}

const CatalogSection = ({ selectedDesign, onSelect }: Props) => {
  return (
    <section id="disenos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl mb-3 font-sans font-bold uppercase rounded-none opacity-95" style={{ color: '#FF3131', letterSpacing: '0.2em', textShadow: '0 0 8px #FF3131, 0 0 16px rgba(255, 49, 49, 0.6), 0 0 24px rgba(255, 49, 49, 0.4)' }}>ELIGE TU DISEÑO</h2>
          <p className="max-w-md mx-auto text-[#f0f0f0]/[0.67]">
            6 diseños creados para la comunidad AFDAM. Cada uno cuenta una historia del dojo.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {designs.map((d) => {
            const isSelected = selectedDesign === d.id;
            return (
              <div
                key={d.id}
                className={`relative border p-6 transition-all duration-300 cursor-pointer bg-black ${
                  isSelected
                    ? "border-primary glow-red scale-[1.02]"
                    : "border-white/10 hover:border-primary/50 hover:card-hover"
                }`}
                style={{ borderRadius: '12px' }}
                onClick={() => onSelect(d.id)}
              >
                {/* Placeholder T-shirt icon */}
                <div className="w-full h-32 flex items-center justify-center mb-4">
                  <svg className={`w-20 h-20 ${isSelected ? "text-primary" : "text-muted-foreground"}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M6.5 2L2 6.5L5 8V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V8L22 6.5L17.5 2H14.5C14.5 3.38071 13.3807 4.5 12 4.5C10.6193 4.5 9.5 3.38071 9.5 2H6.5Z" />
                  </svg>
                </div>

                <h3 className="font-display text-xl text-white font-bold">{d.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 mb-3">{d.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[#ff3333]/[0.53] text-sm">{d.price}</span>
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      isSelected
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {isSelected ? "✓ Seleccionado" : "Seleccionar"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { designs };
export default CatalogSection;
