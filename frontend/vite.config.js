import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 5173,  // Port to run the frontend
        proxy: {
            '/api': 'http://localhost:3000',  // Proxy API requests to backend
        },
    },
});
