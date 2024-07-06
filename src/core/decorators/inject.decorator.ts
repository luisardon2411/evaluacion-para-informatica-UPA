import 'reflect-metadata'

export function Inject(token: any): PropertyDecorator {
    return (target: Object, propertyKey: string | symbol) => {
        Reflect.defineMetadata(token, token, target, propertyKey);
    }
}