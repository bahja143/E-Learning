import _ from "lodash";

const paginate = (items, pageSize, currentPage) => {
  const index = (currentPage - 1) * pageSize;

  return _(items).slice(index).take(pageSize).value();
};

export default paginate;
