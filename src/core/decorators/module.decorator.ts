import "reflect-metadata";
import { DynamicModule } from "@hivejs/core/interfaces/dynamic-module.interface";

interface ModuleMetadata {
  controllers?: any[];
  providers?: any[];
  imports?: (any | DynamicModule)[];
  exports?: any[];
}

export function Module(metadata: ModuleMetadata): ClassDecorator {
  return (target: any) => {
    Reflect.defineMetadata("controllers", metadata.controllers || [], target);
    Reflect.defineMetadata("providers", metadata.providers || [], target);
    Reflect.defineMetadata("imports", metadata.imports || [], target);
    Reflect.defineMetadata("exports", metadata.exports || [], target);
  };
}