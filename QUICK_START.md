# 🚀 Quick Start Guide

## Getting Started in 5 Minutes

### Step 1: Choose Your Template
Visit [index.html](index.html) and preview all 6 templates:
- **VR Chat Dimension** - Cyberpunk holographic
- **Basic Clean** - Professional minimalist  
- **Hacker Terminal** - Matrix terminal aesthetic
- **Gaming Esports** - Bold tournament style
- **Cosmic Nebula** - Deep space sci-fi
- **Synthwave Retro** - 80s/90s nostalgia

### Step 2: Copy Configuration File
Navigate to your chosen template folder:
```
templates/[template-name]/config-example.json
```

Copy this file and rename it to:
```
config.json
```

### Step 3: Edit Your Configuration
Open `config.json` and fill in your information:

```json
{
  "profileName": "Your Name",
  "bio": "Your bio here",
  "profileImage": "https://url-to-your-avatar.png",
  "links": [
    {
      "title": "My Channel",
      "platform": "youtube",
      "url": "https://youtube.com/@yourusername"
    }
  ]
}
```

### Step 4: Add Your Links
Use the [Platform Reference](#platform-reference) below to add links with platform icons.

### Step 5: Preview Locally
Open the template's `index.html` file in your browser and verify everything looks good.

### Step 6: Deploy to GitHub
```bash
git init
git add .
git commit -m "Initial commit: My Link Tree"
git branch -M main
git remote add origin https://github.com/yourusername/open-source-link-tree.git
git push -u origin main
```

Then enable GitHub Pages in repo settings.

---

## 📱 Platform Reference

### Supported Platforms (50+)

#### Social Media
| Platform | ID | URL | Category |
|----------|----|----|----------|
| Twitter/X | `twitter` | https://twitter.com | social |
| Instagram | `instagram` | https://instagram.com | social |
| TikTok | `tiktok` | https://tiktok.com | social |
| Reddit | `reddit` | https://reddit.com | social |
| Facebook | `facebook` | https://facebook.com | social |
| Snapchat | `snapchat` | https://snapchat.com | social |
| Pinterest | `pinterest` | https://pinterest.com | social |
| Tumblr | `tumblr` | https://tumblr.com | social |
| Threads | `threads` | https://threads.net | social |
| Bluesky | `bluesky` | https://bsky.app | social |
| Mastodon | `mastodon` | https://mastodon.social | social |

#### Video Platforms
| Platform | ID | URL | Category |
|----------|----|----|----------|
| YouTube | `youtube` | https://youtube.com | video |
| Twitch | `twitch` | https://twitch.tv | streaming |
| Vimeo | `vimeo` | https://vimeo.com | video |
| Dailymotion | `dailymotion` | https://dailymotion.com | video |
| Rumble | `rumble` | https://rumble.com | video |

#### Gaming
| Platform | ID | URL | Category |
|----------|----|----|----------|
| Steam | `steam` | https://steampowered.com | gaming |
| Epic Games | `epic-games` | https://epicgames.com | gaming |
| Discord | `discord` | https://discord.com | community |
| itch.io | `itch-io` | https://itch.io | gaming |

#### Music
| Platform | ID | URL | Category |
|----------|----|----|----------|
| Spotify | `spotify` | https://spotify.com | music |
| Apple Music | `apple-music` | https://music.apple.com | music |
| SoundCloud | `soundcloud` | https://soundcloud.com | music |

#### Professional
| Platform | ID | URL | Category |
|----------|----|----|----------|
| GitHub | `github` | https://github.com | professional |
| LinkedIn | `linkedin` | https://linkedin.com | professional |
| Portfolio | `website` | https://yoursite.com | professional |
| Blog | `blog` | https://blog.yoursite.com | professional |
| Medium | `medium` | https://medium.com | professional |
| Substack | `substack` | https://substack.com | professional |
| Behance | `behance` | https://behance.net | professional |
| Dribbble | `dribbble` | https://dribbble.com | professional |
| ArtStation | `artstation` | https://artstation.com | professional |
| DeviantArt | `deviantart` | https://deviantart.com | professional |

#### Support & Funding
| Platform | ID | URL | Category |
|----------|----|----|----------|
| Patreon | `patreon` | https://patreon.com | support |
| Ko-fi | `ko-fi` | https://ko-fi.com | support |
| Buy Me a Coffee | `buymeacoffee` | https://buymeacoffee.com | support |
| GitHub Sponsors | `github-sponsor` | https://github.com/sponsors | support |

#### Shopping & Payment
| Platform | ID | URL | Category |
|----------|----|----|----------|
| Shopify | `shopify` | https://shopify.com | shop |
| Gumroad | `gumroad` | https://gumroad.com | shop |
| Etsy | `etsy` | https://etsy.com | shop |
| PayPal | `paypal` | https://paypal.com | payment |
| Stripe | `stripe` | https://stripe.com | payment |

#### Contact
| Platform | ID | URL | Category |
|----------|----|----|----------|
| Email | `email` | mailto:your@email.com | contact |
| WhatsApp | `whatsapp` | https://wa.me/1234567890 | contact |
| Telegram | `telegram` | https://t.me/username | contact |

#### Entertainment
| Platform | ID | URL | Category |
|----------|----|----|----------|
| IMDb | `imdb` | https://imdb.com | entertainment |
| Letterboxd | `letterboxd` | https://letterboxd.com | entertainment |
| Goodreads | `goodreads` | https://goodreads.com | entertainment |

#### Other
| Platform | ID | URL | Category |
|----------|----|----|----------|
| Linktree | `linktree` | https://linktree.com | reference |
| Minds | `minds` | https://minds.com | social |

---

## 💡 Configuration Examples

### Example 1: Creator Profile
```json
{
  "profileName": "Content Creator",
  "bio": "Gaming, streaming, and content creation",
  "profileImage": "https://your-avatar-url.jpg",
  "links": [
    {
      "title": "Watch My Streams",
      "platform": "twitch",
      "url": "https://twitch.tv/yourusername"
    },
    {
      "title": "Subscribe on YouTube",
      "platform": "youtube",
      "url": "https://youtube.com/@yourusername"
    },
    {
      "title": "Join Discord",
      "platform": "discord",
      "url": "https://discord.gg/yourserver"
    },
    {
      "title": "Support Me",
      "platform": "patreon",
      "url": "https://patreon.com/yourusername"
    }
  ]
}
```

### Example 2: Professional Portfolio
```json
{
  "profileName": "Jane Developer",
  "bio": "Full-stack developer and open source enthusiast",
  "profileImage": "https://github.com/yourusername.png",
  "links": [
    {
      "title": "Portfolio Website",
      "platform": "website",
      "url": "https://yourportfolio.com"
    },
    {
      "title": "GitHub Projects",
      "platform": "github",
      "url": "https://github.com/yourusername"
    },
    {
      "title": "LinkedIn",
      "platform": "linkedin",
      "url": "https://linkedin.com/in/yourname"
    },
    {
      "title": "Email",
      "platform": "email",
      "url": "mailto:your@email.com"
    }
  ]
}
```

### Example 3: Gaming Streamer
```json
{
  "profileName": "Pro Gamer",
  "bio": "Competitive gaming • Esports • Daily streams",
  "profileImage": "https://your-avatar-url.jpg",
  "links": [
    {
      "title": "Live on Twitch",
      "platform": "twitch",
      "url": "https://twitch.tv/yourusername"
    },
    {
      "title": "Gaming on YouTube",
      "platform": "youtube",
      "url": "https://youtube.com/@yourusername"
    },
    {
      "title": "Discord Community",
      "platform": "discord",
      "url": "https://discord.gg/yourserver"
    },
    {
      "title": "Twitter Updates",
      "platform": "twitter",
      "url": "https://twitter.com/yourusername"
    },
    {
      "title": "Steam Profile",
      "platform": "steam",
      "url": "https://steamcommunity.com/id/yourusername"
    }
  ]
}
```

---

## 🎨 Customization

### Custom Colors
Edit the `customization` section in your `config.json`:

```json
"customization": {
  "primaryColor": "#00F0FF",
  "secondaryColor": "#9D00FF",
  "accentColor": "#FF006E"
}
```

### Disable Animations
```json
"customization": {
  "animationsEnabled": false
}
```

### Adjust Theme
```json
"theme": "dark"  // or "light" where applicable
```

---

## ❓ FAQ

**Q: Do I need to install anything?**
A: No! It's pure HTML, CSS, and JavaScript. Just edit the JSON and upload.

**Q: Can I use this with VR Chat?**
A: Yes! All templates are optimized for VR Chat WebView. Use the Desktop mode to view.

**Q: How do I add a custom platform?**
A: Add the icon SVG to `assets/icons/platforms/` and update `icons-manifest.json`.

**Q: Can I use this with GitHub Pages?**
A: Absolutely! Push to GitHub, enable Pages in settings, and your site goes live instantly.

**Q: How do I add more links?**
A: Just add more objects to the `links` array in your `config.json`.

**Q: Can I customize the design?**
A: Yes! Each template has CSS files you can edit. See CUSTOMIZATION.md for details.

**Q: Which template is best for VR Chat?**
A: The VR Chat Dimension template is optimized for VR environments with perfect aspect ratios.

**Q: Can I combine templates?**
A: You can create custom templates by mixing and modifying existing ones.

---

## 📚 Next Steps

1. ✅ Read this Quick Start Guide
2. 📖 Read [README.md](README.md) for project overview
3. 🛠️ Read [DEVELOPMENT_PLAN.md](DEVELOPMENT_PLAN.md) for technical details
4. 🎨 Choose a template and customize it
5. 🚀 Deploy to GitHub Pages

---

**Ready to go live? Let's build something amazing! 🚀✨**

For more detailed help, see the full documentation in README.md
