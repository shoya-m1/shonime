export const TableDownload = ({ downloads }) => {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          {downloads?.map((data, iData) => (
            <div key={iData} className="overflow-hidden mt-3">
              <h1>{data.title}</h1>
              <table className="min-w-full divide-y divide-neutral-500">
                <thead>
                  <tr className="text-base text-neutral-300">
                    <th scope="col" className="px-2 py-3 text-start ">
                      Qualities
                    </th>
                    <th scope="col" className="px-1 py-3 text-start ">
                      Download Links
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-500">
                  {data?.qualities?.map((qualitie, qualitieId) => (
                    <tr key={qualitieId}>
                      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium text-neutral-300">{qualitie.title}</td>
                      <td className="px-1 flex flex-wrap gap-3 py-4 whitespace-nowrap text-sm text-neutral-300">
                        {qualitie?.urls?.map((e, i) => (
                          <a key={i} href={e.url} className="hover:bg-yellow-500 hover:text-neutral-100 duration-300 border border-neutral-400 px-2 py-1">
                            {e.title}
                          </a>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
