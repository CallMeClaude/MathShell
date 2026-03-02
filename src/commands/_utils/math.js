// ── Math Engine ──────────────────────────────────────────────────────────────

export const factorial = n => {
  n = Math.round(n);
  if (n < 0) return NaN;
  if (n > 170) return Infinity;
  let r = 1; for (let i = 2; i <= n; i++) r *= i; return r;
};

export const nCr = (n, r) => {
  n = Math.round(n); r = Math.round(r);
  if (r < 0 || r > n) return 0;
  if (r === 0 || r === n) return 1;
  r = Math.min(r, n - r);
  let result = 1;
  for (let i = 0; i < r; i++) { result *= (n - i); result /= (i + 1); }
  return result;
};

export const nPr = (n, r) => {
  n = Math.round(n); r = Math.round(r);
  if (r < 0 || r > n) return 0;
  let result = 1;
  for (let i = 0; i < r; i++) result *= (n - i);
  return result;
};

export function mathEval(expr, degMode = false) {
  const d2r = degMode ? (x => x * Math.PI / 180) : (x => x);
  const r2d = degMode ? (x => x * 180 / Math.PI) : (x => x);
  const _sin  = x => Math.sin(d2r(x));
  const _cos  = x => Math.cos(d2r(x));
  const _tan  = x => Math.tan(d2r(x));
  const _asin = x => r2d(Math.asin(x));
  const _acos = x => r2d(Math.acos(x));
  const _atan = x => r2d(Math.atan(x));

  let p = expr.trim()
    .replace(/π/g,       "(Math.PI)").replace(/\bpi\b/gi, "(Math.PI)")
    .replace(/\bsinh\b/g,"Math.sinh").replace(/\bcosh\b/g,"Math.cosh")
    .replace(/\btanh\b/g,"Math.tanh")
    .replace(/\basin\b/g,"_asin").replace(/\bacos\b/g,"_acos").replace(/\batan\b/g,"_atan")
    .replace(/\bsin\b/g, "_sin").replace(/\bcos\b/g,"_cos").replace(/\btan\b/g,"_tan")
    .replace(/\bsqrt\b/g,"Math.sqrt").replace(/\bcbrt\b/g,"Math.cbrt")
    .replace(/\bfloor\b/g,"Math.floor").replace(/\bceil\b/g,"Math.ceil")
    .replace(/\babs\b/g, "Math.abs").replace(/\bround\b/g,"Math.round")
    .replace(/\bsign\b/g,"Math.sign").replace(/\bln\b/g,  "Math.log")
    .replace(/\blog2\b/g,"Math.log2").replace(/\blog\b/g, "Math.log10")
    .replace(/\bmax\b/g, "Math.max").replace(/\bmin\b/g,  "Math.min")
    .replace(/\bpow\b/g, "Math.pow").replace(/\bnCr\b/g,  "nCr")
    .replace(/\bnPr\b/g, "nPr");
  p = p.replace(/(?<![a-zA-Z\d_])e(?![a-zA-Z\d_])/g, "(Math.E)");
  p = p.replace(/(\d+(?:\.\d+)?)\s*!/g, "factorial($1)");
  p = p.replace(/\^/g, "**");
  return new Function("factorial","nCr","nPr","_sin","_cos","_tan","_asin","_acos","_atan",
    `"use strict"; return (${p});`)(factorial, nCr, nPr, _sin, _cos, _tan, _asin, _acos, _atan);
}

export function fmtNum(n) {
  if (n === Infinity)  return "∞";
  if (n === -Infinity) return "-∞";
  if (isNaN(n))        return "NaN";
  if (Math.abs(n) >= 1e15) return n.toExponential(8);
  if (Number.isInteger(n)) return String(n);
  return String(parseFloat(n.toPrecision(12)));
}
