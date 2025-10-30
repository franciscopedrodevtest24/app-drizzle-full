"use server"

import { addTodo } from "@/repository/todo"



async  function seed(){
    const text="Fazer compras"
    await addTodo(text)

}



seed()