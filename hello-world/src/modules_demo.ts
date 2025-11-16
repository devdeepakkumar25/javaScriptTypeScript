// ===============================================
// 🎯 INTRODUCTION TO MODULES IN TYPESCRIPT
// ===============================================
//
// ➤ A *module* in TypeScript is just a file that exports something.
// ➤ Every file with at least one "export" or "import" becomes a module.
// ➤ Modules help you:
//     - Organize code into separate files
//     - Reuse code easily
//     - Avoid global namespace pollution
//
// ===============================================
// 📦 TYPES OF EXPORTS
// ===============================================
//
// 1️⃣ Named Exports       → export { MyClass }
// 2️⃣ Default Exports     → export default MyClass
// 3️⃣ Re-exports          → export { X } from './file'
// ===============================================

// ============================
// File: shapes/Circle.ts
// ============================

export class Circle {
  constructor(public radius: number) {}
}

// ============================
// File: shapes/Square.ts
// ============================

export class Square {
  constructor(public width: number) {}
}

// ============================
// File: shapes/NewCircle.ts
// ============================

export class NewCircle {
  constructor(public radius: number) {}
}

// ============================
// File: shapes/shapes.ts
// ============================
//
// ➤ This file re-exports everything from other shape modules.
// ➤ This means we can import all shapes from a single location instead of multiple files.
//

// Option 1: Re-export individually
export { Square } from "./Square";
export { NewCircle } from "./NewCircle";

// Option 2: Export multiple together (alternative syntax)
// export { Square, NewCircle };

// Note: You could also use a wildcard re-export:
// export * from './Square';
// export * from './NewCircle';


// ============================
// File: storage.ts
// ============================
//
// ➤ Example file showing "default" and "named" exports.
//

// Named export
export enum Format {
  Json,
  Xml,
}

// Default export — only one per file
export default class Store {
  save(data: object) {
    console.log("Saving data:", JSON.stringify(data));
  }
}


// ============================
// File: app.ts
// ============================
//
// ➤ This is our main file that imports everything and uses it.
// ➤ It demonstrates:
//     ✅ Named import
//     ✅ Default import
//     ✅ Wildcard import (* as Something)
//     ✅ Import alias (as)
//     ✅ Re-exports
// ===============================================

// Importing a named export (Circle)
import { Circle } from "./shapes/shapes";

// Importing both default and named exports from the same file
import Store, { Format } from "./storage";

// Wildcard import — imports *all exports* from a module as one object
import * as Shapes from "./shapes/shapes";

// Using re-exported classes directly
import { NewCircle, Square } from "./shapes/shapes";

// ===============================================
// 🔸 USING IMPORTED CLASSES
// ===============================================

// Creating a Circle from 'shapes/shapes'
let circle = new Circle(10);
console.log("Circle radius:", circle.radius);

// Creating a Square
let square = new Square(5);
console.log("Square width:", square.width);

// Creating a NewCircle
let newCircle = new NewCircle(7);
console.log("NewCircle radius:", newCircle.radius);

// Using wildcard import (Shapes)
let shapeCircle = new Shapes.NewCircle(15);
console.log("Wildcard Import Circle radius:", shapeCircle.radius);

// ===============================================
// 🔸 USING DEFAULT & NAMED EXPORTS
// ===============================================

// Default export (Store)
const store = new Store();
store.save({ id: 1, name: "Sample Data" });

// Named export (Format)
console.log("File format type:", Format.Json);


// ===============================================
// 🧠 SUMMARY
// ===============================================
//
// ✅ Named Export — export class Circle {}
// ✅ Default Export — export default class Store {}
// ✅ Wildcard Import — import * as Shapes from "./shapes"
// ✅ Import Alias — import { Circle as MyCircle } from "./shapes"
// ✅ Re-export — export { Circle } from "./Circle"
//
// ➤ When to use each:
//   - Named exports → multiple exports per file
//   - Default export → single main thing from a file
//   - Re-exports → gather multiple exports in one index file
//   - Wildcard imports → convenient when importing everything
//
// ===============================================
// 🎉 END OF FILE
// ===============================================
