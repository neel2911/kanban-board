"use client";
import Link from "next/link";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";

type BoardConfigType = {
  name: string;
  description: string;
  visibility: "public" | "private";
  workspace: string;
  columns: Array<{ value: string }>;
};

const onSubmitHandler: SubmitHandler<BoardConfigType> = (formValues) => {
  console.log(formValues);
};

const BoardConfig: React.FC = () => {
  const { register, handleSubmit, control } = useForm<BoardConfigType>({
    defaultValues: {
      columns: [{ value: "" }],
    },
  });
  const { append, remove, fields } = useFieldArray({
    name: "columns",
    control,
  });

  return (
    <main className="py-8">
      <div className="max-w-6xl mx-auto">
        <section className="bg-white rounded-md shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Board Settings</h2>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmitHandler)}>
            <div className="flex items-center">
              <label htmlFor="boardName" className="w-32">
                Name:
              </label>
              <input
                id="boardName"
                className="border border-gray-300 rounded-md px-2 py-1 flex-1"
                {...register("name")}
              />
            </div>
            <div className="flex items-center">
              <label htmlFor="boardDesc" className="w-32">
                Description:
              </label>
              <textarea
                id="boardDesc"
                className="border border-gray-300 rounded-md px-2 py-1 flex-1"
                rows={3}
                {...register("description")}
              ></textarea>
            </div>
            <div className="flex items-center">
              <label htmlFor="visibility" className="w-32">
                Visibility:
              </label>
              <select
                id="visibility"
                className="border border-gray-300 rounded-md px-2 py-1 flex-1"
                {...register("visibility")}
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            <div className="flex items-center">
              <label htmlFor="workspace" className="w-32">
                Workspace:
              </label>
              <select
                id="workspace"
                className="border border-gray-300 rounded-md px-2 py-1 flex-1"
                {...register("workspace")}
              >
                <option value="others">Others</option>
                <option value="workspaceId1">Workspace 1</option>
                <option value="workspaceId2">Workspace 2</option>
              </select>
              <Link
                className="bg-gray-300 text-gray-700 rounded-md px-3 py-1 ml-2 shadow-md hover:bg-gray-400"
                href="/workspace"
                target="_blank"
              >
                New Workspace
              </Link>
            </div>
            {fields.map((field, index) => {
              return (
                <div className="flex items-center" key={field.id}>
                  <label htmlFor="boardDesc" className="w-32">
                    Columns:
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-2 py-1 flex-1 mr-2"
                    {...register(`columns.${index}.value`)}
                  />
                  <button
                    className="bg-gray-200 text-gray-700 rounded-md px-3 py-1 shadow-md hover:bg-gray-300 disabled:pointer-events-none"
                    disabled={fields.length <= 1}
                    onClick={() => remove(index)}
                  >
                    -
                  </button>
                  <button
                    className="bg-gray-300 text-gray-700 rounded-md px-3 py-1 ml-2 shadow-md hover:bg-gray-400"
                    onClick={() => append({ value: "" })}
                  >
                    +
                  </button>
                </div>
              );
            })}

            <div className="flex items-center justify-end">
              <button className="bg-blue-500 text-white rounded-md px-4 py-2 shadow-md hover:bg-blue-600">
                Save
              </button>
            </div>
          </form>
        </section>
        {/* Other sections for configuring lists, labels, etc. */}
      </div>
    </main>
  );
};

export default BoardConfig;
