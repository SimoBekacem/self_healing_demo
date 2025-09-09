import * as Sentry from "@sentry/react";
function ErrorButton() {
  return (
    <button
      onClick={() => {
        // Error removed
      }}
    >
      Break the world
    </button>
  );
}

export default ErrorButton;
