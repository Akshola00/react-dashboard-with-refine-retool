import { Card, Row, Col, Typography, Tooltip } from 'antd'
import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';

const { Title } = Typography
const Dashboard = () => {
    useEffect(() => {
        fetchUsers();
        //refresh to get new update
        const interval = setInterval(fetchUsers, 10000);
        return () => {
            clearInterval(interval);
        }
    }, [])
 
    const [totalBlogs, setTotalBlogs] = useState(0);
    const [totalProducts, setTotalProducts] = useState(0);

    const [users, setUsers] = useState([])

    //create a function to fetch from the api
    const fetchUsers = () => {
        fetch("https://api.fake-rest.refine.dev/users")
            .then(response => response.json())
            .then(data => {
                const newData = { time: new Date().toLocaleTimeString(), users: data.length }
                // setUsers(data.length)
                setUsers(currentData => [...currentData, newData])
                console.log(users)
            })
    }
    // fetchUsers();

    const fetchBlogs = () => {
        fetch("https://api.fake-rest.refine.dev/blog_posts")
            .then(response => response.json())
            .then(data => setTotalBlogs(data.length))
    }
    fetchBlogs();



    const fetchProducts = () => {
        fetch("https://api.fake-rest.refine.dev/products")
            .then(response => response.json())
            .then(data => setTotalProducts(data.length))
    }
    fetchProducts();

    return (
        <Row gutter={16}>
            <Col span={8}>
                <Card title="Total Users">
                    <Title level={2}>{0}</Title>
                </Card>
            </Col>

            <Col span={8}>
                <Card title="Total Products">
                    <Title level={2}>{totalProducts}</Title>
                </Card>
            </Col>

            <Col span={8}>
                <Card title="Total Blogs">
                    <Title level={2}>{totalBlogs}</Title>
                </Card>
            </Col>


            <Card title="Real time Users Data">
                <LineChart width={600} height={600} data={users}>
                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </Card>
        </Row>
    )
}

export default Dashboard