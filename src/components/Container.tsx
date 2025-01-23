import { cn } from "@/lib/utils";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

const Container = ({className, children, ...props}: React.ComponentProps<'div'>) => {
    return (
        <div {...props} className={cn(`max-w-5xl mx-auto px-5 ${inter.className}`, className)}>
            {children}
        </div>
    )
}

export default Container;