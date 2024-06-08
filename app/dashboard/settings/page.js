import Button from "@/app/components/Button";
import SortProducts from "@/app/components/SortProducts";
import { Suspense } from "react";

export const metadata = {
    title: "Settings page",
    description: "This is our Settings page",
};

const Settings = () => {
    return (
        <div className="text-2xl text-center  p-6">
            <h2 className="text-yellow-800 mb-6">Settings Page</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, mollitia optio explicabo dicta repudiandae iure enim nemo? Similique, architecto, rem totam repudiandae voluptate non exercitationem molestias rerum eos temporibus at dolorum modi reprehenderit esse suscipit distinctio nisi aperiam officia expedita. Hic nemo officiis saepe commodi facilis nesciunt voluptatem vero quos!</p>
            <Button>Go to Analytics</Button>
            <Suspense>
                <SortProducts />
            </Suspense>

        </div>
    );
};

export default Settings;