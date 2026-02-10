const rateLimit = (options: { interval: number; uniqueTokenPerInterval: number }) => {
  const tokenCache = new Map<string, { count: number; expiresAt: number }>();

  // Cleanup expired entries periodically
  setInterval(() => {
    const now = Date.now();
    for (const [key, value] of tokenCache) {
      if (now > value.expiresAt) {
        tokenCache.delete(key);
      }
    }
  }, options.interval);

  return {
    check: (limit: number, token: string): { success: boolean; remaining: number } => {
      const now = Date.now();
      const entry = tokenCache.get(token);

      if (!entry || now > entry.expiresAt) {
        tokenCache.set(token, { count: 1, expiresAt: now + options.interval });
        return { success: true, remaining: limit - 1 };
      }

      if (entry.count >= limit) {
        return { success: false, remaining: 0 };
      }

      entry.count++;
      return { success: true, remaining: limit - entry.count };
    },
  };
};

// 5 quote requests per IP per minute
export const quoteLimiter = rateLimit({ interval: 60_000, uniqueTokenPerInterval: 500 });

// 30 Google Reviews requests per IP per minute
export const reviewsLimiter = rateLimit({ interval: 60_000, uniqueTokenPerInterval: 500 });
