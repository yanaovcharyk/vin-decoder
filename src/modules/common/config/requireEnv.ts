export function requireEnv(variableName: string): string {
  const value = import.meta.env[variableName];
  if (!value) {
    throw new Error(`${variableName} is required`)
  }

  return value;
}
