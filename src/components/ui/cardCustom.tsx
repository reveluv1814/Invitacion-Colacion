import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlarmCheckIcon, CalendarCheckIcon, MapPinIcon } from "lucide-react";

const elements = [
  {
    label: "Fecha:",
    description: "29 de Agosto de 2024.",
    icon: <CalendarCheckIcon />,
  },
  {
    label: "Hora:",
    description: "14:00 PM.",
    icon: <AlarmCheckIcon />,
  },
  {
    label: "Ubicación:",
    description:
      "Atrio de la Universidad Mayor de San Andres Monoblock Central Av. Villazón.",
    icon: <MapPinIcon />,
  },
];

type CardProps = { description?: string } & React.ComponentProps<typeof Card>;

export function CardDemo({
  className,
  title,
  description,
  ...props
}: CardProps) {
  return (
    <Card
      className={cn(
        "w-[22rem] md:w-[25rem] bg-background dark:bg-stone-900 border-stone-400 dark:border-stone-700",
        className
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="md:text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {elements.map((element, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 rounded-md border border-stone-400 dark:border-stone-700 p-4"
          >
            <span className="text-sky-600">{element.icon}</span>

            <div className="flex-1 space-y-1">
              <p className="text-sm md:text-lg font-medium leading-none">
                {element.label}
              </p>
              <p className="text-sm md:text-base text-muted-foreground">
                {element.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
