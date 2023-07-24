import { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata :Metadata = {
    title:"dashboard",
    description:"Discover the Power of 30MinShop Dashboard - Your Central Hub for E-commerce Success! Seamlessly manage and grow your online store with our feature-rich and intuitive dashboard. Monitor real-time sales, track inventory, analyze customer data, and gain valuable insights to optimize your business strategy. Effortlessly create and update product listings, customize your store's design, and harness the potential of marketing tools to attract more customers. With 30MinShop Dashboard, streamline your e-commerce operations and make data-driven decisions, all in one convenient place. Experience the future of online retail management with 30MinShop Dashboard today!"
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
