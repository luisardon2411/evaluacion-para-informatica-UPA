import 'reflect-metadata';

/**
 * @description Decorador que marca una clase como inyectable.
 * @example
 * ```typescript
 * @Injectable()
 * class MyService {
 *    constructor() {}
 * }
 * ```
 * @returns {ClassDecorator} Un decorador de clase que marca la clase como inyectable.
 * @typedef {ClassDecorator} Injectable
 * @function
 * @name Injectable
 * @param {any} target - La clase a la que se le aplicará el decorador.
 * @since v1.0.0
 * @version v1.0.0
 * @public
 * @author Luis Ardón
 */

export function Injectable(): ClassDecorator {
    return (target: any) => {
        Reflect.defineMetadata('injectable', true, target);
    };
}
