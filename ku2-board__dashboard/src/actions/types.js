export type Action<T = any> = {
  type: string,
  payload: T
}

export type AppAction = Action<any>
                      | Action<any>
                      // Add more action types here
