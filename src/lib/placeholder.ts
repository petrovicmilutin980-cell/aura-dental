export function generatePlaceholderSVG(label: string): string {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FAF9F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#F5F3EE;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#D4AF37;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#E8D48B;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="800" height="600" fill="url(#bg)"/>
  <circle cx="400" cy="240" r="60" fill="none" stroke="url(#gold)" stroke-width="2" opacity="0.3"/>
  <circle cx="400" cy="240" r="40" fill="none" stroke="url(#gold)" stroke-width="1.5" opacity="0.2"/>
  <path d="M320 240 Q360 180 400 200 Q440 180 480 240" fill="none" stroke="url(#gold)" stroke-width="2" opacity="0.4" stroke-linecap="round"/>
  <line x1="380" y1="220" x2="400" y2="240" stroke="url(#gold)" stroke-width="2" opacity="0.4" stroke-linecap="round"/>
  <line x1="420" y1="220" x2="400" y2="240" stroke="url(#gold)" stroke-width="2" opacity="0.4" stroke-linecap="round"/>
  <text x="400" y="340" font-family="Georgia, serif" font-size="20" fill="#D4AF37" text-anchor="middle" opacity="0.6">${escapeXml(label)}</text>
  <text x="400" y="370" font-family="system-ui, sans-serif" font-size="12" fill="#D4AF37" text-anchor="middle" opacity="0.3">AURA Dental Clinic</text>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}`;
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export const HERO_POSTER_SVG = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0B132B;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1a1f3a;stop-opacity:1" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="40%" r="50%">
      <stop offset="0%" style="stop-color:#D4AF37;stop-opacity:0.08" />
      <stop offset="100%" style="stop-color:#D4AF37;stop-opacity:0" />
    </radialGradient>
  </defs>
  <rect width="1920" height="1080" fill="url(#bg)"/>
  <rect width="1920" height="1080" fill="url(#glow)"/>
  <g opacity="0.03">
    <line x1="0" y1="0" x2="1920" y2="1080" stroke="#D4AF37" stroke-width="1"/>
    <line x1="100" y1="0" x2="1920" y2="980" stroke="#D4AF37" stroke-width="1"/>
    <line x1="200" y1="0" x2="1920" y2="880" stroke="#D4AF37" stroke-width="1"/>
    <line x1="0" y1="100" x2="1820" y2="1080" stroke="#D4AF37" stroke-width="1"/>
    <line x1="0" y1="200" x2="1720" y2="1080" stroke="#D4AF37" stroke-width="1"/>
  </g>
  <circle cx="960" cy="540" r="200" fill="none" stroke="#D4AF37" stroke-width="0.5" opacity="0.15"/>
  <circle cx="960" cy="540" r="150" fill="none" stroke="#D4AF37" stroke-width="0.5" opacity="0.1"/>
  <text x="960" y="520" font-family="Georgia, serif" font-size="32" fill="#D4AF37" text-anchor="middle" opacity="0.5">AURA Dental Clinic</text>
  <text x="960" y="560" font-family="system-ui, sans-serif" font-size="14" fill="#D4AF37" text-anchor="middle" opacity="0.3">Premium Stomatologija Beograd</text>
</svg>`)}`;
