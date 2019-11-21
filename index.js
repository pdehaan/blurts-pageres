#!/usr/bin/env node

"use strict";

const axios = require("axios");
const Pageres = require("pageres");

process.setMaxListeners(0);

const argv = process.argv.slice(2);

main(...argv)
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

async function main(server = "https://monitor.firefox.com", dest = "./shots", selector = "main#breach-detail div.flx-cntr") {
  const breaches = await getBreaches(server);
  for (const breach of breaches) {
    const href = new URL(`/breach-details/${breach.Name}`, server).href;
    await new Pageres({ delay: 0.1 })
      .src(
        href,
        ["600x800"],
        {
          crop: true,
          selector,
          filename: `${breach.Name}-<%= size %>`
        }
      )
      .dest(dest)
      .run();
  }
}

function getBreaches(server, count = Infinity) {
  const href = new URL("/hibp/breaches", server).href;
  console.log(`fetching ${href}`);
  return axios
    .get(href)
    .then(res => res.data.slice(0, count));
}
