"use strict";

/* ============================================================
   SPHINX MUSIC PLAYER — SCRIPT.JS
   Vanilla JavaScript | Local demo project

   CONTENTS
   01. Music library
   02. Artist discovery
   03. Helpers and storage
   04. Accounts
   05. Application state
   06. Navigation
   07. Song cards
   08. Discover artists
   09. Playlists
   10. Audio playback
   11. Queue
   12. Lyrics and video
   13. Profile and statistics
   14. Menus and modals
   15. Event listeners
   16. Initialization
============================================================ */




/* ============================================================
   01. MUSIC LIBRARY

   These are the 10 songs from your original project.

   IMPORTANT:
   The paths must match your actual folders and filenames.
============================================================ */

const SONGS = [
  {
    title: "All I Need to Hear",
    artist: "The 1975",
    audio: "MUSICS/The 1975 - All I Need To Hear (Lyrics).mp3",
    image: "PICTURES/1975.jpg",
    lrc: "LRC/1975.lrc",
    video: "MP4/The 1975 - All I Need To Hear in the Live Lounge.mp4"
  },
  {
    title: "Indecision",
    artist: "Rex Orange County, Daniel Caesar",
    audio: "MUSICS/Rex Orange County, Daniel Caesar - Indecision (Lyrics).mp3",
    image: "PICTURES/rex&daniel.jpg",
    lrc: "LRC/rex-daniel.lrc",
    video: "MP4/Rex Orange County feat. Daniel Caesar - Indecision (Official Video).mp4"
  },
  {
    title: "Fame Is a Gun",
    artist: "Addison Rae",
    audio: "MUSICS/Addison Rae - Fame is a Gun (Official Lyric Video).mp3",
    image: "PICTURES/addison.jpg",
    lrc: "LRC/addison.lrc",
    video: "MP4/Addison Rae - Fame is a Gun (Official Video).mp4"
  },
  {
    title: "Infrunami",
    artist: "Steve Lacy",
    audio: "MUSICS/Infrunami.mp3",
    image: "PICTURES/steve.jpg",
    lrc: "LRC/steve.lrc",
    video: ""
  },
  {
    title: "Training Wheels (Slowed)",
    artist: "Melanie Martinez",
    audio: "MUSICS/training wheels (slowed) - melanie martinez.mp3",
    image: "PICTURES/melanie.jpg",
    lrc: "LRC/melanie.lrc",
    video: "MP4/Melanie Martinez - Training Wheels.mp4"
  },
  {
    title: "Expectations",
    artist: "Olivia Rodrigo, Chappell Roan",
    audio: "MUSICS/Olivia Rodrigo, Chappell Roan - Expectations (Lyrics).mp3",
    image: "PICTURES/olivia.jpg",
    lrc: "LRC/olivia.lrc",
    video: "MP4/Olivia Rodrigo - expectations (feat. Chappell Roan) (Official Music Video).mp4"
  },
  {
    title: "Fragile",
    artist: "Laufey",
    audio: "MUSICS/@laufey - Fragile (Lyrics).mp3",
    image: "PICTURES/laufeyfragile.jpg",
    lrc: "LRC/Fragile.lrc",
    video: "MP4/Laufey - Fragile (Official Video).mp4"
  },
  {
    title: "Bags",
    artist: "Clairo",
    audio: "MUSICS/Clairo - Bags - Recorded At Electric Lady Studios.mp3",
    image: "PICTURES/bagsclairo.jpg",
    lrc: "LRC/clairo.lrc",
    video: "MP4/Clairo - Bags - Recorded At Electric Lady Studios.mp4"
  },
  {
    title: "The Perfect Pair",
    artist: "Beabadoobee",
    audio: "MUSICS/Beabadoobee - the perfect pair.mp3",
    image: "PICTURES/beabadoobee.jpg",
    lrc: "LRC/tppbeabadoobee.lrc",
    video: "MP4/Beabadoobee - the perfect pair (Official Live Video).mp4"
  },
  {
    title: "All Too Well (10 Minute Version)",
    artist: "Taylor Swift",
    audio: "MUSICS/All Too Well (10 Minute Version) (Taylor's Version) (From The Vault).mp3",
    image: "PICTURES/taylorswift.jpg",
    lrc: "LRC/atwtaylorswift.lrc",
    video: "VIDEOS/taylor.mp4"
  }
];




/* ============================================================
   02. ARTIST DISCOVERY

   The first 10 artist entries represent your music library.

   The second 10 are additional discovery suggestions.

   The information below is curated demo content, not live
   Spotify or streaming-platform statistics.

   Replace optional photo paths with your own local images.
============================================================ */

const ARTISTS = [
  {
    name: "The 1975",
    photo: "PICTURES/1975.jpg",
    genre: "Alternative Pop / Rock",
    country: "United Kingdom",
    bio: "The 1975 are an English band formed in Wilmslow. Their music blends alternative rock, synth-pop, electronic music, and contemporary pop.",
    albums: [
      "The 1975",
      "I Like It When You Sleep, for You Are So Beautiful Yet So Unaware of It",
      "A Brief Inquiry into Online Relationships",
      "Notes on a Conditional Form",
      "Being Funny in a Foreign Language"
    ],
    topSongs: [
      "About You",
      "Somebody Else",
      "Robbers",
      "Chocolate",
      "It's Not Living (If It's Not With You)"
    ]
  },
  {
    name: "Rex Orange County",
    photo: "PICTURES/rex&daniel.jpg",
    genre: "Indie Pop / Soul",
    country: "United Kingdom",
    bio: "Rex Orange County is an English singer-songwriter known for conversational lyrics and a blend of indie pop, jazz, and soul.",
    albums: [
      "bcos u will never b free",
      "Apricot Princess",
      "Pony",
      "WHO CARES?",
      "The Alexander Technique"
    ],
    topSongs: [
      "Best Friend",
      "Sunflower",
      "Loving Is Easy",
      "Pluto Projector",
      "Corduroy Dreams"
    ]
  },
  {
    name: "Daniel Caesar",
    photo: "PICTURES/rex&daniel.jpg",
    genre: "R&B / Soul",
    country: "Canada",
    bio: "Daniel Caesar is a Canadian singer-songwriter recognized for soulful vocals, emotional songwriting, and contemporary R&B.",
    albums: [
      "Freudian",
      "CASE STUDY 01",
      "NEVER ENOUGH"
    ],
    topSongs: [
      "Best Part",
      "Get You",
      "Japanese Denim",
      "Always",
      "Superpowers"
    ]
  },
  {
    name: "Addison Rae",
    photo: "PICTURES/addison.jpg",
    genre: "Pop",
    country: "United States",
    bio: "Addison Rae is an American singer and entertainer whose music draws from dance-pop and contemporary pop.",
    albums: [
      "AR (EP)",
      "Addison"
    ],
    topSongs: [
      "Diet Pepsi",
      "Aquamarine",
      "Fame Is a Gun",
      "Headphones On",
      "High Fashion"
    ]
  },
  {
    name: "Steve Lacy",
    photo: "PICTURES/steve.jpg",
    genre: "Alternative R&B / Funk",
    country: "United States",
    bio: "Steve Lacy is an American singer, songwriter, guitarist, and producer known for blending alternative R&B, funk, and indie rock.",
    albums: [
      "Steve Lacy's Demo",
      "Apollo XXI",
      "Gemini Rights"
    ],
    topSongs: [
      "Bad Habit",
      "Dark Red",
      "Infrunami",
      "Some",
      "Static"
    ]
  },
  {
    name: "Melanie Martinez",
    photo: "PICTURES/melanie.jpg",
    genre: "Alternative Pop",
    country: "United States",
    bio: "Melanie Martinez is an American singer-songwriter known for concept albums, theatrical imagery, and alternative pop storytelling.",
    albums: [
      "Cry Baby",
      "K-12",
      "PORTALS"
    ],
    topSongs: [
      "Play Date",
      "Dollhouse",
      "Pacify Her",
      "Training Wheels",
      "VOID"
    ]
  },
  {
    name: "Olivia Rodrigo",
    photo: "PICTURES/olivia.jpg",
    genre: "Pop Rock",
    country: "United States",
    bio: "Olivia Rodrigo is an American singer-songwriter known for emotional songwriting, pop-rock influences, and expressive vocals.",
    albums: [
      "SOUR",
      "GUTS",
      "GUTS (spilled)"
    ],
    topSongs: [
      "drivers license",
      "good 4 u",
      "vampire",
      "deja vu",
      "traitor"
    ]
  },
  {
    name: "Chappell Roan",
    photo: "PICTURES/olivia.jpg",
    genre: "Pop / Synth-pop",
    country: "United States",
    bio: "Chappell Roan is an American singer-songwriter known for theatrical performances, expressive pop music, and bold visual presentation.",
    albums: [
      "The Rise and Fall of a Midwest Princess"
    ],
    topSongs: [
      "Good Luck, Babe!",
      "HOT TO GO!",
      "Pink Pony Club",
      "Red Wine Supernova",
      "Casual"
    ]
  },
  {
    name: "Laufey",
    photo: "PICTURES/laufeyfragile.jpg",
    genre: "Jazz Pop",
    country: "Iceland",
    bio: "Laufey is an Icelandic singer-songwriter and multi-instrumentalist whose work combines jazz, classical music, and modern pop.",
    albums: [
      "Everything I Know About Love",
      "Bewitched",
      "A Matter of Time"
    ],
    topSongs: [
      "From The Start",
      "Valentine",
      "Let You Break My Heart Again",
      "Falling Behind",
      "Fragile"
    ]
  },
  {
    name: "Clairo",
    photo: "PICTURES/bagsclairo.jpg",
    genre: "Indie Pop",
    country: "United States",
    bio: "Clairo is an American singer-songwriter known for intimate vocals, understated production, and indie-pop songwriting.",
    albums: [
      "diary 001",
      "Immunity",
      "Sling",
      "Charm"
    ],
    topSongs: [
      "Bags",
      "Sofia",
      "Pretty Girl",
      "Juna",
      "Amoeba"
    ]
  },
  {
    name: "Beabadoobee",
    photo: "PICTURES/beabadoobee.jpg",
    genre: "Indie Rock",
    country: "United Kingdom",
    bio: "Beabadoobee is a Filipino-British singer-songwriter whose music draws from indie rock, alternative pop, and 1990s guitar music.",
    albums: [
      "Fake It Flowers",
      "Beatopia",
      "This Is How Tomorrow Moves"
    ],
    topSongs: [
      "the perfect pair",
      "Glue Song",
      "Coffee",
      "Apple Cider",
      "Take A Bite"
    ]
  },
  {
    name: "Taylor Swift",
    photo: "PICTURES/taylorswift.jpg",
    genre: "Pop / Singer-Songwriter",
    country: "United States",
    bio: "Taylor Swift is an American singer-songwriter known for narrative songwriting and music spanning country, pop, folk, and alternative styles.",
    albums: [
      "Fearless",
      "Red",
      "1989",
      "folklore",
      "evermore",
      "Midnights",
      "The Tortured Poets Department"
    ],
    topSongs: [
      "Cruel Summer",
      "Blank Space",
      "Anti-Hero",
      "All Too Well",
      "cardigan"
    ]
  },
  {
    name: "NewJeans",
    photo: "Pictures/NewJeans.jpg",
    genre: "K-pop / R&B",
    country: "South Korea",
    bio: "NewJeans are a South Korean girl group recognized for pop music influenced by R&B, dance, and nostalgic production.",
    albums: [
      "New Jeans",
      "OMG",
      "Get Up",
      "How Sweet"
    ],
    topSongs: [
      "Ditto",
      "OMG",
      "Hype Boy",
      "Super Shy",
      "Attention"
    ]
  },
  {
    name: "SZA",
    photo: "Pictures/SZA.jpg",
    genre: "Alternative R&B",
    country: "United States",
    bio: "SZA is an American singer-songwriter whose music blends contemporary R&B, soul, pop, and alternative influences.",
    albums: [
      "Ctrl",
      "SOS",
      "Lana"
    ],
    topSongs: [
      "Kill Bill",
      "Snooze",
      "Good Days",
      "Saturn",
      "Nobody Gets Me"
    ]
  },
  {
    name: "Frank Ocean",
    photo: "Pictures/Frank Ocean.jpg",
    genre: "Alternative R&B",
    country: "United States",
    bio: "Frank Ocean is an American singer-songwriter known for experimental R&B, intimate lyrics, and unconventional song structures.",
    albums: [
      "nostalgia, ULTRA",
      "channel ORANGE",
      "Blonde",
      "Endless"
    ],
    topSongs: [
      "Pink + White",
      "Thinkin Bout You",
      "Ivy",
      "Nights",
      "Lost"
    ]
  },
  {
    name: "Billie Eilish",
    photo: "Pictures/Billie Eilish.jpg",
    genre: "Alternative Pop",
    country: "United States",
    bio: "Billie Eilish is an American singer-songwriter known for atmospheric production, distinctive vocals, and introspective pop music.",
    albums: [
      "WHEN WE ALL FALL ASLEEP, WHERE DO WE GO?",
      "Happier Than Ever",
      "HIT ME HARD AND SOFT"
    ],
    topSongs: [
      "BIRDS OF A FEATHER",
      "bad guy",
      "ocean eyes",
      "lovely",
      "WILDFLOWER"
    ]
  },
  {
    name: "Ariana Grande",
    photo: "Pictures/Ariana Grande.jpg",
    genre: "Pop / R&B",
    country: "United States",
    bio: "Ariana Grande is an American singer and actress known for her vocal range and music combining pop, dance, and R&B.",
    albums: [
      "Yours Truly",
      "My Everything",
      "Dangerous Woman",
      "Sweetener",
      "thank u, next",
      "Positions",
      "eternal sunshine"
    ],
    topSongs: [
      "we can't be friends (wait for your love)",
      "7 rings",
      "Into You",
      "thank u, next",
      "positions"
    ]
  },
  {
    name: "The Weeknd",
    photo: "Pictures/The Weeknd.jpg",
    genre: "R&B / Synth-pop",
    country: "Canada",
    bio: "The Weeknd is a Canadian singer-songwriter known for atmospheric R&B, electronic pop, and cinematic production.",
    albums: [
      "Trilogy",
      "Beauty Behind the Madness",
      "Starboy",
      "After Hours",
      "Dawn FM",
      "Hurry Up Tomorrow"
    ],
    topSongs: [
      "Blinding Lights",
      "Starboy",
      "Save Your Tears",
      "Die For You",
      "The Hills"
    ]
  },
  {
    name: "Conan Gray",
    photo: "Pictures/Conan Gray.jpg",
    genre: "Indie Pop",
    country: "United States",
    bio: "Conan Gray is an American singer-songwriter known for emotionally direct pop music and coming-of-age themes.",
    albums: [
      "Kid Krow",
      "Superache",
      "Found Heaven",
      "Wishbone"
    ],
    topSongs: [
      "Heather",
      "Maniac",
      "Memories",
      "People Watching",
      "Astronomy"
    ]
  },
  {
    name: "Gracie Abrams",
    photo: "Pictures/Gracie Abrams.jpg",
    genre: "Indie Pop",
    country: "United States",
    bio: "Gracie Abrams is an American singer-songwriter recognized for intimate songwriting and understated pop arrangements.",
    albums: [
      "minor",
      "This Is What It Feels Like",
      "Good Riddance",
      "The Secret of Us"
    ],
    topSongs: [
      "That's So True",
      "I Love You, I'm Sorry",
      "Close To You",
      "Risk",
      "Where do we go now?"
    ]
  },
  {
    name: "NIKI",
    photo: "Pictures/NIKI.jpg",
    genre: "Pop / R&B",
    country: "Indonesia",
    bio: "NIKI is an Indonesian singer-songwriter known for emotional pop and R&B music, including songs about relationships and personal growth.",
    albums: [
      "MOONCHILD",
      "Nicole",
      "Buzz"
    ],
    topSongs: [
      "Every Summertime",
      "Lowkey",
      "Backburner",
      "High School in Jakarta",
      "Oceans & Engines"
    ]
  },
  {
    name: "Wave to Earth",
    photo: "Pictures/Wave to Earth.jpg",
    genre: "Indie Rock / Jazz",
    country: "South Korea",
    bio: "Wave to Earth are a South Korean indie band known for relaxed guitar-driven music with jazz and alternative influences.",
    albums: [
      "0.1 flaws and all.",
      "play with earth! 0.03"
    ],
    topSongs: [
      "seasons",
      "bad",
      "love.",
      "peach eyes",
      "light"
    ]
  }
];

