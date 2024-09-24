import { Client } from '@/shared/types/client.type'
import { customerMapping } from '../data/client.data'

interface ClientServicePort {
  /**
   * Lấy danh sách khách hàng
   */
  getClients(): Promise<Client[]>

  /**
   * Lấy thông tin khách hàng theo mã code
   */
  getClientByCode(code: string): Promise<Client>

  /**
   * Lấy thông tin khách hàng theo mã id
   */
  getClientById(id: string): Promise<Client>

  /**
   * Tạo mới một khách hàng
   */
  createClient(client: Client): Promise<Client>

  /**
   * Cập nhật thông tin khách hàng
   */
  updateClient(client: Client): Promise<Client>

  /**
   * Xóa một khách hàng
   */
  deleteClient(id: string): Promise<void>
}

export const createClientService = (): ClientServicePort => {
  return {
    getClients: async () => {
      try {
        return customerMapping
      } catch (error) {
        throw new Error('Failed to get clients')
      }
    },
    getClientByCode: (code) => {
      try {
        const client = customerMapping.find((client) => client.code === code)
        if (!client) {
          throw new Error('Client not found')
        }
        return Promise.resolve(client)
      } catch (error) {
        throw new Error('Failed to get client by code')
      }
    },

    getClientById: (id) => {
      try {
        const client = customerMapping.find((client) => client._id === id)
        if (!client) {
          throw new Error('Client not found')
        }
        return Promise.resolve(client)
      } catch (error) {
        throw new Error('Failed to get client by id')
      }
    },
    createClient: (client) => {
      try {
        customerMapping.push(client)
        return Promise.resolve(client)
      } catch (error) {
        throw new Error('Failed to create client')
      }
    },
    updateClient: (client) => {
      try {
        const index = customerMapping.findIndex((c) => c._id === client._id)
        if (index === -1) {
          throw new Error('Client not found')
        }
        customerMapping[index] = client
        return Promise.resolve(client)
      } catch (error) {
        throw new Error('Failed to update client')
      }
    },
    deleteClient: (id) => {
      try {
        const index = customerMapping.findIndex((c) => c._id === id)
        if (index === -1) {
          throw new Error('Client not found')
        }
        customerMapping.splice(index, 1)
        return Promise.resolve()
      } catch (error) {
        throw new Error('Failed to delete client')
      }
    }
  }
}
