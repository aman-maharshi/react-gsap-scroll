import useMacbookStore from "../store"
import clsx from "clsx"
import { Canvas } from "@react-three/fiber"
import { useRef } from "react"
import { useProgress } from "@react-three/drei"

import StudioLights from "./three/StudioLights.jsx"
import ModelSwitcher from "./three/ModelSwitcher.jsx"
import NavigationControl from "./NavigationControl.jsx"
import { useMediaQuery } from "react-responsive"

const Product = () => {
  const { color, scale, setColor, setScale } = useMacbookStore()
  const modelSwitcherRef = useRef()
  const { progress, active } = useProgress()

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" })

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        {/*<p className="info">Macbook Pro | Available in 14" & 16" in Space Gray & Dark colors</p>*/}

        <div className="flex-center gap-3 sm:gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx("bg-neutral-300", color === "#adb5bd" && "active")}
            />
            <div
              onClick={() => setColor("#707070")}
              className={clsx("bg-neutral-600", color === "#707070" && "active")}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx("bg-neutral-900", color === "#2e2c2e" && "active")}
            />
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(scale === 0.06 ? "bg-white text-black" : "bg-transparent text-white")}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(scale === 0.08 ? "bg-white text-black" : "bg-transparent text-white")}
            >
              <p>16"</p>
            </div>
          </div>

          <NavigationControl modelSwitcherRef={modelSwitcherRef} />
        </div>
      </div>

      <div className="relative w-full">
        {active && (
          <div
            className="absolute inset-0 z-[45] flex flex-col items-center justify-center gap-2 bg-black/75 px-6"
            role="status"
            aria-live="polite"
            aria-busy="true"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-dark-100">Loading assets</p>
            <p className="text-4xl font-semibold tabular-nums text-white sm:text-5xl">
              {Math.round(Math.min(100, Math.max(0, progress)))}%
            </p>
          </div>
        )}

        <Canvas id="canvas" camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}>
          <StudioLights />

          <ModelSwitcher ref={modelSwitcherRef} scale={isMobile ? scale - 0.03 : scale} isMobile={isMobile} />
        </Canvas>
      </div>
    </section>
  )
}

export default Product
