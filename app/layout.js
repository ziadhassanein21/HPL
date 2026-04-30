import { SpeedInsights } from "@vercel/speed-insights/next";
import './globals.css';

export const metadata = {
  title: 'HPL Solutions',
  description: 'Premium HPL phenolic partition, locker and wet-area systems across Saudi Arabia.',
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const storedTheme = localStorage.getItem('theme');
                  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const resolvedTheme = storedTheme === 'light' || storedTheme === 'dark'
                    ? storedTheme
                    : (systemDark ? 'dark' : 'light');
                  document.documentElement.dataset.theme = resolvedTheme;
                  document.documentElement.style.colorScheme = resolvedTheme;
                } catch (error) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