const FEATURED_ARTISTS = ARTISTS.slice(0, 12);
const MORE_ARTISTS = ARTISTS.slice(12);




/* ============================================================
   03. HELPERS AND STORAGE
============================================================ */

const $ = id => document.getElementById(id);

const audio = $("audioPlayer");
const video = $("artistVideo");

const STORAGE = {
  accounts: "sphinx_accounts_v2",
  session: "sphinx_session_v2"
};

function readJSON(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function saveJSON(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.error("Storage error:", error);
    showToast("Unable to save. Browser storage may be full.");
    return false;
  }
}

function escapeHTML(value) {
  return String(value ?? "").replace(
    /[&<>"']/g,
    character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]
  );
}

function icon(name) {
  return `<i class="fa-solid fa-${name}"></i>`;
}

function validSong(index) {
  return Number.isInteger(index) &&
    index >= 0 &&
    index < SONGS.length;
}

function imageHTML(path, alt = "") {
  if (!path) {
    return `<div class="image-placeholder">
      ${icon("music")}
    </div>`;
  }

  return `<img src="${escapeHTML(path)}"
               alt="${escapeHTML(alt)}"
               loading="lazy"
               onerror="this.style.display='none';
                 this.parentElement.classList.add('image-missing')">`;
}

function formatTime(seconds) {
  const safe = Number.isFinite(seconds)
    ? Math.max(0, Math.floor(seconds))
    : 0;

  return `${Math.floor(safe / 60)}:${String(
    safe % 60
  ).padStart(2, "0")}`;
}

function setRangeFill(input) {
  if (!input) return;

  const min = Number(input.min) || 0;
  const max = Number(input.max) || 100;
  const value = Number(input.value) || 0;

  const percent = max > min
    ? ((value - min) / (max - min)) * 100
    : 0;

  input.style.setProperty("--fill", `${percent}%`);
}

function makeId() {
  if (crypto.randomUUID) return crypto.randomUUID();

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function setText(id, value) {
  const element = $(id);
  if (element) element.textContent = value;
}

function setHTML(id, html) {
  const element = $(id);
  if (element) element.innerHTML = html;
}

function show(id) {
  if ($(id)) $(id).hidden = false;
}

function hide(id) {
  if ($(id)) $(id).hidden = true;
}

function isMobile() {
  return window.matchMedia("(max-width: 700px)").matches;
}

let toastTimeout;

function showToast(message) {
  const toast = $("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.hidden = false;

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.hidden = true;
  }, 3000);
}

function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve("");
      return;
    }

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      reject(new Error("Choose a JPG, PNG, or WebP image."));
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      reject(new Error("Image must be smaller than 3 MB."));
      return;
    }

    const reader = new FileReader();

    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("Unable to read image."));

    reader.readAsDataURL(file);
  });
}

function monthKey() {
  const date = new Date();

  return `${date.getFullYear()}-${String(
    date.getMonth() + 1
  ).padStart(2, "0")}`;
}




/* ============================================================
   04. LOCAL DEMO ACCOUNTS

   Accounts are saved in browser localStorage.

   This is suitable for a school demonstration.
   It is not a secure server-based login system.
============================================================ */

let accounts = readJSON(STORAGE.accounts, {});
let activeUser = localStorage.getItem(STORAGE.session) || "";

let signupMode = false;

function defaultUserData(username) {
  return {
    displayName: username,
    bio: "Music is my escape.",
    photo: "",
    liked: [],
    recent: [],
    playlists: [],
    queue: [],
    monthly: {}
  };
}

function currentAccount() {
  return accounts[activeUser] || null;
}

function currentData() {
  return currentAccount()?.data || null;
}

function saveAccounts() {
  return saveJSON(STORAGE.accounts, accounts);
}

function saveUserData() {
  if (!currentAccount()) return;
  currentAccount().data = {
    ...currentAccount().data,
    liked: [...liked],
    recent: [...recent],
    playlists: [...playlists],
    queue: [...queue]
  };
  saveAccounts();
}

function normalizeAccount(account) {
  if (!account.data) {
    account.data = defaultUserData(account.username);
  }

  const defaults = defaultUserData(account.username);

  account.data = {
    ...defaults,
    ...account.data,
    monthly: account.data.monthly || {}
  };
}

function loadUserData() {
  const data = currentData();
  if (!data) return;

  liked = new Set(
    (data.liked || []).filter(validSong)
  );

  recent = (data.recent || [])
    .filter(validSong)
    .slice(0, 10);

  playlists = (data.playlists || []).map(playlist => ({
    id: playlist.id || makeId(),
    name: playlist.name || "Untitled Playlist",
    description: playlist.description || "",
    cover: playlist.cover || "",
    songs: (playlist.songs || []).filter(validSong)
  }));

  queue = (data.queue || []).filter(validSong);
}

function passwordDigest(password, salt) {
  // Demo-only deterministic digest.
  // Never use this as production password security.
  let hash = 2166136261;

  const value = `${salt}:${password}`;

  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return (hash >>> 0).toString(16);
}

