import React from 'react'
import Papa from 'papaparse'

const filePath = 'export-tokenholders-for-contract.csv'
const App = () => {
  const [addresses, setAddressess] = React.useState([])
  React.useEffect(() => {
    const response = fetch(filePath)
      .then((response) => response.text())
      .then((v) => Papa.parse(v))
      .catch((err) => console.log(err))

    response.then((v) => setAddressess(v.data))
    response.then((v) => console.log(v.data))
  }, [])

  const result = addresses.map((v) => {
    return (
      <tr key={v[0]}>
        <td>{v[0]}</td>
        <td>{v[1]}</td>
        <td>{v[2]}</td>
      </tr>
    )
  })

  return <div>{result}</div>
}

export default App
