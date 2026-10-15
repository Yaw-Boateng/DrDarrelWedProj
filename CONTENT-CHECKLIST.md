# Content Checklist — Emmanuel & Darell's Wedding Website

This is everything still running on placeholder/template content. Fill in
each item below (directly in this file is fine) and send it back — once
I have the real details I'll drop them into the site.

Items are grouped by page, in the order they appear on the site.

---

## 0. Core details (used across every page)

- [ ] **Couple's names, confirmed spelling.** Right now the site has three
      different versions:
  - Hero heading: "EMMA & DARREL"
  - Page `<title>` tags: "Emmanuel & Darrel"
  - Your logo artwork: "Emmanuel & Darell"

  Which is correct — and should it read the same everywhere? →
  `__________________________`

- [ ] **Wedding date.** Your logo shows **31.10.2026**, but no date is
      printed anywhere in the site text itself (only the hashtag).
      Confirm the date, and whether it should be added somewhere visible
      (e.g. near the hashtag in the hero). → `__________________________`

- [ ] **Hashtag.** Currently `#OurBigDay2026` everywhere. Confirm this is
      final. → `__________________________`

- [ ] `assets/img/hashtag.webp` — this file is in the project but isn't
      used anywhere on the site yet. What is it for / where should it go?

---

## 1. Homepage (`index.html`)

- [ ] **Traditional Ceremony** — venue name, address, and a real maps
      link for the "Directions →" tag (currently decorative, not clickable).
- [ ] **Reception** — same: venue name, address, and maps link.
- [ ] Hero photos (`hero-1.jpg`, `hero-2.jpg`) — real couple photos to
      replace the stock placeholders.
- [ ] Hover-preview photos (`panel-details.jpg`, `panel-style.jpg`,
      `panel-program.jpg`, `panel-party.jpg`, `panel-stay.jpg`,
      `panel-photos.jpg`) — one photo per nav section, shown when a
      desktop visitor hovers that link.

## 2. Wedding Details (`details.html`)

- [ ] **Gift/registry info.** Current text: *"Your presence at our
      celebration is the greatest gift of all. Should you wish to honor
      us further, a contribution toward our new beginning would be
      warmly received."* — keep as-is?
      → `__________________________`
- [ ] **Style guide / dress code.** Current text: *"soft cream, warm
      gold, and earthy neutrals"* — this doesn't match the site's new
      Crimson/Rose/Olive/Coral/Orange color scheme. What should guests
      actually be told to wear? → `__________________________`
- [x] **RSVP details** — added as a new card on this page: venue
      (Gospel Ambassadors Church, Haatso Ecomog), Saturday 31 October
      2026 at 12:00 PM, and contacts Sebastian/Eunice/Gideon with
      click-to-call numbers.
- [ ] **MoMo gift details.** Added a third "Send a MoMo Gift" card next
      to Details and RSVP, but it's still a TODO placeholder — I need
      the actual **network** (MTN MoMo / Telecel Cash / AirtelTigo
      Money), **number**, and **registered account name** before this
      goes live, so no one sends money to a placeholder.
      → `__________________________`

## 3. Wedding Program (`program.html`)

- [ ] Confirm the real order of events and times. Current placeholder
      schedule:

  | Time | Event |
  |---|---|
  | 10:00 AM | Guest Arrival & Seating |
  | 10:30 AM | Ceremony Begins |
  | 12:00 PM | Photographs |
  | 1:00 PM | Reception Doors Open |
  | 2:00 PM | Grand Entrance & Toasts |
  | 3:00 PM | Dinner Service |
  | 4:30 PM | First Dance & Celebration |

  → Replace with your actual run-of-show (add/remove rows as needed).

## 4. Meet the Wedding Party (`party.html`)

Updated: now pulls real photos from `assets/img/Bridal team img/` and
uses each file's name, split into two squads by filename. Still
generic and need confirming:

| Name | Squad | Current role shown |
|---|---|---|
| Betty | Bride's Squad | Bridesmaid |
| Comfort | Bride's Squad | Bridesmaid |
| Efua | Bride's Squad | Bridesmaid |
| Joana | Bride's Squad | Bridesmaid |
| Mandie | Bride's Squad | Bridesmaid |
| Elton | Groom's Squad | Groomsman |
| Nyamegya | Groom's Squad | Groomsman |
| Quaynor | Groom's Squad | Groomsman |

→ For each person, confirm their **actual role** (e.g. Maid of Honor /
Best Man vs. regular Bridesmaid/Groomsman) and, if you'd like it shown,
a short **relationship line** (e.g. "The bride's sister").
→ Also confirm: is this the full wedding party, or are there more to
add (or fewer, to remove)? There's also an unnamed group photo in that
folder (`PHOTO-2026-09-19-16-28-09.jpg`) — let me know if that's meant
to be someone specific.

## 5. Accommodation (`accommodation.html`)

- [ ] **Recommended Hotel** — real name, city/address, distance from
      venue, and the actual group-rate code or booking instructions
      (current text just says "mention our names"). Plus a real photo
      (currently reuses the same `venue.jpg` placeholder for both options).
- [ ] **Alternative Option** — same details for the budget-friendly
      guesthouse/hotel.

## 6. Photos (`photos.html`)

- [ ] `photo-1.jpg` through `photo-6.jpg` — real photos for the gallery
      grid (currently stock placeholders).
- [ ] **Guest photo-sharing album link.** I added a "Share Your Photos"
      button on this page so guests can upload their own pictures from
      the day, but it currently points to a placeholder
      (`#add-your-album-link-here`). Send me the real link once you've
      set up a shared album (Google Photos, Google Drive, Dropbox, etc.)
      and I'll wire it in. → `__________________________`

## 7. Footer (all pages)

- [ ] Current footer text: *"Built with ♥ — Template by You"* — this
      reads like placeholder copy. Replace with final text, or leave as
      a quiet credit line? → `__________________________`

---

### How to send this back

Easiest is to fill in the blanks directly in this file and tell me
it's done — I'll read it and update the site. Photos can just be
dropped into `assets/img/` with the filenames listed above, or sent to
me directly and I'll place them.
