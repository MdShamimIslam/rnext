"use client"

import { useRouter } from "next/navigation";

const Button = ({ children }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard/analytics");
  };
  
  return (
    <div>
      <button onClick={handleClick} className="mt-6 bg-purple-500 text-white px-3 py-2 rounded">{children}</button>
    </div>
  );
};

export default Button;