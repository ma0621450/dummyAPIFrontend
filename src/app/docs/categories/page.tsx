export default function CategoriesPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Categories API</h1>

      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded font-semibold text-sm">
            GET
          </span>
          <code className="text-sm font-mono bg-gray-100 px-3 py-1 rounded break-all">
            /categories
          </code>
        </div>
        <p className="text-gray-700 mb-6">
          Get all categories in a hierarchical tree structure with parent-child relationships. Cached for 1 hour.
        </p>

        <h3 className="font-semibold text-gray-900 mb-3">Example Request</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm mb-6 overflow-x-auto">
          curl "https://dummyapibackend-production.up.railway.app/api/v1/categories"
        </div>

        <h3 className="font-semibold text-gray-900 mb-3">Example Response</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
{`{
  "data": [
    {
      "id": 1,
      "name": "Electronics",
      "slug": "electronics",
      "parent_id": null,
      "children": [
        {
          "id": 2,
          "name": "Smartphones",
          "slug": "smartphones",
          "parent_id": 1,
          "children": []
        },
        {
          "id": 3,
          "name": "Laptops",
          "slug": "laptops",
          "parent_id": 1,
          "children": []
        }
      ]
    },
    {
      "id": 4,
      "name": "Audio",
      "slug": "audio",
      "parent_id": null,
      "children": [
        {
          "id": 5,
          "name": "Headphones",
          "slug": "headphones",
          "parent_id": 4,
          "children": []
        }
      ]
    }
  ]
}`}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Categories are cached for 1 hour. The response includes nested children for hierarchical navigation. Each category includes id, name, slug, parent_id, and children array.
          </p>
        </div>
      </div>
    </>
  );
}
