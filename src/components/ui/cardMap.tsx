import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = { description?: string; lugar: string } & React.ComponentProps<
  typeof Card
>;

const CardMap = ({
  className,
  title,
  description,
  lugar,
  ...props
}: CardProps) => {
  return (
    <Card
      className={cn(
        "w-[22rem] md:w-[45rem] bg-background dark:bg-stone-900 border-stone-400 dark:border-stone-700",
        className
      )}
      {...props}
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4 rounded-md border dark:border-stone-800">
          <iframe
            src={lugar}
            // width="600"
            // height="450"
            style={{ border: "0", borderRadius: "0.5rem" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-60 md:h-96"
          ></iframe>
        </div>
      </CardContent>
    </Card>
  );
};

export default CardMap;
