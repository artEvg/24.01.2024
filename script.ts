// const arr = [1, 2, 3, 4, 5];

// const printArray = (arr) => {
//     for (let i = 0; i < arr.lenght; i++) {
//         console.log(arr[i]);
//     }
// };

// printArray(arr);


// const num = 5;

// const text:string = "arrqy";

// const arr = [1, 2, 3];

// const vid = function message (showmessage) {
//     console.log ("1,2,3")
// }

// class home{}
//     class Point{x: number; y: number;}
//     let point : Point = new Point();

//     function pv (){
//         point.x = 1;
//         point.y = 2;
//     }
//     pv();
//     console.log(point);

//         class Point2{
//         height: number; 
//         large: number;
//         }
//             let point2 : Point2 = new Point2();
//     function vp (){
//         point2.height = 2;
//         point2.large = 3;
//     }
//     vp();
//     console.log(point2);
    
// class Temp {
//     private x: number
//     public y: number
//     constructor(val1?: number, val2?: number) {
//         val1 ? this.x = val1 : this.x = 1
//         val2 ? this.y = val2 : this.y = 2
//     }
//  get() {
//     return this.x
// }
//     set(value: number) {
//         this.x = value
//     }
// }

// let temp2 = new Temp(10, 20)
// console.log(temp2.get)

// temp2.set(6)
// console.log(temp2.get())


// class Point {
//     constructor(public x: number, public y: number) {}
// }

// class Triangle {
//     a: Point;
//     b: Point;
//     c: Point;

//     constructor(a?: Point, b?: Point, c?: Point, x1?: number, y1?: number, x2?: number, y2?: number, x3?: number, y3?: number) {
//         if (a && b && c) {
//             this.a = a;
//             this.b = b;
//             this.c = c;
//         } else if (x1 !== undefined && y1 !== undefined && x2 !== undefined && y2 !== undefined && x3 !== undefined && y3 !== undefined) {
//             this.a = new Point(x1, y1);
//             this.b = new Point(x2, y2);
//             this.c = new Point(x3, y3);
//         } else {
//         }
//     }
// }

// const triangle1 = new Triangle(new Point(0, 0), new Point(1, 0), new Point(0, 1));
// const triangle2 = new Triangle(undefined, undefined, undefined, 0, 0, 1, 0, 0, 1);
// console.log(triangle1.a, triangle1.b, triangle1.c);
// console.log(triangle2.a, triangle2.b, triangle2.c);


// КТ2
// abstract class Publisher {
//     title: string;
//     author: string;
//     pubYear: number;
//     copies: number;
  
//     constructor(title: string, author: string, pubYear: number, copies: number) {
//       this.title = title;
//       this.author = author;
//       this.pubYear = pubYear;
//       this.copies = copies;
//     }
  
//     getTitle(): string {
//       return this.title;
//     }
  
//     setTitle(title: string): void {
//       this.title = title;
//     }
  
//     getAuthor(): string {
//       return this.author;
//     }
  
//     setAuthor(author: string): void {
//       this.author = author;
//     }
  
//     getPubYear(): number {
//       return this.pubYear;
//     }
  
//     setPubYear(pubYear: number): void {
//       this.pubYear = pubYear;
//     }
  
//     getCopies(): number {
//       return this.copies;
//     }
  
//     setCopies(copies: number): void {
//       this.copies = copies;
//     }
//   }
  
//   class Book extends Publisher implements Reception {
//     pages: number;
  
//     constructor(title: string, author: string, pubYear: number, copies: number, pages: number) {
//       super(title, author, pubYear, copies);
//       this.pages = pages;
//     }
  
//     delivery(): void {
//       if (this.copies > 0) {
//         this.copies--;
//       } else {
//         console.log("Нет доступных экземпляров.");
//       }
//     }
  
//     receive(): void {
//       this.copies++;
//     }
//   }
  
//   class Magazine extends Publisher implements Reception {
//     issue: number;
  
