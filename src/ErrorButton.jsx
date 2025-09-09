import * as Sentry from "@sentry/react";
// Add this button component to your app to test Sentry's error tracking
function ErrorButton() {
  return (
    <button
      onClick={() => {
        // This line is now removed
      }}
    >
      Break the world
    </button>
  );
}

export default ErrorButton;