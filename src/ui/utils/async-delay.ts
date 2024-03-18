const asyncDelay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export { asyncDelay }