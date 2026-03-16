import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import AccessibilityWidget from "@/components/utils/accesibility-widget";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/sonner";
import { Socials } from "@/components/utils/socials";
import { CartSheet } from "@/components/pages/merchandise/cart-sheet";
import { RaiseModal } from "@/components/utils/raise.modal";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"], // Choose the weights you need
  subsets: ["latin"], // Add any other subset you need
});

export const metadata = {
  title: {
    default:
      "Ocean Nurture Network | Coastal Conservation & Community Empowerment",
    template:
      "%s - Ocean Nurture Network | Coastal Conservation & Community Empowerment",
  },
  description:
    "Join the Ocean Nurture Network in protecting our oceans, restoring marine ecosystems, and empowering coastal communities through climate resilience, sustainable livelihoods, and youth leadership.",
  openGraph: {
    title:
      "Ocean Nurture Network | Coastal Conservation & Community Empowerment",
    description:
      "Join the Ocean Nurture Network in protecting our oceans, restoring marine ecosystems, and empowering coastal communities through climate resilience, sustainable livelihoods, and youth leadership.",
    url: "https://www.oceannurturenetwork.org",
    siteName: "Ocean Nurture Network",
    // images: [
    //   {
    //     url: "https://www.oceannurturenetwork.org/opengraph-image.png", // Replace with your actual image
    //     width: 1200,
    //     height: 630,
    //     alt: "Ocean Nurture Network Hero Image",
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ocean Nurture Network",
    description:
      "Protecting oceans and empowering communities through restoration, education, and sustainable development.",
    // images: ["https://www.oceannurturenetwork.org/opengraph-image.png"], // Same as OG or separate
    site: "@OceanNurture", // Replace with actual handle if available
  },
};

export const fetchCache = "force-no-store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex flex-col min-h-[100vh] w-full antialiased`}
      >
        <Suspense>
          <Nav />
          <AccessibilityWidget />
          <CartSheet />
          <main className="flex-1">{children}</main>
          <Footer />
          <Socials />
          <Toaster richColors />
          <RaiseModal />
        </Suspense>
      </body>
    </html>
  );
}
