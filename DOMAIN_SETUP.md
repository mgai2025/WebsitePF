# Domain Configuration Guide

This guide explains how to connect your Hostinger domain to your Vercel deployment.

## Prerequisites

- A domain registered with Hostinger
- Your website deployed on Vercel
- Access to Hostinger's DNS management

## Step 1: Get Your Vercel Domain

1. Go to your Vercel dashboard
2. Select your project
3. Go to **Settings** → **Domains**
4. Note your Vercel deployment URL (e.g., `premiumfresh-exports.vercel.app`)

## Step 2: Add Domain to Vercel

1. In Vercel Settings → Domains, click **Add**
2. Enter your custom domain (e.g., `premiumfresh.com`)
3. Click **Add**
4. Vercel will show you the required DNS records

## Step 3: Configure Hostinger DNS

### For Root Domain (example.com)

1. Log in to Hostinger
2. Go to **Domains** → Select your domain → **DNS / Nameservers**
3. Add an **A Record**:
   - **Type**: A
   - **Name**: @ (or leave blank)
   - **Points to**: `76.76.21.21`
   - **TTL**: 14400 (or Auto)

### For www Subdomain (www.example.com)

Add a **CNAME Record**:
- **Type**: CNAME
- **Name**: www
- **Points to**: `cname.vercel-dns.com`
- **TTL**: 14400 (or Auto)

## Step 4: Wait for Propagation

DNS changes can take up to 48 hours to propagate globally, though they often complete within a few hours.

### Verify DNS Propagation

Use these tools to check:
- [DNS Checker](https://dnschecker.org/)
- [WhatsMyDNS](https://www.whatsmydns.net/)

## Step 5: Verify in Vercel

1. Go back to Vercel Settings → Domains
2. Your domain should show a green checkmark when verified
3. Vercel automatically provisions SSL certificates

## Common DNS Records Summary

| Type | Name | Value |
|------|------|-------|
| A | @ | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

## Troubleshooting

### Domain Not Verifying

- Ensure DNS records are exactly as specified
- Wait for full propagation (up to 48 hours)
- Check for conflicting records

### SSL Certificate Issues

- Vercel automatically handles SSL
- If issues persist, try removing and re-adding the domain

### Redirect Loop

- Ensure you don't have conflicting redirect rules in Hostinger
- Check Vercel's redirect settings

## Alternative: Using Vercel Nameservers

For more control, you can point your domain's nameservers to Vercel:

1. In Vercel, go to Settings → Domains → Add Domain
2. Select "Use Vercel Nameservers"
3. Update Hostinger's nameservers to:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

**Note**: This transfers DNS management to Vercel.

## Contact Support

- **Vercel Support**: [vercel.com/support](https://vercel.com/support)
- **Hostinger Support**: [hostinger.com/contact](https://www.hostinger.com/contact)

---

Once configured, your website will be accessible at your custom domain with automatic HTTPS.
