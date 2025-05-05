import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children, ...props }) => (
      <h1 className="text-5xl text-[#0C2836] text-center my-2.5 font-bold border-t-4 border-b-4 border-[#17506C] py-2.5" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }) => (
      <h2 className="text-3xl text-[#17506C] text-center my-2.5" {...props}>
        {children}
      </h2>
    ),
    a: ({ children, ...props }) => (
      <a {...props} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    hr: ({ ...props }) => (
      <hr className="border-[#17506C] my-10" {...props} />
    ),
  };
}
