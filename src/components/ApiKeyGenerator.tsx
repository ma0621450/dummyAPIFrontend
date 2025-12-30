"use client";

import { useState } from "react";
import { clsx } from "clsx";

export default function ApiKeyGenerator() {
  const [key, setKey] = useState<string | null>(null);
  const [expiresAt, setExpiresAt] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const generateKey = async () => {
    setLoading(true);
    setError(null);
    setKey(null);

    try {
      const res = await fetch("https://dummyapibackend-production.up.railway.app/api/v1/keys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to generate key");
      }

      setKey(data.key);
      setExpiresAt(data.expires_at);
      
      // Auto-save to local storage for Playground usage
      localStorage.setItem("dummy_api_key", data.key);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (key) {
      navigator.clipboard.writeText(key);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white shadow-2xl mb-12 border border-gray-700">
      <div className="max-w-xl">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-blue-500 p-1.5 rounded-lg">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
          </span>
          Get Your Free API Key
        </h2>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          To prevent abuse, we require a lightweight API key. No login needed. 
          Just click below to generate a temporary key valid for <strong>3 days</strong>.
        </p>

        {!key ? (
          <div>
            <button
              onClick={generateKey}
              disabled={loading}
              className={clsx(
                "px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all transform active:scale-95 shadow-lg flex items-center gap-2",
                loading && "opacity-75 cursor-wait"
              )}
            >
              {loading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Generating...
                </>
              ) : (
                "Generate Key Now"
              )}
            </button>
            {error && (
              <p className="mt-4 text-red-400 text-sm bg-red-900/20 p-3 rounded border border-red-500/30">
                {error}
              </p>
            )}
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="bg-gray-950 rounded-lg border border-gray-700 p-4 mb-4 relative group">
              <label className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2 block">
                Your API Key
              </label>
              <div className="flex items-center gap-3">
                <code className="flex-1 font-mono text-green-400 text-sm break-all">
                  {key}
                </code>
                <button
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-gray-800 rounded transition-colors text-gray-400 hover:text-white"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400 bg-blue-900/20 p-3 rounded border border-blue-500/20">
              <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Expires on {new Date(expiresAt!).toLocaleDateString()} at {new Date(expiresAt!).toLocaleTimeString()}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
