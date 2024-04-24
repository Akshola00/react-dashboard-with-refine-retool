import { DeleteButton, EditButton, FilterDropdown, SaveButton, ShowButton } from "@refinedev/antd";
import { BaseRecord, useOne } from "@refinedev/core";
import { useTable } from "@refinedev/antd";
import { Form, Input, Radio, Row, Space, Table } from "antd";
import { table } from "console";


export const BlogPosts = () => {
    const { tableProps, searchFormProps } = useTable<Isearch>({
        syncWithLocation: true,
        resource: "blog_posts", sorters: {
          initial: [{ field: "id", order: "asc" }]
        }, onSearch: (values) => { return [{ field: "name", operator: "contains", values: values.name }] }
      })
    
    const { data, isLoading } = useOne({ resource: "blog_posts", id: 1 });

  return (
    <div>
     <p>blogs</p>
     <Form {...searchFormProps} layout="inline" >
        <Form.Item name="name">
          <Input placeholder="search products" />
        </Form.Item>
        <SaveButton onClick={searchFormProps.form?.submit} />
      </Form>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex='id' title={"ID"} />
        <Table.Column dataIndex='title' title={"title"} />
        <Table.Column dataIndex='content' title={"content"} />
        {/* <Table.Column dataIndex='category' title={"category"}
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Radio.Group>
                <Radio value="sports">Sports</Radio>
                <Radio value="gaming">Gaming</Radio>
                <Radio value="office">Office</Radio>
              </Radio.Group>
            </FilterDropdown>
          )}
        /> */}
        <Table.Column dataIndex='status' title={"status"} />

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
    </div>
  )
}

export default BlogPosts
