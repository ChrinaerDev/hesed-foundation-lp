# HESED platform brief

## What HESED is

HESED presents itself in its materials as a Christian youth movement in Bafoussam, in Cameroon's West Region. Its public line is **« Le cœur de Dieu sur terre »**. The planning document connects the Hebrew **חֶסֶד** to God's faithful love, mercy and kindness. The movement describes its mission as interceding, evangelizing, restoring people and forming disciples. The identity sheet names missionary evangelist Nzukam Tchapdeu Divin Hans as founder and frames the origin story around his testimony of restoration.

The planning PDF describes **Jeunesse HESED** as part of the social action program, with beginnings in March 2026 and a milestone on 25 July 2026. It proposes two orphanage visits per year, combining time and attention with prayer, educational activities and practical support such as food, clothing and school kits. Describe these as plans until HESED supplies confirmed dates and approved reports. The site should connect the teaching about faithful love to the practical work supporters can learn about and fund.

The materials use *Mouvement HESED* and *Jeunesse HESED*, while the project request also uses *foundation*. Use **HESED** as the public brand and confirm the official name, legal status and receiving entity before publishing donation disclosures.

## Brand direction

Use the **TON-like mark** visible in IMG1, IMG3 and IMG4 as the basis of the primary logo. The planning PDF provides a Hebrew reference for the stylized shapes. Ask for the original logo artwork if it exists, and have the final forms and reading direction checked against the Hebrew before approving a redraw. Pair the mark with a clearly readable **HESED** wordmark. Use the tagline in the full lockup and prepare a simpler mark for the favicon, mobile header and social avatar. Test a one-color version at small sizes. IMG2's heart-and-cross treatment can inform campaign art.

The supplied notes list red, emerald, blue and orange. I would use deep emerald for the core brand, warm white for reading surfaces and a rich red for the donation button. Reserve blue and orange for secondary accents. The emerald-and-gold posters suggest a warm accent for special campaigns. Pair expressive headings with clean, readable body text. Keep dates, verses, calls to action and event details as accessible page text alongside posters.

## Public platform

French is the proposed launch language because the supplied material is primarily in French. The home page should let a first-time visitor understand the movement, find its latest writing and reach the giving page from a phone.

| Area | Proposed content |
| --- | --- |
| **Accueil** | Brand and mission, featured teaching, latest news, an introduction to Jeunesse HESED and a prominent « Faire un don » link. |
| **À propos** | Meaning of HESED, vision and values, an approved founder story and confirmed public contact details. |
| **Nos actions** | The orphanage visit program, how support is intended to be used, and verified visit recaps as they become available. |
| **Actualités** | A listing and individual pages for teachings, announcements and reports. Use separate publication and event dates so past events can remain readable in the archive. |
| **Faire un don** | An explanation of what gifts support, an amount and currency review, and a checkout flow once the gateway is specified. |

### Material for the first publications

- **Planning PDF, pages 1–4.** Adapt the explanation of HESED into an introductory article. Use the August–July cycle as an editorial backlog. It covers initiative, commitment, forgiveness, fidelity, protection, grace, truth, compassion, provision, restoration, gratitude and eternal love. Page 4 connects the teaching to action through Michée 6:8.
- **Planning PDF, pages 5–6, and SOME HESED SPEC INFO.jpg.** Use these to draft the program and about pages. Confirm founder and member details with HESED before public use. Approve any photos and stories involving children before publication and protect their identities.
- **Hesed's Info.txt and IMG1.** Develop the faithful-love discussion into a teaching with questions and a scripture reference. IMG1 uses Psaume 136:1 and has a visible stock watermark. Use cleared artwork or create a new cover for publication.
- **IMG2 and its accompanying text.** The 22 August 2026 Google Meet with Évangéliste Missionnaire DIVIN is an archived announcement. The artwork labels 21:00 as both GMT and Cameroon time. Verify the original local time if it is included in the archive.
- **IMG3 and IMG4.** IMG3 gives a September 2026 faith theme anchored in Hébreux 11:6. IMG4 gives a related online event with WOG BLESSING and prints “Vendredi 26 Septembre” without a year. Confirm the event date and its relationship to the September 2026 artwork. The planning PDF lists September as *HESED Engagement*, so record the published theme and planned series as separate entries until the editorial team confirms how to present them.
- **wireframe/Inspiration/word-image-61391-5.webp.** The Christ Embassy screenshot places the donation form beside an explanation of the cause. Borrow that information hierarchy and stack the two sections on mobile. The reference's amounts, recurring option and provider are specific to the example.

## How to build it

1. **Establish the public app baseline.** The intended source directory is /Source and the target public project is /hesed-landingpage. /Source was empty in the workspace reviewed. Once the existing code is available, inventory its stack, routes, components, styles and run commands. Bring it into the public project and build on the conventions already present.
2. **Build the brand and reading experience.** Establish the shared navigation, typography and colors. Create the public pages with responsive layouts, optimized images, readable article typography and shareable article URLs. Verify keyboard navigation, contrast and mobile layouts.
3. **Prepare content for the later dashboard.** Give each entry a stable slug, type, title, summary, body, publication status and date, and optional cover with alt text. Give event entries a separate time zone, start time and optional public link. Start with reviewed content managed in the public project. Later, /hesed-dashboard can provide authenticated draft, review, publish and media workflows using the same content structure. Public pages should only expose published entries.
4. **Prepare the giving experience in parallel.** Establish the donation page and user journey around confirmed purposes, suggested amounts or a custom amount, currency, a review step and clear outcomes. HESED will process donations. Gateway, accepted methods and currencies, recurring giving and receipt rules will be specified later. Until checkout is connected and tested, the public site can describe the program and the availability of online giving.
5. **Connect live donations once the payment details arrive.** Plan for a guest flow and provider-managed checkout where supported. Create a pending donation server-side, verify provider confirmation server-side and handle repeated notifications without recording a second gift. Show clear pending, confirmed, cancelled and failed states. Verify successful and interrupted payments before enabling live collection. The later dashboard can give authorized staff a view of reconciled donations and references.

## Decisions to confirm

- The official public and receiving-entity names, verified contact details and approved founder story.
- The original mark or approval to redraw it, and cleared launch images.
- Which activities and costs gifts can fund, and whether visitors will be able to direct a gift to a specific initiative.
- The first approved publications and verified program or event dates.
- Payment details and staff roles when the donation integration and dashboard phases begin.
