# TypeScript Conventions - Princeton AI Partners

> **AI-Readable Reference**: TypeScript coding standards, patterns, and conventions for this project.

---

## TypeScript Configuration

### tsconfig.json (Strict Mode)

```json
{
  "compilerOptions": {
    // Enable all strict type-checking options
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,

    // Additional checks
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,

    // Module resolution
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,

    // Emit
    "noEmit": true,
    "jsx": "preserve",

    // Paths
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    },

    // Next.js specific
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## Import/Export Conventions

### Always Use ES Modules

```typescript
// ✅ GOOD: ES modules
import { Component } from './component';
import type { Props } from './types';
export { Component };
export type { Props };

// ❌ BAD: CommonJS
const { Component } = require('./component');
module.exports = { Component };
```

### Destructure Imports

```typescript
// ✅ GOOD: Destructured
import { useState, useEffect } from 'react';
import { Button, Card } from '@/components/ui';

// ❌ BAD: Default import when not needed
import React from 'react';
React.useState();
```

### Type-Only Imports

```typescript
// ✅ GOOD: Explicit type import (tree-shaking friendly)
import type { User } from '@/types/user';
import type { FC } from 'react';

// ⚠️ OK: Mixed (but less explicit)
import { type User, getUser } from '@/lib/users';
```

---

## Type Definitions

### Interface vs Type

#### Use Interface for:
- Object shapes
- Component props
- API responses
- Extensible types

```typescript
// ✅ Interfaces for objects
interface UserProps {
  id: string;
  name: string;
  email: string;
}

// Can be extended
interface AdminProps extends UserProps {
  role: 'admin';
  permissions: string[];
}
```

#### Use Type for:
- Unions
- Intersections
- Mapped types
- Utility types

```typescript
// ✅ Types for unions/primitives
type Status = 'pending' | 'approved' | 'rejected';
type ID = string | number;

// ✅ Types for complex transformations
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

---

## Component Props

### Standard Props Pattern

```typescript
import type { ReactNode } from 'react';

/**
 * ButtonProps - Props for the Button component
 */
interface ButtonProps {
  /**
   * The variant style
   * @default "default"
   */
  variant?: 'default' | 'outline' | 'ghost';

  /**
   * The button size
   * @default "md"
   */
  size?: 'sm' | 'md' | 'lg';

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Click handler
   */
  onClick?: () => void;

  /**
   * Child elements
   */
  children: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;
}

export function Button({
  variant = 'default',
  size = 'md',
  disabled = false,
  onClick,
  children,
  className,
}: ButtonProps) {
  // Implementation
}
```

### Extending HTML Attributes

```typescript
import type { ButtonHTMLAttributes } from 'react';

// ✅ GOOD: Extend HTML attributes
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
  loading?: boolean;
}

// Usage: All native button props are available
<Button
  variant="default"
  onClick={handleClick}
  disabled={isDisabled}
  aria-label="Submit form"
  type="submit"
>
  Submit
</Button>
```

---

## Explicit Return Types

### Always Declare Function Return Types

```typescript
// ✅ GOOD: Explicit return type
function getUser(id: string): Promise<User | null> {
  return fetch(`/api/users/${id}`).then(res => res.json());
}

// ❌ BAD: Inferred return type
function getUser(id: string) {
  return fetch(`/api/users/${id}`).then(res => res.json());
}
```

### Component Return Types

```typescript
import type { FC, ReactNode } from 'react';

// ✅ GOOD: Explicit FC or ReactNode
export function Card({ children }: { children: ReactNode }): ReactNode {
  return <div className="card">{children}</div>;
}

// ✅ Also acceptable: Inferred for simple components
export function Card({ children }: { children: ReactNode }) {
  return <div className="card">{children}</div>;
}
```

---

## Null & Undefined Handling

### Strict Null Checks

