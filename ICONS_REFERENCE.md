# 🎨 Platform Icons Reference Guide

Complete reference of all 50+ platform icons available in the Futuristic Link Tree.

---

## 📋 How to Use Platform Icons

### In Your Configuration File (config.json)

Each link uses a `platform` ID that automatically loads the correct icon:

```json
{
  "title": "Follow on Twitter",
  "platform": "twitter",
  "url": "https://twitter.com/yourusername"
}
```

The icon will automatically display based on the `platform` ID. No need to manually specify image paths!

### Icon Locations

All platform icons are stored in:
```
assets/icons/platforms/[platform-id].svg
```

For example:
- `assets/icons/platforms/twitter.svg`
- `assets/icons/platforms/youtube.svg`
- `assets/icons/platforms/discord.svg`

---

## 📌 Complete Platform List (50+)

### 🔵 SOCIAL MEDIA (11)

| Icon | Platform | ID | Color | Category |
|------|----------|-----|-------|----------|
| 🐦 | Twitter/X | `twitter` | #1DA1F2 | social |
| 📷 | Instagram | `instagram` | #E4405F | social |
| 📸 | TikTok | `tiktok` | #000000 | social |
| 👥 | Facebook | `facebook` | #1877F2 | social |
| 🔴 | Reddit | `reddit` | #FF4500 | social |
| 👻 | Snapchat | `snapchat` | #FFFC00 | social |
| 📌 | Pinterest | `pinterest` | #E60023 | social |
| 📝 | Tumblr | `tumblr` | #36465D | social |
| 💬 | Threads | `threads` | #000000 | social |
| 🌌 | Bluesky | `bluesky` | #1185FE | social |
| 🦣 | Mastodon | `mastodon` | #563ACC | social |
| 🟣 | Minds | `minds` | #0096FF | social |

### 🎬 VIDEO & STREAMING (6)

| Icon | Platform | ID | Color | Category |
|------|----------|-----|-------|----------|
| 🎥 | YouTube | `youtube` | #FF0000 | video |
| 🟣 | Twitch | `twitch` | #9146FF | streaming |
| 📹 | Vimeo | `vimeo` | #1AB7EA | video |
| ⏯️ | Dailymotion | `dailymotion` | #0066FF | video |
| 📺 | Rumble | `rumble` | #11B000 | video |
| 🎮 | YouTube Gaming | `youtube-gaming` | #FF0000 | gaming |

### 🎮 GAMING (4)

| Icon | Platform | ID | Color | Category |
|------|----------|-----|-------|----------|
| 🎮 | Steam | `steam` | #1B2838 | gaming |
| 🎯 | Epic Games | `epic-games` | #313131 | gaming |
| 🕹️ | itch.io | `itch-io` | #FA5C5C | gaming |
| 💻 | Twitch Gaming | `twitch-gaming` | #9146FF | gaming |

### 🎵 MUSIC & AUDIO (3)

| Icon | Platform | ID | Color | Category |
|------|----------|-----|-------|----------|
| 🎧 | Spotify | `spotify` | #1DB954 | music |
| 🍎 | Apple Music | `apple-music` | #FA243C | music |
| ☁️ | SoundCloud | `soundcloud` | #FF6600 | music |

### 👨‍💼 PROFESSIONAL (10)

| Icon | Platform | ID | Color | Category |
|------|----------|-----|-------|----------|
| 🐙 | GitHub | `github` | #181717 | professional |
| 💼 | LinkedIn | `linkedin` | #0A66C2 | professional |
| 🌐 | Personal Website | `website` | #0066FF | professional |
| ✍️ | Blog | `blog` | #FF6B6B | professional |
| 📖 | Medium | `medium` | #000000 | professional |
| 📰 | Substack | `substack` | #FF6D00 | professional |
| 🎨 | Behance | `behance` | #053EFF | professional |
| 🎯 | Dribbble | `dribbble` | #EA699C | professional |
| 🖼️ | ArtStation | `artstation` | #13AFF0 | professional |
| 🎭 | DeviantArt | `deviantart` | #05CC47 | professional |

### 💰 SUPPORT & FUNDING (5)

| Icon | Platform | ID | Color | Category |
|------|----------|-----|-------|----------|
| ❤️ | Patreon | `patreon` | #FF424D | support |
| ☕ | Ko-fi | `ko-fi` | #13C3FF | support |
| ☕ | Buy Me a Coffee | `buymeacoffee` | #FFDD00 | support |
| ⭐ | GitHub Sponsors | `github-sponsor` | #EA4AAA | support |
| 💝 | Linktree | `linktree` | #39E09B | reference |

### 💳 PAYMENT (2)

| Icon | Platform | ID | Color | Category |
|------|----------|-----|-------|----------|
| 🅿️ | PayPal | `paypal` | #003087 | payment |
| 💳 | Stripe | `stripe` | #635BFF | payment |

### 🛍️ SHOPPING (3)

| Icon | Platform | ID | Color | Category |
|------|----------|-----|-------|----------|
| 🛒 | Shopify | `shopify` | #96BE39 | shop |
| 🧵 | Gumroad | `gumroad` | #36454F | shop |
| 🎁 | Etsy | `etsy` | #F1641E | shop |

### 💬 CONTACT (3)

| Icon | Platform | ID | Color | Category |
|------|----------|-----|-------|----------|
| ✉️ | Email | `email` | #EA4335 | contact |
| 💬 | WhatsApp | `whatsapp` | #25D366 | contact |
| ✈️ | Telegram | `telegram` | #0088cc | contact |

### 🎬 COMMUNITY (1)

| Icon | Platform | ID | Color | Category |
|------|----------|-----|-------|----------|
| 💙 | Discord | `discord` | #5865F2 | community |

