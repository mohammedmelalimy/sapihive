export default function Home() {
  return (
    <main className="sapihive-page">
      {/* Desktop Video */}
      <video
        className="sapihive-video sapihive-video--desktop"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="SapiHive Coming Soon"
      >
        <source src="/videos/sapihive-desktop.mp4" type="video/mp4" />
      </video>

      {/* Mobile Video */}
      <video
        className="sapihive-video sapihive-video--mobile"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-label="SapiHive Coming Soon"
      >
        <source src="/videos/sapihive-mobile.mp4" type="video/mp4" />
      </video>
    </main>
  );
}
