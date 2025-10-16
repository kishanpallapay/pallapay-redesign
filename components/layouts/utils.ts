const getInitials = (value: string): string =>
  value
    .split(" ")
    .filter(Boolean)
    .map(part => part.charAt(0)?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("") || "JD";

export { getInitials };
