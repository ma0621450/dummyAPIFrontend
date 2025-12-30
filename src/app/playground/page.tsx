"use client";

import { useState, useEffect } from "react";
import { clsx } from "clsx";

const BASE_URL = "https://dummyapibackend-production.up.railway.app/api/v1";

const ENDPOINT_TEMPLATES = [
  { method: "GET", path: "/brands", label: "Get All Brands", variables: [] },
  { method: "GET", path: "/categories", label: "Get All Categories", variables: [] },
  { method: "GET", path: "/products", label: "Get All Products", variables: [] },
  { method: "GET", path: "/products/{slug}", label: "Get Single Product", variables: ["slug"] },
  { method: "GET", path: "/products/{id}/variants", label: "Get Product Variants", variables: ["id"] },
  { 
    method: "GET", 
    path: "/products/{id}/variants/{sku}", 
    label: "Get Variant by SKU", 
    variables: ["id", "sku"] 
  },
];

export default function PlaygroundPage() {
  const [selectedTemplateIdx, setSelectedTemplateIdx] = useState(0);
  const [variables, setVariables] = useState<Record<string, string>>({
    slug: "est-non-ipsum-ipsa-fugiat",
    id: "1",
    sku: "SKU-####-????"
  });
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<any>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [time, setTime] = useState<number | null>(null);

  // Construct final URL based on selected template and variables
  const template = ENDPOINT_TEMPLATES[selectedTemplateIdx];
  const finalPath = template.path.replace(/{(\w+)}/g, (_, key) => {
    return variables[key] || `:${key}`;
  });

  const handleVariableChange = (key: string, value: string) => {
    setVariables(prev => ({ ...prev, [key]: value }));
  };

  const handleSend = async () => {
    setIsLoading(true);
    setResponse(null);
    setStatus(null);
    setTime(null);

    const startTime = performance.now();
    try {
      const res = await fetch(`${BASE_URL}${finalPath}`);
      const endTime = performance.now();
      
      setStatus(res.status);
      setTime(Math.round(endTime - startTime));

      const data = await res.json();
      setResponse(data);
    } catch (error) {
      console.error("Request failed", error);
      setStatus(0);
      setResponse({ error: "Network error or invalid request" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 mb-2">API Playground</h1>
      <p className="text-gray-600 mb-8">Test API endpoints directly in your browser.</p>


      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Endpoint</h2>
        

        <div className="flex flex-wrap gap-2 mb-6">
          {ENDPOINT_TEMPLATES.map((ep, idx) => (
            <button
              key={ep.path}
              onClick={() => setSelectedTemplateIdx(idx)}
              className={clsx(
                "px-3 py-1 text-sm rounded-full border transition-colors",
                selectedTemplateIdx === idx
                  ? "bg-blue-50 border-blue-200 text-blue-700"
                  : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
              )}
            >
              {ep.label}
            </button>
          ))}
        </div>


        {template.variables.length > 0 && (
          <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Path Parameters</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {template.variables.map((varName) => (
                <div key={varName}>
                  <label className="block text-xs font-semibold text-gray-500 uppercase mb-1">
                    {varName}
                  </label>
                  <input
                    type="text"
                    value={variables[varName] || ""}
                    onChange={(e) => handleVariableChange(varName, e.target.value)}
                    placeholder={`Enter ${varName}`}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        )}


        <div className="flex flex-col md:flex-row gap-2 mb-4">
          <div className="hidden md:flex flex-none items-center bg-gray-100 px-4 rounded-l border border-r-0 border-gray-300 text-gray-500 font-mono text-sm">
            GET
          </div>
          <input
            type="text"
            readOnly
            value={`${BASE_URL}${finalPath}`}
            className="flex-1 px-4 py-2 border border-gray-300 rounded md:rounded-l-none md:rounded-r-none font-mono text-sm bg-gray-50 text-gray-600 cursor-not-allowed w-full"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded md:rounded-l-none md:rounded-r hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </div>
      </div>


      {status !== null && (
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Response</h2>
            <div className="flex items-center gap-4 text-sm">
              <span className={clsx(
                "px-2 py-0.5 rounded font-medium",
                status >= 200 && status < 300 ? "bg-green-100 text-green-700" :
                status >= 400 ? "bg-red-100 text-red-700" : "bg-gray-100 text-gray-700"
              )}>
                Status: {status}
              </span>
              <span className="text-gray-500">
                Time: {time}ms
              </span>
            </div>
          </div>
          <div className="p-0">
            <pre className="p-6 bg-gray-900 text-gray-100 text-sm font-mono overflow-auto max-h-[600px]">
              {JSON.stringify(response, null, 2)}
            </pre>
          </div>
        </div>
      )}
    </>
  );
}
