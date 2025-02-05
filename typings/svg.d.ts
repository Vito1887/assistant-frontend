declare module '*.svg?react' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
