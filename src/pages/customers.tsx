import { Box, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import CustomTable from "../components/CustomTable"
import Searchbar from "../components/Searchbar"

interface customersProps {}

const Customers: React.FC<customersProps> = ({}) => {
  const domainName: string | undefined = process.env.REACT_APP_DOMAIN_NAME
  const protocol: string | undefined = process.env.REACT_APP_PROTOCOL
  const url: string = `${protocol}://${domainName}`
  const [customers, setCustomers] = useState(null)
  const [searchText, setSearchText] = useState<string>("")

  useEffect(() => {
    const getCustomers = async () => {
      const customersFromServer = await fetchCustomers()
      setCustomers(customersFromServer)
    }
    getCustomers()
  }, [])

  const fetchCustomers = async () => {
    const res = await fetch(`${url}/customers`)
    const data = await res.json()

    return data
  }

  const handleSearchTextChange = (text: string) => {
    setSearchText(text)
  }

  return (
    <Box px={[4, 4, 20, 20]}>
      <VStack spacing={6} pt={6}>
        <Searchbar value={searchText} onChange={handleSearchTextChange} />
        {customers ? <CustomTable customers={customers} /> : <p>Loading... </p>}
      </VStack>
    </Box>
  )
}

export default Customers
