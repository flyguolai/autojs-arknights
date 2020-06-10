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

namespace console {

    /**
     * 显示控制台。这会显示一个控制台的悬浮窗(需要悬浮窗权限)。
     */
    function show(): void;

    /**
     * 隐藏控制台悬浮窗。
     */
    function hide(): void;

    /**
     * 清空控制台。
     */
    function clear(): void;

    /**
     * 打印到控制台，并带上换行符。 可以传入多个参数，第一个参数作为主要信息，其他参数作为类似于 printf(3) 中的代替值（参数都会传给 util.format()）。
     */
    function log(data: string, ...args: any[]): void;

    /**
     * 与console.log类似，但输出结果以灰色字体显示。输出优先级低于log，用于输出观察性质的信息。
     */
    function verbose(data: string, ...args: any[]): void;

    /**
     * 与console.log类似，但输出结果以绿色字体显示。输出优先级高于log, 用于输出重要信息。
     */
    function info(data: string, ...args: any[]): void;

    /**
     * 与console.log类似，但输出结果以蓝色字体显示。输出优先级高于info, 用于输出警告信息。
     */
    function warn(data: string, ...args: any[]): void;

    /**
     * 与console.log类似，但输出结果以红色字体显示。输出优先级高于warn, 用于输出错误信息。
     */
    function error(data: string, ...args: any[]): void;

    /**
     * 断言。如果value为false则输出错误信息message并停止脚本运行。
     */
    function assert(value: boolean, message: string);

    /**
     * 与console.log一样输出信息，并在控制台显示输入框等待输入。按控制台的确认按钮后会将输入的字符串用eval计算后返回。
     */
    function input(data: string, ...args: any[]): string | number | boolean;

    /**
     * 与console.log一样输出信息，并在控制台显示输入框等待输入。按控制台的确认按钮后会将输入的字符串直接返回。
     */
    function rawInput(data: string, ...args: any[]): string;

    /**
     * 设置控制台的大小，单位像素。
     */
    function setSize(wight: number, height: number): void;

    /**
     * 设置控制台的位置，单位像素。
     */
    function setPosition(x: number, y: number): void;

}