import { Suspense } from "react";
import HeavyPost from "../components/HeavyPost";

export const metadata = {
  title: "Heavy page",
  description: "This is our Heavy page",
};

const Heavy = () => {
  return (
    <div className="text-2xl text-center  p-6">
      <h2 className="text-yellow-800 mb-6">Heavy Page</h2>
      <Suspense fallback={<h2>heavyPost loading...</h2>}>
      <HeavyPost></HeavyPost>
      </Suspense>
    </div>
  );
};

export default Heavy;