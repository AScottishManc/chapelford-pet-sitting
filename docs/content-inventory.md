# Content inventory

What the old site contained, where it has been saved, and what needs checking before it goes on the new site.

The old site was last updated in **2018** (some pages 2013). Everything with a ⚠️ needs the owner to confirm it is still accurate.

## Where things are

| What | Location |
| --- | --- |
| Text of every old page, converted to Markdown | [`docs/old-site/`](old-site/) |
| Old PDFs (privacy policy, GDPR policy, T&Cs, 2018) | [`docs/old-site/files/`](old-site/files/) |
| Logo, insurer logo | `src/assets/images/brand/` |
| Page photos (home, cats, dogs, other pets, extras) | `src/assets/images/pages/` |
| Testimonial pet photos (72) | `src/assets/images/testimonials/` |
| News images (18) | `src/assets/images/news/` |
| Favicon | `public/favicon.ico` |

Not carried over: third-party logos from the Links page (we don't have rights to reuse them), old UI icons, Dreamweaver `_notes`, the PHP contact form and reCAPTCHA (dead since 2018).

## Business details

| Detail | Old site | Notes |
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
| Old domain | www.chapelfordpetsittingservices.co.uk | |
| Visiting hours | 8am – 6pm, outside by arrangement (extra charge) | ⚠️ confirm |
| Credentials | Fully insured, police checked, Pet First Aid qualified, references available, Cat Health and Welfare foundation qualification (Distinction) | ⚠️ police check may need renewing/ re-wording as DBS checked |

## Pages

### Home → MIK-8
Short intro: professional pet sitting for cats, small to medium dogs and other small animals in their own home. "About me" bullet list of credentials (above). Very thin — the new home page will need more.

### Services → MIK-9
Three pages with the same pattern: intro, then a list of services each with price, duration and what's included.

| Service | Cats | Dogs | Other pets | Old price | Duration |
| --- | --- | --- | --- | --- | --- |
| Feeding / Toilet break † | ✓ | ✓ | ✓ | £4.50 | 15 mins |
| Sitting / Home visit | ✓ | ✓ * | ✓ | £8.00 | 30 mins, up to 3×/day |
| Walking | | ✓ | | £8.00 | 30 mins |
| Emergency pet to vet | ✓ | ✓ | ✓ | £18.00 | |
| Longer visits | | ✓ | | Please call | |

† Only within Chapelford and the immediate area.
\* Dog home visit is half price when combined with a walk in the same visit.

Pricing is per visit, not per animal.

### Prices and extras → MIK-10
- ⚠️ **All prices are from 2018 or earlier and almost certainly need updating.**
- Added extras (free with visits): bring in post, lights/radio, curtains/blinds, water plants, wheelie bins out; buying milk and bread at extra charge.
- Old sidebar promotion: "10% discount off first booking for new clients within the Chapelford area" ⚠️ still offered?
- Payment: old T&Cs say cash or cheque, full payment at consultation ⚠️ likely outdated (bank transfer?).

### Testimonials → MIK-11
- **72 testimonials**, each with pet name(s), a quote and a small pet photo (150px). Newest first.
- ⚠️ **No dates** on any testimonial. They are numbered 1–73, so order is known.
- Customer surnames are not shown; only pet names. Good for privacy.
- Six short extracts were used as sidebar quotes on the service pages (see `docs/old-site/_sidebar-snippets.md`), useful as "featured" picks.

### FAQ → MIK-12
13 questions: area covered, animals, who visits, consultation process, number of visits, last-minute bookings, arranging a consultation, hours, visit length, medication (including injections), emergencies, pet illness, delayed return.
- ⚠️ Mentions payment at consultation and the £18 vet fee.
- Typos to fix on the way across (e.g. "acccept", "consultantion", "hestate").

### News → MIK-13 — decision needed
- **24 posts, May 2013 – January 2018.** Mostly qualifications, training, insurance changes, booking notices.
- ⚠️ Nothing for over 8 years, so it makes the business look inactive.
- **Recommendation:** drop the News page. Fold the useful parts (qualifications, training, insurance) into an "About" section on the home page. Only keep News if the owner will post regularly.

### Contact → MIK-14
Phone, mobile and email. Old form removed (phase 1 has no form).

### Links — decision needed
Nine recommended sites: Medivet Warrington (Four Paws), Hoo Farm Animal Kingdom, Dogs Trust, International Cat Care, APDT, Vicky Halls, Feliway, Your Cat, Your Dog magazines.
- ⚠️ Several URLs are old, and one is broken (`https://https://www.hoofarm.com/`).
- **Recommendation:** drop as a separate page. If the owner wants to keep a few (e.g. her vet), add a short "Recommended" section to the FAQ or About.

### Privacy policy and T&Cs → MIK-15
- Privacy policy dated **May 2018**, written for the old site: mentions Google Analytics cookies, Facebook Like button and the contact form. ⚠️ Needs rewriting to match the new site (no form; decide on analytics).
- T&Cs: liability, keys kept in a secure box, windows, cats indoors, no aggressive animals, dogs on lead, max 2 dogs, owner supplies food/meds, vet fees, false information, consultation required, 48-hour cancellation (50% retained), no refund for early return.
- ⚠️ Owner to review; refers to cheques payable to "Mrs Karen Mercer".
- PDF copies of all three documents are in `docs/old-site/files/`.

## Images

- Everything on the old site is small (most 150×150px). Fine as thumbnails (testimonials) but too small for a modern hero image or feature photos.
- ⚠️ **New photos needed** for the home page and service pages: Karen with pets, pets being cared for, the local area. Phone photos are fine.
- Logo exists at 763×245px (PNG). Usable for now, but a vector (SVG) or larger version would be better. Decide in MIK-7 whether to keep or refresh the branding.

## Old design (reference for MIK-7)

- Colours: navy `#152d4a`, `#2a476c`, `#305680`; soft blue `#7d93b5`; pale blue `#ddebec`; light grey `#f0efef`; warm `#e8dddb`. Logo uses yellow and pale blue pets on a grey house.
- Fonts: Montserrat Alternates (headings), "Jenna Sue" and Reenie Beanie (handwritten accents).

## Questions for the owner

1. Current prices for every service.
2. Which phone numbers and email to show.
3. Is the Facebook page still used? Any other social accounts (Instagram)?
4. Still insured with Cliverton? Police/DBS check still current?
5. Is the 10% new client discount still offered?
6. How do clients pay now?
7. Keep the News page and/or Links page? (Recommendation: no.)
8. Any services added or dropped since 2018?
9. Can she provide new photos?
10. Keep the existing logo, or refresh it?
