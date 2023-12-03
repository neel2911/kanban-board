import { NextPage } from "next";
import Dashboard from "@/app/components/dashboard";

const DashboardPage: NextPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="py-8">
        <Dashboard />
      </main>
    </div>
  );
};

export default DashboardPage;
