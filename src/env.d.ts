/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_SUPABASE_URL: string;
  readonly VITE_APP_SUPABASE_ANON_KEY: string;
}

// eslint-disable-next-line no-unused-vars
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
