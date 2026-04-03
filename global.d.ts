declare module "*.css";
declare module "*.scss";
declare module "*.sass";
declare module "*.module.css";
declare module "*.module.scss";
declare module "*.module.sass";

interface ImportMeta {
  readonly env: Record<string, string>;
}
