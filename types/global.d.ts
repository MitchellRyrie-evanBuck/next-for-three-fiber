// Add 'NextPageProps' to global types
declare type NextPageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};
declare module 'class-variance-authority' {
  // Add the specific type declarations you need for the module
  // This is a placeholder example
  export function someFunction(args: any): any;
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}