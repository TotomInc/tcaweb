export function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className={`pointer-events-none absolute -inset-[10px] [background-image:var(--white-aurora-background-gradient),var(--aurora-background-gradient)] [mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] opacity-50 blur-[10px] invert filter will-change-transform after:absolute after:inset-0 after:animate-aurora-background after:[background-image:var(--white-aurora-background-gradient),var(--aurora-background-gradient)] after:[background-size:200%,_100%] after:[background-attachment:fixed] after:mix-blend-difference after:content-[""]`}
      />
    </div>
  );
}
