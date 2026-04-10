export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (process.env.NODE_ENV !== "production") {
    return;
  }

  // Replace with your analytics provider event call.
  void { name, params };
}
