# Page Generator

Create new Next.js page following App Router conventions.

## Steps:

1. **Ask for page details**:
   - Page route (e.g., `/about`, `/services/[id]`)
   - Page title and description (for metadata)
   - Layout: Default or custom?
   - Is it dynamic (uses params/searchParams)?

2. **Read existing pages** to match patterns

3. **Generate page file** with:
   - Metadata export (SEO)
   - TypeScript types for params/searchParams
   - Server Component by default
   - Proper imports
   - Section structure

4. **Create file** at `app/[route]/page.tsx`

5. **Optionally create layout** if custom layout needed

## Template:

```typescript
import type { Metadata } from 'next';

// Static metadata
export const metadata: Metadata = {
  title: 'Page Title | Princeton AI Partners',
  description: 'Page description for SEO...',
  openGraph: {
    title: 'Page Title',
    description: 'Page description...',
    images: ['/og-image.jpg'],
  },
};

// Page component (Server Component by default)
export default async function PageName() {
  // Fetch data on server if needed
  // const data = await getData();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-brand-light to-white">
        <div className="container mx-auto px-4">
          <h1 className="text-hero font-bold mb-6">
            Page Headline
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl">
            Page description...
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 font-semibold mb-12">
            Section Headline
          </h2>

          {/* Content */}
        </div>
      </section>
    </main>
  );
}
```

## For Dynamic Pages:

```typescript
import type { Metadata } from 'next';

// Dynamic metadata
export async function generateMetadata({
  params
}: {
  params: { id: string }
}): Promise<Metadata> {
  const item = await getItem(params.id);

  return {
    title: `${item.title} | Princeton AI Partners`,
    description: item.description,
  };
}

// Page props
interface PageProps {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function DynamicPage({ params, searchParams }: PageProps) {
  const item = await getItem(params.id);

  return (
    <main>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
    </main>
  );
}
```

## Page Checklist:

- [ ] Metadata export (title, description, OG tags)
- [ ] Proper TypeScript types
- [ ] Server Component (default)
- [ ] Semantic HTML (main, section, h1-h6)
- [ ] Mobile-first responsive design
- [ ] Accessibility (heading hierarchy, alt text)
- [ ] Loading states (if fetching data)
- [ ] Error handling (error.tsx if needed)

## After Generation:

- Create the page file
- Optionally create `loading.tsx` for loading state
- Optionally create `error.tsx` for error boundary
- Test the page in browser
- Run Lighthouse audit
