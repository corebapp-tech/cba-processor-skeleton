# cba-processor-skeleton

## Project Structure

```
.
├── src/
│   ├── main.ts          # Main processor implementation
│   └── model.ts         # Type definitions and interfaces (optional)
├── .env                 # Environment configuration
└── package.json         # Project dependencies and metadata
```

> **Note**: The package name in `package.json` must follow the format `@cba/` (e.g., `@cba/hello-world`).

## Processor Architecture

Processors extend the `BaseProcessor` class and implement two core methods:

### Creating a Processor

```typescript
class HelloWorldProcessor extends BaseProcessor {
  async process(request: Request): Promise<Response> {
    return ResponseBuilder.create(200, {
      message: 'Hello World Corebapp Processor',
    });
  }
  async validateInput(request: Request): Promise<void> {}
}

export const processor = HelloWorldProcessor;
```

### Required Methods

#### `process(request: Request): Promise<Response>`

The main method that handles the request and returns a response. This is where your business logic goes.

- **Parameters**: `request` - The incoming HTTP request object
- **Returns**: `Promise<Response>` - The HTTP response using `ResponseBuilder`

#### `validateInput(request: Request): Promise<void>`

Validates the incoming request before processing. Throw an error if validation fails.

- **Parameters**: `request` - The incoming HTTP request object
- **Returns**: `Promise<void>` - Should throw an error if validation fails

### Notes

- Always export your processor class as `processor`
- Use `ResponseBuilder.create()` to construct responses
- Validation errors thrown in `validateInput()` will be caught and handled automatically

## Available Services

The processor has access to the following core services located in `../../../core/service/`:

### HttpService

Used for making HTTP requests with support for various methods and file uploads.

**Methods:**

- `get` - GET requests
- `post` - POST requests
- `put` - PUT requests
- `patch` - PATCH requests
- `delete` - DELETE requests
- `uploadFiles` - File upload functionality

### InputCastingService

Provides type casting functionality for input parameters to ensure data type consistency.

**Supported Cast Types:**

- `string` - Convert to string type
- `number` - Convert to number type
- `integer` - Convert to integer type
- `boolean` - Convert to boolean type
- `date` - Convert to date type
- `array` - Convert to array type

### PodService

Enables bidirectional data manipulation from a CoreBApp namespace.

**POD's (Point Of Data):**

- **Push-Inbound POD**: Data Reception Gateway - receives data into the processor
- **Push-Outbound POD**: Data Transmission Hub - sends data from the processor
