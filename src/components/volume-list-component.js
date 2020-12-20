import React, { Fragment,  useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import axios from 'axios';
import { VOLUME_LIST_URL, safeHeaders } from './api-config.js';



const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;
    width: 100%;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.2rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  // Render the UI for your table
  return (

    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

function StockPriceTable() {
  const [priceData, setPriceData] = useState([]);
  const [priceColumns, setPriceColumns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

        try {
        const result = await axios.get(VOLUME_LIST_URL, safeHeaders);
        setPriceData(result.data.data);
        setPriceColumns(result.data.columns);
        //console.log('data.data:', result.data.data);
      } catch (error) {
        setIsError(true);
        //console.log('error:', error);
      }

      setIsLoading(false);
      
 
    };
 
    fetchData();
  }, []);  


  return (

<Fragment>
    {isError && <div>Something went wrong when loading API data ...</div>}
    {isLoading ? ( <div>Loading ...</div>) : (

    <Styles>
      <Table columns={priceColumns} data={priceData} />
    </Styles>

    )}
    </Fragment>
  )
}

export default StockPriceTable
