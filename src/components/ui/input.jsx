import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[48px] rounded-md border border-white/10 bg-gray-950 px-4 text-base placeholder:text-white/60 font-light outline-none transition-all duration-300 focus:border-green-400 focus:ring-1 focus:ring-green-400"
        
        
        ,className
      )}
      {...props} />
  );
}

export { Input }
