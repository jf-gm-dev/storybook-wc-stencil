declare module '*.jpg';

declare module '*.md' {
  const value: string; // markdown is just a string
  export default value;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