function loginUser(username, password) {
  const key = username.trim().toLowerCase();
  const account = accounts[key];

  if (!account ||
      account.passwordHash !== passwordDigest(
        password,
        account.salt
      )) {
    throw new Error("Invalid username or password.");
  }

  activeUser = key;
  localStorage.setItem(STORAGE.session, key);

  normalizeAccount(account);
  loadUserData();
  saveAccounts();

  hide("authScreen");

  updateAccountUI();
  navigate("home");

  showToast(`Welcome back, ${account.username}!`);
}

function registerUser(username, password) {
  const key = username.trim().toLowerCase();

  if (key.length < 3) {
    throw new Error("Username must have at least 3 characters.");
  }

  if (password.length < 6) {
    throw new Error("Password must have at least 6 characters.");
  }

  if (accounts[key]) {
    throw new Error("Username already exists.");
  }

  const salt = makeId();

  accounts[key] = {
    username: username.trim(),
    salt,
    passwordHash: passwordDigest(password, salt),
    data: defaultUserData(username.trim())
  };

  if (!saveAccounts()) {
    delete accounts[key];
    throw new Error("Unable to save your account.");
  }

  loginUser(username, password);
}

function logoutUser() {
  audio.pause();
  video?.pause();

  activeUser = "";
  localStorage.removeItem(STORAGE.session);

  liked = new Set();
  recent = [];
  playlists = [];
  queue = [];

  hide("accountMenu");
  show("authScreen");

  navigate("home");
  updatePlayerUI();
}

function updateAccountUI() {
  const data = currentData();
  if (!data) return;

  setText("accountName", data.displayName);
  setText("profileName", data.displayName);
  setText("profileBio", data.bio);

  const avatar = data.photo
    ? `<img src="${escapeHTML(data.photo)}" alt="Profile photo">`
    : icon("user");

  setHTML("accountAvatar", avatar);
  setHTML("profileAvatar", avatar);
}




/* ============================================================
   05. APPLICATION STATE
============================================================ */

let liked = new Set();
let recent = [];
let playlists = [];
let queue = [];

let currentSong = 0;
let currentView = "home";
let selectedPlaylist = null;

let playbackOrder = SONGS.map((_, index) => index);

let shuffleEnabled = false;
let repeatMode = 0;
// 0 = off, 1 = repeat all, 2 = repeat one

let currentLyrics = [];
let lyricRequest = 0;

let playlistEditingId = null;
let playlistCoverData = "";
let profilePhotoData = "";

let songMenuIndex = null;
let lastCountedTrack = null;

audio.volume = 0.7;




/* 06. NAVIGATION

   Main pages:
   Home
   Discover
   Library
   Profile

   Library subviews:
   All Songs
   Liked Songs
   Recently Played
   Playlists
   Individual Playlist */

function setNavActive(view) {
  const map = {
    home: "homeNav",
    discover: "searchNav",
    library: "libraryNav",
    profile: null
  };

  ["homeNav", "searchNav", "libraryNav"].forEach(id => {
    $(id)?.classList.remove("active");
  });

  const active = map[view];

  if (active) $(active)?.classList.add("active");
}

function closeMobileSidebar() {
  if (isMobile()) {
    $("app")?.classList.add("sidebar-collapsed");
  }
}

function navigate(view, playlistId = null) {
  currentView = view;

  if (view === "playlist") {
    selectedPlaylist = playlistId;
  } else if (view !== "playlist") {
    selectedPlaylist = null;
  }

  const topView = (
    view === "home" ||
    view === "discover" ||
    view === "profile"
  ) ? view : "library";

  setNavActive(topView);

  hide("profilePage");
  hide("hero");
  hide("recentSection");
  hide("songsSection");

  const discoverPage = $("sphinxDiscoverPage");
  if (discoverPage) discoverPage.hidden = true;

  if (view === "profile") {
    show("profilePage");
    renderProfile();
  } else if (view === "discover") {
    renderDiscover();
  } else {
    show("songsSection");

    if (view === "home") {
      show("hero");
      renderHome();
    } else {
      renderLibraryView();
    }
  }

  updateSidebar();
  closeMobileSidebar();

  const main = $("main");
  const scroll = main?.querySelector(".main-scroll");

  if (scroll) scroll.scrollTop = 0;
}

function renderHome() {
  setText("viewEyebrow", "PERSONAL SOUNDTRACK");
  setText("viewTitle", "Your Top 10 Songs");

  hide("editPlaylistButton");
  hide("addPlaylistSong");
  hide("playlistOverview");

  renderSongs(SONGS.map((_, index) => index));

  if (recent.length) {
    show("recentSection");
    renderSongCards("recentGrid", recent);
  } else {
    hide("recentSection");
  }

  const hour = new Date().getHours();

  setText(
    "greeting",
    hour < 12
      ? "Good morning!"
      : hour < 18
        ? "Good afternoon!"
        : "Good evening!"
  );
}

function renderLibraryView() {
  const headings = {
    library: [
      "YOUR MUSIC",
      "Your Library",
    ],
    all: [
      "YOUR MUSIC COLLECTION",
      "All Songs",
    ],
    liked: [
      "Your favorite tracks",
      "Liked Songs",
    ],
    recent: [
      "LISTENING HISTORY",
      "Recently Played",
      "Your latest listening moments."
    ],
    playlists: [
      "MADE BY YOU",
      "Your Playlists",
      "Your personal music collections."
    ]
  };

  const details = headings[currentView];

  hide("editPlaylistButton");
  hide("addPlaylistSong");
  hide("playlistOverview");

  if (currentView === "playlist") {
    renderIndividualPlaylist();
    return;
  }

  if (details) {
    setText("viewEyebrow", details[0]);
    setText("viewTitle", details[1]);
    setText("viewDescription", details[2]);
  }

  if (currentView === "library") {
    renderLibraryOverview();
    return;
  }

  if (currentView === "liked") {
    renderSongs([...liked]);
    return;
  }

  if (currentView === "recent") {
    renderSongs(recent);
    return;
  }

  if (currentView === "playlists") {
    renderPlaylists();
    return;
  }

  renderSongs(SONGS.map((_, index) => index));
}

function renderLibraryOverview() {
  const grid = $("songGrid");
  if (!grid) return;

  grid.className = "";
  grid.innerHTML = `
    <div class="library-overview-grid">
      <button class="library-overview-card"
              data-library="all">
        ${icon("music")}
        <h3>All Songs</h3>
        <p>${SONGS.length} tracks</p>
      </button>

      <button class="library-overview-card"
              data-library="liked">
        ${icon("heart")}
        <h3>Liked Songs</h3>
        <p>${liked.size} songs</p>
      </button>

      <button class="library-overview-card"
              data-library="recent">
        ${icon("clock-rotate-left")}
        <h3>Recently Played</h3>
        <p>${recent.length} tracks</p>
      </button>

      <button class="library-overview-card"
              data-library="playlists">
        ${icon("list")}
        <h3>Playlists</h3>
        <p>${playlists.length} playlists</p>
      </button>
    </div>

    <div class="section-heading">
      <div>
        <span class="section-eyebrow">YOUR COLLECTION</span>
        <h2>All 10 Songs</h2>
      </div>
    </div>

    <div id="librarySongsGrid" class="song-grid"></div>

    <div class="section-heading"
         style="margin-top:32px">
      <div>
        <span class="section-eyebrow">MADE BY YOU</span>
        <h2>Your Playlists</h2>
      </div>
      <button class="primary-button small-button"
              data-action="new-playlist">
        ${icon("plus")} Create Playlist
      </button>
    </div>

    <div id="libraryPlaylistGrid" class="playlist-grid"></div>
  `;

  renderSongCards(
    "librarySongsGrid",
    SONGS.map((_, index) => index)
  );

  renderPlaylistCards("libraryPlaylistGrid");

  hide("empty");
}

function updateSidebar() {
  setText("allSongsCount", `${SONGS.length} tracks`);
  setText("likedCount", `${liked.size} songs`);
  setText("playlistCount", `${playlists.length} playlists`);

  const links = {
    allSongsView: "all",
    likedView: "liked",
    recentView: "recent",
    playlistsView: "playlists"
  };

  Object.entries(links).forEach(([id, view]) => {
    $(id)?.classList.toggle(
      "active",
      currentView === view
    );
  });

  const list = $("playlistList");
  if (!list) return;

  list.innerHTML = playlists.map(playlist => `
    <div class="playlist-row">
      <button class="playlist-library-item"
              data-playlist="${escapeHTML(playlist.id)}">
        <span class="playlist-cover-small">
          ${playlist.cover
            ? imageHTML(playlist.cover, playlist.name)
            : icon("music")}
        </span>

        <span class="sidebar-link-info">
          <strong>${escapeHTML(playlist.name)}</strong>
          <small>${playlist.songs.length} songs</small>
        </span>
      </button>

      <button class="playlist-more"
              data-edit-playlist="${escapeHTML(playlist.id)}"
              aria-label="Edit playlist">
        ${icon("ellipsis")}
      </button>
    </div>
  `).join("");
}




/* ============================================================
   07. SONG CARDS
============================================================ */

function songCard(index) {
  const song = SONGS[index];
  const playing = currentSong === index && !audio.paused;
  return `
    <article class="song-card ${index === currentSong ? "active" : ""}" data-song="${index}">
      <div class="song-art">
        ${imageHTML(song.image, song.title)}
        <button type="button" class="song-play" data-play="${index}"
          aria-label="${playing ? "Pause" : "Play"} ${escapeHTML(song.title)}">
          ${icon(playing ? "pause" : "play")}
        </button>
      </div>
      <h3 title="${escapeHTML(song.title)}">${escapeHTML(song.title)}</h3>
      <p title="${escapeHTML(song.artist)}">${escapeHTML(song.artist)}</p>
      <div class="song-card-actions">
        <button type="button" data-song-menu="${index}"
          aria-label="More options for ${escapeHTML(song.title)}">
          ${icon("ellipsis")}
        </button>
      </div>
    </article>
  `;
}

function renderSongCards(containerId, indices) {
  const container = $(containerId);
  if (!container) return;

  container.innerHTML = indices
    .filter(validSong)
    .map(songCard)
    .join("");
}

function renderSongs(indices) {
  const grid = $("songGrid");
  if (!grid) return;

  grid.className = "song-grid";

  renderSongCards("songGrid", indices);

  const empty = $("empty");

  if (empty) {
    empty.hidden = indices.length > 0;
  }
}

function refreshVisibleSongs() {
  if (["home", "library", "all", "liked", "recent",
       "playlists", "playlist"].includes(currentView)) {
    if (currentView === "home") {
      renderHome();
    } else {
      renderLibraryView();
    }
  }

  updateSidebar();
  updatePlayerUI();
}




