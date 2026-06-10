/* SiteRápido logo — official horizontal lockup (mark + wordmark). */
export function Logo({ variant = 'dark' }: { variant?: 'dark' | 'white' }) {
  return (
    <img
      className="v2-logo-img"
      src={variant === 'white' ? '/logo-siterapido-light.png' : '/logo-siterapido.png'}
      alt="siterapido.me"
      width={184}
      height={26}
    />
  );
}
