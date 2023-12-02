const Dashboard: React.FC<any> = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-2 gap-4">
      <div className="bg-gray-200 rounded-md p-4">
        <h2 className="text-lg font-semibold mb-2">Category 1</h2>
        <p>Content for Category 1</p>
      </div>
      {/* Other categories */}
    </div>
  );
};

export default Dashboard;