//     constructor(title: string, author: string, pubYear: number, copies: number, issue: number) {
//       super(title, author, pubYear, copies);
//       this.issue = issue;
//     }
  
//     delivery(): void {
//       if (this.copies > 0) {
//         this.copies--;
//       } else {
//         console.log("Нет доступных экземпляров.");
//       }
//     }
  
//     receive(): void {
//       this.copies++;
//     }
//   }
  
//   interface Reception {
//     delivery(): void;
//     receive(): void;
//   }
  
//   class Reader {
//     firstName: string;
//     lastName: string;
//     items: (Book | Magazine)[];
  
//     constructor(firstName: string, lastName: string) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//       this.items = [];
//     }
  
//     getFirstName(): string {
//       return this.firstName;
//     }
  
//     setFirstName(firstName: string): void {
//       this.firstName = firstName;
//     }
  
//     getLastName(): string {
//       return this.lastName;
//     }
  
//     setLastName(lastName: string): void {
//       this.lastName = lastName;
//     }
  
//     getItems(): (Book | Magazine)[] {
//       return this.items;
//     }
  
//     addItem(item: Book | Magazine): void {
//       if (this.items.length < 5) {
//         this.items.push(item);
//       } else {
//         console.log("Максимальное количество изданий достигнуто.");
//       }
//     }
  
//     removeItem(item: Book | Magazine): void {
//       const index = this.items.indexOf(item);
//       if (index !== -1) {
//         this.items.splice(index, 1);
//       }
//     }
//   }
  
//   class Library {
//     items: (Book | Magazine)[];
  
//     constructor() {
//       this.items = [];
//     }
  
//     addItem(item: Book | Magazine): void {
//       this.items.push(item);
//     }
  
//     removeItem(item: Book | Magazine): void {
//       const index = this.items.indexOf(item);
//       if (index !== -1) {
//         this.items.splice(index, 1);
//       }
//     }
//   }
  
//   const library = new Library();
  
//   const book1 = new Book("Title1", "Author1", 2020, 10, 200);
//   const book2 = new Book("Title2", "Author2", 2019, 5, 300);
//   const magazine1 = new Magazine("MagazineTitle1", "Editor1", 2023, 15, 1);
  
//   library.addItem(book1);
//   library.addItem(book2);
//   library.addItem(magazine1);
  
//   const reader1 = new Reader("John", "Doe");
  
//   reader1.addItem(book1);
//   reader1.addItem(book2);
  
//   console.log(reader1.getItems());
  
//   reader1.removeItem(book1);
  
//   console.log(reader1.getItems());
  
//   console.log(library.items);
  
//   book1.delivery();
//   book1.delivery();
  
//   console.log(book1.getCopies());
  
//   book1.receive();
  
//   console.log(book1.getCopies());

