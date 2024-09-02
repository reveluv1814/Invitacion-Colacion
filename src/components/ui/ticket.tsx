import PDF from "@/lib/PDF";
import { randomEmoji } from "@/lib/utils";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
type TicketProps = {
  nombre: string;
};
const Ticket = ({ nombre }: TicketProps) => {
  return (
    <div className="scale-[0.7] md:scale-[1]">
      <div className="content bg-sky-800 ">
        <div className="text bg-background shadow-2xl dark:shadow-[0_10px_20px_rgba(216,214,215,0.2)]">
          <div className="mess gap-10">
            <h1 className="bg-sky-950 w-[100px] h-[100px] md:w-[140px] md:h-[140px] md:text-[5rem] text-4xl">
              {Math.floor(Math.random() * 100) + 1}
            </h1>
            <div className="about ">
              <h4 className="font-normal md:font-medium">
                Invitación especial
              </h4>
              <h3 className="font-normal md:font-medium text-lg md:text-[1.5rem] text-wrap text-end">
                {nombre}
              </h3>
              <div className="links flex flex-col text-[0.6rem] md:text-sm text-end">
                <p className="text-muted-foreground">7 de septiembre | 15:00</p>
                <p className="text-muted-foreground text-wrap">
                  Av. 23 de Marzo, esquina Calle 11 <br /> N.º 289, Salón "Tic
                  Tac"
                </p>
              </div>
              <div className="links mode mt-3 text-xl">
                <a>
                  <span>{randomEmoji()}</span>
                </a>
                <a>
                  <span>{randomEmoji()}</span>
                </a>
                <a>
                  <span>{randomEmoji()}</span>
                </a>
              </div>
            </div>
          </div>
          <h2 className="text-base md:text-[2rem] mt-2">
            Brindis de Graduación
          </h2>
        </div>
        <div className="ticket">
          <div className="links wrmode bg-background rounded-l-[0.2em] text-lg md:text-[1.75rem]">
            <PDFDownloadLink
              document={<PDF nombre={nombre} />}
              fileName="invitacion.pdf"
            >
              {({ loading }) => (
                <>
                  <span className="dark:text-stone-300">
                    {loading ? (
                      "Cargando ..."
                    ) : (
                      <span className="flex flex-row justify-center items-center gap-2">
                        Descargar
                        <Download className="rotate-90" />
                      </span>
                    )}
                  </span>
                </>
              )}
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
