# Docs

### Fonts

---

-

### Style Guide

1. We use only named exports
2. We don't destructure props inside of function declaration, we do it inside of a function

### Project Structure

---

- Source(src)
  - assets -> all the svg icons, images and fonts would be there
  - **_packages_**
    - header -> header and its components / state
    - email -> the entire emailing logics and UI
    - locales -> all the translations
    - seo -> the seo setup
    - utils -> the app helpers
    - sections
      - contacts
  - pages -> important for nextjs structure, here are the root of the app, api, 404 page and all the most important settings
- Root (configs, package.json, node_modules, .env etc.)
