import { useRef, useEffect } from "react"

const Hero = () => {
  const videoRef = useRef()

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate = 2
  }, [])

  const handleBuyClick = () => {
    window.open("https://www.apple.com/in/macbook-pro/", "_blank")
  }

  return (
    <section id="hero">
      <div>
        <h1 className="relative">
          Mac Book Pro
          <span className="absolute -top-2 -right-6 text-[10px] lg:text-xs opacity-70">2025</span>
        </h1>
        <img src="/title.png" alt="Mac Book Title" />
        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />
        <button onClick={handleBuyClick}>Buy</button>
        <p>From ₹169900</p>
      </div>
    </section>
  )
}

export default Hero
