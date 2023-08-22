import { useState, useEffect } from 'react';
import Pagination from 'react-js-pagination';
// import 'react-js-pagination/dist/Pagination.css';
import axios from 'axios';

function PaginationComponent() {
  const [data, setData] = useState([]); // 가져온 데이터 저장
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 10; // 페이지당 보여줄 아이템 수
  const totalItems = 100; // 전체 아이템 수

  useEffect(() => {
    // 페이지가 변경되었을 때 데이터를 가져오는 로직
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `{baseURL}/questions/all=${activePage}&limit=${itemsPerPage}`,
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [activePage]);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <div className="flex w-72">
      {/* 데이터 출력 부분 */}
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      {/* 페이지네이션 컴포넌트 */}
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={totalItems}
        pageRangeDisplayed={5} // 보여줄 페이지 범위 설정
        onChange={handlePageChange}
      />
    </div>
  );
}

export default PaginationComponent;
