export const TableDownload = ({ downloads }) => {
  return (
    <div className="flex flex-col mt-3">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-neutral-500">
              <thead>
                <tr className="text-base font-medium text-neutral-300">
                  <th scope="col" className="px-2 py-3 text-start ">
                    Qualities
                  </th>
                  <th scope="col" className="px-2 py-3 text-start ">
                    Size
                  </th>
                  <th scope="col" className="px-1 py-3 text-start ">
                    Download Links
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-500">
                {downloads?.map(
                  (data, i) =>
                    data.urls.length > 0 && (
                      <tr key={i}>
                        <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-neutral-300">{data.qualities}</td>
                        <td className="px-2 py-4 text-sm text-neutral-300-800">{data.size}</td>
                        <td key={i} className="px-1 flex flex-wrap gap-3 py-4 whitespace-nowrap text-sm text-neutral-300">
                          {data.urls.map((e, i) => (
                            <a key={i} href={e.url} className="hover:bg-yellow-500 hover:text-neutral-100 duration-300 border border-neutral-400 px-2 py-1">
                              {e.title}
                            </a>
                          ))}
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
