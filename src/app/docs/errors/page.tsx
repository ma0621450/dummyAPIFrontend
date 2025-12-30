export default function ErrorsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Error Responses</h1>

      <p className="text-gray-700 mb-8">
        All error responses follow a consistent JSON structure. Here are the common HTTP status codes you may encounter:
      </p>

      <div className="space-y-8">
        <div className="border-l-4 border-red-500 pl-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">404 - Not Found</h3>
          <p className="text-gray-700 mb-4">The requested resource does not exist.</p>
          
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Common Scenarios:</h4>
          <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
            <li>Product slug does not exist</li>
            <li>Product ID not found</li>
            <li>Variant SKU not found</li>
            <li>Page number exceeds total pages</li>
          </ul>

          <h4 className="text-sm font-semibold text-gray-900 mb-2">Example Response:</h4>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
{`{
  "message": "Product not found"
}`}
          </div>
        </div>

        <div className="border-l-4 border-yellow-500 pl-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">422 - Validation Error</h3>
          <p className="text-gray-700 mb-4">The request contains invalid parameters.</p>
          
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Common Scenarios:</h4>
          <ul className="text-sm text-gray-700 mb-4 list-disc list-inside">
            <li>Invalid sort parameter (must be: price_asc, price_desc, name_asc, name_desc, newest)</li>
            <li>per_page exceeds maximum (50) or below minimum (1)</li>
            <li>price_min greater than price_max</li>
            <li>Search query exceeds 100 characters</li>
            <li>page number below 1</li>
            <li>price values below 0</li>
          </ul>

          <h4 className="text-sm font-semibold text-gray-900 mb-2">Example Response:</h4>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
{`{
  "message": "Validation failed",
  "errors": {
    "per_page": ["The per_page must not be greater than 50."],
    "sort": ["The selected sort is invalid."]
  }
}`}
          </div>

          <h4 className="text-sm font-semibold text-gray-900 mb-2 mt-4">Price Range Validation:</h4>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
{`{
  "message": "Validation failed",
  "errors": {
    "price_min": ["The price_min must be less than or equal to price_max."]
  }
}`}
          </div>
        </div>

        <div className="border-l-4 border-orange-500 pl-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">429 - Too Many Requests</h3>
          <p className="text-gray-700 mb-4">Rate limit exceeded (60 requests per minute per IP).</p>
          
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Example Response:</h4>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
{`{
  "message": "Too Many Attempts."
}`}
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded p-3 mt-4">
            <p className="text-sm text-yellow-800 m-0">
              <strong>Rate Limit:</strong> 60 requests per minute per IP address. Wait 60 seconds before retrying.
            </p>
          </div>
        </div>

        <div className="border-l-4 border-gray-400 pl-4">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">500 - Internal Server Error</h3>
          <p className="text-gray-700 mb-4">An unexpected error occurred on the server.</p>
          
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Example Response:</h4>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
{`{
  "message": "Server Error"
}`}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t pt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Best Practices</h2>
        <ul className="space-y-2 text-gray-700 list-disc list-inside">
          <li>Always check the HTTP status code before processing the response</li>
          <li>Handle validation errors by displaying field-specific messages from the errors object</li>
          <li>Implement exponential backoff for rate limit errors</li>
          <li>Log 500 errors for debugging purposes</li>
          <li>Validate query parameters on the client side before sending requests</li>
        </ul>
      </div>
    </>
  );
}
