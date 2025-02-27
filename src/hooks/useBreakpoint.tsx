"use client"

import { useEffect, useState } from "react"
import useWindow from "./useWindow"

export default function useBreakpoint() {

  const { width } = useWindow()

  const [breakpoint, setBreakpoint] = useState("sm")

  useEffect(() => {
    // breakpoint from chakra ui v3
    // @see https://www.chakra-ui.com/docs/theming/breakpoints

    if (width <= 768) {
      setBreakpoint("sm")
    }

    if (width <= 1024) {
      setBreakpoint("md")
    }

    if (width <= 1280) {
      setBreakpoint("lg")
    }

    if (width <= 1536) {
      setBreakpoint("xl")
    }

  }, [width])


  return breakpoint
}