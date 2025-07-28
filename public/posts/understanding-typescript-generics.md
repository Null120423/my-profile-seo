---
title: "Understanding TypeScript Generics"
date: "2024-01-01"
excerpt: "Master TypeScript generics to write more flexible and reusable code that maintains type safety across your applications."
author: "Trần Hữu Tài  (Dev On Wheels)"
readTime: 10
tags: ["TypeScript", "Programming", "Type Safety"]
featured: false
image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800"
---

# Understanding TypeScript Generics

Generics are one of TypeScript's most powerful features for writing reusable, type-safe code. They allow you to create components that work with multiple types while maintaining type safety.

## Basic Generic Functions

The simplest form of generics is a generic function:

```typescript
function identity<T>(arg: T): T {
  return arg;
}

// Usage
const stringResult = identity<string>("hello");
const numberResult = identity<number>(42);
const booleanResult = identity<boolean>(true);

// TypeScript can infer the type
const inferredString = identity("hello"); // T is inferred as string
const inferredNumber = identity(42); // T is inferred as number
```

## Generic Interfaces

Interfaces can also be generic, making them incredibly flexible:

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  timestamp: Date;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: string;
  title: string;
  price: number;
}

// Usage
const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "John", email: "john@example.com" },
  status: 200,
  message: "Success",
  timestamp: new Date()
};

const productResponse: ApiResponse<Product[]> = {
  data: [
    { id: "1", title: "Laptop", price: 999 },
    { id: "2", title: "Mouse", price: 25 }
  ],
  status: 200,
  message: "Success",
  timestamp: new Date()
};
```

## Constrained Generics

Sometimes you want to limit the types that can be used with your generic:

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property
  return arg;
}

// These work
loggingIdentity("hello"); // string has length
loggingIdentity([1, 2, 3]); // array has length
loggingIdentity({ length: 10, value: 3 }); // object with length

// This would cause an error
// loggingIdentity(3); // number doesn't have length
```

## Generic Classes

Classes can also be generic:

```typescript
class GenericStorage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  get(index: number): T | undefined {
    return this.items[index];
  }

  getAll(): T[] {
    return [...this.items];
  }

  remove(index: number): T | undefined {
    return this.items.splice(index, 1)[0];
  }

  find(predicate: (item: T) => boolean): T | undefined {
    return this.items.find(predicate);
  }
}

// Usage
const stringStorage = new GenericStorage<string>();
stringStorage.add("hello");
stringStorage.add("world");

const numberStorage = new GenericStorage<number>();
numberStorage.add(1);
numberStorage.add(2);

const userStorage = new GenericStorage<User>();
userStorage.add({ id: 1, name: "Alice", email: "alice@example.com" });
```

## Advanced Generic Patterns

### Mapped Types

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
}

type Partial<T> = {
  [P in keyof T]?: T[P];
}

type Required<T> = {
  [P in keyof T]-?: T[P];
}

// Usage
interface User {
  id: number;
  name: string;
  email?: string;
}

type ReadonlyUser = Readonly<User>;
// { readonly id: number; readonly name: string; readonly email?: string; }

type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; }

type RequiredUser = Required<User>;
// { id: number; name: string; email: string; }
```

### Conditional Types

```typescript
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };

type StringResponse = ApiResponse<string>;
// { message: string }

type UserResponse = ApiResponse<User>;
// { data: User }

// More complex conditional type
type NonNullable<T> = T extends null | undefined ? never : T;

type SafeString = NonNullable<string | null>; // string
type SafeNumber = NonNullable<number | undefined>; // number
```

### Utility Types with Generics

```typescript
// Pick specific properties
type UserSummary = Pick<User, 'id' | 'name'>;
// { id: number; name: string; }

// Omit specific properties
type CreateUserRequest = Omit<User, 'id'>;
// { name: string; email?: string; }

// Record type for key-value pairs
type UserRoles = Record<string, User[]>;
// { [key: string]: User[]; }

// Extract from union types
type Status = 'loading' | 'success' | 'error';
type SuccessStatus = Extract<Status, 'success'>;
// 'success'

// Exclude from union types
type NonLoadingStatus = Exclude<Status, 'loading'>;
// 'success' | 'error'
```

## Real-World Example: Generic Repository Pattern

```typescript
interface Repository<T, K = string> {
  findById(id: K): Promise<T | null>;
  findAll(): Promise<T[]>;
  create(entity: Omit<T, 'id'>): Promise<T>;
  update(id: K, entity: Partial<T>): Promise<T | null>;
  delete(id: K): Promise<boolean>;
}

class ApiRepository<T extends { id: K }, K = string> implements Repository<T, K> {
  constructor(private baseUrl: string) {}

  async findById(id: K): Promise<T | null> {
    const response = await fetch(`${this.baseUrl}/${id}`);
    if (!response.ok) return null;
    return response.json();
  }

  async findAll(): Promise<T[]> {
    const response = await fetch(this.baseUrl);
    return response.json();
  }

  async create(entity: Omit<T, 'id'>): Promise<T> {
    const response = await fetch(this.baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entity)
    });
    return response.json();
  }

  async update(id: K, entity: Partial<T>): Promise<T | null> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entity)
    });
    if (!response.ok) return null;
    return response.json();
  }

  async delete(id: K): Promise<boolean> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE'
    });
    return response.ok;
  }
}

// Usage
const userRepository = new ApiRepository<User, number>('/api/users');
const productRepository = new ApiRepository<Product>('/api/products');
```

## Best Practices

1. **Use meaningful generic names**: Instead of just `T`, use descriptive names like `TData`, `TKey`, `TResponse`.

2. **Provide default types when appropriate**:
```typescript
interface ApiClient<TResponse = any, TError = Error> {
  get<T = TResponse>(url: string): Promise<T>;
  post<T = TResponse>(url: string, data: any): Promise<T>;
}
```

3. **Use constraints to make your generics more specific**:
```typescript
function processEntity<T extends { id: string }>(entity: T): T {
  // We know T has an id property
  console.log(`Processing entity with id: ${entity.id}`);
  return entity;
}
```

4. **Avoid over-engineering**: Don't make everything generic if it doesn't need to be.

## Conclusion

Generics enable us to write code that's both flexible and type-safe. They're essential for:

- Creating reusable components and utilities
- Building type-safe APIs and data access layers
- Maintaining type safety while avoiding code duplication
- Creating robust library interfaces

Master generics, and you'll write better, more maintainable TypeScript code that scales with your application's needs.