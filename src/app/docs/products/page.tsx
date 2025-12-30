export default function ProductsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Products API</h1>


      <div className="mb-12 border border-gray-200 rounded-lg p-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded font-semibold text-sm">
            GET
          </span>
          <code className="text-sm font-mono bg-gray-100 px-3 py-1 rounded break-all">
            /products
          </code>
        </div>
        <p className="text-gray-700 mb-6">
          Retrieve a paginated list of products with optional filtering, sorting, and search.
        </p>

        <h3 className="font-semibold text-gray-900 mb-3">Query Parameters</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full text-sm border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Parameter</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Type</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Required</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-4 py-2 font-mono text-blue-600">page</td>
                <td className="px-4 py-2 text-gray-600">integer</td>
                <td className="px-4 py-2 text-gray-500">No</td>
                <td className="px-4 py-2 text-gray-700">Page number (min: 1)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-blue-600">per_page</td>
                <td className="px-4 py-2 text-gray-600">integer</td>
                <td className="px-4 py-2 text-gray-500">No</td>
                <td className="px-4 py-2 text-gray-700">Items per page (1-50, default: 12)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-blue-600">sort</td>
                <td className="px-4 py-2 text-gray-600">string</td>
                <td className="px-4 py-2 text-gray-500">No</td>
                <td className="px-4 py-2 text-gray-700">price_asc, price_desc, name_asc, name_desc, newest</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-blue-600">category</td>
                <td className="px-4 py-2 text-gray-600">string</td>
                <td className="px-4 py-2 text-gray-500">No</td>
                <td className="px-4 py-2 text-gray-700">Filter by category slug</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-blue-600">brand</td>
                <td className="px-4 py-2 text-gray-600">string</td>
                <td className="px-4 py-2 text-gray-500">No</td>
                <td className="px-4 py-2 text-gray-700">Filter by brand slug</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-blue-600">price_min</td>
                <td className="px-4 py-2 text-gray-600">number</td>
                <td className="px-4 py-2 text-gray-500">No</td>
                <td className="px-4 py-2 text-gray-700">Minimum price (min: 0)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-blue-600">price_max</td>
                <td className="px-4 py-2 text-gray-600">number</td>
                <td className="px-4 py-2 text-gray-500">No</td>
                <td className="px-4 py-2 text-gray-700">Maximum price (min: 0, must be ≥ price_min)</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-blue-600">q</td>
                <td className="px-4 py-2 text-gray-600">string</td>
                <td className="px-4 py-2 text-gray-500">No</td>
                <td className="px-4 py-2 text-gray-700">Search query (max 100 chars)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold text-gray-900 mb-3">Example Request</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm mb-6 overflow-x-auto">
          curl "https://dummyapibackend-production.up.railway.app/api/v1/products?page=1&per_page=10&sort=price_asc"
        </div>

        <h3 className="font-semibold text-gray-900 mb-3">Example Response</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
{`{
  "data": [
    {
      "id": 1,
      "name": "Wireless Headphones",
      "slug": "wireless-headphones",
      "description": "High-quality wireless headphones with noise cancellation",
      "price": 299.99,
      "discounted_price": 269.99,
      "total_stock": 45,
      "is_in_stock": true,
      "image": "https://picsum.photos/seed/wireless-headphones/400/300",
      "brand": {
        "id": 1,
        "name": "TechBrand",
        "slug": "techbrand",
        "website": "https://techbrand.com"
      },
      "category": {
        "id": 2,
        "name": "Audio",
        "slug": "audio",
        "parent_id": null,
        "children": []
      },
      "variants": [
        {
          "sku": "SKU-WH-001",
          "price": 269.99,
          "stock": 15,
          "attributes": {
            "Color": "Black",
            "Size": "Standard"
          },
          "image_url": "https://picsum.photos/400/300"
        }
      ]
    }
  ],
  "links": {
    "first": "https://api.example.com/products?page=1",
    "last": "https://api.example.com/products?page=10",
    "prev": null,
    "next": "https://api.example.com/products?page=2"
  },
  "meta": {
    "current_page": 1,
    "from": 1,
    "last_page": 10,
    "per_page": 10,
    "to": 10,
    "total": 100
  }
}`}
        </div>
      </div>


      <div className="mb-12 border border-gray-200 rounded-lg p-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded font-semibold text-sm">
            GET
          </span>
          <code className="text-sm font-mono bg-gray-100 px-3 py-1 rounded break-all">
            /products/{"{slug}"}
          </code>
        </div>
        <p className="text-gray-700 mb-6">
          Retrieve detailed information about a specific product by its slug. Cached for 5 minutes.
        </p>

        <h3 className="font-semibold text-gray-900 mb-3">Path Parameters</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full text-sm border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Parameter</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Type</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 font-mono text-blue-600">slug</td>
                <td className="px-4 py-2 text-gray-600">string</td>
                <td className="px-4 py-2 text-gray-700">Product slug (e.g., "wireless-headphones")</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold text-gray-900 mb-3">Example Request</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
          curl "https://dummyapibackend-production.up.railway.app/api/v1/products/wireless-headphones"
        </div>
      </div>


      <div className="mb-12 border border-gray-200 rounded-lg p-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded font-semibold text-sm">
            GET
          </span>
          <code className="text-sm font-mono bg-gray-100 px-3 py-1 rounded break-all">
            /products/{"{id}"}/variants
          </code>
        </div>
        <p className="text-gray-700 mb-6">
          Get all variants for a specific product.
        </p>

        <h3 className="font-semibold text-gray-900 mb-3">Path Parameters</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full text-sm border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Parameter</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Type</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 font-mono text-blue-600">id</td>
                <td className="px-4 py-2 text-gray-600">integer</td>
                <td className="px-4 py-2 text-gray-700">Product ID</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold text-gray-900 mb-3">Example Request</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
          curl "https://dummyapibackend-production.up.railway.app/api/v1/products/1/variants"
        </div>
      </div>


      <div className="mb-12 border border-gray-200 rounded-lg p-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded font-semibold text-sm">
            GET
          </span>
          <code className="text-sm font-mono bg-gray-100 px-3 py-1 rounded break-all">
            /products/{"{id}"}/variants/{"{sku}"}
          </code>
        </div>
        <p className="text-gray-700 mb-6">
          Get a specific variant by product ID and SKU.
        </p>

        <h3 className="font-semibold text-gray-900 mb-3">Path Parameters</h3>
        <div className="overflow-x-auto mb-6">
          <table className="min-w-full text-sm border">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Parameter</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Type</th>
                <th className="px-4 py-2 text-left font-medium text-gray-700 border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 font-mono text-blue-600">id</td>
                <td className="px-4 py-2 text-gray-600">integer</td>
                <td className="px-4 py-2 text-gray-700">Product ID</td>
              </tr>
              <tr>
                <td className="px-4 py-2 font-mono text-blue-600">sku</td>
                <td className="px-4 py-2 text-gray-600">string</td>
                <td className="px-4 py-2 text-gray-700">Variant SKU</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="font-semibold text-gray-900 mb-3">Example Request</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
          curl "https://dummyapibackend-production.up.railway.app/api/v1/products/1/variants/SKU-001"
        </div>
      </div>
    </>
  );
}
