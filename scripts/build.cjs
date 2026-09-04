const esbuild = require('esbuild');

async function build() {
  console.log('Building standalone TypeScript App bundle with esbuild (UTF-8)...');
  await esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'js/app.bundle.js',
    format: 'iife',
    target: 'es2022',
    sourcemap: true,
    charset: 'utf8',
    minify: false,
    define: {
      'process.env.NODE_ENV': '"production"'
    },
    loader: {
      '.ts': 'ts'
    }
  });
  console.log('Successfully built js/app.bundle.js (Standalone offline TypeScript bundle)!');
}

build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
