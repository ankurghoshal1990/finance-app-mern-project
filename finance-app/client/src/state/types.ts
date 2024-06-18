export interface Day {
    _id: string,
    date: string,
    revenue: number,
    expenses: number
}

export interface Month {
    _id: string,
    month: string,
    revenue: number,
    expenses: number,
    operationalExpenses: number,
    nonOperationalExpenses: number,
}

export interface ExpensesByCategory {
    salaries: number,
    supplies: number,
    services: number,
}

export interface GetKpisResponse{
    _id: string,
    __v:number,
    totalProfit: number,
    totalRevenue: number,
    totalExpenses: number,
    expensesByCategory: ExpensesByCategory,
    dailyData: Array<Day>,
    monthlyData: Array<Month>
    createdAt: string,
    updatedAt: string
}

export interface GetTransactionsResponse{
    _id: string,
    __v:number,
    buyer: string,
    amount: number,
    productIds: Array<string>,
    createdAt: string,
    updatedAt: string
}

export interface GetProductsResponse{
    _id: string,
    __v:number,
    price: number,
    expense: number,
    transactions: Array<string>,
    createdAt: string,
    updatedAt: string
}