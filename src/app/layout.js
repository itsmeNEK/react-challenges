import Navbar from "@/components/navbar"
export const metadata = {
  title: "React Challenges",
  description: "Bill Zhedrick A. Gaspar",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
