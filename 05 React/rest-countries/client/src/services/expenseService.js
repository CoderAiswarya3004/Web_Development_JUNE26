import axios from "axios";

const BASE_URL = 'http://localhost:8080/expenses'

const getExpenses = () =>{
    return axios.get(BASE_URL)
}

const deleteExpense = (id) => {
    return axios.delete(BASE_URL + `/${id}`)
}

const createExpense = (expense) => {
    return axios.post(BASE_URL + expense)
}

const updateExpense = (expense) => {
    return axios.put(BASE_URL + expense)
}

export {getExpenses,deleteExpense,createExpense,updateExpense}