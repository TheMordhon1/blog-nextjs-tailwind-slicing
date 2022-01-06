export default function Container({ children }) {
  return (
    <div className="bg-gradient-to-b from-gray-600 to-gray-900 min-h-screen text-white">
      <div className="container mx-auto">{children}</div>
    </div>
  );
}
