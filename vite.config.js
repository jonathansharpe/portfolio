import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

// Define paths
const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

// Define shareable assets that should be handled by the shared folder
const shareableAssets = ['main.jsx', 'index.html', 'style.css'];

// https://vitejs.dev/config/
export default defineConfig({
	root,
	plugins: [
		react(),
		{
			name: 'proper-asset-handling',
			enforce: 'pre',
			// Ensure assets like images are handled correctly
			load(id) {
				if (id.endsWith('.jpg') || id.endsWith('.jpeg') || id.endsWith('.png')) {
					return `export default ${JSON.stringify(id)}`;
				}
				return null;
			}
		}
	],
	resolve: {
		alias: {
			'@': root,
			'@components': resolve(root, 'components'),
			'@images': resolve(root, 'images'),
			// Alias for each park to its review
		}
	},
	build: {
		outDir,
		emptyOutDir: true,
		sourcemap: true,
		assetsInlineLimit: 0, // Disable inlining of images
		rollupOptions: {
			input: {
				"index": "./src/index.html"
			},
			output: {
				// Ensure proper HTML file generation
				entryFileNames: 'assets/[name]-[hash].js',
				chunkFileNames: 'assets/[name]-[hash].js',
				assetFileNames: 'assets/[name]-[hash].[ext]',
				// Add this to ensure HTML files are correctly placed
				dir: outDir
			}
		}
	},
})
