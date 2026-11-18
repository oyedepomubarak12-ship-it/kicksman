
import { Loader2, ArrowRight } from "lucide-react";

export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  loading = false,
  disabled = false,
  icon = false,
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`custom-button button-${variant} button-${size} ${className}`}
      {...props}
    >
      {loading ? (
        <>
          <Loader2 className="button-spinner" size={18} />
          Please wait...
        </>
      ) : (
        <>
          {children}
          {icon && <ArrowRight size={18} />}
        </>
      )}
    </button>
  );
}
