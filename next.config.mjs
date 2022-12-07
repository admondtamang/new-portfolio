// @ts-check
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

// @ts-ignore
import nextMDX from "@next/mdx";

const withMDX = nextMDX({
  // By default only the .mdx extension is supported.
  extension: /\.mdx?$/,
  options: {
    /* providerImportSource: …, otherOptions… */
  },
});
/** @type {import("next").NextConfig} */

export default withMDX({
  // Support MDX files as pages:
  pageExtensions: ["md", "mdx", "tsx", "ts", "jsx", "js"],
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
});
