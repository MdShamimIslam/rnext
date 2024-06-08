
export default function AnalyticsLayout({ children }) {
  return (
    <>
      <nav className="p-5">
        <ul className="flex gap-5 justify-center">
          <li>Dashboard-1 Home</li>
          <li>Settings</li>
          <li>Analytics</li>
        </ul>
      </nav>
      {children}
    </>
        
   
  );
}
