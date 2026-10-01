# LoanPay Guides — guides.loanpaylogic.com

Isolated Next.js 15 App Router project for the `guides.loanpaylogic.com` subdomain. Educational guides hub (mortgages, saving, small-business costs, everyday planning) built for Google AdSense monetization.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Type check:

```bash
npx tsc --noEmit
```

## Deploy on Vercel (import steps)

1. Push the `loanpay-guides` folder to its own Git repository.
2. In Vercel, click **Add New → Project → Import** the repository.
3. Framework preset: **Next.js**. Root directory: repository root.
4. Build command: `next build`. Output: default (`.next`).
5. Add environment variables if needed, then click **Deploy**.

## Add Domain guides.loanpaylogic.com

1. In the Vercel project, open **Settings → Domains**.
2. Add `guides.loanpaylogic.com`.
3. At your DNS provider, add the CNAME record Vercel shows (typically `guides` → `cname.vercel-dns.com`).
4. Wait for DNS to verify, then confirm the domain shows as valid in Vercel.
5. Visit `https://guides.loanpaylogic.com/ads.txt` to verify it serves the ads.txt file.

## ads.txt note

`public/ads.txt` is served at `/ads.txt` and authorizes our AdSense account:

```text
# ads.txt for guides.loanpaylogic.com
google.com, pub-4906207495792820, DIRECT, f08c47fec0942fa0
```

After pointing the domain to Vercel, verify `https://guides.loanpaylogic.com/ads.txt` returns exactly these two lines before requesting an AdSense review.
