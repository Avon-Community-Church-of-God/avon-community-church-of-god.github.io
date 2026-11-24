# Avon Community Church of God website

This is the new church website. It's built from plain HTML and CSS, so there's no WordPress to update and no hosting bill. It runs on **GitHub Pages**.

**Nothing here is live yet.** The site goes public only after you finish the launch steps below, once the domain transfer is done.

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `about.html` | About Us |
| `plan-a-visit.html` | Plan a Visit (with a map and an "I'm coming" form) |
| `kingdom-youth.html` | Kingdom Youth (Kingdom Kids and Kingdom Teens) |
| `beliefs.html` | What We Believe |
| `staff.html` | Our Staff |
| `sermons.html` | Sermons (YouTube) |
| `events.html` | Events (links to the Church Center calendar) |
| `give.html` | Give (links to Church Center giving) |
| `contact.html` | Contact (form, phone, email and address) |
| `404.html` | "Page not found" page |
| `assets/css/style.css` | Colors, fonts and layout for every page |
| `CNAME` | Tells GitHub Pages the site's domain is `avonchurch.org` |
| `.nojekyll` | Tells GitHub to serve the files exactly as they are |

## Before launch

### 1. Forms (Formspree) are connected
The Contact and Plan a Visit forms send to the church's Formspree form (`https://formspree.io/f/xoedykdv`), and Formspree emails each message to the address on the Formspree account. Visitors see a thank-you message right on the page. Each email's subject line shows which page it came from.
- **After launch,** send a test message from each page and confirm it arrives. Formspree may ask you to confirm the very first submission by email.
- The free plan covers 50 messages a month. Formspree emails a warning at 50%, 75% and 90%.
- To change where messages go, update the email address in your Formspree account. The website doesn't need to change.

### 2. Check three links
- **Sermons:** The video player shows the newest uploads from the church's YouTube channel (channel ID `UCC1pGTZjn49KOCtVkLAzRPA`, uploads playlist `UUC1pGTZjn49KOCtVkLAzRPA`). New videos appear on their own.
- **Events:** The calendar button opens `https://accog.churchcenter.com/calendar`. Make sure your events show up there.
- **Giving:** The Give button opens `https://accog.churchcenter.com/giving`.

## Photos

Every photo spot on the site now has a picture. To replace one, save your new photo with the **same file name** in `assets/img/photos/` and upload it over the old one. The page updates on its own. Landscape photos at least 1600 pixels wide work best. Keep each file under about 500 KB; a free tool like squoosh.app can shrink them.

**Real photos of our church (keep):**
| File name | Shows |
|---|---|
| `church-building.jpg` | The building from the parking lot (About, "Our story") |
| `plan-visit-hero.jpg` | Our front doors from inside (Plan a Visit, top) |
| `about-vinsons.jpg` | Our sanctuary (About, top) |

**AI-generated placeholders (replace with real photos when you can):**
| File name | Where it appears | Good real photo to take |
|---|---|---|
| `home-hero.jpg` | Home, top | People chatting in the lobby before service |
| `vinson-family.jpg` | Home, "Welcome home" | Coffee and conversation before service |
| `kingdom-kids.jpg` | Home, Kingdom Kids card | A Kingdom Kids class activity |
| `kingdom-teens.jpg` | Home, Kingdom Teens card | Kingdom Teens hanging out |
| `real-people.jpg` | About, "Real people" | A Wednesday Bible study |
| `greeter.jpg` | Plan a Visit, form | A greeter welcoming people at the door |
| `kids-story.jpg` | Kingdom Youth, Kids | Kids during a Bible lesson |
| `teens-bibles.jpg` | Kingdom Youth, Teens | Teens with Bibles open |
| `events.jpg` | Events | A church meal or event |
| `give.jpg` | Give | The congregation worshiping on a Sunday |

**Staff photos** go in `assets/img/staff/`. Use square photos, at least 400 × 400 pixels. Until a photo is added, the page shows the person's initials.
`larry-vinson.jpg` · `jerry-dickinson.jpg` · `elena-williams.jpg` · `darlene-heier.jpg`

> Before you post photos of children, make sure you have their parents' permission.

## Launch steps

The full plan lives in the church's "avonchurch.org on GitHub Pages — Setup Notes" doc.
- **Organization:** github.com/Avon-Community-Church-of-God
- **Repository:** avon-community-church-of-god.github.io (public, branch `main`)
- **DNS:** DreamHost
- **Email:** Microsoft 365 (leave MX, SPF and other TXT records alone)

1. **Add the site files** to the repository root.
2. **Enable Pages:** Settings → Pages → Deploy from a branch → `main` / root. Then test at https://avon-community-church-of-god.github.io
3. **Verify the domain:** Org Settings → Pages → Verified domains → `avonchurch.org`. Then add the TXT record GitHub gives you at DreamHost.
4. **Set the custom domain:** Repository Settings → Pages → Custom domain → `avonchurch.org`. GitHub adds the `CNAME` file for you.
5. **Change DNS at DreamHost:** Add four A records for `avonchurch.org` (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and a CNAME record for `www` → `avon-community-church-of-god.github.io`. Then remove the old A and CNAME records that point to WordPress.
6. **Enforce HTTPS** once GitHub issues the certificate.

## Making changes later

- **Change text:** On GitHub, open the page's `.html` file, click the pencil icon, edit the words, and click **Commit changes**. The live site updates within a minute or two.
- **Service times, address, phone:** These appear on several pages and in every footer. Use the search box at the top of the repository to find each place.
- **Sermons** update on their own from YouTube, and **events** update on their own in Church Center.
- **For bigger changes,** the pages are generated by `src/build.py`, which comes in the download alongside this folder. Edit that file, run `python3 build.py`, and upload the updated pages. Small text fixes can be made directly in the `.html` files.