### 🎭 ENTERTAINMENT (3)

| Icon | Platform | ID | Color | Category |
|------|----------|-----|-------|----------|
| 🎬 | IMDb | `imdb` | #F5D547 | entertainment |
| 🎞️ | Letterboxd | `letterboxd` | #00D235 | entertainment |
| 📚 | Goodreads | `goodreads` | #372213 | entertainment |

---

## 🔄 Copy-Paste Link Templates

### Social Media
```json
{
  "title": "Follow on Twitter",
  "platform": "twitter",
  "url": "https://twitter.com/yourusername"
}
```

```json
{
  "title": "Follow on Instagram",
  "platform": "instagram",
  "url": "https://instagram.com/yourusername"
}
```

```json
{
  "title": "Follow on TikTok",
  "platform": "tiktok",
  "url": "https://tiktok.com/@yourusername"
}
```

### Video & Streaming
```json
{
  "title": "Subscribe on YouTube",
  "platform": "youtube",
  "url": "https://youtube.com/@yourusername"
}
```

```json
{
  "title": "Watch My Streams",
  "platform": "twitch",
  "url": "https://twitch.tv/yourusername"
}
```

### Gaming
```json
{
  "title": "Steam Profile",
  "platform": "steam",
  "url": "https://steamcommunity.com/id/yourusername"
}
```

```json
{
  "title": "Play on itch.io",
  "platform": "itch-io",
  "url": "https://itch.io/profile/yourusername"
}
```

### Music
```json
{
  "title": "Listen on Spotify",
  "platform": "spotify",
  "url": "https://open.spotify.com/user/yourusername"
}
```

### Professional
```json
{
  "title": "GitHub Projects",
  "platform": "github",
  "url": "https://github.com/yourusername"
}
```

```json
{
  "title": "LinkedIn Profile",
  "platform": "linkedin",
  "url": "https://linkedin.com/in/yourname"
}
```

```json
{
  "title": "My Portfolio",
  "platform": "website",
  "url": "https://yourportfolio.com"
}
```

### Support
```json
{
  "title": "Support on Patreon",
  "platform": "patreon",
  "url": "https://patreon.com/yourusername"
}
```

```json
{
  "title": "Buy Me a Coffee",
  "platform": "buymeacoffee",
  "url": "https://buymeacoffee.com/yourusername"
}
```

```json
{
  "title": "Support on Ko-fi",
  "platform": "ko-fi",
  "url": "https://ko-fi.com/yourusername"
}
```

### Contact
```json
{
  "title": "Email Me",
  "platform": "email",
  "url": "mailto:your@email.com"
}
```

```json
{
  "title": "Message on Discord",
  "platform": "discord",
  "url": "https://discord.gg/yourserver"
}
```

---

## 🎨 Color Values

Each platform has a branded color value. You can use these for custom styling:

```css
/* Example: Color a link with Twitter's brand color */
.link-twitter {
  color: #1DA1F2;
  border-color: #1DA1F2;
}
```

Full list available in: `assets/icons/icons-manifest.json`

---

## 🔌 Adding Custom Platforms

Want to add a platform not in the list?

### 1. Create the Icon
- Design an SVG icon (24x24 recommended)
- Save as: `assets/icons/platforms/[platform-name].svg`

### 2. Update Manifest
Edit `assets/icons/icons-manifest.json`:

```json
{
  "id": "my-platform",
  "name": "My Platform",
  "url": "https://myplatform.com",
  "category": "custom",
  "icon": "my-platform.svg",
  "color": "#FF0000",
  "description": "My custom platform"
}
```

### 3. Use in Config
```json
{
  "title": "My Platform",
  "platform": "my-platform",
  "url": "https://myplatform.com/yourusername"
}
```

---

## 📊 Platform Categories

| Category | Count | Examples |
|----------|-------|----------|
| social | 12 | Twitter, Instagram, TikTok, Reddit, Facebook |
| streaming | 5 | Twitch, YouTube, Vimeo, Dailymotion, Rumble |
| gaming | 4 | Steam, Epic Games, itch.io |
| music | 3 | Spotify, Apple Music, SoundCloud |
| professional | 10 | GitHub, LinkedIn, Portfolio, Medium |
| support | 5 | Patreon, Ko-fi, Buy Me a Coffee |
| payment | 2 | PayPal, Stripe |
| shop | 3 | Shopify, Gumroad, Etsy |
| contact | 3 | Email, WhatsApp, Telegram |
| community | 1 | Discord |
| entertainment | 3 | IMDb, Letterboxd, Goodreads |
| **TOTAL** | **51** | **All major platforms** |

---

## 💡 Tips

- **Use Consistent Titles:** "Follow on Twitter" vs "Twitter" - pick one style
- **Organize by Category:** Group similar platforms together
- **Limit Links:** 5-10 links work best for mobile
- **Test URLs:** Make sure all links work before deploying
- **Use Platform IDs:** Let the system handle icons automatically

---

## 🔗 Full URL Format Examples

Different platforms have different URL structures:

```
Twitter:        https://twitter.com/yourusername
Instagram:      https://instagram.com/yourusername
YouTube:        https://youtube.com/@yourusername
TikTok:         https://tiktok.com/@yourusername
Twitch:         https://twitch.tv/yourusername
Discord:        https://discord.gg/yourserver
GitHub:         https://github.com/yourusername
LinkedIn:       https://linkedin.com/in/yourname
Email:          mailto:your@email.com
WhatsApp:       https://wa.me/1234567890
Telegram:       https://t.me/yourusername
Patreon:        https://patreon.com/yourusername
Ko-fi:          https://ko-fi.com/yourusername
```

---

**Need help? See [QUICK_START.md](QUICK_START.md) or [README.md](README.md)**
