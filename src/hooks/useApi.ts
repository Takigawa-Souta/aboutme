import { useState, useEffect } from 'react'
import { ApiResponse, ApiError } from '../utils/types'

interface UseApiOptions {
  immediate?: boolean
}

interface UseApiReturn<T> {
  data: T | null
  loading: boolean
  error: ApiError | null
  refetch: () => Promise<void>
}

// API呼び出しを管理するカスタムフック
function useApi<T>(
  apiFunction: () => Promise<ApiResponse<T>>,
  options: UseApiOptions = {}
): UseApiReturn<T> {
  const { immediate = true } = options
  
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<ApiError | null>(null)

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      const response = await apiFunction()
      
      if (response.success) {
        setData(response.data)
      } else {
        setError({
          code: 'API_ERROR',
          message: response.message
        })
      }
    } catch (err) {
      setError({
        code: 'NETWORK_ERROR',
        message: err instanceof Error ? err.message : 'An unknown error occurred'
      })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (immediate) {
      fetchData()
    }
  }, [immediate])

  return {
    data,
    loading,
    error,
    refetch: fetchData
  }
}

export default useApi