/* ============================================================
   08. ARTIST DISCOVERY

   Artist-focused page:
   - Featured artists
   - Discover more artists
   - Search artists and songs
   - Artist details popup
   - Albums and five notable songs
============================================================ */

function ensureDiscoverPage() {
  let page = $("sphinxDiscoverPage");

  if (page) return page;

  page = document.createElement("section");

  page.id = "sphinxDiscoverPage";
  page.className = "discover-page";
  page.hidden = true;

  const parent = $("songsSection")?.parentElement;

  if (parent) parent.appendChild(page);

  return page;
}

function artistCard(artist, index) {
  return `
    <button class="artist-card"
            data-artist="${index}"
            aria-label="View ${escapeHTML(artist.name)}">

      <div class="artist-card-image">
        ${artist.photo
          ? imageHTML(artist.photo, artist.name)
          : icon("user")}
      </div>

      <h3>${escapeHTML(artist.name)}</h3>

      <p>${escapeHTML(artist.genre)}</p>

      <span class="artist-view-button">
        View Artist
      </span>
    </button>
  `;
}

function renderDiscover(query = "") {
  const page = ensureDiscoverPage();
  const term = query.trim().toLowerCase();

  page.hidden = false;

  const filtered = term
    ? ARTISTS
        .map((artist, index) => ({ artist, index }))
        .filter(({ artist }) =>
          artist.name.toLowerCase().includes(term) ||
          artist.genre.toLowerCase().includes(term) ||
          artist.country.toLowerCase().includes(term) ||
          artist.topSongs.some(song =>
            song.toLowerCase().includes(term)
          )
        )
    : [];

  const matchingSongs = term
    ? SONGS
        .map((song, index) => ({ song, index }))
        .filter(({ song }) =>
          song.title.toLowerCase().includes(term) ||
          song.artist.toLowerCase().includes(term)
        )
        .map(({ index }) => index)
    : [];

  if (term) {
    page.innerHTML = `
      <div class="section-heading">
        <div>
          <span class="section-eyebrow">DISCOVER MUSIC</span>
          <h2>Search Results</h2>
          <p class="view-description">
            Results for "${escapeHTML(query)}"
          </p>
        </div>
      </div>

      <section class="artist-section">
        <div class="section-heading">
          <h2>Artists</h2>
        </div>

        <div class="artist-grid">
          ${filtered.map(({ artist, index }) =>
            artistCard(artist, index)
          ).join("")}
        </div>
      </section>

      <section class="content-section">
        <div class="section-heading">
          <h2>Songs in Your Library</h2>
        </div>

        <div id="discoverSongResults"
             class="song-grid"></div>
      </section>
    `;

    renderSongCards("discoverSongResults", matchingSongs);

    if (!filtered.length && !matchingSongs.length) {
      page.innerHTML += `
        <div class="empty-state">
          ${icon("magnifying-glass")}
          <h3>No results found</h3>
          <p>Try another artist or song name.</p>
        </div>
      `;
    }

    return;
  }

  page.innerHTML = `
    <div class="section-heading">
      <div>

        <h2>Discover Artists</h2>

        <p class="view-description">
          Get to know the artists behind your favorite music.
          Explore their albums, backgrounds, and popular songs.
        </p>
      </div>
    </div>

    <section class="artist-section">
      <div class="section-heading">
        <div>
          <h2>Artists in Your Collection</h2>
        </div>
      </div>

      <div class="artist-grid">
        ${FEATURED_ARTISTS.map(artist =>
          artistCard(artist, ARTISTS.indexOf(artist))
        ).join("")}
      </div>
    </section>

    <section class="artist-section">
      <div class="section-heading">
        <div>
          <span class="section-eyebrow">
            EXPAND YOUR TASTE
          </span>
          <h2>Discover More Artists</h2>

          <p class="view-description">
            Other artists you might enjoy.
          </p>
        </div>
      </div>

      <div class="artist-grid">
        ${MORE_ARTISTS.map(artist =>
          artistCard(artist, ARTISTS.indexOf(artist))
        ).join("")}
      </div>
    </section>
  `;
}

