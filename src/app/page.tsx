export default function HomePage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Dummy Product API
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        A fake REST API for testing and learning
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Base URL</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
            https://dummyapibackend-production.up.railway.app/api/v1
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Quick Start</h2>
          <p className="text-gray-700 mb-3">
            Get started by making your first API request:
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
            curl https://dummyapibackend-production.up.railway.app/api/v1/products
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Available Endpoints</h2>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li><strong>GET /products</strong> - List products with filtering, sorting, and search</li>
            <li><strong>GET /products/{"{slug}"}</strong> - Get product by slug</li>
            <li><strong>GET /products/{"{id}"}/variants</strong> - Get product variants</li>
            <li><strong>GET /products/{"{id}"}/variants/{"{sku}"}</strong> - Get specific variant</li>
            <li><strong>GET /categories</strong> - List all categories (hierarchical)</li>
            <li><strong>GET /brands</strong> - List all brands</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Features</h2>
          <ul className="space-y-2 text-gray-700 list-disc list-inside">
            <li><strong>Pagination</strong> - 1-50 items per page (default: 12)</li>
            <li><strong>Filtering</strong> - By category, brand, price range</li>
            <li><strong>Sorting</strong> - By price, name, or newest</li>
            <li><strong>Search</strong> - Full-text search across products</li>
            <li><strong>Caching</strong> - 5-minute cache for single products, 1-hour for categories/brands</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Rate Limiting</h2>
          <p className="text-gray-700">
            The API is rate limited to <strong>60 requests per minute</strong> per IP address.
          </p>
        </section>
      </div>
    </>
  );
}
