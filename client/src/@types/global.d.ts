declare module "xhr-request" {
  let request: any;
  export = request;
}

interface INavSettings {
  exact?: boolean;
  label: string;
  to: string;
  icon: string;
  component: React.ComponentClass;
}
