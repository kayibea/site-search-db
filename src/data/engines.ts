export type Engine = (typeof engines)[number];

export const engines = [
  {
    name: "DuckDuckGo",
    uri: "https://duckduckgo.com/?q=",
  },
  {
    name: "Google",
    uri: "https://www.google.com/search?q=",
  },
  {
    name: "Brave",
    uri: "https://search.brave.com/search?q=",
  },
  {
    name: "Startpage",
    uri: "https://www.startpage.com/sp/search?query=",
  },
  {
    name: "Qwant",
    uri: "https://www.qwant.com/?q=",
  },
  {
    name: "Ecosia",
    uri: "https://www.ecosia.org/search?q=",
  },
  {
    name: "Bing",
    uri: "https://www.bing.com/search?q=",
  },
  {
    name: "Yahoo",
    uri: "https://search.yahoo.com/search?p=",
  },
  {
    name: "Swisscows",
    uri: "https://swisscows.com/en/web?query=",
  },
  {
    name: "Mojeek",
    uri: "https://www.mojeek.com/search?q=",
  },
] as const;
