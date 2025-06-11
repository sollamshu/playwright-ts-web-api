export async function retry<T>(
    fn: () => Promise<T>,
    options: { retries: number; delay: number }
  ): Promise<T> {
    let lastError: Error | null = null;
    for (let i = 0; i < options.retries; i++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error as Error;
        await new Promise((resolve) => setTimeout(resolve, options.delay));
      }
    }
    throw lastError ?? new Error('Retry failed');
  }