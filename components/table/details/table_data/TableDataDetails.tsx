const TableDataDetails = ({
  children,
  title,
}: {
  children: any;
  title: string;
}) => {
  return (
    <td className="whitespace-nowrap px-6 py-3 text-sm lg:text-base font-medium text-gray-400 ">
      <div className="w-full flex">
        <div className="w-1/3">
          <p>{title}</p>
        </div>
        <div className="w-2/3">
          <p className="ml-6 mr-5 text-left  text-black font-normal">
            {children}
          </p>
        </div>
      </div>
    </td>
  );
};

export default TableDataDetails;
