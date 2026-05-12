export const Card = ({ children, className = "" }) => (
  <div className={`bg-surface-800 border border-surface-700 rounded-2xl ${className}`}>
    {children}
  </div>
);
