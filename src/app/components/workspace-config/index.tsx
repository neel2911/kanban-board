"use client";
import { WorkspaceConfigType } from "@/app/types";
import { useForm, SubmitHandler } from "react-hook-form";

const onSubmitHandler: SubmitHandler<WorkspaceConfigType> = async (
  formValues
) => {
  const res = await fetch("api/workspaces", {
    method: "POST",
    body: JSON.stringify(formValues),
  });
  console.log(res.body);
};

const WorkspaceConfig: React.FC = () => {
  const { register, handleSubmit } = useForm<WorkspaceConfigType>();

  return (
    <main className="py-8">
      <div className="max-w-6xl mx-auto">
        <section className="bg-white rounded-md shadow p-6 mb-6 relative">
          <h2 className="text-lg font-semibold mb-4">Workspace Settings</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="flex items-center">
              <label htmlFor="workspaceName" className="w-36">
                Name:
              </label>
              <input
                id="workspaceName"
                className="border border-gray-300 rounded-md px-2 py-1 flex-1"
                {...register("name")}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="workspaceDesc" className="w-36">
                Description:
              </label>
              <textarea
                id="workspaceDesc"
                className="border border-gray-300 rounded-md px-2 py-1 flex-1"
                rows={3}
                {...register("description")}
              ></textarea>
            </div>
            <div className="flex items-center justify-end">
              <button className="bg-blue-500 text-white rounded-md px-4 py-2 shadow-md hover:bg-blue-600">
                Create
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default WorkspaceConfig;
