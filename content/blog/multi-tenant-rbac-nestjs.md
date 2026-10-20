---
title: "Designing Multi-Tenant RBAC in NestJS and PostgreSQL"
date: "2026-05-18"
excerpt: "How I structured tenant isolation and role-based access control for a SaaS platform serving 5 organizations - without leaking a single row across tenants."
tags: ["NestJS", "PostgreSQL", "RBAC", "SaaS", "Architecture"]
published: true
---

When you build a multi-tenant SaaS, the hardest problem isn't the features - it's making sure **Organization A can never see Organization B's data**, while still keeping the codebase simple enough to ship features fast. Here's the approach I used on an e-learning platform now serving 944+ users across 5 organizations.

## Pick a tenancy model first

There are three common models:

- **Database-per-tenant** - strongest isolation, painful to migrate and operate at scale.
- **Schema-per-tenant** - good isolation, still operationally heavy.
- **Shared schema with a `tenant_id` column** - simplest to operate, isolation enforced in the application layer.

For a product onboarding organizations frequently, I chose the **shared schema** model. The trade-off: isolation now depends on discipline in code, so it must be enforced in *one* place, not sprinkled everywhere.

## Scope every query through a single guard

The mistake teams make is adding `where tenant_id = ?` by hand in each query. One forgotten clause is a data leak. Instead, resolve the tenant once per request and force it through a shared layer.

```ts
// tenant.middleware.ts
@Injectable()
export class TenantMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    const tenantId = req.user?.tenantId;
    if (!tenantId) throw new UnauthorizedException("No tenant context");
    // attach to a request-scoped store
    tenantContext.run({ tenantId }, () => next());
  }
}
```

Then every repository reads the tenant from that context - never from the caller.

## Model roles as data, not code

Hardcoding roles (`if (user.role === "admin")`) doesn't survive contact with real customers, who all want slightly different permission sets. Model permissions as rows:

```
roles         (id, tenant_id, name)
permissions   (id, key)                  -- e.g. "course.publish"
role_permissions (role_id, permission_id)
user_roles    (user_id, role_id)
```

A single `@RequirePermission('course.publish')` decorator then checks the resolved permission set. New roles become a config change, not a deploy.

## Test the boundary, not just the feature

The test that matters most isn't "can an admin publish a course" - it's "**can a user from Tenant A read Tenant B's course**". Write that negative test for every resource. It's the test that actually protects your customers.

## Takeaways

- Enforce tenant scoping in **one** shared layer, never per-query.
- Store roles and permissions as **data** so customers self-configure.
- Your most important tests are the **cross-tenant denial** tests.

This structure let us onboard new organizations with zero code changes - the whole point of building a multi-tenant platform in the first place.
