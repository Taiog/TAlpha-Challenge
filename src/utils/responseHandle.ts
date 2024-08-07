import { AxiosError } from "axios"
import { toastUi } from "./toast"
import { UseToastOptions } from "@chakra-ui/react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function responseError(err: AxiosError<any, any> | string, title?: string) {
    let messageError
    const duration = 5000
  
    if (err instanceof AxiosError) messageError = err.response?.data ? err.response.data.error : ''
    else messageError = err
  
    toastUi({ title, description: messageError, status: 'error', duration })
  }
  
  export const responseSuccess = (title: string, options?: UseToastOptions) => toastUi({ title, status: 'success', ...options })