function openArtist(index) {
  const artist = ARTISTS[index];
  if (!artist) return;
  setText("artistModalName", artist.name);
  setText("artistModalGenre", artist.genre);
  setText("artistModalBio", artist.bio);
  const photo = $("artistModalPhoto");
  if (photo) { photo.src = artist.photo || "PICTURES/sphinx-logo.png"; photo.onerror = () => { photo.onerror = null; photo.src = "PICTURES/sphinx-logo.png"; }; }
  setHTML("artistModalFacts", `<span class="artist-fact">${escapeHTML(artist.country || "")}</span>`);
  setHTML("artistModalPopular", (artist.topSongs || []).slice(0,5).map((title,i) => {
    const playable = SONGS.findIndex(song => song.title.toLowerCase() === title.toLowerCase() && song.artist.toLowerCase().includes(artist.name.toLowerCase()));
    return `<div class="artist-song-row"><span class="profile-rank-number">${i+1}</span><div class="artist-song-row-info"><strong>${escapeHTML(title)}</strong><small>${escapeHTML(artist.name)}</small></div>${playable >= 0 ? `<button type="button" data-play="${playable}" aria-label="Play ${escapeHTML(title)}">${icon("play")}</button>` : ""}</div>`;
  }).join(""));
  setHTML("artistModalAlbums", (artist.albums || []).map(album => {
    const title = typeof album === "string" ? album : (album.title || "");
    const cover = typeof album === "string" ? artist.photo : (album.cover || album.image || artist.photo);
    const year = typeof album === "string" ? "" : (album.year || "");
    return `<div class="album-card"><div class="album-cover">${cover
      ? `<img src="${escapeHTML(cover)}" alt="${escapeHTML(title)} album artwork" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.hidden=false"><span class="album-cover-fallback" hidden><i class="fa-solid fa-music"></i></span>`
      : `<span class="album-cover-fallback"><i class="fa-solid fa-music"></i></span>`}</div><h4>${escapeHTML(title)}</h4>${year ? `<small>${escapeHTML(String(year))}</small>` : ""}</div>`;
  }).join(""));
  show("artistModal");
}

function openCurrentArtist() {
  const name = SONGS[currentSong].artist;

  const index = ARTISTS.findIndex(artist =>
    name.includes(artist.name)
  );

  openArtist(index >= 0 ? index : 0);
}




/* ============================================================
   09. PLAYLIST MANAGEMENT
============================================================ */

function renderPlaylistCards(containerId) {
  const container = $(containerId);
  if (!container) return;

  if (!playlists.length) {
    container.innerHTML = `
      <div class="empty-state">
        ${icon("list")}
        <h3>No playlists yet</h3>
        <p>Create a playlist to organize your music.</p>

        <button class="primary-button"
                data-action="new-playlist"
                style="margin-top:18px">
          ${icon("plus")} Create Playlist
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = playlists.map(playlist => `
    <button class="playlist-card"
            data-playlist="${escapeHTML(playlist.id)}">

      <div class="playlist-card-cover">
        ${playlist.cover
          ? imageHTML(playlist.cover, playlist.name)
          : icon("music")}
      </div>

      <h3>${escapeHTML(playlist.name)}</h3>
      <p>${playlist.songs.length} songs</p>
    </button>
  `).join("");
}

function renderPlaylists() {
  const grid = $("songGrid");
  if (!grid) return;

  grid.className = "";

  grid.innerHTML = `
    <div class="section-heading">
      <p class="view-description">
        Organize your favorite music into playlists.
      </p>

      <button class="primary-button"
              data-action="new-playlist">
        ${icon("plus")} Create Playlist
      </button>
    </div>

    <div id="playlistCards"
         class="playlist-grid"></div>
  `;

  renderPlaylistCards("playlistCards");
  hide("empty");
}

function renderIndividualPlaylist() {
  const playlist = playlists.find(
    item => item.id === selectedPlaylist
  );

  if (!playlist) {
    navigate("playlists");
    return;
  }

  setText("viewEyebrow", "YOUR PLAYLIST");
  setText("viewTitle", playlist.name);
  setText(
    "viewDescription",
    playlist.description || "Your personal playlist."
  );

  show("editPlaylistButton");
  show("addPlaylistSong");
  show("playlistOverview");

  setHTML("playlistOverview", `
    <div class="playlist-overview-cover">
      ${playlist.cover
        ? imageHTML(playlist.cover, playlist.name)
        : icon("music")}
    </div>

    <div class="playlist-overview-info">
      <h2>${escapeHTML(playlist.name)}</h2>

      <p>${escapeHTML(
        playlist.description || "Your music collection."
      )}</p>

      <small>${playlist.songs.length} songs</small>

      <button class="secondary-button small-button"
              data-action="delete-playlist"
              style="margin-top:15px">
        ${icon("trash")} Delete Playlist
      </button>
    </div>
  `);

  renderSongs(playlist.songs);
}

function openPlaylistEditor(id = null) {
  const playlist = playlists.find(item => item.id === id);

  playlistEditingId = playlist?.id || null;
  playlistCoverData = playlist?.cover || "";

  setText(
    "playlistModalTitle",
    playlist ? "Edit Playlist" : "Create Playlist"
  );

  $("playlistNameInput").value = playlist?.name || "";
  $("playlistDescriptionInput").value =
    playlist?.description || "";

  $("playlistCoverInput").value = "";

  updatePlaylistCoverPreview();

  show("playlistModal");
}

function updatePlaylistCoverPreview() {
  setHTML(
    "playlistCoverPreview",
    playlistCoverData
      ? imageHTML(playlistCoverData, "Playlist cover")
      : icon("music")
  );
}

function savePlaylist(event) {
  event.preventDefault();

  const name = $("playlistNameInput").value.trim();
  const description =
    $("playlistDescriptionInput").value.trim();

  if (!name) {
    showToast("Please enter a playlist name.");
    return;
  }

  if (playlistEditingId) {
    const playlist = playlists.find(
      item => item.id === playlistEditingId
    );

    if (playlist) {
      playlist.name = name;
      playlist.description = description;
      playlist.cover = playlistCoverData;
    }
  } else {
    playlists.push({
      id: makeId(),
      name,
      description,
      cover: playlistCoverData,
      songs: []
    });
  }

  saveUserData();

  hide("playlistModal");
  navigate("playlists");

  showToast("Playlist saved.");
}

function addSongToPlaylist(songIndex, playlistId) {
  const playlist = playlists.find(
    item => item.id === playlistId
  );

  if (!playlist) return;

  if (playlist.songs.includes(songIndex)) {
    showToast("Song is already in this playlist.");
    return;
  }

  playlist.songs.push(songIndex);

  saveUserData();
  refreshVisibleSongs();

  showToast(`Added to ${playlist.name}.`);
}

function removeSongFromPlaylist(songIndex) {
  const playlist = playlists.find(
    item => item.id === selectedPlaylist
  );

  if (!playlist) return;

  playlist.songs = playlist.songs.filter(
    index => index !== songIndex
  );

  saveUserData();
  renderIndividualPlaylist();

  showToast("Song removed from playlist.");
}

function deleteSelectedPlaylist() {
  if (!selectedPlaylist) return;

  const playlist = playlists.find(
    item => item.id === selectedPlaylist
  );

  if (!playlist) return;

  openConfirm(
    "Delete Playlist?",
    `Delete "${playlist.name}"? This cannot be undone.`,
    () => {
      playlists = playlists.filter(
        item => item.id !== selectedPlaylist
      );

      saveUserData();
      navigate("playlists");

      showToast("Playlist deleted.");
    }
  );
}

function toggleLike(index) {
  if (liked.has(index)) {
    liked.delete(index);
  } else {
    liked.add(index);
  }

  saveUserData();
  refreshVisibleSongs();
}




/* ============================================================
   10. AUDIO PLAYBACK
============================================================ */

function loadSong(index) {
  if (!validSong(index)) return;

  currentSong = index;
  lastCountedTrack = null;

  const song = SONGS[index];

  audio.pause();
  audio.src = song.audio;
  audio.load();

  loadLyrics(song.lrc);
  loadVideo(song.video, song.image);
  const artwork = $("visualFallback"); if (artwork) { artwork.src = song.image; artwork.alt = song.title; }

  updatePlayerUI();
  updateProgress();
  updateArtistPanel();
}

async function playSong(index) {
  if (!validSong(index)) return;

  if (currentSong !== index || !audio.src) {
    loadSong(index);
  }

  try {
    await audio.play();

    recordRecent(index);
    updatePlayerUI();
  } catch (error) {
    console.error("Playback error:", error);

    showToast(
      "Unable to play this audio. Check the music file path."
    );
  }
}

function togglePlayback() {
  if (audio.paused) {
    playSong(currentSong);
  } else {
    audio.pause();
    updatePlayerUI();
  }
}

function recordRecent(index) {
  recent = [
    index,
    ...recent.filter(item => item !== index)
  ].slice(0, 10);

  saveUserData();
  updateSidebar();

  if (currentView === "recent" ||
      currentView === "home") {
    refreshVisibleSongs();
  }
}

function countSongPlay() {
  if (lastCountedTrack === currentSong) return;

  lastCountedTrack = currentSong;

  const data = currentData();
  if (!data) return;

  const key = monthKey();

  if (!data.monthly[key]) {
    data.monthly[key] = {
      plays: 0,
      songs: {}
    };
  }

  const stats = data.monthly[key];

  stats.plays++;
  stats.songs[currentSong] =
    (stats.songs[currentSong] || 0) + 1;

  saveAccounts();
}

function nextTrack() {
  if (queue.length) {
    const nextIndex = queue.shift();

    saveUserData();
    renderQueue();

    playSong(nextIndex);
    return;
  }

  if (shuffleEnabled) {
    const candidates = SONGS.map(
      (_, index) => index
    ).filter(index => index !== currentSong);

    const randomIndex = Math.floor(
      Math.random() * candidates.length
    );

    playSong(candidates[randomIndex] ?? currentSong);
    return;
  }

  const position = playbackOrder.indexOf(currentSong);

  const nextPosition =
    (position + 1) % playbackOrder.length;

  playSong(playbackOrder[nextPosition]);
}

function previousTrack() {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
    return;
  }

  const position = playbackOrder.indexOf(currentSong);

  const previousPosition =
    (position - 1 + playbackOrder.length) %
    playbackOrder.length;

  playSong(playbackOrder[previousPosition]);
}

function toggleShuffle() {
  shuffleEnabled = !shuffleEnabled;

  updatePlayerUI();

  showToast(
    shuffleEnabled ? "Shuffle enabled." : "Shuffle disabled."
  );
}

function toggleRepeat() {
  repeatMode = (repeatMode + 1) % 3;

  updatePlayerUI();

  const messages = [
    "Repeat off.",
    "Repeat all enabled.",
    "Repeat one enabled."
  ];

  showToast(messages[repeatMode]);
}

function updatePlayerUI() {
  const song = SONGS[currentSong];
  if (!song) return;

  setText("footerTitle", song.title);
  setText("title", song.title);
  setText("footerArtist", song.artist);
  setText("artist", song.artist);

  const cover = $("cover");

  if (cover) {
    cover.src = song.image;
    cover.alt = song.title;
  }

  const playing = !audio.paused;

  const featured = $("featured");
  if (featured) {
    featured.innerHTML = `${icon(playing ? "pause" : "play")} <span>${playing ? "Pause Listening" : "Start Listening"}</span>`;
    featured.setAttribute("aria-pressed", String(playing));
  }
  $("heroVinyl")?.classList.toggle("is-playing", playing);
  document.querySelectorAll(".song-card[data-song]").forEach(card => {
    const index = Number(card.dataset.song);
    const isActive = index === currentSong;
    const isPlaying = isActive && playing;
    card.classList.toggle("active", isActive);
    const button = card.querySelector(".song-play");
    if (button) {
      button.innerHTML = icon(isPlaying ? "pause" : "play");
      button.setAttribute("aria-label", `${isPlaying ? "Pause" : "Play"} ${SONGS[index]?.title || "song"}`);
    }
  });

  ["play", "npPlay"].forEach(id => {
    const button = $(id);
    if (!button) return;

    button.innerHTML = playing
      ? icon("pause")
      : icon("play");

    button.setAttribute(
      "aria-label",
      playing ? "Pause" : "Play"
    );
  });

  ["shuffle", "npShuffle"].forEach(id => {
    $(id)?.classList.toggle(
      "active",
      shuffleEnabled
    );
  });

  ["repeat", "npRepeat"].forEach(id => {
    const button = $(id);
    if (!button) return;

    button.classList.toggle("active", repeatMode > 0);

    button.innerHTML = repeatMode === 2
      ? icon("repeat") + "<sup>1</sup>"
      : icon("repeat");
  });

  setText("rightTitle", song.title); setText("rightArtist", song.artist);
  const heart = $("heart");

  if (heart) {
    heart.classList.toggle(
      "active",
      liked.has(currentSong)
    );

    heart.innerHTML = liked.has(currentSong)
      ? '<i class="fa-solid fa-heart"></i>'
      : '<i class="fa-regular fa-heart"></i>';
  }

  const npHeart = $("npHeart"); if (npHeart) { npHeart.classList.toggle("active", liked.has(currentSong)); npHeart.innerHTML = liked.has(currentSong) ? icon("heart") : '<i class="fa-regular fa-heart"></i>'; }
  const mute = $("mute");
  const volumeSlider = $("volume");
  const isMuted = audio.muted || audio.volume === 0;
  if (mute) {
    mute.innerHTML = icon(isMuted ? "volume-xmark" : "volume-high");
    mute.setAttribute("aria-label", isMuted ? "Unmute" : "Mute");
  }
  if (volumeSlider) {
    volumeSlider.value = isMuted ? 0 : Math.round(audio.volume * 100);
    setRangeFill(volumeSlider);
  }
}

function updateProgress() {
  const duration = Number.isFinite(audio.duration)
    ? audio.duration
    : 0;

  const elapsed = audio.currentTime || 0;

  const progress = duration
    ? Math.round((elapsed / duration) * 1000)
    : 0;

  ["seek", "npSeek"].forEach(id => {
    const slider = $(id);
    if (!slider) return;

    slider.value = progress;
    setRangeFill(slider);
  });

  ["elapsed", "npElapsed", "currentTime"].forEach(id => {
    setText(id, formatTime(elapsed));
  });

  ["remaining", "npRemaining", "duration"].forEach(id => {
    setText(id, "-" + formatTime(duration - elapsed));
  });

  const miniBar = $("miniBar");

  if (miniBar) {
    miniBar.style.width = `${progress / 10}%`;
  }

  updateLyricsHighlight();
}

function seekTo(value) {
  if (!Number.isFinite(audio.duration)) return;

  audio.currentTime =
    (Number(value) / 1000) * audio.duration;
}




/* ============================================================
   11. QUEUE
============================================================ */

function addToQueue(index) {
  if (!validSong(index)) return;

  queue.push(index);

  saveUserData();
  renderQueue();

  showToast("Added to queue.");
}

function renderQueue() {
  const container = $("queueList"); if (!container) return;
  setText("queueCount", `${queue.length} ${queue.length === 1 ? "song" : "songs"}`);
  if (!queue.length) { container.innerHTML = `<div class="queue-empty"><div class="queue-empty-icon"><i class="fa-solid fa-music"></i></div><h3>Your queue is empty</h3><p>Add songs to decide what plays next.</p></div>`; return; }
  container.innerHTML = queue.map((index,position) => { const song = SONGS[index]; return `<div class="queue-item" draggable="true" data-queue-position="${position}"><img src="${escapeHTML(song.image)}" alt=""><div class="queue-item-info"><strong>${escapeHTML(song.title)}</strong><small>${escapeHTML(song.artist)}</small></div><button type="button" data-queue-play="${position}" aria-label="Play song">${icon("play")}</button><button type="button" data-queue-remove="${position}" aria-label="Remove song">${icon("xmark")}</button><span class="queue-grip" aria-label="Drag to reorder"><i class="fa-solid fa-grip-lines"></i></span></div>`; }).join("");
}

function playQueuePosition(position) {
  if (!Number.isInteger(position) ||
      position < 0 ||
      position >= queue.length) return;

  const index = queue.splice(position, 1)[0];

  saveUserData();
  renderQueue();
  playSong(index);
}

function removeQueuePosition(position) {
  queue.splice(position, 1);

  saveUserData();
  renderQueue();
}

function closeQueuePanel() {
  hide("queuePanel");
  hide("queueBackdrop");
}
function toggleQueuePanel() {
  const panel = $("queuePanel");
  if (!panel) return;
  const opening = panel.hidden;
  panel.hidden = !opening;
  const backdrop = $("queueBackdrop");
  if (backdrop) backdrop.hidden = !opening;
  if (opening) renderQueue();
}



/* ============================================================
   12. LYRICS AND VIDEO
============================================================ */

function parseLRC(text) {
  const lines = [];

  for (const rawLine of text.split(/\r?\n/)) {
    const matches = [
      ...rawLine.matchAll(
        /\[(\d{1,2}):(\d{2})(?:[.:](\d{1,3}))?\]/g
      )
    ];

    if (!matches.length) continue;

    const lyric = rawLine.replace(
      /\[\d{1,2}:\d{2}(?:[.:]\d{1,3})?\]/g,
      ""
    ).trim();

    for (const match of matches) {
      const minutes = Number(match[1]);
      const seconds = Number(match[2]);

      const fraction = match[3]
        ? Number(
            match[3].padEnd(3, "0").slice(0, 3)
          ) / 1000
        : 0;

      lines.push({
        time: minutes * 60 + seconds + fraction,
        text: lyric || "♪"
      });
    }
  }

  return lines.sort((a, b) => a.time - b.time);
}

async function loadLyrics(path) {
  const request = ++lyricRequest;

  currentLyrics = [];

  setText("previewLines", "Loading lyrics...");
  setText("fullLyrics", "Loading lyrics...");

  if (!path) {
    setText("previewLines", "Lyrics unavailable.");
    setText("fullLyrics", "Lyrics unavailable.");
    return;
  }

  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const text = await response.text();

    if (request !== lyricRequest) return;

    currentLyrics = parseLRC(text);

    if (!currentLyrics.length) {
      throw new Error("No timestamped lyrics found.");
    }

    activeLyricIndex = -1;
    renderLyrics();

    setText("lyricsStatus", "Synchronized lyrics");
  } catch (error) {
    if (request !== lyricRequest) return;

    console.warn("Lyrics error:", error);

    setText(
      "previewLines",
      "Lyrics unavailable. Check the LRC file."
    );

    setText(
      "fullLyrics",
      "Lyrics unavailable. Check the LRC file."
    );

    setText("lyricsStatus", "");
  }
}

