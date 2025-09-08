import { Inter } from "next/font/google";

import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import StaticLoadingScreen from "@/components/ui/StaticLoadingScreen";
import { LOGO, SITE_URL } from "@/lib/data";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="vi">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin=""
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <meta
          content="g-qYu8lTTExle2xgjSpnTJTZXtIMPmAnLJOyGhhpQlE"
          name="google-site-verification"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: SITE_URL,
            name: "Bất động sản - TP Hồ Chí Minh",
            logo: LOGO,
          })}
        </script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8RTNX8WCQX');
    `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" storageKey="my-profile-theme">
          <StaticLoadingScreen />
          <Header />
          <main className="max-w-7xl pt-24 mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
            {children}

            <FloatingContact />
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
