export interface AbstractModelAttributes {
    id: string
    createdIn?: Date
    updatedIn?: Date
}

export interface UserModel extends AbstractModelAttributes {
    name: string
    taxNumber: string
    mail: string
    phone: string
    password: string
  }

export interface ProductModel extends AbstractModelAttributes {
    name: string
    description?: string
    price: number
    stock: number
}

