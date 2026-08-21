# Code Style & Organization

## File structure (top to bottom)

1. **Imports** — alphabetized by import path, grouped:
   - External packages (e.g. `@radix-ui/react-icons`, `radix-ui`, `styled-components`)
   - Blank line
   - Local imports (e.g. `@/components/...`)
2. **Types / interfaces**
3. **Styled components** — CSS properties alphabetized within each
4. **Constants** (e.g. `navLinks`)
5. **Component function** with JSX export

## Styled components

- Use the object style syntax: `styled.div(() => ({...}))`, not template literals
- Alphabetize CSS properties within each styled component
- Access theme via the function argument: `styled.div(({ theme }) => ({...}))`
