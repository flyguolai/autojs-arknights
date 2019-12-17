declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare function setInterval(handler: TimerHandler, timeout?: number, ...arguments: any[]): number
declare function clearInterval(handle?: number): void
declare function setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number