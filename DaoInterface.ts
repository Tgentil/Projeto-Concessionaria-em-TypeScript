export interface DaoInterface {
    inserir(object: any): boolean;
    atualizar(object: any): boolean;
    remover(id: number): boolean;
    selecionar(id: number): any;
    selecionarTodos(): [any];
}