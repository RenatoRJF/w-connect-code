import express from "express";
import cors from "cors";

import { MenuListProps } from "../interfaces/MenuList.interface";

const PORT = 4000;
const app = express();

app.use(cors());

export const menuMockData: Array<MenuListProps> = [
  {
    slug: "we-conect",
    title: "We-Conect Home page",
    url: "https://www.we-conect.com/",
    children: [
      {
        slug: "live-events",
        title: "Live Event",
        url: "https://www.we-conect.com/liveevents",
      },
      {
        slug: "digital-managed-events",
        title: "Digital Managed Events",
        url: "https://www.we-conect.com/digital-managed-events",
      },
    ],
  },
  {
    slug: "new-york-times",
    title: "New York Times",
    url: "https://www.nytimes.com/",
  },
];

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (_, res) => res.send("Api running successfully."));

app.get("/api/v1/menu", (_, res) => res.json(menuMockData));
