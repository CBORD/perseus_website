export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Website Foundation",
    url: "https://example.com",
    logo: "https://example.com/logo.png"
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Website Foundation",
    url: "https://example.com"
  };
}
