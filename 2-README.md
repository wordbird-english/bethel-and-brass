# Bethel & Brass

Private staging source for the bilingual wall-art gallery. Static HTML/CSS/JS, no dependencies, cart, pricing, purchase links, form submissions, analytics, cookies, or trackers. The eleven artworks shown use small web JPEG derivatives of the supplied revised prints; no held piece 11. Original 3600 × 4800, 300 DPI files should remain offline until product listings are proofed. Room scenes are composites and identified as visualizations.

## Preview locally

`python3 -m http.server 8777` then open `http://localhost:8777/`. This does not deploy the site. GitHub Pages is intentionally disabled until both owners approve the public switch.

## Future switch (not executed)

1. Verify print proofs, Hebrew wording, and commercial font licensing. Obtain both owners' approval to publish this site and change DNS. Ensure Fourthwall checkout lives on an approved `shop.` subdomain or Fourthwall's default host before reassigning the apex.
2. Enable GitHub Pages in repository Settings > Pages, publishing from `main` root. Add `bethelandbrass.com` as the custom domain in GitHub before changing DNS. Check the configured Pages URL and HTTPS certificate. A private source repo does **not** make its Pages site private.
3. At the current authoritative DNS provider (Namecheap Advanced DNS only if Namecheap nameservers are active), replace conflicting `@` A/AAAA/redirect and `www` records: four `A` records at `@` to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; one `CNAME` at `www` to `wordbird-english.github.io` (not a URL or repo path). Keep MX/TXT and unrelated records untouched. Configure Fourthwall's `shop` record exactly as Fourthwall shows for that hostname; its verified target and current apex rollback records must be captured live before the switch. DNS can take up to 24 hours to propagate.
4. When sales are separately approved, publish vetted Fourthwall products and only then add direct product links to the live shop. Coming Soon mode gates all Fourthwall product routes; this site has no buy buttons now.
5. Roll back by restoring the **recorded pre-switch** Fourthwall apex/www settings and Fourthwall custom domain; do not invent a former DNS target. Restore only after verifying the shop's live instructions. Disable GitHub Pages or remove its custom domain as appropriate.

Sources: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site and https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages/ . GitHub Pages on a public repository is free; a private repository may have Pages availability tied to plan, so check the account plan before promising $0 from private source.