```typescript
// ✅ GOOD: Handle null/undefined explicitly
interface User {
  id: string;
  name: string;
  email?: string; // Optional
}

function displayEmail(user: User): string {
  return user.email ?? 'No email provided'; // Nullish coalescing
}

// ✅ GOOD: Type guard
function isValidUser(user: User | null): user is User {
  return user !== null && user.id.length > 0;
}

if (isValidUser(user)) {
  // TypeScript knows user is not null here
  console.log(user.name);
}
```

### Optional Chaining

```typescript
// ✅ GOOD: Safe navigation
const email = user?.profile?.email;
const firstTag = post?.tags?.[0];

// ❌ BAD: Unsafe access
const email = user.profile.email; // Could throw if user or profile is undefined
```

---

## Generic Types

### Typed Helper Functions

```typescript
// ✅ GOOD: Generic utility functions
function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  const result = {} as Pick<T, K>;
  keys.forEach(key => {
    result[key] = obj[key];
  });
  return result;
}

// Usage:
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

const publicUser = pick(user, ['id', 'name', 'email']);
// Type: { id: string; name: string; email: string }
```

### Generic Components

```typescript
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  keyExtractor: (item: T) => string;
}

export function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
  return (
    <ul>
      {items.map(item => (
        <li key={keyExtractor(item)}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}

// Usage:
<List
  items={users}
  renderItem={user => <UserCard user={user} />}
  keyExtractor={user => user.id}
/>
```

---

## Utility Types

### Common Built-in Utilities

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Partial: All properties optional
type PartialUser = Partial<User>;
// { id?: string; name?: string; email?: string; password?: string }

// Required: All properties required
type RequiredUser = Required<PartialUser>;

// Pick: Select specific properties
type PublicUser = Pick<User, 'id' | 'name' | 'email'>;
// { id: string; name: string; email: string }

// Omit: Exclude specific properties
type UserWithoutPassword = Omit<User, 'password'>;
// { id: string; name: string; email: string }

// Readonly: Make all properties readonly
type ImmutableUser = Readonly<User>;

// Record: Object with specific key/value types
type UserMap = Record<string, User>;
// { [key: string]: User }
```

### Custom Utility Types

```typescript
// NonNullable fields
type NonNullableFields<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

// Required subset
type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Example:
interface FormData {
  name?: string;
  email?: string;
  age?: number;
}

type ValidatedFormData = RequireFields<FormData, 'name' | 'email'>;
// { name: string; email: string; age?: number }
```

---

## Discriminated Unions

### Type-Safe State Management

```typescript
// ✅ GOOD: Discriminated union for async states
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

function displayUser(state: AsyncState<User>) {
  switch (state.status) {
    case 'idle':
      return <div>Click to load</div>;
    case 'loading':
      return <div>Loading...</div>;
    case 'success':
      return <div>{state.data.name}</div>; // TypeScript knows data exists
    case 'error':
      return <div>Error: {state.error.message}</div>;
  }
}
```

### Action Types (if using reducers)

```typescript
type Action =
  | { type: 'SET_USER'; payload: User }
  | { type: 'CLEAR_USER' }
  | { type: 'UPDATE_EMAIL'; payload: string };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload }; // TypeScript knows payload is User
    case 'CLEAR_USER':
      return { ...state, user: null };
    case 'UPDATE_EMAIL':
      return {
        ...state,
        user: state.user ? { ...state.user, email: action.payload } : null
      };
  }
}
```

---

## Type Assertions (Use Sparingly)

### When to Use `as`

```typescript
// ✅ OK: Narrowing types you know are correct
const element = document.getElementById('root') as HTMLDivElement;

// ✅ OK: API responses (but prefer runtime validation)
const user = await response.json() as User;

// ⚠️ AVOID: Hiding type errors
const value = getSomeValue() as any; // Don't do this!

// ✅ BETTER: Use type guards
function isUser(value: unknown): value is User {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'name' in value
  );
}

const data = await response.json();
if (isUser(data)) {
  console.log(data.name); // TypeScript knows data is User
}
```

---

## Next.js Specific Types

### Page Props

```typescript
import type { Metadata } from 'next';

// Static metadata
export const metadata: Metadata = {
  title: 'Services | Princeton AI Partners',
  description: 'Our services...',
};

