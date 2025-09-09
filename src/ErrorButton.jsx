import * as Sentry from "@sentry/react";
// Add this button component to your app to test Sentry's error tracking
function ErrorButton() {
  return (
    <button
      onClick={() => {
        // throw new Error("This is your first error!");
        console.log("Button clicked, no error thrown.");
      }}
    >
      Break the world
    </button>
  );
}

export default ErrorButton;
