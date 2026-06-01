// Ambient typing for CSS Modules imported from components.
declare module "*.module.css" {
  const classes: { readonly [className: string]: string };
  export default classes;
}
