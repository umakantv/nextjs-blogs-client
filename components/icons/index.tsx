export function VerifiedIcon() {
  return (
    <span style={{ color: "green" }} className="material-symbols-outlined">
      check_circle
    </span>
  );
}

export function ErrorIcon() {
  return (
    <span style={{ color: "red" }} className="material-symbols-outlined">
      error
    </span>
  );
}

export function UnavailableIcon() {
  return (
    <span style={{ color: "red" }} className="material-symbols-outlined">
      cancel
    </span>
  );
}

export function Hide(props) {
  return (
    <span className="material-symbols-outlined" {...props}>
      visibility_off
    </span>
  );
}

export function View(props) {
  return (
    <span className="material-symbols-outlined" {...props}>
      visibility
    </span>
  );
}

export default function Icon({ name, ...props }) {
  return (
    <span className="material-symbols-outlined" {...props}>
      {name}
    </span>
  );
}
