import { Roboto_Mono } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";

const roboto = Roboto_Mono({ subsets: ['latin'] })
const source = Source_Code_Pro({ subsets: ['latin'] })

export default function RobotoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={source.className}>
      {children}
    </div>
  )
}