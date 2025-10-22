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
