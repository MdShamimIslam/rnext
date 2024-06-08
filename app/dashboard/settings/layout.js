export default function SettingsLayout({ children }) {
  return (
    <>
      <nav className="p-5">
        <ul className="flex gap-5 justify-center">
          <li>Dashboard-2 Home</li>
          <li>Settings</li>
          <li>Analytics</li>
        </ul>
      </nav>
      {children}
    </>


  );
}