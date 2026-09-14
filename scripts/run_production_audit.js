import { spawn } from 'child_process';

const PORT = 3001;

console.log(`Starting Next.js production server on port ${PORT}...`);
const server = spawn('node', ['node_modules/next/dist/bin/next', 'start', '-p', String(PORT)], {
  stdio: ['ignore', 'pipe', 'pipe']
});

server.stdout.on('data', (d) => {
  const str = d.toString();
  if (str.includes('Ready') || str.includes('started')) {
    console.log(`Production server ready on http://localhost:${PORT}`);
  }
});

server.stderr.on('data', (d) => {
  console.error(`[Server stderr]: ${d.toString()}`);
});

// Wait 3 seconds for server to boot
await new Promise(r => setTimeout(r, 3000));

try {
  console.log('\n--- STEP 1: Running SEO & Latency Audit on Production Server ---');
  const audit = spawn('node', ['scripts/seo_and_perf_audit.js'], {
    stdio: 'inherit',
    env: { ...process.env, AUDIT_URL: `http://localhost:${PORT}` }
  });

  const auditExitCode = await new Promise(res => audit.on('exit', res));
  if (auditExitCode !== 0) {
    throw new Error(`SEO & Perf audit failed with code ${auditExitCode}`);
  }

  console.log('\n--- STEP 2: Running Live Server Parity Test on Production Server ---');
  const serverTest = spawn('node', ['scripts/live_next_server_test.js'], {
    stdio: 'inherit',
    env: { ...process.env, BASE_URL: `http://localhost:${PORT}` }
  });

  const serverTestExitCode = await new Promise(res => serverTest.on('exit', res));
  if (serverTestExitCode !== 0) {
    throw new Error(`Live server test failed with code ${serverTestExitCode}`);
  }

  console.log('\n✅ ALL PRODUCTION SERVER AUDITS PASSED WITH ZERO FAILURES!');
} finally {
  console.log(`Stopping production server on port ${PORT}...`);
  server.kill('SIGTERM');
}
