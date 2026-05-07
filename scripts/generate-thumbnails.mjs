import { createCanvas } from '@napi-rs/canvas';
import { writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = join(__dirname, '../public/images/blogs');
mkdirSync(OUTPUT_DIR, { recursive: true });

const W = 1200;
const H = 630;

const blogs = [
  {
    filename: 'seo-blog-ditto.png',
    title: 'Why Google Isn\'t\nFinding Your\nWebsite.',
    subtitle: 'SEO & Web Visibility',
    shape: 'diamonds',
    accent1: '#7c3aed',
    accent2: '#a855f7',
  },
  {
    filename: 'web-design-blog.png',
    title: 'Why Every Business\nNeeds a Professional\nWebsite.',
    subtitle: 'Web Design · India',
    shape: 'circles',
    accent1: '#6d28d9',
    accent2: '#8b5cf6',
  },
  {
    filename: 'mobile-optimization-blog.png',
    title: 'Why Mobile\nOptimization\nMatters.',
    subtitle: 'Mobile & UX',
    shape: 'cylinders',
    accent1: '#5b21b6',
    accent2: '#7c3aed',
  },
  {
    filename: 'bhubaneswar-it-blog.png',
    title: 'Top 10 IT Companies\nin Bhubaneswar\n2026.',
    subtitle: 'Tech Industry · Odisha',
    shape: 'diamonds',
    accent1: '#4c1d95',
    accent2: '#7c3aed',
  },
  {
    filename: 'automation-it-blog.png',
    title: 'Role of Automation\nin Modern IT\nSolutions.',
    subtitle: 'Automation & AI',
    shape: 'circles',
    accent1: '#3b0764',
    accent2: '#6d28d9',
  },
  {
    filename: 'website-speed-sales-blog.png',
    title: 'How Fast Websites\nIncrease\nSales.',
    subtitle: 'Performance & Growth',
    shape: 'cylinders',
    accent1: '#581c87',
    accent2: '#9333ea',
  },
];

// ─── helpers ────────────────────────────────────────────────────────────────

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

function lerpColor(hex1, hex2, t) {
  const c1 = hexToRgb(hex1);
  const c2 = hexToRgb(hex2);
  const r = Math.round(c1.r + (c2.r - c1.r) * t);
  const g = Math.round(c1.g + (c2.g - c1.g) * t);
  const b = Math.round(c1.b + (c2.b - c1.b) * t);
  return `rgb(${r},${g},${b})`;
}

/** Draw a 3D-looking sphere with radial gradient */
function drawSphere(ctx, cx, cy, radius, accent1, accent2, alpha = 1) {
  const { r: r1, g: g1, b: b1 } = hexToRgb(accent2);
  const { r: r2, g: g2, b: b2 } = hexToRgb(accent1);

  const grad = ctx.createRadialGradient(
    cx - radius * 0.3, cy - radius * 0.3, radius * 0.05,
    cx, cy, radius
  );
  grad.addColorStop(0, `rgba(220,200,255,${alpha * 0.95})`);
  grad.addColorStop(0.25, `rgba(${r1},${g1},${b1},${alpha * 0.9})`);
  grad.addColorStop(0.7, `rgba(${r2},${g2},${b2},${alpha * 0.85})`);
  grad.addColorStop(1, `rgba(10,0,20,${alpha * 0.9})`);

  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = grad;
  ctx.fill();

  // specular highlight
  const spec = ctx.createRadialGradient(
    cx - radius * 0.35, cy - radius * 0.35, 0,
    cx - radius * 0.35, cy - radius * 0.35, radius * 0.45
  );
  spec.addColorStop(0, `rgba(255,255,255,${alpha * 0.45})`);
  spec.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fillStyle = spec;
  ctx.fill();
}

/** Draw a 3D-looking diamond (rotated square) */
function drawDiamond(ctx, cx, cy, size, accent1, accent2, alpha = 1) {
  const { r: r1, g: g1, b: b1 } = hexToRgb(accent2);
  const { r: r2, g: g2, b: b2 } = hexToRgb(accent1);

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(Math.PI / 4);

  const grad = ctx.createLinearGradient(-size, -size, size, size);
  grad.addColorStop(0, `rgba(220,200,255,${alpha * 0.95})`);
  grad.addColorStop(0.3, `rgba(${r1},${g1},${b1},${alpha * 0.9})`);
  grad.addColorStop(0.7, `rgba(${r2},${g2},${b2},${alpha * 0.85})`);
  grad.addColorStop(1, `rgba(10,0,20,${alpha * 0.9})`);

  ctx.beginPath();
  ctx.rect(-size / 2, -size / 2, size, size);
  ctx.fillStyle = grad;
  ctx.fill();

  // edge highlight
  ctx.strokeStyle = `rgba(200,180,255,${alpha * 0.4})`;
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // specular
  const spec = ctx.createRadialGradient(-size * 0.15, -size * 0.15, 0, 0, 0, size * 0.5);
  spec.addColorStop(0, `rgba(255,255,255,${alpha * 0.5})`);
  spec.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.beginPath();
  ctx.rect(-size / 2, -size / 2, size, size);
  ctx.fillStyle = spec;
  ctx.fill();

  ctx.restore();
}

/** Draw a 3D-looking cylinder (pill shape) */
function drawCylinder(ctx, cx, cy, w, h, accent1, accent2, alpha = 1) {
  const { r: r1, g: g1, b: b1 } = hexToRgb(accent2);
  const { r: r2, g: g2, b: b2 } = hexToRgb(accent1);
  const r = w / 2;

  const grad = ctx.createLinearGradient(cx - r, cy, cx + r, cy);
  grad.addColorStop(0, `rgba(10,0,20,${alpha * 0.9})`);
  grad.addColorStop(0.2, `rgba(${r2},${g2},${b2},${alpha * 0.85})`);
  grad.addColorStop(0.5, `rgba(220,200,255,${alpha * 0.9})`);
  grad.addColorStop(0.8, `rgba(${r1},${g1},${b1},${alpha * 0.85})`);
  grad.addColorStop(1, `rgba(10,0,20,${alpha * 0.9})`);

  // pill shape
  ctx.beginPath();
  ctx.moveTo(cx - r + r, cy - h / 2);
  ctx.lineTo(cx + r - r, cy - h / 2);
  ctx.quadraticCurveTo(cx + r, cy - h / 2, cx + r, cy - h / 2 + r);
  ctx.lineTo(cx + r, cy + h / 2 - r);
  ctx.quadraticCurveTo(cx + r, cy + h / 2, cx + r - r, cy + h / 2);
  ctx.lineTo(cx - r + r, cy + h / 2);
  ctx.quadraticCurveTo(cx - r, cy + h / 2, cx - r, cy + h / 2 - r);
  ctx.lineTo(cx - r, cy - h / 2 + r);
  ctx.quadraticCurveTo(cx - r, cy - h / 2, cx - r + r, cy - h / 2);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();

  // specular strip
  const spec = ctx.createLinearGradient(cx - r * 0.3, cy, cx + r * 0.1, cy);
  spec.addColorStop(0, `rgba(255,255,255,${alpha * 0.35})`);
  spec.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.beginPath();
  ctx.moveTo(cx - r + r, cy - h / 2);
  ctx.lineTo(cx + r - r, cy - h / 2);
  ctx.quadraticCurveTo(cx + r, cy - h / 2, cx + r, cy - h / 2 + r);
  ctx.lineTo(cx + r, cy + h / 2 - r);
  ctx.quadraticCurveTo(cx + r, cy + h / 2, cx + r - r, cy + h / 2);
  ctx.lineTo(cx - r + r, cy + h / 2);
  ctx.quadraticCurveTo(cx - r, cy + h / 2, cx - r, cy + h / 2 - r);
  ctx.lineTo(cx - r, cy - h / 2 + r);
  ctx.quadraticCurveTo(cx - r, cy - h / 2, cx - r + r, cy - h / 2);
  ctx.closePath();
  ctx.fillStyle = spec;
  ctx.fill();
}

// ─── main draw ───────────────────────────────────────────────────────────────

function generate({ filename, title, subtitle, shape, accent1, accent2 }) {
  const canvas = createCanvas(W, H);
  const ctx = canvas.getContext('2d');
  const { r: a1r, g: a1g, b: a1b } = hexToRgb(accent1);
  const { r: a2r, g: a2g, b: a2b } = hexToRgb(accent2);

  // ── Background ──
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#0d0020');
  bg.addColorStop(0.5, '#110028');
  bg.addColorStop(1, '#0a0018');
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, W, H);

  // subtle noise-like vignette
  const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.2, W / 2, H / 2, H * 0.85);
  vig.addColorStop(0, 'rgba(0,0,0,0)');
  vig.addColorStop(1, 'rgba(0,0,0,0.55)');
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, W, H);

  // ── Right-side shapes cluster ──
  const shapeX = W * 0.68;
  const shapeY = H * 0.5;

  if (shape === 'circles') {
    // 2x2 grid of spheres like the reference image
    const positions = [
      { x: shapeX - 110, y: shapeY - 110, r: 95 },
      { x: shapeX + 110, y: shapeY - 110, r: 95 },
      { x: shapeX - 110, y: shapeY + 110, r: 95 },
      { x: shapeX + 110, y: shapeY + 110, r: 95 },
    ];
    positions.forEach(({ x, y, r }) => drawSphere(ctx, x, y, r, accent1, accent2));

    // small floating spheres
    drawSphere(ctx, shapeX + 260, shapeY - 200, 35, accent1, accent2, 0.7);
    drawSphere(ctx, shapeX - 240, shapeY + 220, 28, accent1, accent2, 0.5);

  } else if (shape === 'diamonds') {
    // scattered diamonds
    const dPositions = [
      { x: shapeX + 80,  y: shapeY - 160, s: 110 },
      { x: shapeX - 80,  y: shapeY + 60,  s: 130 },
      { x: shapeX + 220, y: shapeY + 80,  s: 80  },
      { x: shapeX - 10,  y: shapeY - 20,  s: 90  },
    ];
    dPositions.forEach(({ x, y, s }) => drawDiamond(ctx, x, y, s, accent1, accent2));

    // tiny accent diamonds
    drawDiamond(ctx, shapeX + 300, shapeY - 220, 40, accent1, accent2, 0.6);
    drawDiamond(ctx, shapeX - 220, shapeY + 200, 35, accent1, accent2, 0.5);
    drawDiamond(ctx, shapeX + 150, shapeY + 220, 30, accent1, accent2, 0.55);

  } else if (shape === 'cylinders') {
    // diagonal cylinders like the reference
    const cylinders = [
      { cx: shapeX + 60,  cy: shapeY - 80,  w: 80, h: 280, angle: -0.4 },
      { cx: shapeX + 180, cy: shapeY + 20,  w: 80, h: 280, angle: -0.4 },
      { cx: shapeX - 60,  cy: shapeY + 60,  w: 80, h: 280, angle: -0.4 },
      { cx: shapeX + 300, cy: shapeY - 40,  w: 80, h: 280, angle: -0.4 },
    ];
    cylinders.forEach(({ cx, cy, w, h, angle }) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(angle);
      drawCylinder(ctx, 0, 0, w, h, accent1, accent2);
      ctx.restore();
    });
  }

  // ── Soft glow behind shapes ──
  const shapeGlow = ctx.createRadialGradient(shapeX, shapeY, 0, shapeX, shapeY, 320);
  shapeGlow.addColorStop(0, `rgba(${a2r},${a2g},${a2b},0.2)`);
  shapeGlow.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = shapeGlow;
  ctx.fillRect(0, 0, W, H);

  // ── Left text area subtle glow ──
  const textGlow = ctx.createRadialGradient(200, H / 2, 0, 200, H / 2, 350);
  textGlow.addColorStop(0, `rgba(${a1r},${a1g},${a1b},0.12)`);
  textGlow.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = textGlow;
  ctx.fillRect(0, 0, W, H);

  // ── Subtitle label ──
  ctx.font = '500 20px sans-serif';
  ctx.fillStyle = `rgba(${a2r},${a2g},${a2b},0.9)`;
  ctx.textAlign = 'left';
  ctx.textBaseline = 'alphabetic';
  ctx.fillText(subtitle, 80, 120);

  // ── Main title — bold, large, white ──
  const lines = title.split('\n');
  const titleFontSize = 82;
  ctx.font = `bold ${titleFontSize}px sans-serif`;
  ctx.fillStyle = '#ffffff';

  const lineHeight = titleFontSize * 1.15;
  const totalTextH = lines.length * lineHeight;
  const startY = (H - totalTextH) / 2 + titleFontSize * 0.4;

  lines.forEach((line, i) => {
    // last word gets accent color (like reference image period)
    if (i === lines.length - 1) {
      // draw all but last char in white, last char (period) in accent
      const mainPart = line.slice(0, -1);
      const lastChar = line.slice(-1);
      ctx.fillStyle = '#ffffff';
      ctx.fillText(mainPart, 80, startY + i * lineHeight);
      const mainW = ctx.measureText(mainPart).width;
      ctx.fillStyle = `rgba(${a2r},${a2g},${a2b},1)`;
      ctx.fillText(lastChar, 80 + mainW, startY + i * lineHeight);
    } else {
      ctx.fillStyle = '#ffffff';
      ctx.fillText(line, 80, startY + i * lineHeight);
    }
  });

  // ── Small descriptor text below title ──
  ctx.font = '16px sans-serif';
  ctx.fillStyle = 'rgba(180,160,210,0.7)';
  ctx.fillText('vanurtech.com · Blog & Insights', 80, startY + lines.length * lineHeight + 28);

  // ── Save ──
  const buffer = canvas.toBuffer('image/png');
  writeFileSync(join(OUTPUT_DIR, filename), buffer);
  console.log(`✅  ${filename}`);
}

console.log('\n🎨  Generating thumbnails...\n');
blogs.forEach(generate);
console.log('\n✨  Done!\n');
