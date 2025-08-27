# Discord Browser Proxy for Codespaces

Run Discord Web in a real browser inside GitHub Codespaces, accessible via a noVNC web UI.  
You can interact with Discord, log in, and solve CAPTCHAs **yourself** in the browser window.

---

## Features

- **NoVNC access:** Use your browser to interact with a real Chromium window running in Codespaces.
- **CAPTCHA support:** You solve CAPTCHAs yourself (no automation, legal and safe).
- **Remote debugging:** (Optional) Chrome DevTools available on port 9222.
- **Easy setup:** Open in Codespaces, forward port 6080, and use instantly.

---

## Usage

1. **Open this repository in GitHub Codespaces.**
2. **Forward port 6080** (Codespaces ➔ Ports panel ➔ "localhost:6080").
3. **Open the noVNC UI:**  
   Visit `https://<your-codespace-id>-6080.githubpreview.dev` in your browser.
4. **Log in to Discord, interact as normal, and manually solve any CAPTCHA.**

> If you want to use this for other sites (Instagram, Snapchat, etc.), just change the URL in `start.sh`.

### Notes

- This does **not** automate Discord or bypass CAPTCHAs—manual solving only.
- Performance may be limited by Codespaces resources (no GPU).
- Do **not** use for botting or against Discord's Terms of Service.

---

## Security & Legal

- **For educational/personal use only.**
- Do **not** use for unauthorized automation or botting.
- Respect Discord's Terms of Service and all laws.

---