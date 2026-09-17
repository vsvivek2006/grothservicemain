import { renderToBuffer } from '@react-pdf/renderer';
import React from 'react';
import { InvoicePdfDocument } from './pdfTemplate.mjs';

let input = '';
process.stdin.setEncoding('utf8');
process.stdin.on('data', chunk => { input += chunk; });
process.stdin.on('end', async () => {
  try {
    const data = JSON.parse(input);
    const element = React.createElement(InvoicePdfDocument, data);
    const buffer = await renderToBuffer(element);
    process.stdout.write(buffer.toString('base64'), () => {
      process.exit(0);
    });
  } catch (err) {
    console.error('PDF Worker Error:', err);
    process.exit(1);
  }
});
