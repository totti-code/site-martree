import { formatMultilineText } from "@/lib/utils";

interface RichTextProps {
  text: string;
  listClassName?: string;
}

export function RichText({ text, listClassName }: RichTextProps) {
  const lines = formatMultilineText(text);

  return (
    <div className={listClassName ?? "space-y-3"}>
      {lines.map((line) => (
        <p key={line} className="text-sm leading-7 text-slate-600">
          {line}
        </p>
      ))}
    </div>
  );
}