function renderLyrics() {
  const html = currentLyrics.map((line, index) => `
    <p class="lyric-line"
       data-lyric="${index}">
      ${escapeHTML(line.text)}
    </p>
  `).join("");

  setHTML("previewLines", html);
  setHTML("fullLyrics", html);

  setText("fullTitle", SONGS[currentSong].title);
  setText("fullArtist", SONGS[currentSong].artist);

  updateLyricsHighlight();
}

let activeLyricIndex = -1;

function updateLyricsHighlight() {
  if (!currentLyrics.length) return;

  const time = audio.currentTime || 0;

  let active = -1;

  for (let i = 0; i < currentLyrics.length; i++) {
    if (currentLyrics[i].time <= time) {
      active = i;
    } else {
      break;
    }
  }

  if (active === activeLyricIndex) return;

  activeLyricIndex = active;

  ["previewLines", "fullLyrics"].forEach(id => {
    const container = $(id);
    if (!container) return;

    container.querySelectorAll(".lyric-line").forEach(
      (line, index) => {
        line.classList.toggle(
          "active",
          index === active
        );
      }
    );

    const activeLine = container.querySelector(
      `.lyric-line[data-lyric="${active}"]`
    );

    if (activeLine) {
      const targetTop =
        activeLine.offsetTop -
        container.offsetTop -
        container.clientHeight / 2 +
        activeLine.clientHeight / 2;

      container.scrollTo({
        top: targetTop,
        behavior: "smooth"
      });
    }
  });
}

function syncVideo(forceSeek = false) {
  if (!video || video.hidden) return;

  // The video is a silent visual layer: it loops independently of the MP3.
  // Only reposition it on an explicit seek or when a new video is loaded.
  // Re-seeking every audio timeupdate would prevent a shorter MP4 from looping.
  if (forceSeek && Number.isFinite(audio.currentTime) &&
      Number.isFinite(video.duration) && video.duration > 0) {
    const visualTime = audio.currentTime % video.duration;
    if (Math.abs(video.currentTime - visualTime) > 0.35) {
      try { video.currentTime = visualTime; } catch (_) {}
    }
  }

  video.loop = true;
  video.muted = true;
  if (audio.paused || audio.ended) {
    video.pause();
  } else if (video.paused) {
    video.play().catch(() => {});
  }
}
function loadVideo(path, fallbackImage) {
  if (!video) return;
  const fallback = $("lyricsVideoFallback");
  video.pause(); video.removeAttribute("src"); video.load(); video.hidden = true;
  if (fallback) { fallback.src = fallbackImage; fallback.hidden = false; }
  if (!path) return;
  video.disablePictureInPicture = true;
  video.setAttribute("disablepictureinpicture", "");
  video.muted = true; video.src = path;
  video.onloadeddata = () => { video.hidden = false; if (fallback) fallback.hidden = true; syncVideo(true); };
  video.onerror = () => { video.hidden = true; if (fallback) fallback.hidden = false; };
  video.load();
}

function updateArtistPanel() {
  const song = SONGS[currentSong];

  const artist = ARTISTS.find(item =>
    song.artist.includes(item.name)
  );

  setText("artistName", song.artist);

  setText(
    "artistBio",
    artist?.bio || "Discover more about this artist."
  );

  setHTML("artistInfo", `<button type="button" data-artist="${ARTISTS.indexOf(artist)}" class="artist-info-link">${escapeHTML(song.artist)} · View Artist</button><p>${escapeHTML(artist?.bio || "Discover more about this artist.")}</p>`);
  const photo = $("artistPhoto");

  if (photo) {
    photo.style.backgroundImage =
      `linear-gradient(transparent, rgba(0,0,0,.7)),
       url("${artist?.photo || song.image}")`;

    photo.style.backgroundSize = "cover";
    photo.style.backgroundPosition = "center";
  }
}

function openLyrics() {
  show("lyricsModal");

  setText("fullTitle", SONGS[currentSong].title);
  setText("fullArtist", SONGS[currentSong].artist);

  renderLyrics();
}




/* ============================================================
   13. PROFILE AND LISTENING STATISTICS
============================================================ */

