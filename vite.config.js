import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/approtrans1/", // 👈 use your repo name here
  plugins: [tailwindcss(), react()],
});
