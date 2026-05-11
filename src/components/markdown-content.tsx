import ReactMarkdown from "react-markdown";

export function MarkdownContent({ content }: Readonly<{ content: string }>) {
  return (
    <ReactMarkdown
      components={{
        p: ({ children }) => (
          <p className="leading-7 text-muted [&:not(:first-child)]:mt-4">
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong className="font-semibold text-foreground">{children}</strong>
        ),
        a: ({ children, href }) => (
          <a
            href={href}
            className="font-medium text-foreground underline decoration-[color:var(--accent)] decoration-2 underline-offset-4 transition hover:text-[color:var(--accent)]"
            target="_blank"
            rel="noreferrer"
          >
            {children}
          </a>
        ),
        ul: ({ children }) => (
          <ul className="mt-4 space-y-2 text-muted">{children}</ul>
        ),
        li: ({ children }) => <li className="pl-1">{children}</li>,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}