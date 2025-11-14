import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    legacy({
      targets: ["defaults", "not IE 11", "iOS >= 12", "Safari >= 12"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"]
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ['react', 'react-dom', 'react-router-dom']
  },
  build: {
    target: 'es2017',
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunk for React ecosystem
          if (id.includes('node_modules')) {
        if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-router')) {
          return 'react-vendor';
        }
            // Framer Motion separate chunk (heavy animation library)
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            // UI components chunk
            if (id.includes('@radix-ui')) {
              return 'ui-vendor';
            }
            // Other vendors
            return 'vendor';
          }
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-slot',
      '@tanstack/react-query'
    ],
    force: mode === 'production'
  }
}));
