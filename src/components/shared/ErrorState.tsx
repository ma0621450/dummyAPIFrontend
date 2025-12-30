interface ErrorStateProps {
  title?: string;
  description?: string;
  retry?: () => void;
}

export function ErrorState({ 
  title = 'Something went wrong', 
  description = 'Please try again later',
  retry
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <h3 className="text-lg font-semibold text-destructive">{title}</h3>
      <p className="text-sm text-muted-foreground mt-2">{description}</p>
      {retry && (
        <button
          onClick={retry}
          className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
