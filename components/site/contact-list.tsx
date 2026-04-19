import type { LucideIcon } from "lucide-react";
import { Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Card } from "@/components/ui/card";
import type { Contato } from "@/types/site";

const iconMap: Record<string, LucideIcon> = {
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  linkedin: Linkedin,
  globe: Globe
};

interface ContactListProps {
  contatos: Contato[];
}

export function ContactList({ contatos }: ContactListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {contatos.map((contato) => {
        const Icon = iconMap[contato.icone ?? "globe"] ?? Globe;

        return (
          <Card key={contato.id} className="rounded-[28px]">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-brand-50 p-3 text-brand-700">
                <Icon size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
                  {contato.rotulo}
                </p>
                <a
                  href={contato.href ?? "#"}
                  className="mt-2 block text-lg font-medium text-ink transition hover:text-brand-700"
                >
                  {contato.valor}
                </a>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
