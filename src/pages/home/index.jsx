import React, { useEffect, useState } from 'react'
import Table from '../../components/table'
import { getAllCompany } from '../../services/list'

function Home() {
    const [companies, setCompanies] = useState([])
    useEffect(() => {
        getAllCompany()
            .then(data => setCompanies(data))
    }, [])
    return (
        <div>
            <Table companies={companies} />
        </div>
    )
}

export default Home