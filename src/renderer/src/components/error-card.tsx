import React from 'react'

interface ErrorCardProps {
  message?: string
  onRetry?: () => void
}

const ErrorCard: React.FC<ErrorCardProps> = ({
  message = 'An unknown error has occurred',
  onRetry
}) => {
  return (
    <div className="p-4 rounded-lg bg-red-50 border border-red-200">
      <div className="flex items-center gap-3">
        <div className="text-red-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-red-800">Error</h3>
          <p className="mt-1 text-sm text-red-700">{message}</p>
        </div>
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-3 py-1.5 text-sm font-medium text-red-600 hover:text-red-500 
                       bg-red-50 hover:bg-red-100 rounded-md transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  )
}

export default ErrorCard
