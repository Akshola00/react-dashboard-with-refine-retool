import { DeleteButton, EditButton, FilterDropdown, SaveButton, ShowButton } from "@refinedev/antd";
import { BaseRecord } from "@refinedev/core";
import { useTable } from "@refinedev/antd";
import { Form, Input, Radio, Row, Space, Table } from "antd";
import { table } from "console";

interface Isearch {
  name: string
}
export const ListProducts = () => {
  const { tableProps, searchFormProps } = useTable<Isearch>({
    syncWithLocation: true,
    resource: "products", sorters: {
      initial: [{ field: "id", order: "asc" }]
    }, onSearch: (values) => { return [{ field: "name", operator: "contains", values: values.name }] }
  })


  return (
    <div>
      <h1>Products</h1>
      <Form {...searchFormProps} layout="inline" >
        <Form.Item name="name">
          <Input placeholder="search products" />
        </Form.Item>
        <SaveButton onClick={searchFormProps.form?.submit} />
      </Form>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex='id' title={"ID"} />
        <Table.Column dataIndex='name' title={"NAME"} />
        <Table.Column dataIndex='material' title={"MATERIAL"} />
        <Table.Column dataIndex='category' title={"CATEGORY"}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Radio.Group>
                <Radio value="sports">Sports</Radio>
                <Radio value="gaming">Gaming</Radio>
                <Radio value="office">Office</Radio>
              </Radio.Group>
            </FilterDropdown>
          )}
        />
        <Table.Column dataIndex='price' title={"PRICE"} />

        <Table.Column title={"Actions"}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton size="small" recordItemId={record.id} />
              <ShowButton size="small" recordItemId={record.id} />
              <DeleteButton size="small" recordItemId={record.id} />
            </Space>
  )} />
        <Row>1</Row>
        <Row>Apple</Row>
      </Table>
      {/* <div className="pagination">
        <button type="button" onClick={onPrevious}>
          {"<"}
        </button>
        <div>
          {current - 1 > 0 && <span onClick={() => onPage(current - 1)}>{current - 1}</span>}
          <span className="current">{current}</span>
          {current + 1 < pageCount && <span onClick={() => onPage(current + 1)}>{current + 1}</span>}
        </div>
        <button type="button" onClick={onNext}>
          {">"}
        </button>
      </div> */}
    </div>
  );
};