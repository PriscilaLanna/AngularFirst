export interface DAOInterface{
    nomeTabela: string

    inserir(object:any) : boolean
    atualizar(object:any) : boolean
    deletar(id:number) : any
    selecionar(id:number): any
    selecionarTodos(): Array<any>
}