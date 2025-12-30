interface EmptyStateProps {
  title?: string;
  description?: string;
}

export function EmptyState({ 
  title = 'No results found', 
  description = 'Try adjusting your search or filters' 
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2">{description}</p>
    </div>
  );
}