//kt 3
class Plotter {  
  plotterState: PlotterState  
      drawLine(prt: Printer, from: Position, to: Position, color: LineColor): void {     prt(...Чертим линию из (${from.x}, ${from.y}) в (${to.x}, ${to.y}) используя ${color} цвет.); 
  }  
      calcNewPosition(distance: Distance, angle: Angle, current: Position): Position {     // Преобразуем градусы в радианы при 180.0 градусов = 1 pi радиан 
  const angle_in_rads = angle * (Math.PI / 180.0) * 1.0;     // новая позиция 
  const x = current.x + distance * Math.cos(angle_in_rads);     const y = current.y + distance * Math.sin(angle_in_rads); 
  // возвращаем новую позицию     const position = { x: Math.round(x), y: Math.round(y) }; 
  this.plotterState.position = position     return position 
  }  
      move(prt: Printer, distance: Distance, state: PlotterState): PlotterState {     // вычисляем новую позицию 
  let newPosition = this.calcNewPosition(distance, state.angle, state.position);     // draw line if needed 
  if (state.carriageState === CarriageState.DOWN) {         // Здесь следует отрисовка линии 
      this.drawLine(prt, state.position, newPosition, state.color);     }else{ 
      prt(Передвигаем на ${distance} от точки (${state.position.x}, ${state.position.y}));     } 
  // изменяем состояние     const retState = { ...state }; 
  retState.position = newPosition;     this.plotterState = retState; 
  return retState;     } 
       turn(prt: Printer, angle: Angle, state: PlotterState): PlotterState { 
  prt(Поворачиваем на ${angle} градусов);     // вычисляем новый угол 
  const newAngle = (state.angle + angle) % 360.0;     // изменяем состояние 
  const retState = { ...state };     retState.angle = newAngle; 
  this.plotterState = retState;     return retState; 
  }  
      carriageUp(prt: Printer, state: PlotterState): PlotterState {     prt("Поднимаем каретку"); 
  // изменяем состояние     const retState = { ...state }; 
  retState.carriageState = CarriageState.UP;     this.plotterState = retState; 
  return retState;     } 
       carriageDown(prt: Printer, state: PlotterState): PlotterState { 
  prt("Опускаем каретку");     // изменяем состояние 
  const retState = { ...state };     retState.carriageState = CarriageState.DOWN; 
  this.plotterState = retState;     return retState; 
  }  
      setColor(prt: Printer, color: LineColor, state: PlotterState): PlotterState {     prt(Устанавливаем ${color} цвет линии.); 
  // изменяем состояние     const retState = { ...state }; 
  retState.color = color;     this.plotterState = retState; 
  return retState;     } 
       setPosition(prt: Printer, position: Position, state: PlotterState): PlotterState { 
  prt(Устанавливаем позицию каретки в (${position.x}, ${position.y}).);     // изменяем состояние 
  const retState = { ...state };     retState.position = position; 
  this.plotterState = retState;     return retState; 
  }  
      drawTriangle(prt: Printer, size: number, state: PlotterState): PlotterState {     state = this.carriageDown(prt, state); 
  for(let i=0; i<3; ++i){         state = this.move(prt, size, state); 
      state = this.turn(prt, 120.0, state);     } 
  return this.carriageUp(prt, state);     } 
       drawSquare(prt: Printer, size: number, state: PlotterState): PlotterState { 
  state = this.carriageDown(prt, state); 
  for(let i=0; i<4; ++i){         state = this.move(prt, size, state); 
      state = this.turn(prt, 90.0, state);     }   
  return this.carriageUp(prt, state);     } 
}  
class LogToConsole implements Logger{     log(message: string): void { 
   } 
}  
interface Logger{  log(message: string): void; 
}  
type Point = number; 
type Distance = number; type Angle = number; 
type Position = { x: Point; y: Point }; enum CarriageState { 
UP,   DOWN 
} enum LineColor { 
BLACK = "черный",   RED = "красный", 
GREEN = "зелёный" } 
type PlotterState = {   position: Position; 
angle: Angle;   color:LineColor; 
carriageState: CarriageState;}; type Printer = (s:string) => void; 
  
  
const printer: Printer = console.log; 
function initializePlotterState(position: Position, angle: Angle, color: LineColor, carriageState: CarriageState): PlotterState { 
 return {     position: position, 
   angle: angle,     color: color, 
   carriageState: carriageState   }; 
}  
let initPosition: Position = { x: 0.0, y: 0.0 }; let initColor: LineColor = LineColor.BLACK; 
let initAngle: Angle = 0.0; let initCarriageState: CarriageState = CarriageState.UP; 
 
let plotter: Plotter = new Plotter() let plotterState = initializePlotterState(initPosition, initAngle, initColor, initCarriageState); 
 
plotter.drawTriangle(printer, 100.0, plotterState); plotter.setPosition(printer, { x: 10.0, y: 10.0 }, plotterState); 
plotter.setColor(printer, LineColor.RED, plotterState); plotter.drawSquare(printer, 80.0, plotterState);
