import { Agent } from '@/shared/types/agent.type'
import { agentTestData } from '../data/aggent.data'

export interface AgentServicePort {
  /**
   * Lấy thông tin đại diện của đại lý
   */
  gets(): Promise<Agent[]>

  /**
   * Lấy thông tin đại diện của đại lý theo id
   */
  getById(id: string): Promise<Agent>
}

const createAgentService = (): AgentServicePort => {
  return {
    gets: async () => {
      try {
        return Promise.resolve([agentTestData])
      } catch (error) {
        throw new Error('Lỗi khi lấy thông tin đại diện của đại lý')
      }
    },

    getById: async (id: string) => {
      try {
        console.log('id', id)
        return Promise.resolve(agentTestData)
      } catch (error) {
        throw new Error('Lỗi khi lấy thông tin đại diện của đại lý')
      }
    }
  }
}

export const agentService = createAgentService()
