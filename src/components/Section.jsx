import React from "react";

function Section({ title, examples = [] }) {
  return (
    <section className="bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-semibold text-indigo-600 mb-4">{title}</h2>

      <div className="space-y-4">
        {examples.map((example, index) => (
          <div key={index}>
            {example.description && (
              <p className="text-sm text-gray-700 mb-1">{example.description}</p>
            )}
            <pre className="bg-gray-100 text-sm p-3 rounded-md overflow-x-auto">
              <code>{example.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section;
