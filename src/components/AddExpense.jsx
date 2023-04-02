import { Table } from "antd";

const column = [
  {
    title: "Month",
    dataIndex: "month",
    key: "month",
  },
  {
    title: "Limit",
    dataIndex: "limit",
    key: "limit",
  },
  {
    title: "Expense",
    dataIndex: "expense",
    key: "expense",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text, record) => {
      return (
        <div
          style={{
            border: "2px solid gray",
            borderRadius: "20px",
            backgroundColor: "#d8d3d3",
          }}
        >
          <div
            style={{
              width: text<100?`${text}%`:'100%',
              backgroundColor: text < 100 ? "green" : "red",
              borderRadius: "20px",
            }}
          >
            {text}
          </div>
        </div>
      );
    },
  },
  {
    title: "Savings / Over Expense",
    dataIndex: "savings",
    key: "savings",
  },
];
const data = [
  {
    month: "Jan",
    limit: "3000",
    expense: "2000",
    status: 50,
    savings: 1000,
  },
  {
    month: "Jan",
    limit: "3000",
    expense: "3000",
    status: 100,
    savings: 0,
  },
  {
    month: "Jan",
    limit: "3000",
    expense: "4000",
    status: 133,
    savings: "-1000",
  },
  {
    month: "Jan",
    limit: "3000",
    expense: "2000",
    status: 50,
    savings: 1000,
  },
  {
    month: "Jan",
    limit: "3000",
    expense: "2000",
    status: 50,
    savings: 1000,
  },
  {
    month: "Jan",
    limit: "3000",
    expense: "2000",
    status: 50,
    savings: 1000,
  },
  {
    month: "Jan",
    limit: "3000",
    expense: "2000",
    status: 50,
    savings: 1000,
  },
  {
    month: "Jan",
    limit: "2000",
    expense: "2500",
    status: 125,
    savings: "-500",
  },
  {
    month: "Jan",
    limit: "3000",
    expense: "2000",
    status: 50,
    savings: 1000,
  },
  {
    month: "Jan",
    limit: "3000",
    expense: "2000",
    status: 50,
    savings: 1000,
  },
];

const AddExpense = () => {
  return (
    <>
      <div className="user_greet">
        <h1>
          hello,{" "}
          <span style={{ color: "green" }}>
            {window.localStorage.getItem("user")} !
          </span>
        </h1>
      </div>
      <Table columns={column} dataSource={data} />
    </>
  );
};

export default AddExpense;
