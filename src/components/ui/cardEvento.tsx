import {
  AlarmCheckIcon,
  CalendarCheckIcon,
  MapPinIcon,
  Ticket,
} from "lucide-react";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { useNavigate } from "react-router-dom";

const elements = [
  {
    label: "Fecha:",
    description: "Sábado 7 de Septiembre.",
    icon: <CalendarCheckIcon />,
  },
  {
    label: "Hora:",
    description: "15:00 PM.",
    icon: <AlarmCheckIcon />,
  },
  {
    label: "Ubicación:",
    description:
      "Salón de eventos “Tic Tac” \n Zona Pampahasi, Av. 23 de marzo esq. calle 11 #289",
    icon: <MapPinIcon />,
  },
];

type CardProps = { description?: string } & React.ComponentProps<typeof Card>;

export function CardEvento({
  className,
  title,
  description,
  ...props
}: CardProps) {
  const navigate = useNavigate();

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
        <CardDescription className="">{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {elements.map((element, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 rounded-md border border-stone-400 dark:border-stone-700 p-4"
          >
            <span className="text-sky-600">{element.icon}</span>

            <div className="flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">
                {element.label}
              </p>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {element.description}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={() => navigate("/evento")}>
          <Ticket className="mr-2 h-4 w-4" />
          Confirmar Asistencia
        </Button>
      </CardFooter>
    </Card>
  );
}