// Dynamic metadata
export async function generateMetadata({
  params
}: {
  params: { id: string }
}): Promise<Metadata> {
  const service = await getService(params.id);

  return {
    title: `${service.title} | Princeton AI Partners`,
    description: service.description,
  };
}

// Page component
interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params, searchParams }: PageProps) {
  const service = await getService(params.id);
  return <ServiceDetail service={service} />;
}
```

### API Routes

```typescript
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// GET handler
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    const user = await getUser(params.id);

    return NextResponse.json(
      { success: true, data: user },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'User not found' },
      { status: 404 }
    );
  }
}

// POST handler
interface CreateUserRequest {
  name: string;
  email: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = await request.json() as CreateUserRequest;

  // Validate (prefer Zod for runtime validation)
  if (!body.name || !body.email) {
    return NextResponse.json(
      { success: false, error: 'Missing required fields' },
      { status: 400 }
    );
  }

  const user = await createUser(body);

  return NextResponse.json(
    { success: true, data: user },
    { status: 201 }
  );
}
```

---

## Framer Motion Types

```typescript
import type { Variants, Transition } from 'framer-motion';

// Define animation variants with types
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// Custom transition type
export const smoothTransition: Transition = {
  duration: 0.6,
  ease: [0.22, 1, 0.36, 1],
};
```

---

## Avoiding `any`

### Use `unknown` Instead

```typescript
// ❌ BAD: any disables type checking
function processData(data: any) {
  return data.map((item: any) => item.value); // No safety
}

// ✅ GOOD: unknown forces type checking
function processData(data: unknown): number[] {
  if (Array.isArray(data)) {
    return data
      .filter((item): item is { value: number } =>
        typeof item === 'object' && item !== null && 'value' in item
      )
      .map(item => item.value);
  }
  throw new Error('Invalid data format');
}
```

---

## Error Handling Types

```typescript
// Custom error types
class ValidationError extends Error {
  constructor(
    message: string,
    public field: string
  ) {
    super(message);
    this.name = 'ValidationError';
  }
}

class NotFoundError extends Error {
  constructor(
    message: string,
    public resourceId: string
  ) {
    super(message);
    this.name = 'NotFoundError';
  }
}

// Type guard for errors
function isValidationError(error: unknown): error is ValidationError {
  return error instanceof ValidationError;
}

// Usage:
try {
  await updateUser(data);
} catch (error) {
  if (isValidationError(error)) {
    console.error(`Validation failed for field: ${error.field}`);
  } else if (error instanceof NotFoundError) {
    console.error(`Resource not found: ${error.resourceId}`);
  } else {
    console.error('Unknown error:', error);
  }
}
```

---

## Type Organization

### File Structure

```
types/
├── index.ts              # Re-export all types
├── user.ts               # User-related types
├── service.ts            # Service-related types
├── api.ts                # API response types
└── utils.ts              # Utility types
```

### Example: types/user.ts

```typescript
// Base user type
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

// Public-facing user (no sensitive data)
export type PublicUser = Omit<User, 'email'>;

// User creation payload
export type CreateUserInput = Pick<User, 'name' | 'email'>;

// User update payload
export type UpdateUserInput = Partial<CreateUserInput>;
```

---

## Naming Conventions

### Types & Interfaces
- **PascalCase**: `UserProfile`, `ServiceCard`, `APIResponse`
- **Descriptive**: `CreateUserInput` not `Input`
- **Suffix Props**: `ButtonProps`, `CardProps`

### Enums
- **PascalCase**: `UserRole`, `ServiceStatus`
- **Values**: UPPER_SNAKE_CASE or strings

```typescript
enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

// Or const objects (preferred for tree-shaking)
export const UserRole = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest',
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];
```

---

## Linting & Formatting

### ESLint Rules (TypeScript)

```json
{
  "rules": {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/consistent-type-imports": "error"
  }
}
```

---

**Last Updated**: 2025-11-04
**Status**: Complete - Follow these conventions for all TypeScript code
**Compiler Target**: ESNext with strict mode enabled
