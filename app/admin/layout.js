import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-white shadow-md">
        <nav className="mt-5">
          <ul>
            <li>
              <Link href="/admin" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin/users" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
                Users
              </Link>
            </li>
            <li>
              <Link href="/admin/products" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
                Products
              </Link>
            </li>
            <li>
              <Link href="/admin/orders" className="block py-2 px-4 text-gray-700 hover:bg-gray-200">
                Orders
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-10">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" asChild>
            <Link href="/api/admin/logout">Logout</Link>
          </Button>
        </header>
        {children}
      </main>
    </div>
  )
}