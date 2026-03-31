import { useEffect } from "react";

export default function SiteSettings() {
  useEffect(() => {
    fetch("https://api.hamzadaniyal.com/wp-json")
      .then(res => res.json())
      .then(data => {
        document.title = `${data.name} | ${data.description}`;
        const link = document.querySelector("link[rel~='icon']");
        if (link) link.href = data.site_icon_url;
      });
  }, []);
}