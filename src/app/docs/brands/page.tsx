export default function BrandsPage() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Brands API</h1>

      <div className="border border-gray-200 rounded-lg p-6">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded font-semibold text-sm">
            GET
          </span>
          <code className="text-sm font-mono bg-gray-100 px-3 py-1 rounded break-all">
            /brands
          </code>
        </div>
        <p className="text-gray-700 mb-6">
          Get all brands available in the system. Cached for 1 hour.
        </p>

        <h3 className="font-semibold text-gray-900 mb-3">Example Request</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm mb-6 overflow-x-auto">
          curl "https://dummyapibackend-production.up.railway.app/api/v1/brands"
        </div>

        <h3 className="font-semibold text-gray-900 mb-3">Example Response</h3>
        <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
{`{
  "data": [
    {
      "id": 1,
      "name": "TechBrand",
      "slug": "techbrand",
      "website": "https://techbrand.com"
    },
    {
      "id": 2,
      "name": "AudioPro",
      "slug": "audiopro",
      "website": "https://audiopro.com"
    },
    {
      "id": 3,
      "name": "SmartDevices",
      "slug": "smartdevices",
      "website": null
    }
  ]
}`}
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-6">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Brands are cached for 1 hour. Use the brand slug to filter products by brand in the /products endpoint.
          </p>
        </div>
      </div>
    </>
  );
}
