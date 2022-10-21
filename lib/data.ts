export interface IProject {
  id: number;
  
  name: string;
  description: string;
  visible: boolean;
  repo_url: string;
  prd_url?: string;

  created_at: Date;
  updated_at: Date;
}

