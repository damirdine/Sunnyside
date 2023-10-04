# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### Ce défi sera parfait pour travailler vos capacités de : 
- mise en page et de responsive design. 
- avec du Javascript pour le menu mobile, mais l'accent est mis sur HTML et CSS.

### Creer une PWA
- [PWA Asset Generator](https://www.pwa-asset-generator.com/)

- Installez le package `pwa-asset-generator`

```npm install pwa-asset-generator```

- Crèez un fichier `site.webmanifest`: 
```
{
    "name": "PWA Name",
    "short_name": "PWA Name",
    "description": "PWA Description",
    icons: [
        
    ]
}
```
- lancer la commande : 

```bash
npx pwa-asset-generator images/logo.svg ./assets -m ./site.webmanifest -b "radial-gradient(circle, rgba(61,190,240,1) 50%, rgba(255,211,0,1) 100%)" -i index.html --favicon
```