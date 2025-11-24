# API Route Generator

Create Next.js API route with error handling and validation.

## Steps:

1. **Ask for route details**:
   - Route path (e.g., `/api/contact`, `/api/users/[id]`)
   - HTTP methods needed (GET, POST, PUT, DELETE)
   - Request/response data structure
   - Authentication required?

2. **Read API patterns** from `.rebrand/context/COMPONENT-PATTERNS.md` (Next.js section)

3. **Generate route handler** with:
   - Proper TypeScript types
   - Request validation
   - Error handling (try/catch)
   - Appropriate HTTP status codes
   - JSON responses

4. **Create file** at `app/api/[route-path]/route.ts`

5. **Optionally create types** at `types/api.ts`

## Template:

```typescript
import { NextRequest, NextResponse } from 'next/server';

// Request/Response types
interface CreateUserRequest {
  name: string;
  email: string;
}

interface UserResponse {
  id: string;
  name: string;
  email: string;
}

interface ErrorResponse {
  success: false;
  error: string;
}

// GET handler
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse<UserResponse | ErrorResponse>> {
  try {
    const user = await getUser(params.id);

    if (!user) {
      return NextResponse.json(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { id: user.id, name: user.name, email: user.email },
      { status: 200 }
    );
  } catch (error) {
    console.error('GET /api/users/[id] error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST handler
export async function POST(
  request: NextRequest
): Promise<NextResponse<UserResponse | ErrorResponse>> {
  try {
    const body = await request.json() as CreateUserRequest;

    // Validate request
    if (!body.name || !body.email) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields: name, email' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create user
    const user = await createUser(body);

    return NextResponse.json(
      { id: user.id, name: user.name, email: user.email },
      { status: 201 }
    );
  } catch (error) {
    console.error('POST /api/users error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

## Best Practices Checklist:

- [ ] TypeScript types for request/response
- [ ] Input validation (check required fields)
- [ ] Proper error handling (try/catch)
- [ ] Appropriate HTTP status codes
  - 200: Success
  - 201: Created
  - 400: Bad Request
  - 404: Not Found
  - 500: Server Error
- [ ] Consistent response format
- [ ] Error logging (console.error)
- [ ] CORS headers (if needed)

## After Generation:

- Show the file path and content
- Suggest testing with curl or Postman
- Remind to add to API documentation
- Consider creating integration tests
