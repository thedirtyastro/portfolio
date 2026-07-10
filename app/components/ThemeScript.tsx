/**
 * Injected as a blocking <script> in <head>.
 * Reads localStorage before first paint so there is zero
 * flash of the wrong theme (FOUT).
 */
export default function ThemeScript() {
  const script = `
    (function() {
      try {
        var stored = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = stored || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
      } catch(e) {}
    })();
  `;
  // dangerouslySetInnerHTML is intentional — this must run synchronously
  return (
    <script
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
