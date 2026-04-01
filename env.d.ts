/// <reference types="vite/client" />

declare global {
  interface ImportMetaEnv {
    readonly VITE_AI_API_KEY?: string
    readonly VITE_AI_PROVIDER?: string
    // add other VITE_ keys here as needed
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}

export {}
