import PdfViewer from "./components/PdfViewer";
import ArrowRightIcon from "./components/ArrowRightIcon";

const CV_FILE = "/Bohdan_Tymchenko_CV.pdf";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col gap-6 p-6 sm:p-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold sm:text-3xl">
          Bohdan Tymchenko 🚀
        </h1>
        <div className="w-fit mt-4">
          <a
            className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-foreground hover:text-background"
            href="https://www.linkedin.com/in/bohdan-tymchenko-0862a381/"
            target="_blank"
          >
            <ArrowRightIcon className="w-4 h-4" /> Go to my LinkedIn profile
          </a>
        </div>

      </header>

      <section className="flex flex-col gap-3">
        <PdfViewer
          src={CV_FILE}
          title="Bohdan Tymchenko CV"
          className="h-[80vh] w-full rounded-lg border"
        />
      </section>
    </main>
  );
}