function renderProfile() {
  const data = currentData();
  if (!data) return;

  updateAccountUI();

  const stats = data.monthly[monthKey()] || {
    plays: 0,
    songs: {}
  };

  setText("totalPlays", stats.plays || 0);
  setText("totalLiked", liked.size);
  setText("totalPlaylists", playlists.length);

  const rankedSongs = Object.entries(stats.songs || {})
    .map(([index, count]) => ({
      index: Number(index),
      count
    }))
    .filter(item => validSong(item.index))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  if (!rankedSongs.length) {
    setHTML(
      "topTracks",
      '<p class="profile-empty">Play some music to see your top tracks.</p>'
    );
  } else {
    setHTML(
      "topTracks",
      rankedSongs.map(({ index, count }, rank) => `
        <div class="profile-rank-row">
          <span class="profile-rank-number">
            ${rank + 1}
          </span>

          <img src="${escapeHTML(SONGS[index].image)}"
               alt="">

          <div class="profile-rank-info">
            <strong>${escapeHTML(SONGS[index].title)}</strong>
            <small>${escapeHTML(SONGS[index].artist)}</small>
          </div>

          <small>${count} plays</small>
        </div>
      `).join("")
    );
  }

  const artistCounts = new Map();

  for (const [index, count] of Object.entries(
    stats.songs || {}
  )) {
    const song = SONGS[Number(index)];
    if (!song) continue;

    artistCounts.set(
      song.artist,
      (artistCounts.get(song.artist) || 0) + count
    );
  }

  const rankedArtists = [...artistCounts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  if (!rankedArtists.length) {
    setHTML(
      "topArtists",
      '<p class="profile-empty">Your top artists will appear here.</p>'
    );
  } else {
    setHTML(
      "topArtists",
      rankedArtists.map(([name, count], rank) => `
        <div class="profile-rank-row">
          <span class="profile-rank-number">
            ${rank + 1}
          </span>

          <div class="profile-rank-info">
            <strong>${escapeHTML(name)}</strong>
            <small>${count} plays</small>
          </div>
        </div>
      `).join("")
    );
  }
}

function openProfileEditor() {
  const data = currentData();
  if (!data) return;

  profilePhotoData = data.photo || "";

  $("editDisplayName").value = data.displayName;
  $("editBio").value = data.bio;
  $("editPhoto").value = "";

  updateProfilePreview();

  show("editProfileModal");
}

function updateProfilePreview() {
  setHTML(
    "editAvatarPreview",
    profilePhotoData
      ? imageHTML(profilePhotoData, "Profile photo")
      : icon("user")
  );
}

function saveProfile(event) {
  event.preventDefault();

  const data = currentData();
  if (!data) return;

  const name = $("editDisplayName").value.trim();

  if (!name) {
    showToast("Display name cannot be empty.");
    return;
  }

  data.displayName = name;
  data.bio = $("editBio").value.trim();
  data.photo = profilePhotoData;

  saveAccounts();

  updateAccountUI();
  renderProfile();

  hide("editProfileModal");

  showToast("Profile updated.");
}




/* ============================================================
   14. CONTEXT MENUS AND CONFIRMATIONS
============================================================ */

function openSongMenu(index, event) {
  songMenuIndex = index;

  const menu = $("songMenu");
  if (!menu) return;

  menu.innerHTML = `
    <button data-menu-action="like">
      ${icon("heart")}
      ${liked.has(index) ? "Unlike" : "Like"} Song
    </button>

    <button data-menu-action="queue">
      ${icon("list-ol")} Add to Queue
    </button>

    <button data-menu-action="playlist">
      ${icon("plus")} Add to Playlist
    </button>

  `;

  menu.hidden = false;

  menu.style.position = "fixed";
  menu.style.zIndex = "250";

  const x = Math.min(
    event.clientX,
    window.innerWidth - 190
  );

  const y = Math.min(
    event.clientY,
    window.innerHeight - 180
  );

  menu.style.left = `${Math.max(8, x)}px`;
  menu.style.top = `${Math.max(8, y)}px`;
}

function choosePlaylistForSong(index) {
  if (!playlists.length) {
    showToast("Create a playlist first.");
    openPlaylistEditor();
    return;
  }

  const menu = $("songMenu");
  if (!menu) return;

  menu.innerHTML = `
    <p style="padding:10px;font-weight:800">
      Add to Playlist
    </p>

    ${playlists.map(playlist => `
      <button data-target-playlist="${escapeHTML(playlist.id)}">
        ${icon("music")}
        ${escapeHTML(playlist.name)}
      </button>
    `).join("")}
  `;

  songMenuIndex = index;
  menu.hidden = false;
}

let confirmCallback = null;

function openConfirm(title, message, callback) {
  confirmCallback = callback;

  setText("confirmTitle", title);
  setText("confirmMessage", message);

  show("confirmModal");
}

function closeConfirm(accepted) {
  hide("confirmModal");

  const callback = confirmCallback;
  confirmCallback = null;

  if (accepted && callback) callback();
}

function closeAllOverlays() {
  [
    "artistModal",
    "lyricsModal",
    "playlistModal",
    "editProfileModal",
    "confirmModal",
    "songMenu",
    "accountMenu",
    "queuePanel",
    "queueBackdrop"
  ].forEach(hide);
}




/* ============================================================
   15. EVENT LISTENERS
============================================================ */

function syncLibraryCollapseButton() {
  const app = document.getElementById("app");
  const toggle = document.getElementById("libraryCollapseToggle");
  if (!app || !toggle) return;
  const collapsed = app.classList.contains("sidebar-collapsed");
  toggle.setAttribute("aria-expanded", String(!collapsed));
  toggle.setAttribute("aria-label", collapsed ? "Expand library" : "Collapse library");
  toggle.title = collapsed ? "Expand library" : "Collapse library";
  const glyph = toggle.querySelector("i");
  if (glyph) glyph.className = "fa-solid fa-book-open";
}

function bindEvents() {
  // Top navigation

  $("homeNav")?.addEventListener(
    "click",
    () => navigate("home")
  );

  $("searchNav")?.addEventListener(
    "click",
    () => navigate("discover")
  );

  $("libraryNav")?.addEventListener("click", () => {
    if (isMobile()) {
      $("app")?.classList.remove("sidebar-collapsed");
      syncLibraryCollapseButton();
    } else {
      navigate("library");
    }
  });

  $("heroLibrary")?.addEventListener(
    "click",
    () => navigate("library")
  );

  // Sidebar

  $("allSongsView")?.addEventListener(
    "click",
    () => navigate("all")
  );

  $("likedView")?.addEventListener(
    "click",
    () => navigate("liked")
  );

  $("recentView")?.addEventListener(
    "click",
    () => navigate("recent")
  );

  $("playlistsView")?.addEventListener(
    "click",
    () => navigate("playlists")
  );

  $("newPlaylist")?.addEventListener(
    "click",
    () => openPlaylistEditor()
  );

  $("sidebarAddPlaylist")?.addEventListener(
    "click",
    () => openPlaylistEditor()
  );

  function toggleLibrarySidebar() {
    $("app")?.classList.toggle("sidebar-collapsed");
    syncLibraryCollapseButton();
  }
  $("libraryCollapseToggle")?.addEventListener("click", toggleLibrarySidebar);

  // Search

  const search = $("search");

  search?.addEventListener("input", event => {
    navigate("discover");

    renderDiscover(event.target.value);
  });

  // Add mobile search if the HTML does not include one

  const topbarRight = document.querySelector(".topbar-right");

  if (topbarRight && !$("mobileSearchToggle")) {
    const toggle = document.createElement("button");

    toggle.id = "mobileSearchToggle";
    toggle.className = "icon-button mobile-search-toggle";
    toggle.setAttribute("aria-label", "Open search");
    toggle.innerHTML = icon("magnifying-glass");

    topbarRight.prepend(toggle);

    const panel = document.createElement("div");

    panel.id = "mobileSearchPanel";
    panel.className = "mobile-search-panel";
    panel.hidden = true;

    panel.innerHTML = `
      <label>
        ${icon("magnifying-glass")}
        <input id="mobileSearch"
               type="search"
               placeholder="Search songs and artists...">
      </label>

      <button id="closeMobileSearch"
              aria-label="Close search">
        ${icon("xmark")}
      </button>
    `;

    $("app")?.insertBefore(
      panel,
      document.querySelector(".workspace")
    );

    toggle.addEventListener("click", () => {
      panel.hidden = !panel.hidden;

      if (!panel.hidden) {
        $("mobileSearch")?.focus();
      }
    });

    $("closeMobileSearch")?.addEventListener(
      "click",
      () => {
        panel.hidden = true;
      }
    );

    $("mobileSearch")?.addEventListener(
      "input",
      event => {
        if (search) search.value = event.target.value;

        navigate("discover");
        renderDiscover(event.target.value);
      }
    );
  }

  // Account menu

  $("accountButton")?.addEventListener("click", event => {
    event.stopPropagation();

    const menu = $("accountMenu");
    if (!menu) return;

    menu.hidden = !menu.hidden;

    $("accountButton").setAttribute(
      "aria-expanded",
      String(!menu.hidden)
    );
  });

  $("profileNav")?.addEventListener("click", () => {
    hide("accountMenu");
    navigate("profile");
  });

  $("logoutButton")?.addEventListener(
    "click",
    logoutUser
  );

  // Audio controls

  $("featured")?.addEventListener("click", togglePlayback);

  ["play", "npPlay"].forEach(id => {
    $(id)?.addEventListener("click", togglePlayback);
  });

  ["next", "npNext"].forEach(id => {
    $(id)?.addEventListener("click", nextTrack);
  });

  ["previous", "prev", "npPrev"].forEach(id => {
    $(id)?.addEventListener("click", previousTrack);
  });

  ["shuffle", "npShuffle"].forEach(id => {
    $(id)?.addEventListener("click", toggleShuffle);
  });

  ["repeat", "npRepeat"].forEach(id => {
    $(id)?.addEventListener("click", toggleRepeat);
  });

  ["seek", "npSeek"].forEach(id => {
    $(id)?.addEventListener("input", event => {
      seekTo(event.target.value);
    });
  });

  $("volume")?.addEventListener("input", event => {
    audio.volume = Number(event.target.value) / 100;
    audio.muted = false;

    setRangeFill(event.target);
    updatePlayerUI();
  });

  let volumeBeforeMute = audio.volume > 0 ? audio.volume : 0.7;
  $("mute")?.addEventListener("click", () => {
    if (audio.muted || audio.volume === 0) {
      if (audio.volume === 0) audio.volume = volumeBeforeMute;
      audio.muted = false;
    } else {
      volumeBeforeMute = audio.volume;
      audio.muted = true;
    }
    updatePlayerUI();
  });
  audio.addEventListener("volumechange", updatePlayerUI);

  $("heart")?.addEventListener("click", event => {
    event.stopPropagation();
    toggleLike(currentSong);
  });

  // Now playing and lyrics

  $("miniPlayerOpen")?.addEventListener(
    "click",
    event => {
      if (event.target.closest("button")) return;

      $("app")?.classList.remove("right-collapsed");
    }
  );

  $("closeRight")?.addEventListener("click", () => {
    $("app")?.classList.add("right-collapsed");
  });

  $("lyricsToggle")?.addEventListener(
    "click",
    openLyrics
  );

  $("previewOpen")?.addEventListener(
    "click",
    openLyrics
  );

  $("closeLyrics")?.addEventListener(
    "click",
    () => hide("lyricsModal")
  );

  $("queueToggle")?.addEventListener(
    "click",
    toggleQueuePanel
  );

  $("npQueue")?.addEventListener(
    "click",
    toggleQueuePanel
  );

  $("artistPhoto")?.addEventListener(
    "click",
    openCurrentArtist
  );

  $("artistMore")?.addEventListener(
    "click",
    openCurrentArtist
  );

  $("closeArtist")?.addEventListener(
    "click",
    () => hide("artistModal")
  );

  // Playlists

  $("playlistForm")?.addEventListener(
    "submit",
    savePlaylist
  );

  $("closePlaylistModal")?.addEventListener(
    "click",
    () => hide("playlistModal")
  );

  $("editPlaylistButton")?.addEventListener(
    "click",
    () => openPlaylistEditor(selectedPlaylist)
  );

  $("addPlaylistSong")?.addEventListener(
    "click",
    () => {
      const playlist = playlists.find(
        item => item.id === selectedPlaylist
      );

      if (!playlist) return;

      const available = SONGS
        .map((_, index) => index)
        .filter(index => !playlist.songs.includes(index));

      const grid = $("songGrid");

      if (!grid) return;

      grid.className = "song-grid";

      grid.innerHTML = available.map(index => `
        <article class="song-card">
          <div class="song-art">
            ${imageHTML(
              SONGS[index].image,
              SONGS[index].title
            )}
          </div>

          <h3>${escapeHTML(SONGS[index].title)}</h3>
          <p>${escapeHTML(SONGS[index].artist)}</p>

          <button class="primary-button small-button"
                  data-insert-song="${index}"
                  style="margin-top:12px">
            ${icon("plus")} Add Song
          </button>
        </article>
      `).join("");

      setText("viewTitle", "Add Songs to Playlist");
    }
  );

  $("playlistCoverInput")?.addEventListener(
    "change",
    async event => {
      try {
        playlistCoverData = await fileToDataURL(
          event.target.files[0]
        );

        updatePlaylistCoverPreview();
      } catch (error) {
        showToast(error.message);
      }
    }
  );

  // Profile

  $("editProfile")?.addEventListener(
    "click",
    openProfileEditor
  );

  $("closeEditProfile")?.addEventListener(
    "click",
    () => hide("editProfileModal")
  );

  $("editProfileForm")?.addEventListener(
    "submit",
    saveProfile
  );

  $("editPhoto")?.addEventListener(
    "change",
    async event => {
      try {
        profilePhotoData = await fileToDataURL(
          event.target.files[0]
        );

        updateProfilePreview();
      } catch (error) {
        showToast(error.message);
      }
    }
  );

  // History and queue

  $("clearRecent")?.addEventListener("click", () => {
    openConfirm(
      "Clear Listening History?",
      "Remove all recently played songs?",
      () => {
        recent = [];

        saveUserData();
        navigate("recent");
      }
    );
  });

  $("clearQueue")?.addEventListener("click", () => {
    queue = [];

    saveUserData();
    renderQueue();

    showToast("Queue cleared.");
  });

  // Confirmation

  $("confirmCancel")?.addEventListener(
    "click",
    () => closeConfirm(false)
  );

  $("confirmAccept")?.addEventListener(
    "click",
    () => closeConfirm(true)
  );

  // Authentication

  $("authForm")?.addEventListener(
    "submit",
    event => {
      event.preventDefault();

      const username = $("authUsername").value.trim();
      const password = $("authPassword").value;

      try {
        if (signupMode) {
          registerUser(username, password);
        } else {
          loginUser(username, password);
        }

        setText("authError", "");
        $("authPassword").value = "";
      } catch (error) {
        setText("authError", error.message);
      }
    }
  );

  $("authSwitch")?.addEventListener("click", () => {
    signupMode = !signupMode;

    setText(
      "authHeading",
      signupMode ? "Create your account" : "Welcome back"
    );

    setText(
      "authSubmit",
      signupMode ? "Sign Up" : "Log In"
    );

    setText(
      "authSwitch",
      signupMode
        ? "Already have an account? Log in"
        : "Don't have an account? Sign up"
    );

    setText("authError", "");
  });

  $("togglePassword")?.addEventListener(
    "click",
    () => {
      const input = $("authPassword");

      input.type = input.type === "password"
        ? "text"
        : "password";
    }
  );

  // Global click delegation for generated content

  document.addEventListener("click", event => {
    const target = event.target;

    const closest = selector => target.closest(selector);

    const play = closest("[data-play]");

    if (play) {
      const index = Number(play.dataset.play);
      if (index === currentSong && !audio.paused) {
        audio.pause();
      } else {
        playSong(index);
      }
      return;
    }

    const like = closest("[data-like]");

    if (like) {
      toggleLike(Number(like.dataset.like));
      return;
    }

    const addQueue = closest("[data-add-queue]");

    if (addQueue) {
      addToQueue(Number(addQueue.dataset.addQueue));
      return;
    }

    const songMenuButton = closest("[data-song-menu]");

    if (songMenuButton) {
      openSongMenu(
        Number(songMenuButton.dataset.songMenu),
        event
      );
      return;
    }

    const menuAction = closest("[data-menu-action]");

    if (menuAction) {
      const action = menuAction.dataset.menuAction;
      const index = songMenuIndex;

      if (action === "play") playSong(index);
      if (action === "like") toggleLike(index);
      if (action === "queue") addToQueue(index);
      if (action === "remove") removeSongFromPlaylist(index);

      if (action === "playlist") {
        choosePlaylistForSong(index);
        return;
      }

      hide("songMenu");
      return;
    }

    const targetPlaylist = closest(
      "[data-target-playlist]"
    );

    if (targetPlaylist) {
      addSongToPlaylist(
        songMenuIndex,
        targetPlaylist.dataset.targetPlaylist
      );

      hide("songMenu");
      return;
    }

    const artist = closest("[data-artist]");

    if (artist) {
      openArtist(Number(artist.dataset.artist));
      return;
    }

    const library = closest("[data-library]");

    if (library) {
      navigate(library.dataset.library);
      return;
    }

    const playlist = closest("[data-playlist]");

    if (playlist) {
      navigate("playlist", playlist.dataset.playlist);
      return;
    }

    const editPlaylist = closest(
      "[data-edit-playlist]"
    );

    if (editPlaylist) {
      openPlaylistEditor(
        editPlaylist.dataset.editPlaylist
      );
      return;
    }

    const insertSong = closest("[data-insert-song]");

    if (insertSong) {
      addSongToPlaylist(
        Number(insertSong.dataset.insertSong),
        selectedPlaylist
      );

      renderIndividualPlaylist();
      return;
    }

    const queuePlay = closest("[data-queue-play]");

    if (queuePlay) {
      playQueuePosition(
        Number(queuePlay.dataset.queuePlay)
      );
      return;
    }

    const queueRemove = closest(
      "[data-queue-remove]"
    );

    if (queueRemove) {
      removeQueuePosition(
        Number(queueRemove.dataset.queueRemove)
      );
      return;
    }

    const action = closest("[data-action]");

    if (action) {
      if (action.dataset.action === "new-playlist") {
        openPlaylistEditor();
      }

      if (action.dataset.action === "delete-playlist") {
        deleteSelectedPlaylist();
      }

      return;
    }

    if (!closest("#songMenu")) {
      hide("songMenu");
    }

    if (!closest(".account-wrapper")) {
      hide("accountMenu");
    }

    if (
      isMobile() &&
      !closest("#sidebar") &&
      !closest("#libraryCollapseToggle")
    ) {
      closeMobileSidebar();
    }
  });

  // Bind controls present in the uploaded HTML (previous selectors were stale).
  // Mobile controls reuse the SAME desktop buttons and their existing listeners.
  // Moving the nodes, rather than cloning them, prevents duplicate playback logic.
  const moreButton = $("mobileMoreControls");
  const morePanel = $("mobileControlsPanel");
  const mobileMoved = $("mobileMovedControls");
  const mobileControlIds = ["shuffle", "repeat", "queueButton", "toggleRight", "mute", "volume"];
  const originalSlots = new Map();
  for (const id of mobileControlIds) {
    const element = $(id);
    if (!element?.parentNode) continue;
    const marker = document.createComment(`SPHINX original position: ${id}`);
    element.parentNode.insertBefore(marker, element);
    originalSlots.set(id, marker);
  }
  function closeMobileControls() {
    if (morePanel) morePanel.hidden = true;
    moreButton?.setAttribute("aria-expanded", "false");
  }
  function arrangeMobileControls() {
    const compact = window.matchMedia("(max-width: 700px)").matches;
    for (const id of mobileControlIds) {
      const element = $(id);
      const marker = originalSlots.get(id);
      if (!element || !marker) continue;
      if (compact) mobileMoved?.appendChild(element);
      else marker.parentNode?.insertBefore(element, marker.nextSibling);
    }
    if (!compact) closeMobileControls();
    syncLibraryCollapseButton();
  }
  moreButton?.addEventListener("click", () => {
    if (!morePanel) return;
    morePanel.hidden = !morePanel.hidden;
    moreButton.setAttribute("aria-expanded", String(!morePanel.hidden));
  });
  $("mobileLyricsButton")?.addEventListener("click", () => { closeMobileControls(); openLyrics(); });
  morePanel?.addEventListener("click", event => {
    if (event.target.closest("#queueButton, #toggleRight")) closeMobileControls();
  });
  document.addEventListener("pointerdown", event => {
    if (!event.target.closest("#mobileControlsPanel, #mobileMoreControls")) closeMobileControls();
  });
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMobileControls(); });
  window.addEventListener("resize", arrangeMobileControls);
  arrangeMobileControls();

  $("queueButton")?.addEventListener("click", toggleQueuePanel);
  $("closeQueue")?.addEventListener("click", closeQueuePanel);
  $("queueBackdrop")?.addEventListener("click", closeQueuePanel);
  $("toggleRight")?.addEventListener("click", () => $("app")?.classList.toggle("right-collapsed"));
  $("expandLyrics")?.addEventListener("click", openLyrics);
  $("closeLyricsModal")?.addEventListener("click", () => hide("lyricsModal"));
  $("closeArtistModal")?.addEventListener("click", () => hide("artistModal"));
  $("cancelPlaylist")?.addEventListener("click", () => hide("playlistModal"));
  $("npHeart")?.addEventListener("click", () => toggleLike(currentSong));
  $("cancelProfile")?.addEventListener("click", () => hide("editProfileModal"));
  $("rightArtist")?.addEventListener("click", openCurrentArtist);
  $("artistInfo")?.addEventListener("click", event => { if (event.target.closest("button, a")) openCurrentArtist(); });
  $("queueList")?.addEventListener("dragstart", event => { const item = event.target.closest("[data-queue-position]"); if (item) { event.dataTransfer.setData("text/plain", item.dataset.queuePosition); event.dataTransfer.effectAllowed = "move"; } });
  $("queueList")?.addEventListener("dragover", event => { if (event.target.closest("[data-queue-position]")) event.preventDefault(); });
  $("queueList")?.addEventListener("drop", event => { const item = event.target.closest("[data-queue-position]"); if (!item) return; event.preventDefault(); const from = Number(event.dataTransfer.getData("text/plain")), to = Number(item.dataset.queuePosition); if (!Number.isInteger(from) || from < 0 || from >= queue.length || to < 0 || to >= queue.length || from === to) return; queue.splice(to, 0, queue.splice(from,1)[0]); saveUserData(); renderQueue(); });
  ["previewLines", "fullLyrics"].forEach(id => $(id)?.addEventListener("click", event => { const line = event.target.closest("[data-lyric]"); if (!line) return; const entry = currentLyrics[Number(line.dataset.lyric)]; if (entry) { audio.currentTime = entry.time; syncVideo(true); updateLyricsHighlight(); } }));
  $("editProfileModal")?.addEventListener("click", event => { if (event.target === $("editProfileModal")) hide("editProfileModal"); });
  $("lyricsModal")?.addEventListener("click", event => { if (event.target === $("lyricsModal")) hide("lyricsModal"); });
  // Keyboard shortcuts

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeAllOverlays();
      return;
    }

    const tag = event.target.tagName;

    if (
      ["INPUT", "TEXTAREA", "BUTTON"].includes(tag) ||
      event.target.isContentEditable ||
      !currentAccount()
    ) {
      return;
    }

    if (event.code === "Space") {
      event.preventDefault();
      togglePlayback();
    }

    if (event.ctrlKey && event.key === "ArrowRight") {
      event.preventDefault();
      nextTrack();
    }

    if (event.ctrlKey && event.key === "ArrowLeft") {
      event.preventDefault();
      previousTrack();
    }
  });

  // Close modals when clicking their backdrop

  [
    "artistModal",
    "playlistModal",
    "editProfileModal",
    "confirmModal"
  ].forEach(id => {
    $(id)?.addEventListener("click", event => {
      if (event.target !== $(id)) return;

      if (id === "confirmModal") {
        closeConfirm(false);
      } else {
        hide(id);
      }
    });
  });

  // Audio events

  audio.addEventListener("play", () => { updatePlayerUI(); syncVideo(); });
  audio.addEventListener("pause", () => { updatePlayerUI(); syncVideo(); });

  audio.addEventListener("timeupdate", () => {
    updateProgress();
    updateLyricsHighlight();
    syncVideo();

    // A play counts after 15 seconds of listening.
    if (audio.currentTime >= 15) {
      countSongPlay();
    }
  });

  audio.addEventListener("loadedmetadata", updateProgress);
  audio.addEventListener("seeked", () => syncVideo(true));
  audio.addEventListener("durationchange", updateProgress);

  audio.addEventListener("ended", () => {
    if (repeatMode === 2) {
      audio.currentTime = 0;
      playSong(currentSong);
      return;
    }

    if (queue.length) {
      nextTrack();
      return;
    }

    const position = playbackOrder.indexOf(currentSong);

    if (
      repeatMode === 0 &&
      !shuffleEnabled &&
      position === playbackOrder.length - 1
    ) {
      audio.pause();
      audio.currentTime = 0;
      updatePlayerUI();
      return;
    }

    nextTrack();
  });

  audio.addEventListener("error", () => {
    if (!audio.getAttribute("src")) return;

    console.error(
      "Unable to load audio:",
      audio.getAttribute("src")
    );

    showToast("Audio file missing or unsupported.");
  });

  // Browser resize

  window.addEventListener("resize", () => {
    if (isMobile()) {
      $("app")?.classList.add("sidebar-collapsed");
    }
  });
}




/* ============================================================
   16. INITIALIZATION
============================================================ */

function initialize() {
  if (!audio) {
    console.error(
      "SPHINX: Missing #audioPlayer element."
    );
    return;
  }

  bindEvents();

  ensureDiscoverPage();

  // Start with mobile sidebar closed.
  if (isMobile()) {
    $("app")?.classList.add("sidebar-collapsed");
    $("app")?.classList.add("right-collapsed");
  }

  // Restore demo session.
  if (activeUser && accounts[activeUser]) {
    normalizeAccount(accounts[activeUser]);
    loadUserData();
    updateAccountUI();
    hide("authScreen");
  } else {
    activeUser = "";
    show("authScreen");
  }

  // Prepare first song without automatically playing.
  loadSong(0);

  updateSidebar();
  renderQueue();

  navigate("home");

  ["seek", "npSeek", "volume"].forEach(id => {
    setRangeFill($(id));
  });

  console.log("SPHINX Music Player initialized.");
}

if (document.readyState === "loading") {
  document.addEventListener(
    "DOMContentLoaded",
    initialize
  );
} else {
  initialize();
}