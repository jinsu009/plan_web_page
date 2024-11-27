import { Table } from 'antd';

const BoardList = () => {
  const boardColumn = [
    {
      title: '제목',
      key: 'title',
    },
    {
      title: '작성자',
      key: 'writer',
    },
    {
      title: '작성일자',
      key: 'write_date',
    },
  ];

  return <Table columns={boardColumn}></Table>;
};

export default BoardList;
