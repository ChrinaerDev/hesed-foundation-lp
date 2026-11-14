// Re-jouée à chaque navigation : transition douce entre les pages.
export default function Template({ children }) {
  return <div className="page-in">{children}</div>;
}
