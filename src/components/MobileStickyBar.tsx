const MobileStickyBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:hidden border-t border-border"
    style={{ background: "hsl(240 10% 4% / 0.95)", backdropFilter: "blur(12px)" }}>
  <a
  href="#register"
  className="btn-cta w-full text-center text-sm py-3"
>
  Register for FREE →
</a>
  </div>
);

export default MobileStickyBar;
