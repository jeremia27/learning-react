import React, { useState, useEffect } from 'react'
import { Button, Input, Modal, Spin, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import './Landingpage.css';



export default function Landingpage() {

    const [universities, setUniversities] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedUniversity, setSelectedUniversity] = useState({});
    const [editingUniversity, setEditingUniversity] = useState(null);
    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch universities data from API
    const fetchData = async () => {
        try {
            const response = await fetch(
                'http://universities.hipolabs.com/search?country=Indonesia'
            );
            const data = await response.json();

            return data.map((university, index) => ({
                key: index + 1,
                name: university.name,
                website: university.web_pages[0],
            }));
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    };

    const handleView = (record) => {
        setSelectedUniversity(record);
        setModalVisible(true);
    };

    const handleEdit = (record) => {
        setEditingUniversity(record);
        setModalVisible(true);
    };

    const handleSaveEdit = () => {
        // Lakukan logika penyimpanan data setelah diedit
        // Di sini, Anda dapat memperbarui data di state atau mengirimkan permintaan ke server untuk menyimpan perubahan.
        // Misalnya, perbarui hanya nama universitas untuk contoh ini.
        setUniversities((prevUniversities) =>
            prevUniversities.map((university) =>
                university.key === editingUniversity.key
                    ? { ...university, name: 'Universitas Baru' } // Ganti dengan nilai yang sesuai
                    : university
            )
        );

        setEditingUniversity(null);
        setModalVisible(false);
    };

    const handleCancelEdit = () => {
        setEditingUniversity(null);
        setModalVisible(false);
    };


    const columns = [
        {
            title: 'No',
            dataIndex: 'key',
            key: 'key',
        },
        {
            title: 'Nama Universitas',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) => (
                <>
                    <a onClick={() => handleView(record)}>View</a>
                    {' | '}
                    <a onClick={() => handleEdit(record)}>Edit</a>
                </>
            )
        },
    ];

    const onBack = () => {
        navigate('/');
    }

    useEffect(() => {
        const storedUsername = localStorage.getItem('username');
        setUsername(storedUsername || '');
        const fetchDataAndSetState = async () => {
            try {
                const data = await fetchData();
                setUniversities(data);
            } finally {
                setLoading(false)
            }

        };

        fetchDataAndSetState();
    }, []);
    return (
        <div className="App">
            <h1 className='title-table'>Welcome....{username}</h1>
            {loading ? (
                <div className='spinner-container'>
            <Spin className="spinner" style={{ textAlign: 'center', margin: 'auto' }}></Spin>
            </div>
            )
                :

                (
                    <>
                        <h1 className='title-table'>Daftar Universitas di Indonesia</h1>
                        <Table
                            className='table'
                            style={{
                                width: "55%",

                            }}
                            size="small"

                            columns={columns}
                            dataSource={universities}
                        />

                        <Modal
                            // title={`Detail Universitas: ${selectedUniversity.name}`}
                            title={editingUniversity ? `Edit Universitas: ${editingUniversity.name}` : `Detail Universitas: ${selectedUniversity.name}`}
                            open={modalVisible}
                            onCancel={() => setModalVisible(false)}
                            footer={null}
                        >
                            {/* <p>No : {selectedUniversity.key}</p>
                            <p>Nama Universitas: {selectedUniversity.name}</p>
                            <p>Website: {selectedUniversity.website}</p> */}
                            {/* Tambahkan detail lainnya sesuai kebutuhan */}

                            {editingUniversity ? (
                                <>
                                    <p>No : {editingUniversity.key}</p>
                                    <p>Nama Universitas: {editingUniversity.name}</p>
                                    <p>Website: {editingUniversity.website}</p>
                                    {/* Tambahkan input atau form untuk mengedit data */}
                                    <Input placeholder='Edit Nama Universitas' />
                                    <Input placeholder='Edit Website' />
                                    <Button onClick={handleSaveEdit}>Save</Button>
                                    <Button onClick={handleCancelEdit}>Cancel</Button>
                                </>
                            ) : (
                                <>
                                    <p>No : {selectedUniversity.key}</p>
                                    <p>Nama Universitas: {selectedUniversity.name}</p>
                                    <p>Website: {selectedUniversity.website}</p>
                                    {/* Tambahkan detail lainnya sesuai kebutuhan */}
                                </>
                            )}
                        </Modal>
                        <button onClick={onBack}>Back</button>
                    </>
                )}

        </div>
    )
}
