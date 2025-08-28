var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// channels.js
var channels = {
  "Pro TV HD": { post_id: "1357", url: "pro-tv-hd-8", category: "Generaliste" },
  "Kanal D HD": { post_id: "1376", url: "kanal-d-ro-3", category: "Generaliste" },
  "Prima TV HD": { post_id: "1361", url: "prima-tv-hd", category: "Generaliste" },
  "DigiSport 1 HD": {
    post_id: "1795",
    url: "digisport",
    category: "Sport"
  },
  "DigiSport 2 HD": {
    post_id: "1409",
    url: "digisport-2-hd-ro3",
    category: "Sport"
  },
  "DigiSport 3 HD": {
    post_id: "1408",
    url: "digisport-3-hd-ro3",
    category: "Sport"
  },
  "DigiSport 4 HD": {
    post_id: "1407",
    url: "digisport-4-hd-ro3",
    category: "Sport"
  },
  "PrimaSport 1 HD": {
    post_id: "1406",
    url: "primasport-1hd-ro2",
    category: "Sport"
  },
  "PrimaSport 2 HD": {
    post_id: "1405",
    url: "primasport-2-hd-ro1",
    category: "Sport"
  },
  "PrimaSport 3 HD": {
    post_id: "1401",
    url: "primasport-3-hd-ro1",
    category: "Sport"
  },
  "PrimaSport 4 HD": { post_id: "1871", url: "primasport-4-hd", category: "Sport" },
  "PrimaSport 5 HD": { post_id: "1873", url: "primasport-5-hd", category: "Sport" },
  "PrimaSport PPV1": { post_id: "1917", url: "primasport-ppv1", category: "Sport" },
  "PrimaSport PPV2": { post_id: "1921", url: "primasport-ppv2", category: "Sport" },
  "PrimaSport PPV3": { post_id: "1922", url: "primasport-ppv3", category: "Sport" },
  "TVR Sport HD": {
    post_id: "1778",
    url: "tvr-sport",
    category: "Sport"
  },
  "Eurosport 1 HD": { post_id: "1399", url: "eurosport-1-hd-c1", category: "Sport" },
  "Eurosport 2 HD": { post_id: "1340", url: "eurosport-2-hd-1", category: "Sport" },
  "SportExtra HD": { post_id: "1400", url: "sportextra-hd", category: "Sport" },
  "Agro TV": { post_id: "1561", url: "agro-tv", category: "Documentare" },
  "BBC Earth": { post_id: "1558", url: "bbc-earth", category: "Documentare" },
  "Crime & Investigation": {
    post_id: "1899",
    url: "crime-investigation",
    category: "Documentare"
  },
  "DaVinci": { post_id: "1763", url: "davinci", category: "Documentare" },
  "Digi Animal World": {
    post_id: "1547",
    url: "digi-animal-world",
    category: "Documentare"
  },
  "Digi Life": { post_id: "1544", url: "digi-life-ro1", category: "Documentare" },
  "Digi World": { post_id: "1552", url: "digi-world", category: "Documentare" },
  "Discovery Channel": {
    post_id: "1553",
    url: "discovery-channel",
    category: "Documentare"
  },
  "Fishing and Hunting": {
    post_id: "1551",
    url: "fishing-and-hunting",
    category: "Documentare"
  },
  "Food Network HD": { post_id: "1925", url: "food-network-hd", category: "Documentare" },
  "HGTV": { post_id: "1759", url: "hgtv", category: "Documentare" },
  "History Channel": { post_id: "1557", url: "history-channel", category: "Documentare" },
  "ID Investigation": {
    post_id: "1897",
    url: "id-investigation",
    category: "Documentare"
  },
  "National Geographic": {
    post_id: "1545",
    url: "national-geographic",
    category: "Documentare"
  },
  "National Geographic Wild HD": { post_id: "1549", url: "national-geographic-wild", category: "Documentare" },
  "National Geographic People": { post_id: "1894", url: "national-geographic-people", category: "Documentare" },
  "TLC": { post_id: "1317", url: "tlc", category: "Documentare" },
  "Travel Mix": { post_id: "1555", url: "travel-mix", category: "Documentare" },
  "Viasat Explore HD": { post_id: "1319", url: "viasat-explore", category: "Documentare" },
  "Viasat History HD": { post_id: "1550", url: "viasat-history", category: "Documentare" },
  "Viasat Nature HD": { post_id: "1546", url: "viasat-nature", category: "Documentare" },
  "AMC HD": { post_id: "1301", url: "amc", category: "Filme" },
  "AXN HD": { post_id: "1560", url: "axn", category: "Filme" },
  "AXN White": { post_id: "1811", url: "axn-white", category: "Filme" },
  "AXN Black": { post_id: "1807", url: "axn-black", category: "Filme" },
  "AXN Spin": { post_id: "1809", url: "axn-spin", category: "Filme" },
  "BBC First HD": { post_id: "1835", url: "bbc-first-hd", category: "Filme" },
  "BollywooD TV": { post_id: "1332", url: "bollywood-tv", category: "Filme" },
  "Bollywood Clasic HD": {
    post_id: "1838",
    url: "bollywood-clasic-hd",
    category: "Filme"
  },
  "CBS Reality": {
    post_id: "1761",
    url: "cbs-reality",
    category: "Filme"
  },
  "Cinemaraton HD": { post_id: "1333", url: "cinemaraton-hd", category: "Filme" },
  "Cinemax HD": { post_id: "1451", url: "cinemax-hd", category: "Filme" },
  "Cinemax 2 HD": {
    post_id: "1450",
    url: "cinemax-2",
    category: "Filme"
  },
  "Comedy Central": { post_id: "1447", url: "comedy-central", category: "Filme" },
  "DIVA": { post_id: "1334", url: "diva", category: "Filme" },
  "E Entertainment": { post_id: "1554", url: "e-entertainment", category: "Filme" },
  "EpicDrama": { post_id: "1448", url: "epicdrama", category: "Filme" },
  "Fashion TV": { post_id: "1556", url: "fashion-tv", category: "Filme" },
  "Film Cafe": { post_id: "1306", url: "film-cafe", category: "Filme" },
  "Film Now HD": {
    post_id: "1449",
    url: "film-now-ro1",
    category: "Filme"
  },
  "FilmBox Premium": { post_id: "1824", url: "filmbox-premium", category: "Filme" },
  "FilmBox": { post_id: "1828", url: "filmbox", category: "Filme" },
  "HBO HD": { post_id: "1454", url: "hbo-hd-1", category: "Filme" },
  "HBO 2 HD": { post_id: "1453", url: "hbo-2-hd", category: "Filme" },
  "HBO 3 HD": { post_id: "1452", url: "hbo-3-hd", category: "Filme" },
  "Prima Comedy": { post_id: "1314", url: "prima-comedy", category: "Filme" },
  "PRO Cinema": {
    post_id: "1335",
    url: "pro-cinema-1",
    category: "Filme"
  },
  "SkyShowTime 1 HD": { post_id: "1792", url: "skyshowtime-hd", category: "Filme" },
  "SkyShowTime 2 HD": {
    post_id: "1839",
    url: "skyshowtime-2-hd",
    category: "Filme"
  },
  "TV 1000": { post_id: "1817", url: "tv-1000", category: "Filme" },
  "TV Paprika": { post_id: "1765", url: "tv-paprika", category: "Filme" },
  "Warner TV": { post_id: "1320", url: "warner-tv", category: "Filme" },
  "Acasa Gold HD": { post_id: "1383", url: "acasa-gold", category: "Generaliste" },
  "Acasa TV HD": { post_id: "1384", url: "acasa-tv-hd", category: "Generaliste" },
  "Antena 3 HD": { post_id: "1425", url: "antena-3-hd", category: "Generaliste" },
  "Antena Stars HD": { post_id: "1385", url: "antena-stars", category: "Generaliste" },
  "B1TV HD": { post_id: "1420", url: "b1tv", category: "Generaliste" },
  "Happy Channel HD": { post_id: "1381", url: "happy-channel", category: "Generaliste" },
  "KANAL D2 HD": { post_id: "1321", url: "kanald2-1", category: "Generaliste" },
  "Metropola TV": { post_id: "1378", url: "metropola-tv", category: "Generaliste" },
  "Antena 1 HD": { post_id: "1359", url: "antena-1-22", category: "Generaliste" },
  "National Plus 24": {
    post_id: "1336",
    url: "national-plus-24",
    category: "Generaliste"
  },
  "National TV": { post_id: "1382", url: "national-tv", category: "Generaliste" },
  "Pro Arena HD": { post_id: "1386", url: "pro-arena-hd-2", category: "Generaliste" },
  "TV Favorit": { post_id: "1505", url: "tv-favorit", category: "Generaliste" },
  "TV Moldova": { post_id: "1559", url: "tv-moldova", category: "Generaliste" },
  "TVR 1 HD": {
    post_id: "1377",
    url: "tvr-1-hd",
    category: "Generaliste"
  },
  "TVR 2 HD": {
    post_id: "1379",
    url: "tvr-2-hd",
    category: "Generaliste"
  },
  "TVR 3": { post_id: "1339", url: "tvr-3", category: "Generaliste" },
  "TVR Folclor HD": { post_id: "1789", url: "tvr-folclor-hd", category: "Generaliste" },
  "TVR International": {
    post_id: "1857",
    url: "tvr-intarnational",
    category: "Generaliste"
  },
  "Taraf TV HD": { post_id: "1504", url: "taraf-tv", category: "Generaliste" },
  "Traditional TV": { post_id: "1318", url: "traditional-tv", category: "Generaliste" },
  "U TV": { post_id: "1501", url: "u-tv", category: "Generaliste" },
  "ZU TV": { post_id: "1500", url: "zu-tv", category: "Generaliste" },
  "Atomic": { post_id: "1499", url: "atomic", category: "Muzica" },
  "Balcan Music TV": { post_id: "1502", url: "balcan-music-tv", category: "Muzica" },
  "EtnoTv HD": { post_id: "1503", url: "etnotv-hd", category: "Muzica" },
  "Hit Music Channel": {
    post_id: "1506",
    url: "hit-music-channel-2",
    category: "Muzica"
  },
  "Kiss TV": { post_id: "1481", url: "kiss-tv", category: "Muzica" },
  "MTV": { post_id: "1323", url: "mtv", category: "Muzica" },
  "MTV 80`s": { post_id: "1322", url: "mtv-80s", category: "Muzica" },
  "Magic TV": { post_id: "1517", url: "magic-tv", category: "Muzica" },
  "Mezzo": { post_id: "1819", url: "mezzo-ro", category: "Muzica" },
  "Music Channel": { post_id: "1563", url: "music-channel", category: "Muzica" },
  "Party Mix": { post_id: "1313", url: "party-mix", category: "Muzica" },
  "Cartoonito": { post_id: "1470", url: "boomerang", category: "Copii" },
  "Cartoon Network": { post_id: "1476", url: "cartoon-network", category: "Copii" },
  "Disney Channel": { post_id: "1469", url: "disney-channel", category: "Copii" },
  "Disney Junior": { post_id: "1467", url: "disney-junior", category: "Copii" },
  "Duck TV": { post_id: "1477", url: "duck-tv", category: "Copii" },
  "Jim Jam": { post_id: "1475", url: "jim-jam", category: "Copii" },
  "Minimax": { post_id: "1478", url: "minimax", category: "Copii" },
  "Nick Jr.": { post_id: "1474", url: "nick-jr", category: "Copii" },
  "Nick Toons": { post_id: "1473", url: "nick-toons", category: "Copii" },
  "Nickelodeon": {
    post_id: "1479",
    url: "nickelodeon",
    category: "Copii"
  },
  "TeenNick": { post_id: "1480", url: "teennick", category: "Copii" },
  "Tralala": { post_id: "1457", url: "tralala", category: "Copii" },
  "Alfa Omega": {
    post_id: "1327",
    url: "alfa-omega",
    category: "Religie"
  },
  "Credo TV": { post_id: "1304", url: "credo-tv", category: "Religie" },
  "Speranta TV": { post_id: "1328", url: "speranta-tv", category: "Religie" },
  "Trinitas TV": { post_id: "1329", url: "trinitas-tv", category: "Religie" },
  "Digi24 HD": { post_id: "1422", url: "digi24-hd", category: "Stiri" },
  "Euronews Romania": {
    post_id: "1421",
    url: "euronews-romania",
    category: "Stiri"
  },
  "Prima News": { post_id: "1315", url: "prima-news", category: "Stiri" },
  "Realitatea TV HD": { post_id: "1424", url: "realitatea-tv", category: "Stiri" },
  "Romania TV HD": {
    post_id: "1423",
    url: "romania-tv",
    category: "Stiri"
  }
};

