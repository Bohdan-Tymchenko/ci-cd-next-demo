import PdfViewer from "./components/PdfViewer";
import ArrowRightIcon from "./components/ArrowRightIcon";

const CV_FILE = "/Bohdan_Tymchenko_CV.pdf";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-6 p-6 sm:p-10">
      <h1>Environment:</h1>
      <p>{process.env.NEXT_PUBLIC_APP_ENV}</p>
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Bohdan Tymchenko 🚀
        </h1>
        <div className="w-fit mt-4 gap-5 flex sm:flex-row flex-col">
          <a
            className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-foreground hover:text-background"
            href="https://www.linkedin.com/in/bohdan-tymchenko-0862a381/"
            target="_blank"
          >
            <ArrowRightIcon className="w-4 h-4" /> Go to my LinkedIn profile
          </a>
          <a className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-foreground hover:text-background" href={CV_FILE} download>
            <ArrowRightIcon className="w-4 h-4" /> Download my CV
          </a>
        </div>

      </header>

      <section className="flex flex-col gap-3 justify-start">
        <PdfViewer
          src={CV_FILE}
          title="Bohdan Tymchenko CV"
          className="h-[80vh] w-full rounded-lg border mt-4"
        />
      </section>
    </main>
  );
}
