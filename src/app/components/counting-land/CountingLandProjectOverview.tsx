export function CountingLandProjectOverview() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Role</h3>
            <p className="text-gray-900">UX Designer</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Timeline</h3>
            <p className="text-gray-900">5 Months</p>
            <p className="text-sm text-gray-500">Aug - Dec 2021</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Company</h3>
            <p className="text-gray-900">Apple Developer Academy</p>
          </div>
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-3">Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-xs">Figma</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs">Notion</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Miro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}