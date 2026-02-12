import { useState } from "react";
import { designs } from "./CatalogSection";

const WHATSAPP_NUMBER = "524271090804";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

interface Props {
  selectedDesign: string | null;
  onSelectDesign: () => void;
}

const OrderSection = ({ selectedDesign, onSelectDesign }: Props) => {
  const [size, setSize] = useState<string | null>(null);
  const [qty, setQty] = useState(1);
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const designName = designs.find((d) => d.id === selectedDesign)?.name;

  const handleOrder = () => {
    if (!selectedDesign) {
      setError("Selecciona un diseño arriba ☝️");
      return;
    }
    if (!size) {
      setError("Elige una talla");
      return;
    }
    if (qty < 1) {
      setError("La cantidad debe ser al menos 1");
      return;
    }
    setError("");

    const nameStr = name.trim() || "No especificado";
    const message = encodeURIComponent(
      `Hola, quiero pedir una camiseta AFDAM.\nDiseño: ${designName}\nTalla: ${size}\nCantidad: ${qty}\nNombre: ${nameStr}\nRecogida: recepción del dojo AFDAM.\nPago: efectivo o tarjeta.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="pedir" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-foreground mb-3">HAZ TU PEDIDO</h2>
          <p className="text-muted-foreground mb-2">
            Últimas unidades por tirada. Los pedidos cierran cada viernes.
          </p>
          <p className="text-xs text-primary mb-8">⚡ Stock limitado — no te quedes sin la tuya</p>

          <div className="bg-card border border-border rounded-lg p-6 sm:p-8 text-left space-y-6">
            {/* Design */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Diseño seleccionado</label>
              {designName ? (
                <div className="flex items-center justify-between bg-primary/10 border border-primary/30 rounded-md px-4 py-3">
                  <span className="text-foreground font-medium">{designName}</span>
                  <a href="#disenos" className="text-xs text-primary hover:underline">Cambiar</a>
                </div>
              ) : (
                <a
                  href="#disenos"
                  onClick={onSelectDesign}
                  className="block text-center border border-dashed border-border rounded-md px-4 py-3 text-muted-foreground hover:border-primary/50 transition-colors"
                >
                  ↑ Selecciona un diseño del catálogo
                </a>
              )}
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Talla</label>
              <div className="flex flex-wrap gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-4 py-2 rounded-md text-sm font-medium border transition-all ${
                      size === s
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-secondary text-secondary-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Cantidad</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 rounded-md bg-secondary border border-border text-foreground flex items-center justify-center hover:border-primary/50"
                >
                  −
                </button>
                <span className="w-10 text-center text-foreground font-semibold">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 rounded-md bg-secondary border border-border text-foreground flex items-center justify-center hover:border-primary/50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Nombre <span className="text-muted-foreground font-normal">(opcional)</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre para el pedido"
                maxLength={100}
                className="w-full px-4 py-2.5 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {error && (
              <p className="text-sm text-primary font-medium">{error}</p>
            )}

            <button
              onClick={handleOrder}
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Pedir por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
