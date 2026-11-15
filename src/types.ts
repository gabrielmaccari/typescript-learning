//Union types
type MyType = string | number;
let id: MyType;
id = 5;
id = "5";

//Array
let names : string[];
names.push(0); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
names.push("Gabriel"); // OK

//Array and Union Types
let id : (string | number)[];
id.push(1);
id.push("1");


//Array with Generic
let users : Array<string>;
users.push("Gabriel");
users.push(1); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

//Tuples(array with types)
let user : [number, string, boolean];
user = [1, "Gabriel", true];
user = [1, "Gabriel", 1]; // Error: Type 'number' is not assignable to type 'boolean'.

//Objects types
let user : {id: number, name: string};
user = {id: 1, name: "Gabriel"};
user = {id: 1, name: 1}; // Error: Type 'number' is not assignable to type 'string'.

//Tricky 
let val : {} = {}
//The type {} is assignable to every type. Unless any, null or undefined are used, the type {} is not assignable to any other type.

//Flexible objects with record Type(Always for objects with dynamic keys)
let data : Record<string, string | number>;
data = {
    id: 1, 
    name: "Gabriel"
};

data = {
    0 : 1, // Error: Type 'number' is not assignable to type 'string'.
}

//Enum types(used when you have a set of related constants)
enum Role {Admin, Editor, Guest};
let user : {id: number, name: string, role: Role};
user = {id: 1, name: "Gabriel", role: Role.Admin};
user = {id: 1, name: "Gabriel", role: 0}; // Error: Type 'number' is not assignable to type 'Role'.

enum StatusPedidoEnum {
  Pendente = "pendente",
  Pago = "pago",
  Enviado = "enviado",
}
let statusAtual: StatusPedidoEnum = StatusPedidoEnum.Pago;

//Literal types
let status: "pendente" | "pago" | "enviado" = "pago";
status = "pendente"; // OK
status = "cancelado"; // Error: Type '"cancelado"' is not assignable to type '"pendente" | "pago" | "enviado"'.