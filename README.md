# ÉLANE — Luxury Fragrance Brand Showcase

ÉLANE is a premium, editorial-style product website designed to present a luxury fragrance brand in a refined, immersive, and modern way. This project is built as a polished front-end experience that can be downloaded, run locally on a PC, and presented as a product demo or portfolio piece.

## Product overview

This website is a digital brand experience for a fragrance house that emphasizes:

- luxury positioning and premium storytelling
- editorial-style visual composition
- product storytelling through immersive sections
- elegant motion and transitions
- a clear luxury retail aesthetic for modern consumer brands

The experience is designed to feel high-end and experiential, with layered content sections that guide the user through the brand identity, collections, mood, craft, and product world.

## Key features

- immersive hero section with strong brand messaging
- collection showcase for premium fragrance lines
- editorial storytelling sections across brand, atmosphere, and craft
- responsive layout for desktop and smaller screens
- route-based navigation for the credits page
- modern front-end architecture using React and Vite
- smooth motion and animation support with GSAP

## Tech stack

- React 19
- Vite
- JavaScript
- React Router
- GSAP
- CSS modules and custom styling
- Lucide and icon support

## Project purpose

This project is ideal for:

- brand presentation demos
- luxury product storytelling
- creative portfolio work
- front-end showcases for marketing and e-commerce concepts
- presenting a design concept in a realistic, runnable product format

## Download and run on your PC

### Requirements

Make sure your computer has:

- Node.js 18 or newer
- npm

### 1. Download the project

Clone the repository or download the ZIP file and extract it to your local machine.

```bash
git clone <repository-url>
cd website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the project locally

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

### 4. Build for production

```bash
npm run build
```

This generates a production-ready build in the `dist/` folder.

### 5. Preview the production build

```bash
npm run preview
```

## Project structure

```bash
src/
  App.jsx            # main routing and page composition
  main.jsx           # application entry point
  Hero.jsx           # hero section and introduction
  Navbar.jsx         # navigation
  Info.jsx           # brand story and messaging
  Collections.jsx    # premium fragrance collections
  Atmosphere.jsx     # atmospheric visual section
  TheCraft.jsx       # craftsmanship and detail section
  Archive.jsx        # archive/story section
  TheObject.jsx      # product/object presentation
  Finale.jsx         # closing brand statement
  SiteCredits.jsx    # credits page
  css/               # styling files for the experience
  assets/            # imagery and brand visual assets
public/              # static public files
index.html           # root HTML file
package.json         # project scripts and dependencies
vite.config.js       # Vite configuration
```

## Product presentation notes

This project is meant to be shown as a finished product concept, not just a code sample. It is structured to communicate a strong visual identity and premium brand impression, making it suitable for:

- client presentations
- creative portfolio review
- product concept demos
- internal brand showcase walkthroughs

## Scripts

```bash
npm run dev      # start the development server
npm run build    # create a production build
npm run preview  # preview the production build
npm run lint     # run linting checks
```

## Notes

- The site uses client-side routing for the `/credits` page.
- Styling and layout are designed to feel luxurious and editorial.
- The visual language centers on perfume branding, mood, and premium sensory storytelling.

## License

This project is for demonstration and portfolio use. Please check with the project owner before commercial reuse.

