import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = { description?: string } & React.ComponentProps<typeof Card>;

const CardMap = ({ className, title, description, ...props }: CardProps) => {
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d478.1776824829959!2d-68.13009640367018!3d-16.504807005904972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2064df652367%3A0xddb4c11ab8c8d666!2sMonoblock%20UMSA!5e0!3m2!1ses-419!2sbo!4v1724449993702!5m2!1ses-419!2sbo"
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
