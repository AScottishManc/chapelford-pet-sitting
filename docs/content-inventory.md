# Content inventory

What the current site contains, where it has been saved, and what to check with the owner.

**Source:** the live site, www.chapelfordpetsittingservices.co.uk, extracted on 17 October 2026. An older local copy was used at first (MIK-6); the live site is newer (higher prices, Emergency Pet to Vet service removed, different vet on the Links page), so everything here now comes from the live site (MIK-27).

The site's content was last substantially updated around **2018**.

## How this is used

The work is split into two Linear projects:

- **Rebuild** recreates the current site exactly as it is, content and design, on Astro. Nothing below is changed during the Rebuild, apart from fixing obvious typos and broken links.
- **Redesign** is where the owner reviews and updates content. Everything marked ⚠️ is a question for the owner in **MIK-22**, and the changes are applied in MIK-26.

## Where things are

| What | Location |
| --- | --- |
| Text of every page, converted to Markdown | [`docs/old-site/`](old-site/) |
| PDFs (privacy policy, GDPR policy, T&Cs, 2018) | [`docs/old-site/files/`](old-site/files/) |
| Logo, insurer logo | `src/assets/images/brand/` |
| Page photos (home, cats, dogs, other pets, extras) | `src/assets/images/pages/` |
| Sidebar testimonial photos | `src/assets/images/sidebar/` |
| Testimonial pet photos (72) | `src/assets/images/testimonials/` |
| News images (18) | `src/assets/images/news/` |
| Background texture, icons | `src/assets/images/ui/` |
| Favicon, handwriting font | `public/` |

Not carried over: third-party logos from the Links page (we don't have rights to reuse them), Dreamweaver `_notes`, the PHP contact form and reCAPTCHA (dead since 2018), the Google site search box and Google Analytics code (both retired services).

## Business details

| Detail | Live site | Notes |
| --- | --- | --- |
| Business name | Chapelford Pet Sitting Services | |
| Owner | Karen (Mrs Karen Mercer) | |
| Tagline (in logo) | "Where meeting your pets needs & giving you peace of mind are my priorities" | |
| Mobile | 077251 67863 | ⚠️ confirm |
| Landline | 01925 658255 | ⚠️ confirm, or drop |
| Email | chapelfordpetsittingservices@gmail.com | Privacy page also lists ChapelfordPetSittingServices@o2.co.uk ⚠️ confirm which is current |
| Area | Chapelford and surrounding areas of Great Sankey, Warrington, Cheshire | |
| Facebook | facebook.com/pages/Chapelford-Pet-Sitting-Services/172412056163691 | ⚠️ confirm still active |
| Insurance | Cliverton Insurance (since Sept 2017) | ⚠️ confirm still current |
| Domain | www.chapelfordpetsittingservices.co.uk | |
| Visiting hours | 8am – 6pm, outside by arrangement (extra charge) | ⚠️ confirm |
| Credentials | Fully insured, police checked, Pet First Aid qualified, references available, Cat Health and Welfare foundation qualification (Distinction) | ⚠️ police check may need renewing, or re-wording as DBS checked |

## Pages

### Home → MIK-8
Short intro: professional pet sitting for cats, small to medium dogs and other small animals in their own home. "About me" bullet list of credentials (above).

### Services → MIK-9
Three pages with the same pattern: intro, then a list of services each with price, duration and what's included.

| Service | Cats | Dogs | Other pets | Price | Duration |
| --- | --- | --- | --- | --- | --- |
| Feeding / Toilet break † | ✓ | ✓ | ✓ | £5.00 | 15 mins |
| Sitting / Home visit | ✓ | ✓ * | ✓ | £9.00 | 30 mins, up to 3×/day |
| Walking | | ✓ | | £9.00 | 30 mins |
| Longer visits | | ✓ | | Please call | |

† Only within Chapelford and the immediate area.
\* Dog home visit is half price when combined with a walk in the same visit.

Pricing is per visit, not per animal.

The Emergency Pet to Vet service (£18) has been removed from the service pages and the price table, but is still mentioned in **FAQ question 11** ⚠️ owner to confirm whether it is still offered.

### Prices and extras → MIK-10
- Price table as above. ⚠️ Prices may have changed again since the site was last updated.
- Added extras (free with visits): bring in post, lights/radio, curtains/blinds, water plants, wheelie bins out; buying milk and bread at extra charge.
- Sidebar promotion on the Cats page: "10% discount off first booking for new clients within the Chapelford area" ⚠️ still offered?
- Payment: T&Cs say cash or cheque, full payment at consultation ⚠️ likely outdated.

### Testimonials → MIK-11
- **72 testimonials**, each with pet name(s), a quote and a small pet photo (150px). Newest first.
- No dates on any testimonial. They are numbered 1–73, so order is known.
- Only pet names are shown, not customer names.
- Three short extracts are used as sidebar boxes (Dogs, Contact and FAQ pages); see `src/content/sidebar.yaml`.

### FAQ → MIK-12
13 questions: area covered, animals, who visits, consultation process, number of visits, last-minute bookings, arranging a consultation, hours, visit length, medication (including injections), emergencies, pet illness, delayed return.
- ⚠️ Mentions payment at consultation and the £18 vet fee (service no longer listed elsewhere).
- Typos fixed on the way across (e.g. "acccept", "consultantion", "hestate").

### News → MIK-13
- **24 posts, May 2013 – January 2018.** Mostly qualifications, training, insurance changes, booking notices.
- ⚠️ Nothing for over 8 years, so it makes the business look inactive. Recommendation for the Redesign: drop the News page and fold the useful parts (qualifications, training, insurance) into an About section.

### Contact → MIK-14
Phone, mobile and email. The old contact form is not rebuilt.

### Links → MIK-23
Nine recommended sites: Westbrook Vets, Hoo Farm Animal Kingdom, Dogs Trust, International Cat Care, APDT, Vicky Halls, Feliway, Your Cat, Your Dog magazines.
- Two URLs are broken on the live site (`https://https://...`). Fixed in the Rebuild with the correct addresses: Westbrook Vets → https://www.westbrookvets.co.uk/, Hoo Farm Animal Kingdom (now Hoo Zoo) → https://www.hoo-zoo.com/.
- ⚠️ Recommendation for the Redesign: drop as a separate page.

### Privacy policy and T&Cs → MIK-15
- Privacy policy dated **May 2018**, written for the old site: mentions Google Analytics cookies, the Facebook Like button and the contact form. ⚠️ Needs rewriting in the Redesign.
- T&Cs: liability, keys kept in a secure box, windows, cats indoors, no aggressive animals, dogs on lead, max 2 dogs, owner supplies food/meds, vet fees, false information, consultation required, 48-hour cancellation (50% retained), no refund for early return. ⚠️ Owner to review; refers to cheques payable to "Mrs Karen Mercer".
- PDF copies of all three documents are in `docs/old-site/files/`.

## Images

- Most images are small (150×150px). Fine as thumbnails, too small for large feature photos. ⚠️ New photos needed in the Redesign.
- Five News images have larger originals (up to 3024px), taken from the live site.
- Logo exists at 763×245px (PNG). A vector (SVG) or larger version would be better for the Redesign.

## Design (recreated in MIK-7)

- Colours: navy `#152d4a`, `#2a476c`, `#305680`; soft blue `#7d93b5`; pale blue `#ddebec`; light grey `#f0efef`; warm `#e8dddb`.
- Fonts: "Jenna Sue" for headings and quotes; Reenie Beanie for testimonial captions. Body text names Montserrat Alternates, but the font was never loaded, so visitors see their default sans-serif.
