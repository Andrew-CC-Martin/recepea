// this is just to stop typescript complaining about svg imports
declare module "*.svg" {
  const content: any;
  export default content;
}
