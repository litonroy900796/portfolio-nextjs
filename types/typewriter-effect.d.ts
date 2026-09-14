declare module "typewriter-effect/dist/core" {
  interface TypewriterOptions {
    loop?: boolean;
    delay?: number | "natural";
    strings?: string | string[];
    autoStart?: boolean;
    cursor?: string;
  }

  export default class Typewriter {
    constructor(container: Element | null, options?: TypewriterOptions);
  }
}
