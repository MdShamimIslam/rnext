
export default function DashboardLayout({ children }) {
  return (
    <>
      <nav className="p-5">
        <ul className="flex gap-5 justify-center">
          <li>Dashboard Home</li>
          <li>Settings</li>
          <li>Analytics</li>
        </ul>
      </nav>
      {children}
    </>
        
   
  );
}
