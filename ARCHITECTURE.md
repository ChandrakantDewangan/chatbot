# Chatbot UI Architecture

## Project Structure

```
src/
├── Interfaces/
│   └── Interfaces.ts              # TypeScript interfaces and types
├── Context/
│   └── GlobalContext.tsx          # Global state management
├── services/
│   └── api.ts                     # Axios API service
├── components/
│   ├── ChatbotPage/              # Main page component
│   │   ├── ChatbotPage.tsx
│   │   └── ChatbotPage.module.css
│   ├── Header/                   # Top header with logo and avatar
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── Sidebar/                  # Left panel with nav
│   │   ├── Sidebar.tsx
│   │   └── Sidebar.module.css
│   ├── UserAvatar/              # Avatar with dropdown menu
│   │   ├── UserAvatar.tsx
│   │   └── UserAvatar.module.css
│   ├── ModelSelector/           # Model selection dropdown
│   │   ├── ModelSelector.tsx
│   │   └── ModelSelector.module.css
│   ├── ChatHistoryList/         # List of previous chats
│   │   ├── ChatHistoryList.tsx
│   │   └── ChatHistoryList.module.css
│   ├── WelcomeScreen/           # Default welcome view
│   │   ├── WelcomeScreen.tsx
│   │   └── WelcomeScreen.module.css
│   ├── ChatWindow/              # Active chat view
│   │   ├── ChatWindow.tsx
│   │   └── ChatWindow.module.css
│   ├── ChatMessage/             # Message component (with variants)
│   │   ├── ChatMessage.tsx
│   │   ├── ChatMessage.module.css
│   │   ├── ChatMessage1/
│   │   │   ├── ChatMessage1.tsx
│   │   │   └── ChatMessage1.module.css
│   │   └── ChatMessage2/
│   │       ├── ChatMessage2.tsx
│   │       └── ChatMessage2.module.css
│   └── InputBox/                # Input component (with variants)
│       ├── InputBox.tsx
│       ├── InputBox.module.css
│       ├── InputBox1/
│       │   ├── InputBox1.tsx
│       │   └── InputBox1.module.css
│       └── InputBox2/
│           ├── InputBox2.tsx
│           └── InputBox2.module.css
├── App.tsx                       # Root component with context provider
├── main.tsx                      # Entry point
└── index.css                     # Global styles with CSS variables
```

## Component Variants

### InputBox Variants
- **InputBox1**: Round bubble style with circular send button
- **InputBox2**: Rectangular style with text button

### ChatMessage Variants
- **ChatMessage1**: Side-by-side layout with avatar
- **ChatMessage2**: Bubble-style chat messages

### Switching Variants
To switch between variants, edit the parent component:

```typescript
// In InputBox.tsx
const selectedVariant = 'variant1'; // Change to 'variant2'

// In ChatMessage.tsx
const selectedVariant = 'variant1'; // Change to 'variant2'
```

## Global State

The app uses a single context (`GlobalContext`) that manages:
- User details
- Current model selection
- Chat session state
- UI visibility flags
- Loading states

## API Integration

API calls are made using Axios through the `services/api.ts` file:
- `sendPrompt()` - Send user message
- `getChatHistory()` - Fetch chat history
- `getSessionDetails()` - Get session details
- `createNewSession()` - Create new chat session

## Design System

CSS variables are defined in `src/index.css`:
- Colors: `--color1` to `--color13`
- Grays: `--gray1` to `--gray10`
- Font sizes: `--fontSize1` to `--fontSize17`
- Spacing: `--pad`

## Responsive Design

Uses modern CSS for responsiveness:
- Flexbox and CSS Grid
- `min()`, `max()`, `clamp()` functions
- No media queries

## Getting Started

1. Configure API endpoint:
   ```env
   VITE_API_BASE_URL=your_api_endpoint
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```
