# Code Structure Documentation

This document describes the improved code structure and organization of the HoneyBerries portfolio codebase.

## Directory Structure

```
src/
├── components/          # All reusable components
│   ├── cards/          # Feature-specific card components
│   │   ├── GemCard.jsx
│   │   ├── PluginCard.jsx
│   │   ├── ProjectCard.jsx
│   │   └── index.js
│   ├── contact/        # Contact-related components
│   │   ├── CallToAction.jsx
│   │   ├── DiscordCard.jsx
│   │   ├── EmailCard.jsx
│   │   └── index.js
│   ├── ui/             # Base UI components
│   │   ├── Badge.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── ContactCard.jsx
│   │   ├── CopyButton.jsx
│   │   └── index.js
│   ├── backgrounds/    # Background components
│   │   ├── GradientBackdrop.jsx
│   │   └── index.js
│   ├── ErrorBoundary.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── SEO.jsx
│   └── index.js        # Main component exports
├── hooks/              # Custom React hooks
│   ├── index.js
│   └── useModrinth.js
├── layouts/            # Layout components
│   └── MainLayout.jsx
├── lib/                # Utilities, constants, and helpers
│   ├── constants.js
│   ├── data.js
│   ├── data.sitemap.js
│   ├── modrinth.js
│   ├── utils.js
│   └── index.js
├── pages/              # Route-level page components
│   ├── projects/       # Project-specific pages
│   │   ├── modcord/    # Modcord sub-pages
│   │   ├── MinecraftPlugins.jsx
│   │   ├── MinecraftServer.jsx
│   │   └── Modcord.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Home.jsx
│   ├── NotFound.jsx
│   └── Projects.jsx
├── styles/             # Global styles
│   └── global.css
├── App.jsx
└── main.jsx
```

## Import Conventions

### Organized Imports
Components are now organized with barrel exports (index.js files) for cleaner imports:

```javascript
// Old way - verbose imports
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import ContactCard from '../components/ui/ContactCard';

// New way - clean grouped imports
import { Button, Card, ContactCard } from '../components/ui';
```

### Import Order
Follow this order for imports in components:

1. React and third-party libraries
2. Components (using barrel exports)
3. Hooks
4. Utilities and constants
5. Styles (if any)

Example:
```javascript
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from '../components/ui';
import { GradientBackdrop } from '../components/backgrounds';
import { BACKGROUND_LAYERS } from '../lib/constants';
import { useCopyToClipboard } from '../hooks';
import SEO from '../components/SEO';
```

## Component Organization

### UI Components (`components/ui/`)
Base, reusable UI components that can be used anywhere:
- **Badge**: Status indicators and tags
- **Button**: Reusable button with variants
- **Card**: Container component with variants
- **ContactCard**: Base contact card layout
- **CopyButton**: Copy-to-clipboard button

### Card Components (`components/cards/`)
Feature-specific card components:
- **GemCard**: Minecraft gem display cards
- **PluginCard**: Modrinth plugin cards
- **ProjectCard**: Portfolio project cards

### Contact Components (`components/contact/`)
Contact page specific components:
- **CallToAction**: Contact CTAs
- **DiscordCard**: Discord contact info
- **EmailCard**: Email contact info

### Background Components (`components/backgrounds/`)
Decorative background components:
- **GradientBackdrop**: Animated gradient backgrounds

## Utilities (`lib/`)

### constants.js
Application-wide constants:
- Navigation links
- Skills list
- Contact information
- Site metadata
- Background layer configurations

### utils.js
Utility functions:
- `cn()` - Class name combiner
- `formatNumber()` - Number formatting
- `formatDate()` - Date formatting
- `gradientFromSeed()` - Deterministic gradient generation
- `truncateText()` - Text truncation
- And more...

### data.js
Application data:
- Projects list
- Timeline data
- Minecraft gems data
- Feature lists

### modrinth.js
Modrinth API integration functions

## Best Practices

1. **Component Modularity**: Keep components focused on a single responsibility
2. **Barrel Exports**: Use index.js files for cleaner imports
3. **Constants Extraction**: Store repeated values in constants.js
4. **Utility Functions**: Extract reusable logic to utils.js
5. **Type Safety**: Use JSDoc comments for prop documentation
6. **Consistent Naming**: Use PascalCase for components, camelCase for functions
7. **File Organization**: Group related components in subdirectories

## Migration Guide

If you need to add new components:

1. **UI Component**: Add to `components/ui/` and export in index.js
2. **Card Component**: Add to `components/cards/` and export in index.js
3. **Feature Component**: Add to appropriate feature folder (e.g., `components/contact/`)
4. **Page Component**: Add to `pages/` or appropriate subdirectory
5. **Utility Function**: Add to `lib/utils.js`
6. **Constant**: Add to `lib/constants.js`
7. **Hook**: Add to `hooks/` and export in index.js

## Performance Optimizations

1. **Code Splitting**: Page components are lazy-loaded in App.jsx
2. **Memoization**: Expensive components use React.memo
3. **Barrel Exports**: Improve developer experience with cleaner imports
   - Note: Barrel exports trade bundle size optimization for better DX
   - Modern bundlers (Vite) handle this well, but be aware of the tradeoff
4. **Centralized Constants**: Background layers and repeated data extracted to reduce duplication
