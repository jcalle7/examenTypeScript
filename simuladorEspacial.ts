// 1. Modelado de Datos con TypeScript

interface SpaceShip {
    health: number;
    cargoCapacity: number;
    speed: number;
  }
  

  enum ResourceType {
    Ore = "Ore",
    Water = "Water",
    Fuel = "Fuel",
  }
  
  
  class Planet {
    resourceType: ResourceType;
    dangerLevel: number;
  
    constructor(resourceType: ResourceType, dangerLevel: number) {
      this.resourceType = resourceType;
      this.dangerLevel = dangerLevel;
    }
  }
  
  
  class Event {
    description: string;
    effect: (ship: SpaceShip) => void;
  
    constructor(description: string, effect: (ship: SpaceShip) => void) {
      this.description = description;
      this.effect = effect;
    }
  }
  
  // 2. Funcionalidades del Simulador
  

  function explore(direction: "north" | "south" | "east" | "west"): void {

  }
  
  
  function collectResource<T extends ResourceType>(resourceType: T): void {
    
  }
  
  
  function handleEvent(event: Event): void {
    
  }
  
  // 3. Logística y Navegación
  
  
  function getUserInput(prompt: string): string | number {

    const userInput: string = window.prompt(prompt) || '';


    const numberInput = parseFloat(userInput);

 
    if (!isNaN(numberInput)) {
        return numberInput;
    }

   
    return userInput;
}

  
  
  function simulateTravel(): void {

  }
  
  // 4. Organización del Código con Módulos y Espacios de Nombres
  
  
  export namespace Navigation {
    export function explore(direction: "north" | "south" | "east" | "west"): void {

    }
  }
  
  
  export namespace EventManagement {
    export function handleEvent(event: Event): void {

    }
  }
  
  
  export namespace UserInterface {
    export function getUserInput(prompt: string): string | number {
        
        const userInput: string = window.prompt(prompt);


        const numberInput = Number(userInput);
        if (!isNaN(numberInput)) {
            return numberInput;
        }


        return userInput;
    }
}


