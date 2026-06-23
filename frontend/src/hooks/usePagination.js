import { useState } from "react";

const usePagination = (initialPage = 1, itemsPerPage = 10) => {

  const [currentPage, setCurrentPage] = useState(initialPage);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const nextPage = () => {
    setCurrentPage(prev => prev + 1);
  };

  const prevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const paginateData = (data = []) => {

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return data.slice(start, end);

  };

  const totalPages = (data = []) =>
    Math.ceil(data.length / itemsPerPage);

  return {
    currentPage,
    itemsPerPage,
    goToPage,
    nextPage,
    prevPage,
    paginateData,
    totalPages
  };

};

export default usePagination;