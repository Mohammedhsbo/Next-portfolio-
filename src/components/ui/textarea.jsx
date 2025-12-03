import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
       "bg-gray-950 placeholder:text-muted-foreground0 border-0 focus:border-2 focus:border-green-400 focus-visible:ring-green-400/50 dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md px-3 py-2 text-base shadow-xs transition-[color,box-shadow,border] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
       className
      )}
      {...props} />
  );
}

export { Textarea }
