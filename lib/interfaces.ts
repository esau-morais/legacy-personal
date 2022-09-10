export interface IRepo {
  id: number | string;
  name: string;
  description: string;
  html_url: string;
}

export interface IRepositories {
  repos: IRepo[]
}
