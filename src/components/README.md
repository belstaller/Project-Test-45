# Components

This directory contains reusable React components.

## Structure

Organize components by feature or type:

```
components/
├── ui/           # Basic UI components (Button, Input, etc.)
├── layout/       # Layout components (Header, Footer, etc.)
└── features/     # Feature-specific components
```

## Example

```tsx
// components/ui/Button.tsx
interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    >
      {children}
    </button>
  )
}
```
