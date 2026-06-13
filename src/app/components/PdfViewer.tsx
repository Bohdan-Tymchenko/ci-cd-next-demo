type PdfViewerProps = {
  src: string;
  title: string;
  className?: string;
};

export default function PdfViewer({ src, title, className }: PdfViewerProps) {
  return (
    <object
      data={src}
      type="application/pdf"
      title={title}
      className={className}
    >
      <p className="p-4 text-sm">
        Your browser can&apos;t display the PDF.{" "}
        <a className="underline" href={src} download>
          Download {title}
        </a>
      </p>
    </object>
  );
}