// worker.js
var ENDPOINTS = {
  rdsAjax: "https://rds.live/wp-admin/admin-ajax.php",
  embedder: "https://ivanturbinca.com/embed-video2.php"
};
var CACHE_TTL = 7200;
var EMBEDDER_TOKEN = "a1324504534e82593752d3ce669c24bf3eeb6fbce084315eec34d734481b3738";
var REQUEST_HEADERS = {
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)Chrome/91.0.4472.124Safari/537.36",
  "Referer": "https://rds.live/",
  "Accept": "application/json, text/javascript, */*; q=0.01",
  "Accept-Language": "en-US,en;q=0.9",
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  "X-Requested-With": "XMLHttpRequest",
  "Origin": "https://rds.live",
  "Sec-Fetch-Site": "same-origin",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Dest": "empty",
  "Connection": "keep-alive"
};
var worker_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname === "/playlist.m3u") {
      const playlist = await generatePlaylist(env);
      return new Response(playlist, {
        headers: {
          "Content-Type": "application/vnd.apple.mpegurl",
          "Cache-Control": "public, max-age=300",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
    if (url.pathname === "/status") {
      const status = await getSystemStatus(env);
      return new Response(JSON.stringify(status, null, 2), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    }
    if (url.pathname === "/refresh-status") {
      const idx = await env.RDS_CACHE.get("last_channel_index");
      return new Response(
        JSON.stringify({
          currentIndex: idx || "0",
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        }),
        { headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      `
      <h1>RDS Live Worker</h1>
      <ul>
        <li><b>Playlist</b>: <a href="/playlist.m3u">/playlist.m3u</a></li>
        <li><b>Status</b>: <a href="/status">/status</a></li>
      </ul>
      <p>Aggiornamento continuo: 8 canali ogni 2 minuti (rotativo)</p>
      `,
      { headers: { "Content-Type": "text/html" } }
    );
  },
  async scheduled(_event, env, ctx) {
    ctx.waitUntil(refreshNext8Channels(env));
  }
};
async function refreshNext8Channels(env) {
  const allChannels = Object.entries(channels);
  const total = allChannels.length;
  let startIndex = parseInt(await env.RDS_CACHE.get("last_channel_index") || "0");
  if (isNaN(startIndex)) startIndex = 0;
  const batch = allChannels.slice(startIndex, startIndex + 8);
  for (const [name, data] of batch) {
    try {
      await processSingleChannel(name, data, env);
    } catch (e) {
      console.error(`${name}: ${e}`);
    }
    await new Promise((r) => setTimeout(r, 750));
  }
  const newIndex = (startIndex + 8) % total;
  await env.RDS_CACHE.put("last_channel_index", newIndex.toString());
}
__name(refreshNext8Channels, "refreshNext8Channels");
async function processSingleChannel(name, data, env) {
  const tokenCacheKey = `token:${data.post_id}`;
  const formData = new URLSearchParams({
    action: "get_video_source",
    tab: "tab1",
    post_id: data.post_id
  });
  try {
    const res = await fetch(ENDPOINTS.rdsAjax, {
      method: "POST",
      headers: REQUEST_HEADERS,
      body: formData
    });
    if (!res.ok) throw new Error(`RDS AJAX HTTP ${res.status}`);
    const dataJson = await res.json();
    if (!dataJson.success || !dataJson.data || !dataJson.data.includes(".m3u8")) return null;
    const embedderUrl = `${ENDPOINTS.embedder}?source=${encodeURIComponent(
      dataJson.data
    )}&token=${EMBEDDER_TOKEN}&timestamp=${Math.floor(Date.now() / 1e3)}`;
    const embedRes = await fetch(embedderUrl, {
      headers: {
        "User-Agent": REQUEST_HEADERS["User-Agent"],
        "Referer": REQUEST_HEADERS["Referer"]
      }
    });
    const embedHtml = await embedRes.text();
    const srcMatch = embedHtml.match(/<source[^>]+src=["']([^"']*\.m3u8[^"']*)["']/i);
    const finalUrl = srcMatch && srcMatch[1] ? srcMatch[1] : dataJson.data;
    if (finalUrl && finalUrl.includes(".m3u8")) {
      await env.RDS_CACHE.put(tokenCacheKey, finalUrl, { expirationTtl: CACHE_TTL });
      await env.RDS_CACHE.put(`token_meta:${data.post_id}`, Date.now().toString(), { expirationTtl: CACHE_TTL });
      return finalUrl;
    }
    return null;
  } catch (e) {
    console.error(`Token ${name} errore:`, e.message);
    return null;
  }
}
__name(processSingleChannel, "processSingleChannel");
async function generatePlaylist(env) {
  let playlist = "#EXTM3U\n";
  playlist += `# Aggiornata: ${(/* @__PURE__ */ new Date()).toISOString()}

`;
  const entries = Object.entries(channels);
  for (const [name, data] of entries) {
    const url = await env.RDS_CACHE.get(`token:${data.post_id}`);
    if (url) {
      const channelId = name.toLowerCase().replace(/[^a-z0-9]/g, "");
      playlist += `#EXTINF:-1 tvg-id="${channelId}" tvg-name="${name}" group-title="${data.category}",${name}
${url}

`;
    }
  }
  return playlist;
}
__name(generatePlaylist, "generatePlaylist");
async function getSystemStatus(env) {
  const totalChannels = Object.keys(channels).length;
  const cacheList = await env.RDS_CACHE.list({ prefix: "token:" });
  const tokenCount = cacheList.keys.length;
  const idx = await env.RDS_CACHE.get("last_channel_index");
  return {
    active: true,
    totalChannels,
    cachedTokens: tokenCount,
    successRate: tokenCount && totalChannels ? `${Math.round(tokenCount / totalChannels * 100)}%` : "0%",
    refreshType: "8 canali ogni 2 minuti (rotativo)",
    last_channel_index: idx || "0",
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  };
}
__name(getSystemStatus, "getSystemStatus");
export {
  worker_default as default
};
//# sourceMappingURL=worker.js.map
//# sourceMappingURL=worker.js.map