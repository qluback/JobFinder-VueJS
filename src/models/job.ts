export default interface Job {
  id: number;
  type: string;
  url: string;
  created_at: Date;
  company: string
  company_url: string;
  location: string;
  title: string;
  descr: string;
}
  