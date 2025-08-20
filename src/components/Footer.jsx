export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} HoneyBerries. All rights reserved.</p>
      </div>
    </footer>
  )
}
