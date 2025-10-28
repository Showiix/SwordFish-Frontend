// 本地存储工具

export const storage = {
  /**
   * 设置存储
   */


  // 这个对象是用来设置存储的，有一个set方法，传入key和value
  // void类型表示没有返回值
  // key是字符串类型，value是any类型


  set(key: string, value: any): void {
    try {
      const data = JSON.stringify(value)
      localStorage.setItem(key, data)
    } catch (error) {
      console.error('Storage set error:', error)
    }
  },

  /**
   * 获取存储
   */
  get<T = any>(key: string): T | null {
    try {
      const data = localStorage.getItem(key)
      if (data) {
        return JSON.parse(data) as T //断言为T类型
      }
      return null
    } catch (error) {
      console.error('Storage get error:', error)
      return null
    }
  },

  /**
   * 移除存储
   */
  remove(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (error) {
      console.error('Storage remove error:', error)
    }
  },

  /**
   * 清空所有存储
   */
  clear(): void {
    try {
      localStorage.clear()
    } catch (error) {
      console.error('Storage clear error:', error)
    }
  }
}

