import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30  field-sizing-content min-h-16 w-full rounded-xl border-2 bg-transparent pb-12 pt-2 px-5  shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[2px] disabled:cursor-not-allowed disabled:opacity-50 md:text-xl mb-2 outline-0 placeholder:font-medium placeholder:text-gray-500 block text-base",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
